import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppState from '../../../@types/appTypes/appState';
import { CompanyProps } from '../../../@types/company/createCompany';
import { getCompany, getCompanyList, setCompany } from '../../../redux/systemsManagement/company/actions';

const useRowStyles = makeStyles({
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
  root: {
    '& > *': {
      borderBottom: 'unset',

    },
  },
});


function createData(
  // name: string,
  // calories: number,
  // fat: number,
  // carbs: number,
  // protein: number,
  // price: number,
  //------------------------
  id: string,
  companyName: string,
  companyEnglishName: number,
  companyAddress: number,
  companyRegistration: number,
  companyTitle: number,
  companyPhone: number,
  companyFax: number,
  companyHotline: number,
  companySaleEmail: number,
  companySupportEmail: number,
  website: number,
  nameToPrintReport: number,
  addressToPrintReport: number,
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



export default function CongTyChiNhanhData(props) {
  const classes = useRowStyles();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompanyList())
  }, []);

  const data = useSelector((state: AppState) => state.systemsCompanyState.companyData);
  const result = data.data;

  const handleResultClick = (row) => {
    const companyId = row.id;
    dispatch(getCompany(companyId))
  }

  const rows = (result || []).map(result => createData(
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
            <TableRow key={row.id} onClick={() => handleResultClick(row)}>
              <TableCell className={classes.cellWidth} component="th" scope="row">
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
  );
}