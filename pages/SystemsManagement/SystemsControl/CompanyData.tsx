import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Popover } from '@material-ui/core';
import { createStyles, makeStyles, withStyles } from '@material-ui/core/styles';
import { ColDef, DataGrid } from '@material-ui/data-grid';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppState from '../../../@types/appTypes/appState';
import { getCompany } from '../../../redux/systemsManagement/company/actions';


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& .MuiDataGrid-root": {
        borderRadius: "25px"
      },
      "& .MuiDataGrid-colCellWrapper": {
        backgroundColor: "#E9F6FF",

      },
      "& .MuiDataGrid-colCellTitle": {
        fontWeight: "bold"
      },
      "& .MuiDataGrid-window": {
        backgroundColor: "#FFF"
      }
    },
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

const columns: ColDef[] = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'companyName', headerName: 'Tên công ty', width: 150 },
  { field: 'companyEnglishName', headerName: 'Tên tiếng anh', width: 150 },
  { field: 'companyAddress', headerName: 'Địa chỉ', width: 150 },
  { field: 'companyRegistration', headerName: 'Đăng ký kinh doanh', width: 150 },
  { field: 'companyTitle', headerName: 'Tên viết tắt', width: 150 },
  { field: 'companyPhone', headerName: 'Số điện thoại', width: 150 },
  { field: 'companyFax', headerName: 'Số fax', width: 150 },
  { field: 'companyHotline', headerName: 'Hotline', width: 150 },
  { field: 'companySaleEmail', headerName: 'Email kinh doanh', width: 150 },
  { field: 'companySupportEmail', headerName: 'Email', width: 150 },
  { field: 'website', headerName: 'Website', width: 150 },
  { field: 'nameToPrintReport', headerName: 'Tên để in', width: 150 },
  { field: 'addressToPrintReport', headerName: 'Địa chỉ để in', width: 150 },
];


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
  const [companyId, setCompanyId] = useState(null)
  const dispatch = useDispatch();

  const results = useSelector((state: AppState) => state.systemsCompanyState.companyData);
  const handleResultClick = (id) => {
    setCompanyId(id)
    setOpen(true)
    console.log(companyId)
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
      <div className="d-flex justify-content-center">
        <div style={{ height: 700, width: '95%' }}>
          <DataGrid className={classes.root}
            rows={rows}
            columns={columns}
            pageSize={10}
            checkboxSelection
            hideFooter
            disableSelectionOnClick
            onCellClick={(params) => {
              if (params.field === "companyName") { handleResultClick(params.data.id) }
            }}
            onSelectionChange={(params) => console.log(params)}
          />
        </div>
      </div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Thay đổi thông tin công ty ?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn có chắc chắn muốn thay đổi thông tin công ty này, dổi rồi không quay về cái cũ lại được đâu á nha !!!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleYesButtonModal} color="primary">
            Đồng ý
          </Button>
          <Button onClick={() => setOpen(false)} color="primary" autoFocus>
            Hủy
          </Button>
        </DialogActions>
      </Dialog>

    </>
  );
}