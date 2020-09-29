import { Button, Checkbox, DialogActions, DialogContent, FormControl, FormControlLabel, FormGroup, FormLabel, MenuItem, Radio, RadioGroup, Switch, TextField, Typography, withStyles } from '@material-ui/core'
import { useFormik } from 'formik';
import React, { FunctionComponent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AppState from '../../../@types/appTypes/appState';
import * as Yup from 'yup';
import { DistrictProps, LocationsProps } from "../../../@types/appTypes/locationState";
import * as companyFactory from '../../../factories/companies/companyFactory';
import { changeCompany, createCompany } from '../../../redux/systemsManagement/company/actions';
import useStyle from '../../../component/coreUseStyle/useStyle';
import httpClient from '../../../services/httpService';
import * as staffFactory from '../../../factories/companies/staffFactory';

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

type OwnProps = {
  setOpenForm: () => void
}
function StaffManagementForm(props: OwnProps) {
  const { setOpenForm } = props;
  const classes = useStyle();
  const [stateCityId, setStateCityId] = useState('');
  const [stateDistrictId, setStateDistrictId] = useState('');
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
  return (
    <>
      <DialogContent>
        <div>
          <div className="d-flex justify-content-center align-items-center w-100">
            <span><img src="/images/settings.png" alt="" /></span>
            <span className={classes.title}>Thông tin nhân viên</span>
          </div>

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
                        type="text"
                        name="CongTyMe"
                        label="Dân tộc"

                        variant="filled"
                        size="small"
                      >
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}</CustomTextField>
                      <div className={classes.formControl} style={{ backgroundColor: '#FFF' }}>
                        <FormControl component="fieldset" size="small" >
                          <FormLabel className="mb-0 pl-1 pt-1" component="legend">Giới tính</FormLabel>
                          <RadioGroup row aria-label="gender" name="gender1" >
                            <FormControlLabel value="male" control={<Radio color="primary" size="small" />} label="Nam" />
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
                        label="CMND/CCCD"
                        variant="filled"
                        size="small"
                      />
                      <CustomTextField
                        className={classes.formControl}
                        type="text"
                        name="CongTyMe"
                        label="Ngày cấp"
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
                        variant="filled"
                        size="small"
                      />
                      <CustomTextField
                        className={classes.formControl}
                        type="text"
                        name="CongTyMe"
                        label="Trình độ"
                        variant="filled"
                        size="small"
                      />
                      <CustomTextField
                        className={classes.formControl}
                        type="text"
                        name="CongTyMe"
                        label="Quốc tịch"
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
                        variant="filled"
                        size="small"
                      />
                      <CustomTextField
                        className={classes.formControl}
                        type="text"
                        name="CongTyMe"
                        label="Email"
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
                    <div className={classes.formGroup} style={{ backgroundColor: '#FFF' }}>

                      <FormGroup row className="p-3 mt-1 mb-1">
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

          </form>
        </div>
      </DialogContent>
      <DialogActions>
        <Button className={classes.buttonDelete} onClick={() => setOpenForm()} autoFocus>
          Hủy
</Button>
        <Button className={classes.buttonCreate} onClick={() => formik.handleSubmit()} >
          Thêm
</Button>

      </DialogActions>
    </>
  )
}

export default StaffManagementForm
