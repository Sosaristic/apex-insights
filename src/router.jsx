import { Navigate } from "react-router-dom";
import AuthenticationLayout from "./components/AuthenticationLayout";

import {
    createBrowserRouter,
  } from "react-router-dom";
  import "./index.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to={"/sign-in"}/>,

    },
    { element: <AuthenticationLayout />, 
children: [
  {path: "/sign-in", element: <Login />},
  {path: "/sign-up", element: <SignUp />},
  {path: "/reset-password", element: <ResetPassword />},


]
}
  ]);