import React from "react";
import {
  Button,
  Typography,
  FormControlLabel,
  Radio,
  Switch,
  TextField,
} from "@material-ui/core";
import { makeStyles, withStyles } from '@material-ui/core/styles';
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


const useStyles = makeStyles((theme) => ({

  title: {
    fontFamily: "Quicksand",
    fontWeight: "bold",
    fontSize: "24px",
  },
  buttonRounded: {
    borderRadius: "32px",
    width: "120px",
    margin: "12px",
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
}));

function CongtyChiNhanh() {
  const classes = useStyles();
  const handleSubmit = (model) => {
    console.log(model);
  };
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <p className={classes.title}>Thông Tin Công Ty / Chi Nhánh</p>
        <div className="d-flex justify-content-end align-items-center w-25 pr-5">
          <Button
            variant="outlined"
            style={{ backgroundColor: "#FFF", color: "#2FAAFC", borderColor: '#2FAAFC' }}
            className={classes.buttonRounded}
          >
            Lưu
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "#2FAAFC", color: "#FFF" }}
            className={classes.buttonRounded}
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
            <div className="col-md-2 d-flex flex-column justify-content-start align-items-center p-0 mt-5">
              <div className={classes.avatar}>
                <div className="text-center m-auto">
                  <span className={classes.avatarLabel}>No Image Data</span>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#2FAAFC", color: "#FFF" }}
                    className={classes.buttonRounded}
                  >
                    <span>Chọn logo</span>
                  </Button>
                </div>
              </div>
              <div className="d-flex align-items-center pt-3 w-100">
                <img src="/images/icon/Checked.png" className="pl-3"></img>
                <Typography className="pl-1">Công ty đang hoạt động</Typography>
              </div>
              <div className="d-flex pt-3 w-100">
                <Switch
                  name="checkedA"
                  color="primary"
                  size="small"
                />

                <Typography>
                  Dùng cho POS mobile app (đóng mở tab)
                </Typography>


              </div>
            </div>
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-6">
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="CongTyMe"
                      label="Công ty mẹ"
                      required
                      variant="filled"
                      size="small"

                    />
                  </div>
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="CongTyChiNhanh"
                      label="Tên công ty chi nhánh"
                      required
                      variant="filled"

                    />
                  </div>

                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="TenTiengAnh"
                      label="Tên tiếng anh"
                      variant="filled"

                    />
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="TenVietTat"
                      label="Tên viết tắt"
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

                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="MST/DKKD"
                      label="MST/Số ĐKKD"
                      variant="filled"

                    />
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="TenDeIn"
                      label="Tên để in"
                      variant="filled"

                    />
                  </div>

                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="DiaChiDeIn"
                      label="Địa chỉ để in"
                      variant="filled"

                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="DienThoai"
                      label="Điện thoại"
                      required
                      variant="filled"

                    />
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="SoFax"
                      label="Số Fax"
                      variant="filled"

                    />
                  </div>
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="DuongDayNong"
                      label="Đường dây nóng"
                      variant="filled"

                    />
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="Website"
                      label="Website"
                      variant="filled"

                    />
                  </div>
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="EmailHoTro"
                      label="Email hỗ trợ"
                      required
                      variant="filled"

                    />
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="EmailNVKD"
                      label="Email NVKD"
                      variant="filled"

                    />
                  </div>
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="POSPrinter"
                      label="POS default printer"
                      variant="filled"

                    />
                  </div>
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="StampPrinter"
                      label="Stamp default printer"
                      variant="filled"

                    />
                  </div>
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="StampPrinter"
                      label="Order Doc prefix"
                      required
                      variant="filled"

                    />
                    <div className="d-flex justify-content-start align-items-center w-100 pl-3">
                      <Typography>Max 3Characters (Ex: CB, ORD...)</Typography>
                    </div>
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
            style={{ backgroundColor: "#FDABAB", color: "#FFFFFF" }}
            className={classes.buttonRounded}
          >
            Xóa
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CongtyChiNhanh;
