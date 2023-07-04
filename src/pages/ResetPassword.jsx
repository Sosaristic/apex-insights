import { useFormik } from "formik";
import { TextField } from "../components/inputs/TextField";
import { MdEmail } from "react-icons/md";
import { resetSchema } from "../components/inputs/regex";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  const formik = useFormik({
    initialValues: {
     email: ""
    },
    validationSchema: resetSchema,
  });

  return (
    <div className="mt-[6rem]">
      <h2 className="font-righteous text-[1.5rem] lg:text-[2rem] text-center">
        Reset Your Password
      </h2>
      <form className="flex flex-col gap-4">
        <TextField
          startIcon={<MdEmail />}
          type={"email"}
          id={"email"}
          placeholder={"test@gmail.com"}
          name={"email"}
          label={"Email"}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
        />
        <div className="h-[3rem]"> <Button type={"button"} disabled={!formik.values.email || formik.errors.email}>Reset</Button></div>
       
      </form>
      <div className="text-primary hover:underline font-[500] flex justify-between mt-4"><Link to={"/sign-in"}>Login</Link> <Link to={"/sign-up"}>Register</Link></div>
    </div>
  );
}
