import { Button, DialogActions, DialogContent, FormControlLabel, FormGroup, MenuItem, Switch, TextField, withStyles } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import { useFormik } from 'formik';
import { DropzoneArea } from 'material-ui-dropzone';
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import AppState from '../../../@types/appTypes/appState';
import { DistrictProps, LocationsProps } from "../../../@types/appTypes/locationState";
import useStyle from '../../../component/coreUseStyle/useStyle';
import { createStaff } from '../../../redux/systemsManagement/staff/actions';

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
      backgroundColor: '#f9f9f9',

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
  const dispatch = useDispatch()
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
  const staffType = [
    {
      value: 1,
      label: 'Loại 1',
    },
    {
      value: 2,
      label: 'Loại 2',
    },
    {
      value: 3,
      label: 'Loại 3',
    },

  ];

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      fullName: '',
      dob: '2020-01-20',
      phoneNumber: '',
      email: '',
      avatar: '',
      active: true,
      isSystemUser: true,
      genderId: 0,
      companyJobTitleId: 0,
      staffTypeId: 0,
      password: ''
    },
    validationSchema: Yup.object({}),
    onSubmit: (values) => {
      // if (formik.initialValues.genderId === '1') formik.setFieldValue('genderId', 1);
      // if (formik.initialValues.genderId === '0') formik.setFieldValue('genderId', 0)
      console.log(values);
      dispatch(createStaff(values))

    },
  })
  // const handleUploadLogo = async (files) => {

  //   const form_data = new FormData();
  //   form_data.append("file", files);
  //   const request_config = {
  //     headers: {
  //       "Content-Type": "form-data"
  //     },
  //   };
  //   const uploadResult = await httpClient.post(`Api/Upload`, form_data, request_config);
  //   formik.setFieldValue('avatar', (uploadResult[0] || {}).filePath)
  // }
  return (
    <>
      <DialogContent>
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <div className="d-flex justify-content-center align-items-center">
                <span><img src="/images/settings.png" alt="" /></span>
                <span className={classes.title}>Thêm nhân viên</span>


              </div>
              <Button
                variant="contained"
                className={classes.buttonCreate}
                style={{ width: '180px' }}
              >
                Upload excel
              </Button>
            </div>

            <div className="d-flex justify-content-center align-items-center">
              <div  >
                <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                  {({ getRootProps, getInputProps }) => (
                    <section >
                      <div {...getRootProps()} className={classes.dropZoneUploadImage}>
                        <input {...getInputProps()} />
                        <PhotoCameraIcon style={{ color: '#FFFFFF' }} fontSize="large" />
                        <p className="mt-1">Tải ảnh</p>
                      </div>
                      <aside>
                        <p></p>
                      </aside>
                    </section>
                  )}
                </Dropzone>

              </div>
              <div >
                <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                  {({ getRootProps, getInputProps }) => (
                    <section >
                      <div {...getRootProps()} style={{ width: '140px', height: '50px', borderStyle: 'dashed' }}>
                        <input {...getInputProps()} />
                        <CloudUploadIcon />
                        <p>Tải CV</p>

                      </div>
                      <aside>
                        <p></p>
                      </aside>
                    </section>
                  )}
                </Dropzone>
              </div>
            </div>
          </div>


          {/* <form
            className="d-flex flex-column justify-content-center align-items-center w-100"
          >
            <div className="row w-100">

              <div className="row">
                <div className="col-md-6">
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="fullName"
                      label="Họ tên"
                      variant="filled"
                      size="small"
                      onChange={formik.handleChange}
                      value={formik.values.fullName}
                    />
                  </div>
                  <div className={classes.formGroup}>
                    <CustomTextField
                      label="Ngày sinh"
                      type="date"
                      defaultValue="2020-01-20"
                      className={classes.formControl}
                      variant="filled"
                      size="small"
                      name="dob"
                      onChange={formik.handleChange}
                      value={formik.values.dob}
                    />
                    <CustomTextField
                      className={classes.formControl}
                      select
                      name="genderId"
                      label="Giới tính"
                      variant="filled"
                      size="small"
                      onChange={formik.handleChange}
                      value={formik.values.genderId}
                    >

                      <MenuItem key={1} value={1}>
                        Nam
                        </MenuItem>
                      <MenuItem key={1} value={0}>
                        Nữ
                        </MenuItem>
                    </CustomTextField>


                  </div>
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="phoneNumber"
                      label="Số điện thoại"
                      variant="filled"
                      size="small"
                      onChange={formik.handleChange}
                      value={formik.values.phoneNumber}
                    />

                  </div>
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="email"
                      label="Email"
                      variant="filled"
                      size="small"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </div>

                </div>
                <div className="col-md-6">

                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      select
                      name="staffTypeId"
                      label="Loại nhân viên"
                      variant="filled"
                      size="small"
                      onChange={formik.handleChange}
                      value={formik.values.staffTypeId}
                    >
                      {staffType.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}</CustomTextField>

                  </div>
                  <div className={classes.formGroup}>
                    <CustomTextField
                      className={classes.formControl}
                      select
                      name="companyJobTitleId"
                      label="Chức vụ"
                      variant="filled"
                      size="small"
                      onChange={formik.handleChange}
                      value={formik.values.companyJobTitleId}
                    >
                      {staffType.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}</CustomTextField>

                  </div>


                  <div className={classes.formGroup} style={{ backgroundColor: '#FFF' }}>

                    <FormGroup row className="mx-1 pl-3">
                      <FormControlLabel control={<Switch color="primary" size="small" name="isSystemUser" onChange={formik.handleChange}
                        value={formik.values.isSystemUser} />} label="Người dùng hệ thống" />
                      <FormControlLabel control={<Switch color="primary" size="small" name="active" onChange={formik.handleChange}
                        value={formik.values.active} />} label="Đang hoạt động" />
                    </FormGroup>

                  </div>
                  <div className={classes.formGroup}>

                    <CustomTextField
                      className={classes.formControl}
                      type="text"
                      name="password"
                      label="Ghi chú"
                      variant="filled"
                      size="small"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                  </div>
                </div>
              </div>
            </div>
            

          </form> */}
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
