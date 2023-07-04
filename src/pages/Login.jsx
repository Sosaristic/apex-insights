
import { useFormik } from "formik";
import { loginSchema } from "../components/inputs/regex";
import { TextField } from "../components/inputs/TextField";
import { RiLockPasswordFill } from "react-icons/ri";
import Button from "../components/Button";
import CountryFlag from "../components/CountryFlag";
import { Link } from "react-router-dom";
import ThirdPartyAuth from "../components/ThirdPartyAuth";

export default function Login() {
  

  const formik = useFormik({
    initialValues: {
      phone: "",
      password: "",
    },
    validationSchema: loginSchema,
  });


  return (
    <main className="">
    
      <h2 className="font-righteous text-[1.5rem] lg:text-[2rem] text-center">Sign In to Your Account</h2>
      <form className="flex flex-col gap-6 mt-10">
        <TextField
          type={"telephone"}
          startIcon={ <CountryFlag callCode={formik.values.phone}/>}
          placeholder={"+234, +233, +91"}
          label={"Phone No"}
          id={"phone"}
          name={"phone"}
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.errors.phone}
        />
        <TextField
          type={"password"}
          startIcon={<RiLockPasswordFill />}
          placeholder={"password"}
          label={"Password"}
          id={"password"}
          name={"password"}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
        <Link to={"/reset-password"} className="ml-auto text-primary hover:underline">Forgot Password?</Link>
        <div className="h-[3rem]">
          <Button type={"submit"}disabled={
              !formik.values.password ||
              !formik.values.phone ||
              formik.errors.password ||
              formik.errors.phone
            }>Sign In</Button>
        </div>
      </form>
     <ThirdPartyAuth />
     <p className="mt-2">Not a member? <Link to={"/sign-up"} className="text-primary hover:underline">Register here</Link></p>
    </main>
  );
}
