import { useState } from "react";
import AuthLayout from "../layouts/authLayout";
import appRoutes from "../routes/appRoutes";
import Link from "next/link";
import httpClient from "../services/httpService";
import { useRouter } from "next/router";
import LayoutFunctionComponent from "../@types/layoutTypes/layoutFunctionComponent";

const ForgotPassword: LayoutFunctionComponent = () => {
  const router = useRouter();

  return (
    <div>

    </div>
  )
}

ForgotPassword.Layout = AuthLayout;
export default ForgotPassword;