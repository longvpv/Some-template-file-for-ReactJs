import React, { useEffect, useState } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux';
import AppState from '../../../@types/appTypes/appState';
import { getCompany, getCompanyList } from '../../../redux/systemsManagement/company/actions';
import { getBankInfo, getBankType, getCompanyBankInfo } from '../../../redux/systemsManagement/companyBank/actions';
import { Button, Modal } from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
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
  table: {
    minWidth: 650,
  },
  rowTitle: {
    backgroundColor: '#C8E9FF'
  },
  cellWidth: {
    minWidth: 150,
    border: '1px solid #F3F5F9'
  },

}));

function createData(
  id: number,
  paypalAccount: string,
  paypalNumber: string,
  bankCode: string,
  bankName: string,
  bankAddress: string,
  bankAccountName: string,
  bankAccountNumber: string,
  cifCode: string,
  iebCode: string,
  companyId,
  accountingCodeId
) {
  return {
    id,
    paypalAccount,
    paypalNumber,
    bankCode,
    bankName,
    bankAddress,
    bankAccountName,
    bankAccountNumber,
    cifCode,
    iebCode,
    companyId,
    accountingCodeId
  };
}

function BankData() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [companyBankId, setCompanyBankId] = useState(0)
  // useEffect(() => {
  //   dispatch(getCompanyList());
  //   dispatch(getCompanyBankInfo());
  //   dispatch(getBankType());
  // }, []);
  const companyBankInfo = useSelector((state: AppState) => state.companyBankState.companyBankInfo);
  const companyList = useSelector((state: AppState) => state.systemsCompanyState.companyData);

  const rows = companyBankInfo.map(info => createData(
    info.id,
    info.paypalAccount,
    info.paypalNumber,
    info.bankCode,
    info.bankName,
    info.bankAddress,
    info.bankAccountName,
    info.bankAccountNumber,
    info.cifCode,
    info.iebCode,
    (companyList.filter(company => company.id === info.companyId) || [])[0].companyName,
    info.accountingCodeId
  ))
  const handleBankAccountClick = (row) => {
    console.log(row.id);
    setOpen(true);
    setCompanyBankId(row.id)
    // dispatch(getBankInfo(row.id))
  }

  const handleYesButtonModal = () => {
    dispatch(getBankInfo(companyBankId));
    setOpen(false)
  }
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow className={classes.rowTitle}>
              <TableCell className={classes.cellWidth} align="center">Tài khoản paypal</TableCell>
              <TableCell className={classes.cellWidth} align="center">Số thanh toán paypal</TableCell>
              <TableCell className={classes.cellWidth} align="center">Mã Ngân hàng</TableCell>
              <TableCell className={classes.cellWidth} align="center">Tên Ngân hàng</TableCell>
              <TableCell className={classes.cellWidth} align="center">Địa chỉ Ngân hàng</TableCell>
              <TableCell className={classes.cellWidth} align="center">Chủ thẻ</TableCell>
              <TableCell className={classes.cellWidth} align="center">Số thẻ</TableCell>
              <TableCell className={classes.cellWidth} align="center">Mã CIF</TableCell>
              <TableCell className={classes.cellWidth} align="center">Mã truy cấp IEB</TableCell>
              <TableCell className={classes.cellWidth} align="center">Công ty</TableCell>
              <TableCell className={classes.cellWidth} align="center">Loại Ngân hàng</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.paypalAccount}>
                <TableCell style={{ cursor: 'pointer' }} component="th" scope="row" onClick={() => handleBankAccountClick(row)}>
                  {row.paypalAccount}
                </TableCell>
                <TableCell align="right">{row.paypalNumber}</TableCell>
                <TableCell align="right">{row.bankCode}</TableCell>
                <TableCell align="right">{row.bankName}</TableCell>
                <TableCell align="right">{row.bankAddress}</TableCell>
                <TableCell align="right">{row.bankAccountName}</TableCell>
                <TableCell align="right">{row.bankAccountNumber}</TableCell>
                <TableCell align="right">{row.cifCode}</TableCell>
                <TableCell align="right">{row.iebCode}</TableCell>
                <TableCell align="right">{row.companyId}</TableCell>
                <TableCell align="right">{row.accountingCodeId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        className={classes.modal}
      >
        <div className={classes.paper}>
          <p>Bạn có chắc chắn muốn sửa thông tin ngân hàng này không zậy?</p>
          <div className="d-flex justify-content-center align-items-center">
            <Button onClick={handleYesButtonModal}>Có</Button>
            <Button onClick={() => setOpen(false)}>Không</Button>
          </div>

        </div>
      </Modal>
    </>
  );
}

export default BankData






