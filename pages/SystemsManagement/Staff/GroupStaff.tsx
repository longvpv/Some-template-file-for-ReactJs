import React from 'react'
import {
  Breadcrumbs, Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputBase,
  MenuItem,
  Radio,
  RadioGroup,
  Switch,
  TextField, Typography
} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import SearchIcon from '@material-ui/icons/Search';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useStyles from "../../../component/coreUseStyle/useStyle";
import StaffManagementData from "./StaffManagementData";
import * as staffFactory from '../../../factories/companies/staffFactory';


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

function GroupStaff() {
  const classes = useStyles();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: staffFactory.prepareEmptyStaffModel(),
    validationSchema: Yup.object({}),
    onSubmit: (values) => {
      // company.id
      //   ? dispatch(changeCompany(values))
      //   : dispatch(createCompany(values));
    },
  })

  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon />}>
        <Typography color="textSecondary">Quản trị hệ thống</Typography>
        <Typography color="textSecondary">Phân quyền nhân viên</Typography>
        <Typography color="textPrimary">Lớp người dùng</Typography>
      </Breadcrumbs>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-start align-items-center">
          <p className={classes.title}>Nhóm người dùng</p>
          <div className={classes.formGroup} style={{ minWidth: "200px" }}>
            <CustomTextField
              className={classes.formControl}
              select
              name="CongTyMe"
              required
              variant="filled"
              size="small"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}</CustomTextField>
          </div>
        </div>


        <div className="d-flex justify-content-end align-items-center pr-5">
          <Button
            variant="contained"
            className={classes.buttonDelete}
          >
            Xóa
          </Button>
          <Button
            variant="outlined"
            className={classes.buttonSave}
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
            <div className="col-md-6 ">
              <h1 style={{ color: '' }}>Thiết Lập Quyền</h1>

            </div>
            <div className="col-md-6">
              <h1 style={{ color: '' }}>Quyền Hiện Hành</h1>
            </div>
          </div>

        </form>
      </div>


    </div>
  );
}

export default GroupStaff



