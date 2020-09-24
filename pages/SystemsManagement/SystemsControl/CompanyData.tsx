import { Button, Modal } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppState from '../../../@types/appTypes/appState';
import { getCompany, getCompanyList } from '../../../redux/systemsManagement/company/actions';

const useStyles = makeStyles((theme) =>
  createStyles({
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
  }),
);


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



export default function CompanyData(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [companyId, setCompanyId] = useState(0)
  const dispatch = useDispatch();

  const results = useSelector((state: AppState) => state.systemsCompanyState.companyData);
  const handleResultClick = (row) => {
    const companyId = row.id;
    setCompanyId(row.id)
    setOpen(true)
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
    result.addressToPrintReport))
    ;

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow className={classes.rowTitle}>
              <TableCell className={classes.cellWidth} align="center">Tên công ty</TableCell>
              <TableCell className={classes.cellWidth} align="center">Tên tiếng anh</TableCell>
              <TableCell className={classes.cellWidth} align="center">Địa chỉ</TableCell>
              <TableCell className={classes.cellWidth} align="center">Đăng ký kinh doanh</TableCell>
              <TableCell className={classes.cellWidth} align="center">Tên viết tắt</TableCell>
              <TableCell className={classes.cellWidth} align="center">Số điện thoại</TableCell>
              <TableCell className={classes.cellWidth} align="center">Số fax</TableCell>
              <TableCell className={classes.cellWidth} align="center">Hotline</TableCell>
              <TableCell className={classes.cellWidth} align="center">Email kinh doanh</TableCell>
              <TableCell className={classes.cellWidth} align="center">Email</TableCell>
              <TableCell className={classes.cellWidth} align="center">Website</TableCell>
              <TableCell className={classes.cellWidth} align="center">Tên để in</TableCell>
              <TableCell className={classes.cellWidth} align="center">Địa chỉ để in</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} >

                <TableCell style={{ cursor: 'pointer' }} className={classes.cellWidth} component="th" scope="row" onClick={() => handleResultClick(row)}>
                  {row.companyName}
                </TableCell>
                <TableCell className={classes.cellWidth} align="right">{row.companyEnglishName}</TableCell>
                <TableCell className={classes.cellWidth} align="right">{row.companyAddress}</TableCell>
                <TableCell className={classes.cellWidth} align="right">{row.companyRegistration}</TableCell>
                <TableCell className={classes.cellWidth} align="right">{row.companyTitle}</TableCell>
                <TableCell className={classes.cellWidth} align="right">{row.companyPhone}</TableCell>
                <TableCell className={classes.cellWidth} align="right">{row.companyFax}</TableCell>
                <TableCell className={classes.cellWidth} align="right">{row.companyHotline}</TableCell>
                <TableCell className={classes.cellWidth} align="right">{row.companySaleEmail}</TableCell>
                <TableCell className={classes.cellWidth} align="right">{row.companySupportEmail}</TableCell>
                <TableCell className={classes.cellWidth} align="right">{row.website}</TableCell>
                <TableCell className={classes.cellWidth} align="right">{row.nameToPrintReport}</TableCell>
                <TableCell className={classes.cellWidth} align="right">{row.addressToPrintReport}</TableCell>
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
          <p>Bạn có chắc chắn muốn sửa thông tin công ty này không zậy?</p>
          <div className="d-flex justify-content-center align-items-center">
            <Button onClick={handleYesButtonModal}>Có</Button>
            <Button onClick={() => setOpen(false)}>Không</Button>
          </div>

        </div>
      </Modal>
    </>
  );
}