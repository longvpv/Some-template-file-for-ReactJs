import { Button, Checkbox, DialogActions, DialogContent, MenuItem, Switch, TextField, Typography, withStyles } from '@material-ui/core'
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
function CompanyForm(props: OwnProps) {
  const { setOpenForm } = props;
  const classes = useStyle()
  const dispatch = useDispatch()
  const results = useSelector((state: AppState) => state.systemsCompanyState.companyDataSource.data);
  const company = useSelector((state: AppState) => state.systemsCompanyState.company);
  const [stateCityId, setStateCityId] = useState('');
  const [stateDistrictId, setStateDistrictId] = useState('');
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
      companySupportEmail: Yup.string()
        .max(64, 'Must be 64 characters or less')
        .required('Required'),
    }),

    onSubmit: (values) => {
      confirm('Sure wanna change this ?')
      company.id
        ? dispatch(changeCompany(values))
        : dispatch(createCompany(values));
      setOpenForm()
    },
  });

  const cityLocations = useSelector((state: AppState) => state.locationState.locations);
  const districtLocation = Object.values(((cityLocations.filter((location: LocationsProps) => location.id === stateCityId)[0] || {}).district) || {});
  const wardLocation = Object.values(((districtLocation.filter((location: DistrictProps) => location.id === stateDistrictId)[0] || {}).ward) || {});

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
    <>
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
                    Không trục thuộc công ty nào hết !
                  </MenuItem>
                  {results.map((option) => (
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

export default CompanyForm
