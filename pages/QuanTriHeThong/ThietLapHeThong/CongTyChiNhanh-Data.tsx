import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
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
    //-----------------
    // name,
    // calories,
    // fat,
    // carbs,
    // protein,
    // price,

    sonCompany: [
      {
        companyName: 'Cristiano Ronaldooo',
        companyEnglishName: 7,
        companyAddress: 7,
        companyRegistration: 7,
        companyTitle: 7,
        companyPhone: 7,
        companyFax: 7,
        companyHotline: 7,
        companySaleEmail: 7,
        companySupportEmail: 7,
        website: 7,
        nameToPrintReport: 7,
        addressToPrintReport: 7,
      },
      {
        companyName: 'Leonal Messi',
        companyEnglishName: 10,
        companyAddress: 10,
        companyRegistration: 10,
        companyTitle: 10,
        companyPhone: 10,
        companyFax: 10,
        companyHotline: 10,
        companySaleEmail: 10,
        companySupportEmail: 10,
        website: 10,
        nameToPrintReport: 10,
        addressToPrintReport: 10,
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.companyName}
        </TableCell>
        <TableCell align="right">{row.companyEnglishName}</TableCell>
        <TableCell align="right">{row.companyAddress}</TableCell>
        <TableCell align="right">{row.companyRegistration}</TableCell>
        <TableCell align="right">{row.companyTitle}</TableCell>
        <TableCell align="right">{row.companyPhone}</TableCell>
        <TableCell align="right">{row.companyFax}</TableCell>
        <TableCell align="right">{row.companyHotline}</TableCell>
        <TableCell align="right">{row.companySaleEmail}</TableCell>
        <TableCell align="right">{row.companySupportEmail}</TableCell>
        <TableCell align="right">{row.website}</TableCell>
        <TableCell align="right">{row.nameToPrintReport}</TableCell>
        <TableCell align="right">{row.addressToPrintReport}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={15}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={0}>

              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">companyName</TableCell>
                    <TableCell align="center">companyEnglishName</TableCell>
                    <TableCell align="center">companyAddress</TableCell>
                    <TableCell align="center">companyRegistration</TableCell>
                    <TableCell align="center">companyTitle</TableCell>
                    <TableCell align="center">companyPhone</TableCell>
                    <TableCell align="center">companyFax</TableCell>
                    <TableCell align="center">companyHotline</TableCell>
                    <TableCell align="center">companySaleEmail</TableCell>
                    <TableCell align="center">companySupportEmail</TableCell>
                    <TableCell align="center">website</TableCell>
                    <TableCell align="center">nameToPrintReport</TableCell>
                    <TableCell align="center">addressToPrintReport</TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.sonCompany.map((sonCompanyRow) => (
                    <TableRow key={sonCompanyRow.companyName}>
                      <TableCell component="th" scope="row" >
                        {sonCompanyRow.companyName}
                      </TableCell>
                      <TableCell align="right">{sonCompanyRow.companyEnglishName}</TableCell>
                      <TableCell align="right">{sonCompanyRow.companyAddress}</TableCell>
                      <TableCell align="right">{sonCompanyRow.companyRegistration}</TableCell>
                      <TableCell align="right">{sonCompanyRow.companyTitle}</TableCell>
                      <TableCell align="right">{sonCompanyRow.companyPhone}</TableCell>
                      <TableCell align="right">{sonCompanyRow.companyFax}</TableCell>
                      <TableCell align="right">{sonCompanyRow.companyHotline}</TableCell>
                      <TableCell align="right">{sonCompanyRow.companySaleEmail}</TableCell>
                      <TableCell align="right">{sonCompanyRow.companySupportEmail}</TableCell>
                      <TableCell align="right">{sonCompanyRow.website}</TableCell>
                      <TableCell align="right">{sonCompanyRow.nameToPrintReport}</TableCell>
                      <TableCell align="right">{sonCompanyRow.addressToPrintReport}</TableCell>


                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99, 1, 1, 1, 1, 1, 1, 1),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99, 1, 1, 1, 1, 1, 1, 1),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79, 1, 1, 1, 1, 1, 1, 1),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5, 1, 1, 1, 1, 1, 1, 1),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5, 1, 1, 1, 1, 1, 1, 1),

];

export default function CongTyChiNhanhData() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="center">companyName</TableCell>
            <TableCell align="center">companyEnglishName</TableCell>
            <TableCell align="center">companyAddress</TableCell>
            <TableCell align="center">companyRegistration</TableCell>
            <TableCell align="center">companyTitle</TableCell>
            <TableCell align="center">companyPhone</TableCell>
            <TableCell align="center">companyFax</TableCell>
            <TableCell align="center">companyHotline</TableCell>
            <TableCell align="center">companySaleEmail</TableCell>
            <TableCell align="center">companySupportEmail</TableCell>
            <TableCell align="center">website</TableCell>
            <TableCell align="center">nameToPrintReport</TableCell>
            <TableCell align="center">addressToPrintReport</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.companyName} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}