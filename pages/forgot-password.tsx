import { Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, TextField, withStyles } from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import * as Yup from 'yup';
import LayoutFunctionComponent from "../@types/layoutTypes/layoutFunctionComponent";
import AuthLayout from "../layouts/authLayout";

const CssTextField = withStyles({
  root: {
    '& .MuiFormControl-root': {
      width: '500px',
    },
    '& label.Mui-focused': {
      color: 'grey',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'grey',
    },
    '& .MuiOutlinedInput-root': {

      '&.Mui-focused fieldset': {
        borderColor: 'grey',
      },
    },
  },
})(TextField);

const ForgotPassword: LayoutFunctionComponent = () => {
  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [resetPasswordModal, setResetPasswordModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      code: '',
      newPassword: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    }),
    onSubmit: (values) => {
      // dispatch(login(values));
      console.log(values);
      setOpenModal(true);

      setTimeout(() => {
        router.reload()
      }, 300000)
    },
  })

  const handleSendEmail = () => {
    setOpenModal(true);

    setTimeout(() => {
      router.reload()
    }, 300000)
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
                <form onSubmit={formik.handleSubmit}>
                  <CssTextField
                    type="text"
                    name="email"
                    label="Email address"
                    size="small"
                    variant="outlined"
                    style={{ width: "500px" }}
                    helperText={formik.touched.email && formik.errors.email ? formik.errors.email : null}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </form>
                <Button
                  variant="contained"
                  color='primary'
                  style={{ color: "#FFF", marginTop: '24px' }}
                  onClick={() => formik.handleSubmit()}
                >
                  SEND CODE TO MY EMAIL
                </Button>

              </CardContent>
            </Card>

          </div>
          <Dialog
            TransitionComponent={Transition}
            keepMounted
            open={openModal}
            onClose={() => setOpenModal(false)}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Reset password</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Enter the code we was send to your email for reset password.
          </DialogContentText>
              <CssTextField
                autoFocus
                margin="dense"
                label="Code"
                type="text"
                fullWidth
                size="small"
                variant="outlined"
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

          <Dialog
            TransitionComponent={Transition}
            keepMounted
            open={resetPasswordModal}
            onClose={() => setResetPasswordModal(false)}
            aria-labelledby="form-dialog-title"
          >

            <DialogTitle id="form-dialog-title">Reset password</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Enter your new password.
          </DialogContentText>
              <CssTextField
                autoFocus
                margin="dense"
                label="New password"
                type="text"
                fullWidth
                size="small"
                variant="outlined"
              />
              <CssTextField
                autoFocus
                margin="dense"
                label="Retype password"
                type="text"
                fullWidth
                size="small"
                variant="outlined"
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