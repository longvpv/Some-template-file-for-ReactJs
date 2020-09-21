
import {
  Button,
  CircularProgress,
  InputBase,
  MenuItem,
  TextField
} from "@material-ui/core";
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { useFormik } from "formik";
import { DropzoneArea } from 'material-ui-dropzone';
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from 'yup';

const CustomTextField = withStyles({
  root: {
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
  avatar: {
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
    width: "180px",
    height: "180px",

    background: "#FFFFFF",

    position: 'relative'
  },
  avatarLabel: {
    width: "80px",
    height: "24px",

    "font-family": "Quicksand",
    "font-style": "normal",
    "font-weight": "normal",
    "font-size": "14px",
    "line-height": "24px",

    color: "#4E4E4E",
  },
  buttonAbsolute: {
    borderRadius: "8px",
    width: "120px",
    margin: "12px",
    backgroundColor: "#2FAAFC",
    color: "#FFF",
    borderColor: '#2FAAFC',
    fontWeight: 'bold',
  }

}));


function HopDongNhanVien() {
  const dispatch = useDispatch();
  const [imgUrl, setImgUrl] = useState('');
  const [loading, setLoading] = useState(false)
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      companyName: '',
      companyAddress: '',
      companyPhone: '',
      addressToPrintReport: '',
      orderDocPrefix: '',
      companySupportEmail: '',
      nameToPrintReport: '',
      companyEnglishName: '',
      companyRegistration: '',
      companyTitle: '',
      companyFax: '',
      companyHotline: '',
      companySaleEmail: '',
      website: '',
      visiblePOSMobileApp: false,
      companyLogo: '',
      posCustomerBill: 0,
      posSavedBill: 0,
      posWarehouseBill: 0,
      posDefaultPrinter: 0,
      stampDefaultPrinter: 0,
      numberGroupSeparator: 0,
      active: true,
      parentId: 0,
      id: 0

    },
    validationSchema: Yup.object({
      companyName: Yup.string()
        .max(200, 'Must be 200 characters or less')
        .required('Required'),
      companyAddress: Yup.string()
        .max(200, 'Must be 200 characters or less')
        .required('Required'),
      companyPhone: Yup.string()
        .max(64, 'Must be 64 characters or less')
        .required('Required'),
      addressToPrintReport: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .required('Required'),
      orderDocPrefix: Yup.string()
        .max(3, 'Must be 3 characters or less')
        .required('Required'),
      companySupportEmail: Yup.string()
        .max(64, 'Must be 64 characters or less')
        .required('Required'),
      nameToPrintReport: Yup.string()
        .max(200, 'Must be 200 characters or less')
        .required('Required'),
    }),
    onSubmit: (values) => {
      console.log({ values });
      // dispatch(createCompany(values));

    },
  });


  const valueText = [
    {
      value: null,
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
  ];


  const uploadButton = (
    <div>

      {loading ? <CircularProgress /> :

        <Button
          variant="contained"
          className={classes.buttonAbsolute}
          component="span"
          aria-label="add"
        >
          <span>Chọn logo</span>
        </Button>

      }

    </div>
  );
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <p className={classes.title}>Thông Tin Hợp Đồng</p>
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
          >
            Tạo mới
          </Button>
        </div>
      </div>
      <div>
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column justify-content-center align-items-center w-100"
        >
          <div className="row w-100">
            <div className="col-md-6">
              <div className={classes.formGroup}>
                <CustomTextField
                  className={classes.formControl}
                  select
                  name="posDefaultPrinter"
                  label="Quốc gia"
                  variant="filled"
                  size="small"
                  onChange={formik.handleChange}
                  value={formik.values.posDefaultPrinter}
                >
                  {valueText.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}</CustomTextField>
              </div>
              <div className={classes.formGroup}>
                <CustomTextField
                  className={classes.formControl}
                  type="text"
                  name="companyName"
                  label="Tên công ty chi nhánh"
                  variant="filled"
                  size="small"
                  helperText={formik.touched.companyName && formik.errors.companyName ? formik.errors.companyName : null}
                  onChange={formik.handleChange}
                  value={formik.values.companyName}
                />
              </div>

              <div className={classes.formGroup}>
                <CustomTextField
                  className={classes.formControl}
                  select
                  name="posDefaultPrinter"
                  label="Quốc gia"
                  variant="filled"
                  size="small"
                  onChange={formik.handleChange}
                  value={formik.values.posDefaultPrinter}
                >
                  {valueText.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}</CustomTextField>
              </div>
              <div className={classes.formGroup}>
                <CustomTextField
                  className={classes.formControl}
                  type="text"
                  name="companyAddress"
                  label="Địa Chỉ"
                  variant="filled"
                  size="small"
                  helperText={formik.touched.companyAddress && formik.errors.companyAddress ? formik.errors.companyAddress : null}
                  onChange={formik.handleChange}
                  value={formik.values.companyAddress}
                />
                <CustomTextField
                  className={classes.formControl}
                  type="text"
                  name="companyAddress"
                  label="Địa Chỉ"
                  variant="filled"
                  size="small"
                  helperText={formik.touched.companyAddress && formik.errors.companyAddress ? formik.errors.companyAddress : null}
                  onChange={formik.handleChange}
                  value={formik.values.companyAddress}
                />
              </div>

              <div className={classes.formGroup}>
                <CustomTextField
                  className={classes.formControl}
                  select
                  name="posDefaultPrinter"
                  label="Quốc gia"
                  variant="filled"
                  size="small"
                  onChange={formik.handleChange}
                  value={formik.values.posDefaultPrinter}
                >
                  {valueText.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}</CustomTextField>
              </div>
              <div className={classes.formGroup}>
                <CustomTextField
                  className={classes.formControl}
                  type="text"
                  name="companyAddress"
                  label="Địa Chỉ"
                  variant="filled"
                  size="small"
                  helperText={formik.touched.companyAddress && formik.errors.companyAddress ? formik.errors.companyAddress : null}
                  onChange={formik.handleChange}
                  value={formik.values.companyAddress}
                />
              </div>
            </div>
            <div className="col-md-6">
              <h3>Đính kèm tệp</h3>
              <DropzoneArea
                dropzoneText="Chọn tệp"
                showPreviewsInDropzone={false}
                showPreviews={true}
                useChipsForPreview={true}
                onChange={(files) => console.log('Files:', files)}
              />
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


      </div>
    </div>
  );
}

export default HopDongNhanVien




