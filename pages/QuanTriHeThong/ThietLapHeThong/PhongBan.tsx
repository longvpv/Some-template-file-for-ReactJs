import React from 'react'
import { Button, TextField, Typography, withStyles } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Formsy from "formsy-react";

const CustomTextField = withStyles({
  root: {
    '&.MuiFormControl-root': {

      margin: "3px 3px",
    },
    '& label.Mui-focused': {
      color: '#2FAAFC',

    },
    '& .MuiFilledInput-root': {
      backgroundColor: '#FFF',
      height: '48px',

    },

    '& .MuiFilledInput-underline:after': {
      borderBottomColor: 'grey',
    },

  },
})(TextField);

const useStyles = makeStyles({
  title: {
    fontFamily: "Quicksand",
    fontWeight: "bold",
    fontSize: "24px",
  },
  buttonSave: {
    borderRadius: "32px",
    width: "120px",
    margin: "12px",
    backgroundColor: "#FFFFFF",
    color: "#2FAAFC",
    borderColor: '#2FAAFC',
  },
  buttonCreate: {
    borderRadius: "32px",
    width: "120px",
    margin: "12px",
    backgroundColor: "#2FAAFC",
    color: "#FFF",
    borderColor: '#2FAAFC'
  },
  buttonDelete: {
    borderRadius: "32px",
    width: "120px",
    margin: "12px",
    backgroundColor: "#FDABAB", color: "#FFFFFF"
  },

  avatar: {
    display: "flex",
    width: "180px",
    height: "180px",

    background: "#FFFFFF",
  },
  avatarLabel: {
    width: "80px",
    height: "24px",

    "font-family": "Quicksand",
    "font-style": "normal",
    "font-weight": "normal",
    "font-size": "14px",
    "line-height": "24px",

    "align-items": "center",
    "text-align": "center",

    color: "#4E4E4E",
  },
  btnUploadAvatar: {
    width: "120px",
    height: "40px",
    marginTop: "12px",

    background: "#2FAAFC",
    "border-radius": "20px",
  },
  btnViewCV: {
    width: "180px",
    height: "40px",

    background: "#DBF1FF",
    "border-radius": "4px",
    "margin-top": "30px",
  },
  btnUpdatePassword: {
    width: "180px",
    height: "40px",

    background: "#E9E9E9",
    "border-radius": "4px",
    "margin-top": "20px",
  },
  btnFunction: {
    width: "100%",
    height: "48px",
    "border-radius": "6px",
    margin: "15px 10px",
  },
  formGroup: {
    display: "flex",
    margin: "3px",
  },
  formControl: {
    width: "100%",
    margin: "3px 3px",
    backgroundColor: "#FFFFFF",
  },
  btnFunctionRow: {
    display: "flex",
    width: "100%",
    "padding-right": "20px",
  },
});

function PhongBan() {
  const classes = useStyles();
  const handleSubmit = (model) => {
    console.log(model);
  };
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <p className={classes.title}>Thông Tin Phòng Ban</p>
        <div className="d-flex justify-content-end align-items-center w-25 pr-5">
          <Button
            variant="outlined"
            className={classes.buttonSave}
          >
            Lưu
          </Button>
          <Button
            variant="contained"
            className={classes.buttonCreate}
          >
            Tạo mới
          </Button>
        </div>
      </div>
      <div>
        <Formsy
          onValidSubmit={handleSubmit}
          className="d-flex flex-column justify-content-center align-items-center w-100"
        >
          <div className="row w-100">
            <div className="col-md-2 d-flex flex-column justify-content-start align-items-center p-0">
              <div className="d-flex  align-items-center p-3">
                <img src="/images/icon/Checked.png" className="pr-1"></img>
                <Typography>Bộ phận đang hoạt động</Typography>
              </div>
            </div>
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-6">
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="CongTyChiNhanh"
                      label="Công ty chi nhánh"
                      required
                      variant="filled"
                    />
                  </div>
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="TenBoPhan"
                      label="Tên bộ phận"
                      required
                      variant="filled"
                    />
                  </div>

                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="DiaChi"
                      label="Địa Chỉ"
                      required
                      variant="filled"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="BoPhanGoc"
                      label="Bộ phận gốc"
                      variant="filled"
                    />
                  </div>
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="DienGiai"
                      label="Diễn giải"
                      variant="filled"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Formsy>
      </div>
      <div className="d-flex justify-content-between align-items-center pr-5">
        <p className={classes.title}>Dữ liệu</p>
        <div>
          <Button
            variant="contained"
            className={classes.buttonDelete}
          >
            Xóa
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PhongBan



