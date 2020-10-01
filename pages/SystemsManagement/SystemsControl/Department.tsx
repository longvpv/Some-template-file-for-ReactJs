import React, { useEffect, useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { Button, InputBase, TextField,
  Typography, withStyles, Breadcrumbs,MenuItem,} from "@material-ui/core";
import { fade, makeStyles } from '@material-ui/core/styles';
import { useFormik, validateYupSchema } from "formik";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import DepartmentData from "./DepartmentData";
import Modal from '@material-ui/core/Modal';
import Checkbox from '@material-ui/core/Checkbox';
import AppState from "../../../@types/appTypes/appState";
import { useDispatch, useSelector } from "react-redux";
import { DistrictProps, LocationsProps } from "../../../@types/appTypes/locationState";
import * as Yup from 'yup';
import { getCompanyList } from "../../../redux/systemsManagement/company/actions";
import { getDepartment, createDepartment, setDepartment } from "../../../redux/systemsManagement/department/actions";
import { keyBy } from 'lodash';


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
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalInput: {
    width: '366px',
    paddingBottom: '5px',
  },
  paper: {
    position: 'absolute',
    height: 600,
    width: 500,
    background: '#FFFFFF',
    borderRadius: '4px',
    padding: theme.spacing(2, 8,),
    animation: 'zoomIn',
    animationDuration: '0.5s',
  },
}));

function Department() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompanyList()),
    dispatch(getDepartment())
  }, [])

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [statecompanyId, setstatecompanyId] = useState(0);
  const [stateCityId, setStateCityId] = useState('');
  const [stateDistrictId, setStateDistrictId] = useState('')

  const companyList = useSelector((state: AppState) => state.systemsCompanyState.companyData);
  const departmentList = useSelector((state: AppState) => state.systemDepartmentState.departmentData);

  const cityLocations = useSelector((state: AppState) => state.locationState.locations);
  const districtLocation = Object.values(
    ((cityLocations.filter(
      (location: LocationsProps) => location.id === stateCityId)[0] || {})
      .district) || {});
  const wardLocation = Object.values(
    ((districtLocation.filter(
      (location: DistrictProps) => location.id === stateDistrictId)[0] || {})
      .ward) || {});

  function createData(
    departmentName: string,
    companyId: number,
    departmentAddress: string,
    description: string,
    active: boolean,
    parentId: number
  ) {
    return {
    departmentName,
    companyId,
    departmentAddress,
    description,
    active,
    parentId
    };
  }

  const formik = useFormik( 
    {
      initialValues: {
      companyId: '',
      departmentName: '',
      rootDepartment: '',
      address: '',
      city: '',
      district: '',
      ward: '',
      country: '',
      description: '',
      deptActive: true
      },
      
      validationSchema: Yup.object({
        companyId: Yup.number()
          .positive('Select company')
          .required('Required'),
        departmentName: Yup.string()
          .max(100, 'Must be 100 characters or less')
          .required('Required'),
        rootDepartment: Yup.string()
          .max(64, 'Must be 64 characters or less'),
        address: Yup.string()
          .max(200, 'Must be 200 characters or less'),
        description: Yup.string()
          .max(400, 'Must be 400 characters or less'),
      }),

      onSubmit: (values) => {
        const data = createData(
          values.departmentName,
          parseInt(values.companyId),
          values.address,
          values.description,
          values.deptActive,
          parseInt(values.rootDepartment))

        dispatch(createDepartment(data))
        formik.resetForm()
      }
    }
  );

  const handleClose = () => {
    setOpen(false)
    formik.resetForm()
  }
  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon />}>
        <Typography color="textSecondary">Quản trị hệ thống</Typography>
        <Typography color="textSecondary">Thiết lập hệ thống</Typography>
        <Typography color="textPrimary">Phòng ban</Typography>
      </Breadcrumbs>
      <div className="d-flex justify-content-between align-items-center">
        <p className={classes.title}>Phòng Ban</p>
        <div className="d-flex justify-content-end align-items-center w-30 pr-5">
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
            variant="outlined"
            className={classes.buttonDelete}
          >
            Xóa
          </Button>
          <div>
            <Button
              variant="contained"
              className={classes.buttonCreate}
              onClick={handleOpen}
            >
              Tạo mới
            </Button>
            <Modal
              className={classes.modal}
              open={open}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
                <div className={classes.paper}>
                  <p className={classes.title}>TẠO PHÒNG BAN</p>
                  <div>
                    <CustomTextField
                        className={classes.modalInput}
                        select
                        name="companyId"
                        label="Công ty / Chi nhánh"
                        required
                        variant="outlined"
                        size="small"
                        value={formik.values.companyId}
                        onChange={formik.handleChange}
                    >
                      {companyList.map(company => 
                        <MenuItem key={company.id} value={company.id} onClick={() => setstatecompanyId(company.id)}>
                          {company.companyName}
                        </MenuItem>
                        )}
                    </CustomTextField>
                    <CustomTextField
                        className={classes.modalInput}
                        type="text"
                        name="departmentName"
                        label="Tên bộ phận"
                        required
                        variant="outlined"
                        size="small"
                        value={formik.values.departmentName}
                        onChange={formik.handleChange}
                    />
                    <CustomTextField
                        className={classes.modalInput}
                        select
                        name="rootDepartment"
                        label="Bộ phận gốc"
                        variant="outlined"
                        size="small"
                        value={formik.values.rootDepartment}
                        onChange={formik.handleChange}
                    >
                        {departmentList.map(department => (department.companyId == statecompanyId) ?
                          <MenuItem key={department.id} value={department.id}>
                            {department.departmentName}
                          </MenuItem>  : ''
                          )}
                    </CustomTextField>
                    <CustomTextField
                        className={classes.modalInput}
                        type="text"
                        name="address"
                        label="Địa chỉ"
                        variant="outlined"
                        size="small"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                    />
                    <div className='d-flex col p-0 w-100'>
                      <CustomTextField
                          className={classes.modalInput}
                          select
                          name="city"
                          label="Thành phố"
                          variant="outlined"
                          size="small"
                          value={formik.values.city}
                          onChange={formik.handleChange}
                      >
                        {cityLocations.map((option) => (
                          <MenuItem key={option.id} value={option.id} onClick={() => setStateCityId(option.id)}>
                            {option.name}
                          </MenuItem>
                        ))}
                      </CustomTextField>
                      <CustomTextField
                          className={classes.modalInput}
                          select
                          name="district"
                          label="Quận huyện"
                          variant="outlined"
                          size="small"
                          value={formik.values.district}
                          onChange={formik.handleChange}
                      >
                        {districtLocation.map((option) => (
                          <MenuItem key={option.id} value={option.id} onClick={() => setStateDistrictId(option.id)}>
                            {option.name}
                          </MenuItem>
                        ))}
                      </CustomTextField>
                    </div>
                    <div className='d-flex col justify-content-space-between p-0 w-100'>
                      <CustomTextField
                          className={classes.modalInput}
                          select
                          name="ward"
                          label="Phường xã"
                          variant="outlined"
                          size="small"
                          value={formik.values.ward}
                          onChange={formik.handleChange}
                        >
                          {wardLocation.map((option) => (
                            <MenuItem key={option.id} value={option.id}>
                              {option.name}
                            </MenuItem>
                          ))}
                        </CustomTextField>
                      <CustomTextField
                          className={classes.modalInput}
                          select
                          name="country"
                          label="Quốc gia"
                          variant="outlined"
                          size="small"
                          value={formik.values.country}
                          onChange={formik.handleChange}
                      >
                        <MenuItem value='vn'>
                          Việt Nam
                        </MenuItem>
                      </CustomTextField>
                    </div>
                    <CustomTextField
                        className={classes.modalInput}
                        type="text"
                        name="description"
                        label="Mô tả"
                        variant="outlined"
                        size="small"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                    />
                    <div className="d-flex align-items-center w-100">
                      <Checkbox
                        style={{ height: '10px' }}
                        value={formik.values.deptActive}
                        onChange={formik.handleChange}
                        name="deptActive"
                        color="primary"
                        size="small"
                        defaultChecked
                      />
                      <Typography className="pl-1">Bộ phận đang hoạt động</Typography>
                    </div>
                  </div>
                  <div className='d-flex row justify-content-end pr-1'>
                    <Button
                      variant="contained"
                      className={classes.buttonDelete}
                      onClick={handleClose}
                    >
                      Hủy
                    </Button>
                    <Button
                      variant="contained"
                      className={classes.buttonCreate}
                      onClick={() => formik.handleSubmit()}
                    >
                      Thêm
                    </Button>
                  </div>
                </div>
            </Modal>
          </div>
        </div>
      </div>

      <div className="p-2">
        <DepartmentData />
      </div>
    </div>
  )
}

export default Department
