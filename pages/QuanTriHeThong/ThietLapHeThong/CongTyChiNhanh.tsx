import {
  Breadcrumbs,
  Button,
  Checkbox,
  CircularProgress,
  InputBase,
  MenuItem,
  Switch,
  TextField, Typography
} from "@material-ui/core";
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import { TramRounded } from "@material-ui/icons";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import SearchIcon from '@material-ui/icons/Search';
import { message, Upload } from 'antd';
import Axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';
import AppState from "../../../@types/appTypes/appState";
import { DistrictProps, LocationsProps } from "../../../@types/appTypes/locationState";
import { createCompany, deleteCompany, setCompany, setPrinter } from "../../../redux/systemsManagement/company/actions";
import httpClient from "../../../services/httpService";
import CongTyChiNhanhData from "./CongTyChiNhanh-Data";
import * as companyFactory from '../../../factories/companies/companyFactory'
import { PrinterProps } from "../../../@types/company/createCompany";
const FormData = require('form-data');


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



function CongtyChiNhanh() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [stateCityId, setStateCityId] = useState('');
  const [stateDistrictId, setStateDistrictId] = useState('');

  const preparePrinter = async () => {
    const printer: Array<PrinterProps> = await httpClient.get(`SystemsManagement/Printer/SelectList`)
    dispatch(setPrinter(printer));
  }
  useEffect(() => {
    preparePrinter()
  }, [])
  const company = useSelector((state: AppState) => state.systemsCompanyState.company);
  const [imgUrl, setImgUrl] = useState(company.companyLogo);


  const formik = useFormik({
    enableReinitialize: true,
    initialValues: company.id ? company : companyFactory.prepareEmptyCompanyModel(),
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
      dispatch(createCompany(values));
    },
  });

  const cityLocations = useSelector((state: AppState) => state.locationState.locations);
  const districtLocation = Object.values(((cityLocations.filter((location: LocationsProps) => location.id === stateCityId)[0] || {}).district) || {});
  const wardLocation = Object.values(((districtLocation.filter((location: DistrictProps) => location.id === stateDistrictId)[0] || {}).ward) || {});


  const parentList = useSelector((state: AppState) => state.systemsCompanyState.companyData.data);
  const PrinterList = useSelector((state: AppState) => state.systemsCompanyState.printer);

  const handleDeleteButton = () => {
    const name = formik.initialValues.companyName;
    const companyId = formik.initialValues.id || null;
    const r = confirm(`Are you sure wanna delete ${name} company ,Id ${companyId}`);
    if (r) {
      dispatch(deleteCompany(companyId))
    }
  }

  const handleUploadLogo = async (e) => {

    const form_data = new FormData();
    form_data.append("file", e.target.files[0]);
    const request_config = {
      headers: {
        "Content-Type": "form-data"
      },
    };
    const uploadResult = await httpClient.post(`Api/Upload`, form_data, request_config);
    const imgUrl = uploadResult[0].filePath;
    setImgUrl(imgUrl);
    formik.setFieldValue('companyLogo', imgUrl)
  }

  return (
    <div key={company.id}>
      <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon />}>
        <Typography color="textSecondary">Quản trị hệ thống</Typography>
        <Typography color="textSecondary">Thiết lập hệ thống</Typography>
        <Typography color="textPrimary">Công ty / Chi Nhánh</Typography>
      </Breadcrumbs>
      <div className="d-flex justify-content-between align-items-center">
        <p className={classes.title}>Thông Tin Công Ty / Chi Nhánh</p>
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
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column justify-content-center align-items-center w-100"
        >
          <div className="row w-100">
            <div className="col-md-2 d-flex flex-column justify-content-start align-items-center p-0 mt-5">

              <input
                style={{ display: 'none' }}
                id="companyLogo"
                name="companyLogo"
                type="file"
                onChange={handleUploadLogo}
              />
              <label htmlFor="companyLogo" className={classes.avatar}>
                {imgUrl ? <img src={imgUrl} alt="avatar" style={{ width: '100%' }} /> :
                  <div className="d-flex flex-column justify-content-center align-items-center ">
                    No Image Data
                    <Button
                      variant="contained"
                      className={classes.buttonAbsolute}
                      component="span"
                      aria-label="add"
                    >
                      <span>Chọn logo</span>
                    </Button>
                  </div>
                }


              </label>

              <div className="d-flex align-items-center pt-3 w-100">
                <Checkbox
                  checked={formik.values.active}
                  onChange={formik.handleChange}
                  name="active"
                  color="primary"
                  size="small"
                />


                <Typography className="pl-1">Công ty đang hoạt động</Typography>
              </div>
              <div className="d-flex pt-3 w-100">
                <Switch
                  name="visiblePOSMobileApp"
                  color="primary"
                  size="small"
                  checked={formik.values.visiblePOSMobileApp}
                  onChange={formik.handleChange}
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
                      select
                      name="parentId"
                      label="Công ty mẹ"
                      variant="filled"
                      size="small"
                      onChange={formik.handleChange}
                      value={formik.values.parentId}
                    >
                      {parentList.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                          {option.companyName}
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
                      type="text"
                      name="companyEnglishName"
                      label="Tên tiếng anh"
                      variant="filled"
                      size="small"
                      onChange={formik.handleChange}
                      value={formik.values.companyEnglishName}

                    />
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="companyTitle"
                      label="Tên viết tắt"
                      variant="filled"
                      size="small"
                      onChange={formik.handleChange}
                      value={formik.values.companyTitle}

                    />
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

                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      select
                      name="countryId"
                      label="Quốc gia"
                      variant="filled"
                      size="small"
                      onChange={formik.handleChange}
                      value={formik.values.countryId}
                    >
                      {
                        <MenuItem key={'1'} value={'1'}>
                          Việt Nam
                        </MenuItem>
                      }</CustomTextField>
                    <CustomTextField
                      className={classes.formControl}
                      select
                      name="provinceId"
                      label="Thành phố"
                      variant="filled"
                      size="small"
                      onChange={formik.handleChange}
                      value={formik.values.provinceId}
                    >
                      {cityLocations.map((city) => (
                        <MenuItem key={city.id} value={city.id} onClick={() => setStateCityId(city.id)}>
                          {city.nameWithType}
                        </MenuItem>
                      ))}</CustomTextField>

                  </div>
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      select
                      name="districtId"
                      label="Quận/Huyện"
                      variant="filled"
                      size="small"
                      onChange={formik.handleChange}
                      value={formik.values.districtId}
                    >
                      {districtLocation.map((district: DistrictProps) => (
                        <MenuItem key={district.id} value={district.id} onClick={() => setStateDistrictId(district.id)}>
                          {district.nameWithType}
                        </MenuItem>
                      ))}</CustomTextField>
                    <CustomTextField
                      className={classes.formControl}
                      select
                      name="wardId"
                      label="Phường/Xã"
                      variant="filled"
                      size="small"
                      onChange={formik.handleChange}
                      value={formik.values.wardId}
                    >
                      {wardLocation.map((ward) => (
                        <MenuItem key={ward.id} value={ward.id}>
                          {ward.nameWithType}
                        </MenuItem>
                      ))}</CustomTextField>

                  </div>
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="addressToPrintReport"
                      label="Địa Chỉ Để in"
                      variant="filled"
                      size="small"
                      helperText={formik.touched.addressToPrintReport && formik.errors.addressToPrintReport ? formik.errors.addressToPrintReport : null}
                      onChange={formik.handleChange}
                      value={formik.values.addressToPrintReport}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="companyPhone"
                      label="Điện thoại"
                      variant="filled"
                      size="small"
                      helperText={formik.touched.companyPhone && formik.errors.companyPhone ? 'Should be phone number' : null}
                      onChange={formik.handleChange}
                      value={formik.values.companyPhone}
                    />
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="companyFax"
                      label="Số Fax"
                      variant="filled"
                      size="small"
                      onChange={formik.handleChange}
                      value={formik.values.companyFax}
                    />
                  </div>
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="companyHotline"
                      label="Đường dây nóng"
                      variant="filled"
                      size="small"
                      onChange={formik.handleChange}
                      value={formik.values.companyHotline}
                    />
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="website"
                      label="Website"
                      variant="filled"
                      size="small"
                      onChange={formik.handleChange}
                      value={formik.values.website}
                    />
                  </div>
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="companySupportEmail"
                      label="Email hỗ trợ"
                      variant="filled"
                      size="small"
                      helperText={formik.touched.companySupportEmail && formik.errors.companySupportEmail ? formik.errors.companySupportEmail : null}
                      onChange={formik.handleChange}
                      value={formik.values.companySupportEmail}
                    />
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="companySaleEmail"
                      label="Email NVKD"
                      variant="filled"
                      size="small"
                      onChange={formik.handleChange}
                      value={formik.values.companySaleEmail}
                    />
                  </div>
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      select
                      name="posDefaultPrinter"
                      label="POS default printer"
                      variant="filled"
                      size="small"
                      onChange={formik.handleChange}
                      value={formik.values.posDefaultPrinter}
                    >
                      {PrinterList.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.text}
                        </MenuItem>
                      ))}</CustomTextField>
                    <CustomTextField
                      className={classes.formControl}
                      select
                      name="stampDefaultPrinter"
                      label="Stamp default printer"
                      variant="filled"
                      size="small"
                      onChange={formik.handleChange}
                      value={formik.values.stampDefaultPrinter}
                    >
                      {PrinterList.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.text}
                        </MenuItem>
                      ))}</CustomTextField>
                  </div>
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="companyRegistration"
                      label="MST/Số ĐKKD"
                      variant="filled"
                      size="small"
                      onChange={formik.handleChange}
                      value={formik.values.companyRegistration}
                    />
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="nameToPrintReport"
                      label="Tên để in"
                      variant="filled"
                      size="small"
                      helperText={formik.touched.nameToPrintReport && formik.errors.nameToPrintReport ? formik.errors.nameToPrintReport : null}
                      onChange={formik.handleChange}
                      value={formik.values.nameToPrintReport}
                    />
                  </div>
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="orderDocPrefix"
                      label="Order Doc prefix"
                      variant="filled"
                      size="small"
                      helperText={formik.touched.orderDocPrefix && formik.errors.orderDocPrefix ? formik.errors.orderDocPrefix : null}
                      onChange={formik.handleChange}
                      value={formik.values.orderDocPrefix}
                    />
                    <div className="d-flex justify-content-start align-items-center w-100 pl-3">
                      <Typography>Max 3Characters (Ex: CB, ORD...)</Typography>
                    </div>
                  </div>
                </div>
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
            onClick={handleDeleteButton}
          >
            Xóa
          </Button>
        </div>
      </div>
      <div className="p-2">
        <CongTyChiNhanhData />
      </div>

    </div >
  );
}

export default CongtyChiNhanh;
