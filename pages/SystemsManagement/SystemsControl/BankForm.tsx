import { Button, DialogActions, DialogContent, MenuItem, TableCell, TextField, withStyles } from '@material-ui/core';
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AppState from '../../../@types/appTypes/appState';
import useStyle from '../../../component/coreUseStyle/useStyle'
import { getCompanyList } from '../../../redux/systemsManagement/company/actions';
import { changeCompanyBank, createCompanyBank, getAccountingCode, getBankType, getCompanyBankInfo } from '../../../redux/systemsManagement/companyBank/actions';
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

function BankForm(props: OwnProps) {
  const { setOpenForm } = props;
  const classes = useStyle();
  const dispatch = useDispatch();
  const valueText = [
    {
      value: '1',
      label: '1'
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
  const bankInfo = useSelector((state: AppState) => state.companyBankState.bankInfo);
  const companyList = useSelector((state: AppState) => state.systemsCompanyState.companyDataSource.data);
  const accounttingCode = useSelector((state: AppState) => state.companyBankState.accountingCode);
  useEffect(() => {
    dispatch(getCompanyList());
    dispatch(getCompanyBankInfo());
    dispatch(getAccountingCode());
  }, []);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: bankInfo.id ? bankInfo : companyFactory.prepareEmptyCompanyBankModel(),
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

      // dispatch(createCompanyBank(values));
      confirm('Sure wanna change this ?')
      bankInfo.id
        ? dispatch(changeCompanyBank(values))
        : dispatch(createCompanyBank(values));
      setOpenForm()
    },
  })
  return (
    <>
      <DialogContent>
        <div >
          <div className="d-flex justify-content-center align-items-center">
            <span><img src="/images/settings.png" alt="" /></span>
            <span className={classes.title}>Tạo tài khoản ngân hàng</span>
          </div>
          <form
            style={{ width: "1000px" }}
            className="d-flex flex-column justify-content-center align-items-center mt-3"
            onSubmit={formik.handleSubmit}
          >
            <div className="row w-100">

              <div className="col-md-6">
                <div className={classes.formGroup}>
                  <CustomTextField
                    className={classes.formControl}
                    select
                    name="companyId"
                    label="Công ty"
                    variant="filled"
                    size="small"
                    onChange={formik.handleChange}
                    value={formik.values.companyId}
                  >
                    {companyList.map(company => (
                      <MenuItem key={company.id} value={company.id}>
                        {company.companyName}
                      </MenuItem>
                    ))}
                  </CustomTextField>
                </div>
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
                    {accounttingCode.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        <TableCell align="center" style={{ width: '100%', height: "30px" }}>{option.accoutingCode}</TableCell>
                        <TableCell align="center" style={{ width: '100%', height: "30px" }}>{option.accountingName}</TableCell>
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
                    label="Chủ tài khoản"
                    variant="filled"
                    size="small"
                    onChange={formik.handleChange}
                    value={formik.values.bankAccountName}
                  />
                  <CustomTextField
                    className={classes.formControl}
                    type="text"
                    name="bankAccountNumber"
                    label="Số tài khoản"
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
                    label="Loại tài khoản thanh toán"
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
                    label="Số tài khoản thanh toán"
                    variant="filled"
                    size="small"
                    onChange={formik.handleChange}
                    value={formik.values.paypalNumber}
                  />
                </div>


                <div className={classes.formGroup}>

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

export default BankForm
