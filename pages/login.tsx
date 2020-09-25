import React, { useState } from "react";
import LayoutFunctionComponent from "../@types/layoutTypes/layoutFunctionComponent";
import AuthLayout from "../layouts/authLayout";
import { Card, CardContent } from "@material-ui/core";
import LoginTab from "../component/login/loginTab";

const Login: LayoutFunctionComponent = (props) => {
  const [selectedTab, setSelectedTab] = useState(0);

  function handleTabChange(event, value) {
    setSelectedTab(value);
  }

  return (
    <React.Fragment>
      <div
        className="d-flex justify-content-around container-fluid p-0 m-0"
        style={{
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <div className="row w-100">
          <div className="col-md-5 p-0 m-0">
            <div className="d-flex justify-content-center align-items-center h-100 relative p-0 m-0">
              <img className="m-auto" src={"login.png".staticImage()} alt="VV Solutions" />
            </div>
          </div>
          <div className="col-md-7 p-0 m-0">
            <Card className="d-flex align-items-center pt-5 w-100 h-100 ">
              <CardContent className="d-flex flex-column align-items-center justify-content-center w-100 my-auto">
                <h2>Đăng nhập vào tài khoản ERP của bạn</h2>

                <LoginTab />
              </CardContent>
            </Card>
          </div>



        </div>

      </div>
      <style jsx>{`
          .relative{
            background-image: url("/images/loginBackground.png");
            background-position: center; 
            background-repeat: no-repeat; 
            background-size: cover; 
          }
          .absolute {
            position: absolute
          }
          
        `}</style>
    </React.Fragment>
  );
};

Login.Layout = AuthLayout;
export default Login;
