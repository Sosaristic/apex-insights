import * as Yup from "yup";

export const loginSchema = Yup.object({
  phone: Yup.string()
    .matches(/^\+(\d{1,3})(\d+)$/, "enter a valid country code")
    .required("Phone required"),
  password: Yup.string()
    .required("No password provided")
    .min(4, "Password is too short - should be 4 chars minimum.")
    .matches(/[a-zA-Z\d]/, "Password can only contain Latin letters."),
});

export const signUpSchema = Yup.object({
  phone: Yup.string()
    .matches(/^\+(\d{1,3})(\d+)$/, "enter a valid country code")
    .required("Phone required"),
  email: Yup.string()
    .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("No password provided")
    .min(4, "Password is too short - should be 4 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

export const resetSchema = Yup.object({
  email: Yup.string()
    .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "invalid email address")
    .required("Email is required"),
});
