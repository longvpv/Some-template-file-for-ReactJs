import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Divider,
  Typography,
  InputAdornment,
  Icon,
  TextField,
} from "@material-ui/core";
import { TextFieldFormsy } from "@fuse";
import Formsy from "formsy-react";
import * as authActions from "app/auth/store/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Axios from "axios";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  textFieldHeight: {
    height: "40px",
  },
}));

function JWTLoginTab(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const login = useSelector(({ auth }) => auth.login);

  const [isFormValid, setIsFormValid] = useState(false);
  const formRef = useRef(null);
  const [ip, setIp] = useState("");

  useEffect(async () => {
    const data = await Axios.get(`https://www.cloudflare.com/cdn-cgi/trace`);
    const result = data.data.split("\n");
    const IpResult = result[2].slice(3);
    setIp(IpResult);
  }, []);

  useEffect(() => {
    if (login.error && (login.error.email || login.error.password)) {
      formRef.current.updateInputsWithError({
        ...login.error,
      });
      disableButton();
    }
  }, [login.error]);

  function disableButton() {
    setIsFormValid(false);
  }

  function enableButton() {
    setIsFormValid(true);
  }

  function handleSubmit(model) {
    dispatch(authActions.submitLogin(model));
  }

  return (
    <div className="pt-5">
      <Formsy
        onValidSubmit={handleSubmit}
        onValid={enableButton}
        onInvalid={disableButton}
        ref={formRef}
        className="d-flex flex-column justify-content-center align-items-center w-100"
      >
        <Typography variant="subtitle2" gutterBottom className="pb-5">
          IP : {ip}
        </Typography>
        <TextField
          className="mb-5 w-100"
          type="text"
          name="database"
          label="Database"
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="end"
                className="h-full"
              ></InputAdornment>
            ),
          }}
          variant="outlined"
        />

        <TextFieldFormsy
          className="mb-5 w-100"
          type="text"
          name="email"
          label="Tài khoản"
          validations={{
            minLength: 4,
          }}
          validationErrors={{
            minLength: "Min character length is 4",
          }}
          InputProps={{
            endAdornment: <InputAdornment position="end"></InputAdornment>,
          }}
          variant="outlined"
          required
        />

        <TextFieldFormsy
          className="mb-5 w-100 "
          type="password"
          name="password"
          label="Mật khẩu"
          validations={{
            minLength: 4,
          }}
          validationErrors={{
            minLength: "Min character length is 4",
          }}
          InputProps={{
            endAdornment: <InputAdornment position="end"></InputAdornment>,
          }}
          variant="outlined"
          required
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="w-full mx-auto mt-16 normal-case bg-blue"
          aria-label="LOG IN"
          disabled={!isFormValid}
          value="legacy"
        >
          <span>ĐĂNG NHẬP</span>
        </Button>
        <div
          className="d-flex align-items-center justify-content-between w-100 pt-20"
          style={{ fontSize: 16 }}
        >
          <Link to="/register">Quên mật khẩu</Link>
          <Link to="/">Đăng ký</Link>
        </div>
      </Formsy>
    </div>
  );
}

export default JWTLoginTab;
