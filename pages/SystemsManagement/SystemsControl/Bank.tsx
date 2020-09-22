import {
  Breadcrumbs, Button,
  InputBase, MenuItem, TextField, Typography
} from "@material-ui/core";
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import SearchIcon from '@material-ui/icons/Search';
import { useFormik } from "formik";
import React from 'react';
import * as Yup from 'yup';
import * as companyFactory from '../../../factories/companies/companyFactory';
const CustomTextField = withStyles({
  root: {
    '& .MuiInputBase-input': {
      fontSize: "14px",
    },

    '& .MuiFormControl-root': {
      margin: "3px 3px",
    },
    '& p.MuiFormHelperText-root': {
      color: '#dc3545',
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



function Bank() {
  const classes = useStyles();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: companyFactory.prepareEmptyCompanyBankModel(),
    validationSchema: Yup.object({
      bankCode: Yup.string()
        .max(45, 'Must be 45 characters or less')
        .required('Required'),
      bankName: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .required('Required'),
      bankAddress: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .required('Required'),
      bankAccountName: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
      bankAccountNumber: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
      accountingCodeId: Yup.number()
        .required('Required'),
    }),

    onSubmit: (values) => {
      console.log({ values });

      // dispatch(createCompany(values));
    },
  })
  const valueText = [
    {
      value: '0',
      label: '0',
    },

    {
      value: '1',
      label: '1',
    },
    {
      value: '2',
      label: '2',
    },
    {
      value: '3',
      label: '3',
    },
    {
      value: '5',
      label: '5',
    },
  ];
  return (
    <div>

      <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon />}>
        <Typography color="textSecondary">Quản trị hệ thống</Typography>
        <Typography color="textSecondary">Thiết lập hệ thống</Typography>
        <Typography color="textPrimary">Ngân hàng</Typography>
      </Breadcrumbs>
      <div className="d-flex justify-content-between align-items-center">
        <p className={classes.title}>Thiết Lập Ngân Hàng</p>
        <div className="d-flex justify-content-end align-items-center w-25 pr-5">
          <Button
            variant="outlined"
            className={classes.buttonSave}
            type='submit'
            onClick={() => formik.handleSubmit()}
          >
            Lưu
          </Button>
          <Button
            variant="contained"
            className={classes.buttonCreate}
            onClick={() => formik.resetForm()}
          >
            Tạo mới
          </Button>
        </div>
      </div>
      <div>
        <form
          className="d-flex flex-column justify-content-center align-items-center w-100"
        >
          <div className="row w-100">

            <div className="col-md-6">
              <div className={classes.formGroup}>
                <CustomTextField
                  className={classes.formControl}
                  select
                  name="accountingCodeId"
                  label="Loại Ngân Hàng"
                  variant="filled"
                  size="small"
                  onChange={formik.handleChange}
                  value={formik.values.accountingCodeId}
                >
                  {valueText.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}</CustomTextField>
                <CustomTextField
                  className={classes.formControl}
                  type="text"
                  name="bankCode"
                  label="Mã Ngân Hàng"
                  variant="filled"
                  size="small"
                  onChange={formik.handleChange}
                  value={formik.values.bankCode}

                />
              </div>
              <div className={classes.formGroup}>
                <CustomTextField
                  className={classes.formControl}
                  type="text"
                  name="bankName"
                  label="Tên Ngân Hàng"
                  required
                  variant="filled"
                  size="small"
                  onChange={formik.handleChange}
                  value={formik.values.bankName}
                />
              </div>
              <div className={classes.formGroup}>
                <CustomTextField
                  className={classes.formControl}
                  type="text"
                  name="bankAddress"
                  label="Địa chỉ"
                  required
                  variant="filled"
                  size="small"
                  onChange={formik.handleChange}
                  value={formik.values.bankAddress}
                />
              </div>


              <div className={classes.formGroup}>
                <CustomTextField
                  className={classes.formControl}
                  type="text"
                  name="bankAccountName"
                  label="Chủ Thẻ"
                  variant="filled"
                  size="small"
                  onChange={formik.handleChange}
                  value={formik.values.bankAccountName}
                />
                <CustomTextField
                  className={classes.formControl}
                  type="text"
                  name="bankAccountNumber"
                  label="Số thẻ"
                  variant="filled"
                  size="small"
                  onChange={formik.handleChange}
                  value={formik.values.bankAccountNumber}

                />
              </div>


            </div>
            <div className="col-md-6">
              <div className={classes.formGroup}>
                <CustomTextField
                  className={classes.formControl}
                  type="text"
                  name="paypalAccount"
                  label="Tài khoản paypal"
                  variant="filled"
                  size="small"
                  onChange={formik.handleChange}
                  value={formik.values.paypalAccount}
                />
              </div>
              <div className={classes.formGroup}>
                <CustomTextField
                  className={classes.formControl}
                  type="text"
                  name="paypalNumber"
                  label="Số thanh toán paypal"
                  variant="filled"
                  size="small"
                  onChange={formik.handleChange}
                  value={formik.values.paypalNumber}
                />
              </div>


              <div className={classes.formGroup}>
                <CustomTextField
                  disabled
                  className={classes.formControl}
                  type="text"
                  name="CSV"
                  label="CSV"
                  variant="filled"
                  size="small"
                  onChange={formik.handleChange}
                  value={formik.values.bankCode}
                />
                <CustomTextField
                  className={classes.formControl}
                  type="text"
                  name="cifCode"
                  label="Mã CIF"
                  variant="filled"
                  size="small"
                  onChange={formik.handleChange}
                  value={formik.values.cifCode}

                />
              </div>
              <div className={classes.formGroup}>
                <CustomTextField
                  className={classes.formControl}
                  type="text"
                  name="iebCode"
                  label="Mã truy cập IEB"
                  variant="filled"
                  size="small"
                  onChange={formik.handleChange}
                  value={formik.values.iebCode}
                />
                <CustomTextField
                  className={classes.formControl}
                  disabled
                  type="text"
                  name="MaTaiKhoanLienQuan"
                  label="Mã Tài Khoản Liên Quan"
                  variant="filled"
                  size="small"
                  onChange={formik.handleChange}
                  value={formik.values.bankCode}

                />
              </div>
            </div>

          </div>
        </form>
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

export default Bank


