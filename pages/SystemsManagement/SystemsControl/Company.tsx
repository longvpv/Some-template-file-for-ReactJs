import {
  Button,

  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputBase
} from "@material-ui/core";
import { createStyles, fade, makeStyles } from '@material-ui/core/styles';
import { ColDef, DataGrid } from "@material-ui/data-grid";
import SearchIcon from '@material-ui/icons/Search';
import _ from 'lodash';
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppState from "../../../@types/appTypes/appState";
import { deleteCompany, getCompany, getCompanyList } from "../../../redux/systemsManagement/company/actions";
import CompanyForm from "./CompanyForm";
const FormData = require('form-data');

const columns: ColDef[] = [
  // { field: 'id', headerName: 'ID', width: 50 },
  { field: 'companyName', headerName: 'Tên công ty', width: 180 },
  { field: 'companyEnglishName', headerName: 'Tên tiếng anh', width: 180 },
  { field: 'companyAddress', headerName: 'Địa chỉ', width: 180 },
  { field: 'companyRegistration', headerName: 'Đăng ký kinh doanh', width: 180 },
  { field: 'companyTitle', headerName: 'Tên viết tắt', width: 180 },
  { field: 'companyPhone', headerName: 'Số điện thoại', width: 180 },
  { field: 'companyFax', headerName: 'Số fax', width: 180 },
  { field: 'companySaleEmail', headerName: 'Email kinh doanh', width: 180 },
  { field: 'companySupportEmail', headerName: 'Email', width: 180 },
  { field: 'website', headerName: 'Website', width: 180 },
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
  companySaleEmail: string,
  companySupportEmail: string,
  website: string,
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
    companySaleEmail,
    companySupportEmail,
    website,
  };
}

const useStyles = makeStyles((theme) => createStyles({
  root: {
    "& .MuiDropzoneArea-root": {
      height: '120px'
    },
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
  title: {
    fontFamily: "Quicksand",
    fontWeight: "bold",
    fontSize: "24px",
    padding: '24px',
    margin: '0',
  },
  buttonSave: {
    borderRadius: "8px",
    width: "120px",
    margin: "12px",
    backgroundColor: "#F2F2F2",
    color: "#2FAAFC",
    borderColor: '#2FAAFC',
    fontWeight: 'bold'
  },
  buttonCreate: {
    borderRadius: "8px",
    width: "120px",
    margin: "12px",
    backgroundColor: "#2FAAFC",
    color: "#FFF",
    borderColor: '#2FAAFC',
    fontWeight: 'bold'
  },
  buttonDelete: {
    borderRadius: "8px",
    width: "120px",
    margin: "12px",
    backgroundColor: "#FDABAB", color: "#FFFFFF",
    fontWeight: 'bold'
  },

  formGroup: {
    display: "flex",
    margin: "3px",
    width: '100%'
  },
  formControl: {
    width: "100%",
    margin: "3px 3px",
    backgroundColor: "#FFFFFF",
  },

  search: {
    position: "relative",
    borderRadius: "16px",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: '#101010',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  avatar: {
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
    width: "140px",
    height: "140px",

    background: "#e5e5e5",

    position: 'relative'
  },
  avatarLabel: {
    width: "80px",
    height: "24px",

    "font-family": "Quicksand",
    "font-style": "normal",
    "font-weight": "normal",
    "font-size": "14px",
    "line-height": "24px",

    color: "#4E4E4E",
  },
  buttonAbsolute: {
    borderRadius: "8px",
    width: "120px",
    margin: "12px",
    backgroundColor: "#2FAAFC",
    color: "#FFF",
    borderColor: '#2FAAFC',
    fontWeight: 'bold',
  }

}));



function Company() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [companyId, setCompanyId] = useState(null);
  let selectItemId: (string | number)[] = [];
  let rows = [];
  const company = useSelector((state: AppState) => state.systemsCompanyState.company);
  const companyDataSource = useSelector((state: AppState) => state.systemsCompanyState.companyDataSource);

  const handleResultClick = (id) => {
    setCompanyId(id)
    setOpen(true)
    console.log(companyId)
  }

  const handleYesButtonModal = () => {
    dispatch(getCompany(companyId));
    setOpen(false);
    setOpenForm(true)
  }

  if (companyDataSource && _.isArray(companyDataSource.data))
    rows = companyDataSource.data.map(result => createData(
      result.id,
      result.companyName,
      result.companyEnglishName,
      result.companyAddress,
      result.companyRegistration,
      result.companyTitle,
      result.companyPhone,
      result.companyFax,
      result.companySaleEmail,
      result.companySupportEmail,
      result.website,
    ))



  const handleDeleteButton = () => {
    // const name = formik.initialValues.companyName;
    // const companyId = formik.initialValues.id || null;
    const r = confirm(`Are you sure wanna delete this company ?`);
    if (r) {
      dispatch(deleteCompany(selectItemId))
    }
  }

  return (
    <div key={company.id}>
      <div className="d-flex justify-content-between align-items-center pl-4">
        <p className={classes.title}>Công Ty / Chi Nhánh</p>

        <div className="d-flex justify-content-end align-items-center pr-5">
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

          <Button
            variant="contained"
            className={classes.buttonCreate}
            onClick={() => setOpenForm(true)}
          >
            Tạo mới
          </Button>
          <Button
            variant="contained"
            className={classes.buttonDelete}
            onClick={handleDeleteButton}
          >
            Xóa
          </Button>
        </div>
      </div>


      <div className="p-2">
        <>
          <div className="d-flex justify-content-center">
            <div style={{ height: 700, width: '95%' }}>
              <DataGrid className={classes.root}
                rows={rows}
                columns={columns}
                checkboxSelection
                paginationMode="server"
                pagination
                rowsPerPageOptions={[5, 10]}
                page={companyDataSource.page}
                pageSize={companyDataSource.pageSize}
                rowCount={companyDataSource.total}
                onPageChange={option => {
                  const page = option.page - 1;

                  if (page < 0)
                    return;
                  if (option.page === companyDataSource.page) return;
                  dispatch(getCompanyList({ page, pageSize: option.pageSize }))
                }}
                disableSelectionOnClick
                onCellClick={(params) => {
                  if (params.field === "companyName") { handleResultClick(params.data.id) }
                }}
                onSelectionChange={option => {
                  return selectItemId = option.rows.map(row => { return row.id });
                  // console.log(selectItemId)
                  // return selectItemId = selectItemId
                }}
              //onSortModelChange={params => console.log(params)}


              />


            </div>
          </div>
          <Dialog
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Thay đổi thông tin công ty này ?</DialogTitle>
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
          <Dialog
            open={openForm}
            onClose={() => setOpenForm(false)}
            maxWidth="lg"
          >
            <CompanyForm setOpenForm={() => setOpenForm(false)} />

          </Dialog>

        </>
      </div >

    </div >
  );
}

export default Company;
