import React, { useState } from "react";
import AuthLayout from "../layouts/authLayout";
import appRoutes from "../routes/appRoutes";
import Link from "next/link";
import httpClient from "../services/httpService";
import { useRouter } from "next/router";
import LayoutFunctionComponent from "../@types/layoutTypes/layoutFunctionComponent";
import { Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@material-ui/core";

const ForgotPassword: LayoutFunctionComponent = () => {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [resetPasswordModal, setResetPasswordModal] = useState(false);


  const handleSendEmail = () => {
    setOpenModal(true);
    setTimeout(() => { setOpenModal(false) }, 3000)
  };
  const handleSendCode = () => {
    setOpenModal(false);
    setResetPasswordModal(true)
  }

  const handleChangePassword = () => {
    router.push("/login")
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
                <h2>-----Forgot Password-----</h2>
                <p>Enter your e-mail address and we'll send you a code to reset your password</p>
                <TextField id="standard-basic" label="Email address" style={{ width: "498px" }} />
                <Button
                  variant="contained"
                  color='primary'
                  aria-label="LOG IN"
                  style={{ color: "#FFF", marginTop: '24px' }}
                  onClick={handleSendEmail}
                >
                  SEND CODE TO MY EMAIL
                </Button>
              </CardContent>
            </Card>
          </div>
          <Dialog open={openModal} onClose={() => setOpenModal(false)} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Reset password</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Enter the code we was send to your email for reset password.
          </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                label="Code"
                type="text"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenModal(false)} color="primary">
                Cancel
          </Button>
              <Button onClick={handleSendCode} color="primary">
                Submit
          </Button>
            </DialogActions>
          </Dialog>

          <Dialog open={resetPasswordModal} onClose={() => setResetPasswordModal(false)} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Reset password</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Enter your new password.
          </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                label="New password"
                type="text"
                variant="filled"
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                label="Retype password"
                type="text"
                fullWidth
                variant="filled"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setResetPasswordModal(false)} color="primary">
                Cancel
          </Button>
              <Button onClick={handleChangePassword} color="primary">
                Submit
          </Button>
            </DialogActions>
          </Dialog>



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
  )
}

ForgotPassword.Layout = AuthLayout;
export default ForgotPassword;