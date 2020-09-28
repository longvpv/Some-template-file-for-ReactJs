import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputBase,
  MenuItem,
  Switch,
  TextField, Typography
} from "@material-ui/core";
import { createStyles, fade, makeStyles, withStyles } from '@material-ui/core/styles';
import { ColDef, DataGrid } from "@material-ui/data-grid";
import SearchIcon from '@material-ui/icons/Search';
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';
import AppState from "../../../@types/appTypes/appState";
import { DistrictProps, LocationsProps } from "../../../@types/appTypes/locationState";
import * as companyFactory from '../../../factories/companies/companyFactory';
import { changeCompany, createCompany, deleteCompany, getCompany, getCompanyList } from "../../../redux/systemsManagement/company/actions";
import httpClient from "../../../services/httpService";
const FormData = require('form-data');


const columns: ColDef[] = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'companyName', headerName: 'Tên công ty', width: 150 },
  { field: 'companyEnglishName', headerName: 'Tên tiếng anh', width: 150 },
  { field: 'companyAddress', headerName: 'Địa chỉ', width: 150 },
  { field: 'companyRegistration', headerName: 'Đăng ký kinh doanh', width: 150 },
  { field: 'companyTitle', headerName: 'Tên viết tắt', width: 150 },
  { field: 'companyPhone', headerName: 'Số điện thoại', width: 150 },
  { field: 'companyFax', headerName: 'Số fax', width: 150 },
  { field: 'companyHotline', headerName: 'Hotline', width: 150 },
  { field: 'companySaleEmail', headerName: 'Email kinh doanh', width: 150 },
  { field: 'companySupportEmail', headerName: 'Email', width: 150 },
  { field: 'website', headerName: 'Website', width: 150 },
  { field: 'nameToPrintReport', headerName: 'Tên để in', width: 150 },
  { field: 'addressToPrintReport', headerName: 'Địa chỉ để in', width: 150 },
];


function createData(
  id: number,
  companyName: string,
  companyEnglishName: string,
  companyAddress: string,
  companyRegistration: string,
  companyTitle: string,
  companyPhone: string,
  companyFax: string,
  companyHotline: string,
  companySaleEmail: string,
  companySupportEmail: string,
  website: string,
  nameToPrintReport: string,
  addressToPrintReport: string,
) {
  return {
    id,
    companyName,
    companyEnglishName,
    companyAddress,
    companyRegistration,
    companyTitle,
    companyPhone,
    companyFax,
    companyHotline,
    companySaleEmail,
    companySupportEmail,
    website,
    nameToPrintReport,
    addressToPrintReport,
  };
}
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
      backgroundColor: '#e5e5e5',

    }, '& .MuiFilledInput-underline:before': {
      borderBottomColor: 'white',
    },

    '& .MuiFilledInput-underline:after': {
      borderBottomColor: 'white',
    },

  },
})(TextField);


const useStyles = makeStyles((theme) => createStyles({
  root: {
    "& .MuiDropzoneArea-root": {
      height: '120px'
    },
    "& .MuiDataGrid-root": {
      borderRadius: "25px"
    },
    "& .MuiDataGrid-colCellWrapper": {
      backgroundColor: "#E9F6FF",

    },
    "& .MuiDataGrid-colCellTitle": {
      fontWeight: "bold"
    },
    "& .MuiDataGrid-window": {
      backgroundColor: "#FFF"
    }
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    width: '100%'
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
    width: "140px",
    height: "140px",

    background: "#e5e5e5",

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



function Company() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [stateCityId, setStateCityId] = useState('');
  const [stateDistrictId, setStateDistrictId] = useState('');
  const [open, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [companyId, setCompanyId] = useState(null)

  useEffect(() => {
    dispatch(getCompanyList())

  }, [])
  const company = useSelector((state: AppState) => state.systemsCompanyState.company);
  const [imgUrl, setImgUrl] = useState(company.companyLogo);

  const results = useSelector((state: AppState) => state.systemsCompanyState.companyData);
  const handleResultClick = (id) => {
    setCompanyId(id)
    setOpen(true)
    console.log(companyId)
  }
  const handleYesButtonModal = () => {
    dispatch(getCompany(companyId));
    setOpen(false);
  }

  const rows = results.map(result => createData(
    result.id,
    result.companyName,
    result.companyEnglishName,
    result.companyAddress,
    result.companyRegistration,
    result.companyTitle,
    result.companyPhone,
    result.companyFax,
    result.companyHotline,
    result.companySaleEmail,
    result.companySupportEmail,
    result.website,
    result.nameToPrintReport,
    result.addressToPrintReport
  ))

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
      companySupportEmail: Yup.string()
        .max(64, 'Must be 64 characters or less')
        .required('Required'),
    }),

    onSubmit: (values) => {
      confirm('Sure wanna change this ?')
      company.id
        ? dispatch(changeCompany(values))
        : dispatch(createCompany(values));
    },
  });

  const cityLocations = useSelector((state: AppState) => state.locationState.locations);
  const districtLocation = Object.values(((cityLocations.filter((location: LocationsProps) => location.id === stateCityId)[0] || {}).district) || {});
  const wardLocation = Object.values(((districtLocation.filter((location: DistrictProps) => location.id === stateDistrictId)[0] || {}).ward) || {});


  const parentList = useSelector((state: AppState) => state.systemsCompanyState.companyData);

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
      <div className="d-flex justify-content-between align-items-center pl-4">
        <p className={classes.title}>Công Ty / Chi Nhánh</p>

        <div className="d-flex justify-content-end align-items-center pr-5">
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

          <Button
            variant="contained"
            className={classes.buttonCreate}
            onClick={() => setOpenForm(true)}
          >
            Tạo mới
          </Button>
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
        <>
          <div className="d-flex justify-content-center">
            <div style={{ height: 700, width: '95%' }}>
              <DataGrid className={classes.root}
                rows={rows}
                columns={columns}
                pageSize={10}
                checkboxSelection
                hideFooter
                disableSelectionOnClick
                onCellClick={(params) => {
                  if (params.field === "companyName") { handleResultClick(params.data.id) }
                }}
                onSelectionChange={(params) => console.log(params)}
              />
            </div>
          </div>
          <Dialog
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Thay đổi thông tin công ty này ?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Bạn có chắc chắn muốn thay đổi thông tin công ty này, dổi rồi không quay về cái cũ lại được đâu á nha !!!
          </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleYesButtonModal} color="primary">
                Đồng ý
          </Button>
              <Button onClick={() => setOpen(false)} color="primary" autoFocus>
                Hủy
          </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={openForm}
            onClose={() => setOpenForm(false)}
            maxWidth="lg"
          >

            <DialogContent>


              <div>
                <form
                  onSubmit={formik.handleSubmit}
                  className="d-flex flex-column justify-content-center align-items-center w-100"
                >
                  <div style={{ width: "600px" }}>
                    <div>
                      <span><img src="/images/settings.png" alt="" /></span>
                      <span className={classes.title}>Tạo công ty / chi nhánh</span>
                    </div>
                    <div className="row mb-3">

                      <div className="col-md-8">
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
                      <div className="col-md-4 d-flex justify-content-center align-items-center">
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
                      </div>

                    </div>

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
                        <MenuItem key={'Không trục thuộc công ty nào hết !!!'} value={null}>
                          Không trục thuộc công ty nào hết !!!
                      </MenuItem>
                        {parentList.map((option) => (
                          <MenuItem key={option.id} value={option.id}>
                            {option.companyName}
                          </MenuItem>
                        ))}
                      </CustomTextField>
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
                        name="website"
                        label="Website"
                        variant="filled"
                        size="small"
                        onChange={formik.handleChange}
                        value={formik.values.website}
                      />
                    </div>

                  </div>
                </form>
              </div></DialogContent>
            <DialogActions>
              <Button className={classes.buttonDelete} onClick={() => setOpenForm(false)} autoFocus>
                Hủy
          </Button>
              <Button className={classes.buttonCreate} onClick={() => formik.handleSubmit()} >
                Thêm
          </Button>

            </DialogActions>

          </Dialog>

        </>
      </div >

    </div >
  );
}

export default Company;
