import { FuseAnimate } from "@fuse";
import { Card, CardContent, Typography, Box } from "@material-ui/core";
import { darken } from "@material-ui/core/styles/colorManipulator";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import JWTLoginTab from "./tabs/JWTLoginTab";

const useStyles = makeStyles((theme) => ({
  root: {
    background:
      "linear-gradient(to right, " +
      theme.palette.primary.dark +
      " 0%, " +
      darken(theme.palette.primary.dark, 0.5) +
      " 100%)",
    color: theme.palette.primary.contrastText,
  },
}));

function Login() {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);

  function handleTabChange(event, value) {
    setSelectedTab(value);
  }

  return (
    <div
      className="d-flex justify-content-around w-100 h-100 "
      style={{
        maxHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <div className="d-flex align-items-center justify-content-center col-md-5 relative">
        <img
          className="absolute w-full"
          src="static/loginBackground.png"
          alt="background"
        />
        <FuseAnimate animation="transition.expandIn">
          <img className="m-auto" src="static/login.png" alt="logo" />
        </FuseAnimate>
      </div>

      <FuseAnimate animation={{ translateX: [0, "100%"] }}>
        <Card className="d-flex align-items-center pt-5 w-100 h-100 col-md-7">
          <CardContent className="d-flex flex-column align-items-center justify-content-center w-100 my-auto">
            <Typography variant="h5">
              <Box fontWeight={600} m={1}>
                Đăng nhập vào tài khoản ERP của bạn
              </Box>
            </Typography>
            <JWTLoginTab />
          </CardContent>
        </Card>
      </FuseAnimate>
    </div>
  );
}

export default Login;
