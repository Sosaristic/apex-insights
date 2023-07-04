import { useFormik } from "formik";
import { signUpSchema } from "../components/inputs/regex";
import { TextField } from "../components/inputs/TextField";
import CountryFlag from "../components/CountryFlag";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import Button from "../components/Button";
import ThirdPartyAuth from "../components/ThirdPartyAuth";
import { Link } from "react-router-dom";

export default function SignUp() {
  const formik = useFormik({
    initialValues: {
      phone: "",
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
  });
  return (
    <div>
      <h2 className="font-righteous text-1.5rem lg:text-[2rem] text-center">Create An Account</h2>
      <form className="flex flex-col gap-2">
        <TextField
          name={"phone"}
          label={"Phone No"}
          type={"telephone"}
          id={"phone"}
          value={formik.values.phone}
          onChange={formik.handleChange}
          placeholder={"+234, +233, +91"}
          startIcon={<CountryFlag callCode={formik.values.phone} />}
          error={formik.errors.phone}
        />
        <TextField
          name={"email"}
          type={"email"}
          label={"Email"}
          id={"email"}
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder={"test@gmail.com"}
          startIcon={<MdEmail />}
          error={formik.errors.email}
        />
        <TextField
          name={"password"}
          type={"password"}
          label={"Password"}
          id={"password"}
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder={"min 4"}
          startIcon={<RiLockPasswordFill />}
          error={formik.errors.password}
        />
        <div className="h-[3rem]">
          <Button
            type={"button"}
            disabled={
              !formik.values.email ||
              !formik.values.password ||
              !formik.values.phone ||
              formik.errors.email ||
              formik.errors.password ||
              formik.errors.phone
            }
          >
            Register
          </Button>
        </div>
      </form>
      <ThirdPartyAuth />
      <p className="mt-4 text-sm">
        Already have an Account?{" "}
        <Link to={"/sign-in"} className="text-primary hover:underline">
          Sign In
        </Link>
      </p>
    </div>
  );
}
