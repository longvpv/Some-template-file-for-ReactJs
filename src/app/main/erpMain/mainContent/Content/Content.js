import React from "react";
import { Button, Typography, InputAdornment } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Formsy from "formsy-react";
import { TextFieldFormsy } from "@fuse";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Quicksand",
    fontWeight: "600",
    fontSize: "24px",
  },
  buttonRounded: {
    borderRadius: "32px",
  },
}));

function Content() {
  const classes = useStyles();
  const handleSubmit = (model) => {
    console.log(model);
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <p className={classes.title}>Thông tin công ty</p>
        <div className="d-flex justify-content-around align-items-center w-25">
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            className={classes.buttonRounded}
          >
            LƯU
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            className={classes.buttonRounded}
          >
            TẠO MỚI
          </Button>
        </div>
      </div>
      <div>
        <Formsy
          onValidSubmit={handleSubmit}
          className="d-flex flex-column justify-content-center align-items-center w-100"
        >
          <TextFieldFormsy
            className="mb-5 w-100"
            type="text"
            name="logoCongTy"
            label="Logo Cong Ty"
            InputProps={{
              endAdornment: <InputAdornment position="end"></InputAdornment>,
            }}
            variant="outlined"
          />
          <TextFieldFormsy
            className="mb-5 w-100"
            type="text"
            name="congTyMe"
            label="Công ty mẹ"
            InputProps={{
              endAdornment: <InputAdornment position="end"></InputAdornment>,
            }}
            variant="outlined"
          />

          <TextFieldFormsy
            className="mb-5 w-100"
            type="text"
            name="tenCongTyChiNhanh"
            label="Tên công ty chi nhánh"
            InputProps={{
              endAdornment: <InputAdornment position="end"></InputAdornment>,
            }}
            variant="outlined"
          />
          <TextFieldFormsy
            className="mb-5 w-100"
            type="text"
            name="tenTiengAnh"
            label="Tên Tiếng Anh"
            InputProps={{
              endAdornment: <InputAdornment position="end"></InputAdornment>,
            }}
            variant="outlined"
          />
          <TextFieldFormsy
            className="mb-5 w-100"
            type="text"
            name="tenVietTat"
            label="Tên viết tắt"
            InputProps={{
              endAdornment: <InputAdornment position="end"></InputAdornment>,
            }}
            variant="outlined"
          />
          <TextFieldFormsy
            className="mb-5 w-100"
            type="text"
            name="diaChi"
            label="Địa chỉ"
            InputProps={{
              endAdornment: <InputAdornment position="end"></InputAdornment>,
            }}
            variant="outlined"
          />
          <TextFieldFormsy
            className="mb-5 w-100"
            type="text"
            name="mstSoDKKD"
            label="MST/Số ĐKKD"
            InputProps={{
              endAdornment: <InputAdornment position="end"></InputAdornment>,
            }}
            variant="outlined"
          />
          <TextFieldFormsy
            className="mb-5 w-100"
            type="text"
            name="tenDeIn"
            label="Tên để in"
            InputProps={{
              endAdornment: <InputAdornment position="end"></InputAdornment>,
            }}
            variant="outlined"
          />
          <TextFieldFormsy
            className="mb-5 w-100"
            type="text"
            name="diaChiDeIn"
            label="Địa chỉ để in"
            InputProps={{
              endAdornment: <InputAdornment position="end"></InputAdornment>,
            }}
            variant="outlined"
          />
          <TextFieldFormsy
            className="mb-5 w-100"
            type="text"
            name="dienThoai"
            label="Điện thoại"
            InputProps={{
              endAdornment: <InputAdornment position="end"></InputAdornment>,
            }}
            variant="outlined"
          />
          <TextFieldFormsy
            className="mb-5 w-100"
            type="text"
            name="soFax"
            label="Số Fax"
            InputProps={{
              endAdornment: <InputAdornment position="end"></InputAdornment>,
            }}
            variant="outlined"
          />
          <TextFieldFormsy
            className="mb-5 w-100"
            type="text"
            name="duongDayNong"
            label="Đường dây nóng"
            InputProps={{
              endAdornment: <InputAdornment position="end"></InputAdornment>,
            }}
            variant="outlined"
          />
          <TextFieldFormsy
            className="mb-5 w-100"
            type="text"
            name="website"
            label="Website"
            InputProps={{
              endAdornment: <InputAdornment position="end"></InputAdornment>,
            }}
            variant="outlined"
          />
          <TextFieldFormsy
            className="mb-5 w-100"
            type="text"
            name="emailHoTro"
            label="Email Hỗ Trợ"
            InputProps={{
              endAdornment: <InputAdornment position="end"></InputAdornment>,
            }}
            variant="outlined"
          />
          <TextFieldFormsy
            className="mb-5 w-100"
            type="text"
            name="emailNVKD"
            label="Email NVKD"
            InputProps={{
              endAdornment: <InputAdornment position="end"></InputAdornment>,
            }}
            variant="outlined"
          />
          <TextFieldFormsy
            className="mb-5 w-100"
            type="text"
            name="pos"
            label="POS default printer"
            InputProps={{
              endAdornment: <InputAdornment position="end"></InputAdornment>,
            }}
            variant="outlined"
          />
          <TextFieldFormsy
            className="mb-5 w-100"
            type="text"
            name="stamp"
            label="Stamp default printer"
            InputProps={{
              endAdornment: <InputAdornment position="end"></InputAdornment>,
            }}
            variant="outlined"
          />
          <TextFieldFormsy
            className="mb-5 w-100"
            type="text"
            name="orderDocprefix"
            label="Order Doc prefix "
            InputProps={{
              endAdornment: <InputAdornment position="end"></InputAdornment>,
            }}
            variant="outlined"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="w-full mx-auto mt-16 normal-case bg-blue"
            aria-label="LOG IN"
            value="legacy"
          >
            <span>Dang ky</span>
          </Button>
        </Formsy>
      </div>
    </div>
  );
}

export default Content;
