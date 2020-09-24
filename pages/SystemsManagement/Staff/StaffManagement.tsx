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
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import * as Yup from 'yup';
import AppState from "../../../@types/appTypes/appState";
import { DistrictProps, LocationsProps } from "../../../@types/appTypes/locationState";
import useStyles from "../../../component/coreUseStyle/useStyle";
import * as staffFactory from '../../../factories/companies/staffFactory';
import StaffManagementData from "./StaffManagementData";


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


function StaffManagement() {
  const classes = useStyles();
  const [stateCityId, setStateCityId] = useState('');
  const [stateDistrictId, setStateDistrictId] = useState('');
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
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    new Date('2014-08-18T21:11:54'),
  );


  const cityLocations = useSelector((state: AppState) => state.locationState.locations);
  const districtLocation = Object.values(((cityLocations.filter((location: LocationsProps) => location.id === stateCityId)[0] || {}).district) || {});
  const wardLocation = Object.values(((districtLocation.filter((location: DistrictProps) => location.id === stateDistrictId)[0] || {}).ward) || {});
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
        <Typography color="textSecondary">Thiết lập hệ thống</Typography>
        <Typography color="textPrimary">Quản lý nhân viên</Typography>
      </Breadcrumbs>
      <div className="d-flex justify-content-between align-items-center">
        <p className={classes.title}>Thông Tin Nhân Viên</p>
        <div className="d-flex justify-content-end align-items-center w-25 pr-5">
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
            <div className="col-md-2 d-flex flex-column justify-content-start align-items-center p-0 mt-5">
              <div className={classes.avatar}>
                <div className="text-center m-auto">
                  <span className={classes.avatarLabel}>Ảnh đại diện</span>
                  <Button
                    variant="contained"
                    className={classes.buttonCreate}
                  >
                    <span>Tải ảnh</span>
                  </Button>
                </div>
              </div>
              <Button
                variant="contained"
                className={classes.buttonCreate}
                style={{ width: '180px', backgroundColor: "#DBF1FF", color: "#2FAAFC", }}
              >
                Xem CV
          </Button>
              <Button
                variant="contained"
                className={classes.buttonCreate}
                style={{ width: '180px', backgroundColor: "#E9E9E9", color: "#939393", }}
              >
                Cập nhật password
          </Button>

            </div>
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-6">
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="CongTyMe"
                      label="Họ tên"
                      required
                      variant="filled"
                      size="small"
                    />
                  </div>
                  <div className={classes.formGroup}>
                    <CustomTextField
                      id="date"
                      label="Ngày sinh"
                      type="date"
                      defaultValue="2020-01-20"
                      className={classes.formControl}
                      variant="filled"
                      size="small"
                      InputProps={{

                      }}
                    />

                    <CustomTextField
                      className={classes.formControl}
                      select
                      name="CongTyMe"
                      label="Dân tộc"
                      required
                      variant="filled"
                      size="small"
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}</CustomTextField>
                    <div className={classes.formControl} style={{ backgroundColor: '#F2F2F2' }}>
                      <FormControl component="fieldset" size="small" >
                        <FormLabel className="mb-0 pl-1 pt-1" component="legend">Giới tính</FormLabel>
                        <RadioGroup row aria-label="gender" name="gender1" >
                          <FormControlLabel className="pl-3" value="male" control={<Radio color="primary" size="small" />} label="Nam" />
                          <FormControlLabel value="female" control={<Radio color="primary" size="small" />} label="Nữ" />
                        </RadioGroup>
                      </FormControl>
                    </div>

                  </div>
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="CongTyMe"
                      label="ID card/passport"
                      required
                      variant="filled"
                      size="small"
                    />
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="CongTyMe"
                      label="Ngày cấp"
                      required
                      variant="filled"
                      size="small"
                    />
                  </div>
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="CongTyMe"
                      label="Nơi cấp"
                      required
                      variant="filled"
                      size="small"
                    />
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="CongTyMe"
                      label="Trình độ"
                      required
                      variant="filled"
                      size="small"
                    />
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="CongTyMe"
                      label="Quốc tịch"
                      required
                      variant="filled"
                      size="small"
                    />
                  </div>
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="CongTyMe"
                      label="Số điện thoại"
                      required
                      variant="filled"
                      size="small"
                    />
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="CongTyMe"
                      label="Email"
                      required
                      variant="filled"
                      size="small"
                    />
                  </div>
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="CongTyMe"
                      label="Địa chỉ"
                      required
                      variant="filled"
                      size="small"
                    />
                  </div>
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      select
                      name="CongTyMe"
                      label="Thành Phố"
                      required
                      variant="filled"
                      size="small"
                    >
                      {cityLocations.map((option) => (
                        <MenuItem key={option.id} value={option.id} onClick={() => setStateCityId(option.id)}>
                          {option.nameWithType}
                        </MenuItem>
                      ))}</CustomTextField>
                    <CustomTextField
                      className={classes.formControl}
                      select
                      name="CongTyMe"
                      label="Quận/Huyện"
                      required
                      variant="filled"
                      size="small"
                    >
                      {districtLocation.map((option) => (
                        <MenuItem key={option.id} value={option.id} onClick={() => setStateDistrictId(option.id)}>
                          {option.nameWithType}
                        </MenuItem>
                      ))}</CustomTextField>

                    <CustomTextField
                      className={classes.formControl}
                      select
                      name="CongTyMe"
                      label="Phường/Xã"
                      required
                      variant="filled"
                      size="small"
                    >
                      {wardLocation.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                          {option.nameWithType}
                        </MenuItem>
                      ))}</CustomTextField>

                  </div>
                </div>
                <div className="col-md-6">
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="DienThoai"
                      label="Tên người dùng"
                      required
                      variant="filled"
                      size="small"

                    />
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="SoFax"
                      label="Mã nhân viên"
                      variant="filled"
                      size="small"

                    />
                  </div>
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      select
                      name="DienThoai"
                      label="Loại nhân viên"
                      required
                      variant="filled"
                      size="small"

                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}</CustomTextField>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="SoFax"
                      label="Mật khẩu"
                      variant="filled"
                      size="small"

                    />
                  </div>
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      select
                      name="DienThoai"
                      label="Chức vụ"
                      required
                      variant="filled"
                      size="small"

                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}</CustomTextField>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="SoFax"
                      label="Email công ty"
                      variant="filled"
                      size="small"

                    />
                  </div>
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="DienThoai"
                      label="Tên ngân hàng"
                      required
                      variant="filled"
                      size="small"

                    />
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="SoFax"
                      label="Số tài khoản"
                      variant="filled"
                      size="small"

                    />
                  </div>
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="DienThoai"
                      label="Số bảo hiểm"
                      required
                      variant="filled"
                      size="small"

                    />
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="SoFax"
                      label="Tax Identification no"
                      variant="filled"
                      size="small"

                    />
                  </div>
                  <div className={classes.formGroup} style={{ backgroundColor: '#F2F2F2' }}>

                    <FormGroup row className="p-3 mt-1 mb-1">

                      <FormControlLabel value="1" control={<Switch color="primary" size="small" />} label="Đã tham gia bảo hiểm" />
                      <FormControlLabel value="2" control={<Switch color="primary" size="small" />} label="Người dùng hệ thống" />
                      <FormControlLabel value="3" control={<Switch color="primary" size="small" />} label="Đang hoạt động" />

                    </FormGroup>

                  </div>
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="DienThoai"
                      label="Lần truy cập cuối"
                      required
                      variant="filled"
                      size="small"

                    />
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="SoFax"
                      label="Ghi chú"
                      variant="filled"
                      size="small"

                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Button
              variant="contained"
              className={classes.buttonStyled}
              style={{ color: '#fff', backgroundColor: '#FF9D42' }}
            >
              Nhóm người dùng
          </Button>
            <Button
              variant="contained"
              className={classes.buttonStyled}
              style={{ color: '#fff', backgroundColor: '#FF7294' }}
            >
              Thiết lập phòng ban
          </Button>
            <Button
              variant="contained"
              className={classes.buttonStyled}
              style={{ color: '#fff', backgroundColor: '#61E2BC' }}
            >
              Thiết lập ca
          </Button>
            <Button
              variant="contained"
              className={classes.buttonStyled}
              style={{ color: '#fff', backgroundColor: '#F5DB3F' }}
            >
              Lương nhân viên
          </Button>
            <Button
              variant="contained"
              className={classes.buttonStyled}
              style={{ color: '#fff', backgroundColor: '#404040' }}
            >
              NGhỉ việc
          </Button>
            <Button
              variant="contained"
              className={classes.buttonStyled}
              style={{ color: '#fff', backgroundColor: '#FF6363' }}
            >
              Xem/Tạo hợp đồng
          </Button>
            <Button
              variant="contained"
              className={classes.buttonStyled}
              style={{ color: '#fff', backgroundColor: '#B0DF63' }}
            >
              Tổng nhân viên
          </Button>

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
      <div>
        <StaffManagementData />
      </div>
    </div>
  );
}

export default StaffManagement
