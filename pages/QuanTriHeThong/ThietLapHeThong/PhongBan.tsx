import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { Button, InputBase, TextField, Typography, withStyles, Breadcrumbs } from "@material-ui/core";
import { fade, makeStyles } from '@material-ui/core/styles';
import Formsy from "formsy-react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

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

    }, '& .MuiFilledInput-underline:before': {
      borderBottomColor: 'white',
    },

    '& .MuiFilledInput-underline:after': {
      borderBottomColor: 'white',
    },

  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Quicksand",
    fontWeight: "bold",
    fontSize: "24px",
    padding: '24px',
    margin: '0',
  },
  buttonSave: {
    borderRadius: "8px",
    width: "120px",
    margin: "12px",
    backgroundColor: "#F2F2F2",
    color: "#2FAAFC",
    borderColor: '#2FAAFC',
    fontWeight: 'bold'
  },
  buttonCreate: {
    borderRadius: "8px",
    width: "120px",
    margin: "12px",
    backgroundColor: "#2FAAFC",
    color: "#FFF",
    borderColor: '#2FAAFC',
    fontWeight: 'bold'
  },
  buttonDelete: {
    borderRadius: "8px",
    width: "120px",
    margin: "12px",
    backgroundColor: "#FDABAB", color: "#FFFFFF",
    fontWeight: 'bold'
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

  search: {
    position: "relative",
    borderRadius: "16px",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: '#101010',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function PhongBan() {
  const classes = useStyles();
  const handleSubmit = (model) => {
    console.log(model);
  };
  return (
    <div>

      <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon />}>
        <Typography color="textSecondary">Quản trị hệ thống</Typography>
        <Typography color="textSecondary">Thiết lập hệ thống</Typography>
        <Typography color="textPrimary">Phòng ban</Typography>
      </Breadcrumbs>
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
                      size="small"
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
                      size="small"
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
                      size="small"
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
                      size="small"
                    />
                  </div>
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="DienGiai"
                      label="Diễn giải"
                      variant="filled"
                      size="small"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Formsy>
      </div>
      <div className="d-flex justify-content-between align-items-center pr-5">
        <div className="d-flex justify-content-center align-items-center">
          <p className={classes.title}>Dữ liệu</p>
          <div className={classes.search} style={{ background: "#FFF" }}>
            <div className={classes.searchIcon}>
              <SearchIcon style={{ color: '#2FAAFC' }} />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </div>

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



