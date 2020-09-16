import {
  TextField
} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/styles";
import Formsy from "formsy-react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";

const CssTextField = withStyles({
  root: {
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

const ColorButton = withStyles({
  root: {
    color: '#FFF',
    backgroundColor: '#2FAAFC',
    '&:hover': {
      backgroundColor: '#2FAAFC',
    },
  },
})(Button);

function LoginTab(props) {
  const dispatch = useDispatch();
  // const login = useSelector(({ auth }) => auth.login);

  const [isFormValid, setIsFormValid] = useState(false);
  const formRef = useRef(null);



  // useEffect(() => {
  //   if (login.error && (login.error.email || login.error.password)) {
  //     formRef.current.updateInputsWithError({
  //       ...login.error,
  //     });
  //     disableButton();
  //   }
  // }, [login.error]);

  function disableButton() {
    setIsFormValid(false);
  }

  function enableButton() {
    setIsFormValid(true);
  }

  function handleSubmit(model) {
    console.log(model);
  }


  return (
    <div className="pt-5 w-50">
      <Formsy
        onValidSubmit={handleSubmit}
        // onValid={enableButton}
        // onInvalid={disableButton}
        ref={formRef}
        className="d-flex flex-column justify-content-center align-items-center w-100"
      >
        <CssTextField
          className="mb-5 w-100"
          type="text"
          name="email"
          label="Tài khoản"
          size="small"
          variant="outlined"
        />



        <CssTextField
          className="mb-5 w-100"
          type="password"
          name="password"
          label="Mật khẩu"
          size="small"
          variant="outlined"

        />


        <ColorButton
          type="submit"
          variant="contained"
          className="w-100 mx-auto mt-16 normal-case bg-blue"
          aria-label="LOG IN"
        // disabled={!isFormValid}
        // value="legacy"
        >
          ĐĂNG NHẬP
        </ColorButton>
        <div
          className="d-flex align-items-center justify-content-between w-100 pt-5"
          style={{ fontSize: 16 }}
        >
          <Link href="/register">Quên mật khẩu</Link>
          <Link href="/">Đăng ký</Link>
        </div>
      </Formsy>
    </div>
  );
}

export default LoginTab;
