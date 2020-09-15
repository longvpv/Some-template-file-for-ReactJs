import LayoutFunctionComponent from "../@types/layoutTypes/layoutFunctionComponent";
import AuthLayout from "../layouts/authLayout";
import React from 'react'
import Link from "next/link";
import appRoutes from "../routes/appRoutes";

const SignUp: LayoutFunctionComponent = props => {
  return (
    <React.Fragment>

    </React.Fragment>
  )
}

SignUp.Layout = AuthLayout;
export default SignUp;