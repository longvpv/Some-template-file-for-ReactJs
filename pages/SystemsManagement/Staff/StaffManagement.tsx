import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputBase
} from "@material-ui/core";
import { ColDef, DataGrid } from "@material-ui/data-grid";
import SearchIcon from '@material-ui/icons/Search';
import _ from 'lodash';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import AppState from "../../../@types/appTypes/appState";
import useStyles from "../../../component/coreUseStyle/useStyle";
import StaffManagementForm from "./StaffManagementForm";


const columns: ColDef[] = [
  // { field: 'id', headerName: 'ID', width: 50 },
  { field: "fistName", headerName: "Họ", width: 180 },
  { field: "lastName", headerName: "Tên", width: 180 },
  { field: "dayOfBirth", headerName: "Ngày sinh", width: 180 },
  { field: "staffType", headerName: "Loại NV", width: 180 },
  { field: "phone", headerName: "Số đt", width: 180 },
  { field: "gender", headerName: "Giới tính", width: 180 },
  { field: "jobTitle", headerName: "Chức danh", width: 180 },
  { field: "email", headerName: "Email", width: 180 },
  { field: "createdate", headerName: "Thời gian bắt đầu làm việc", width: 180 },
  { field: "planInterviewDate", headerName: "Le Van", width: 180 },
  { field: "idCardNoPassport", headerName: "CMND/CCCD", width: 180 },
  { field: "dateOfIssue", headerName: "Ngày cấp", width: 180 },
  { field: "placeOfIssue", headerName: "Nơi cấp", width: 180 },
  { field: "ethnic", headerName: "Dân tộc", width: 180 },
  { field: "searchingSource", headerName: "Nguồn cấp thông tin tìm kiếm", width: 180 },
  { field: "addressWebsite", headerName: "Địa chỉ website", width: 180 },
  { field: "educationalLevel", headerName: "Trình độ học vấn", width: 180 },
  { field: "contact", headerName: "Thông tin liên lạc khác", width: 180 },
  { field: "phoneContact", headerName: "SĐT liên lạc khác", width: 180 },
  { field: "description", headerName: "Mô tả", width: 180 },
  { field: "permanentAddress", headerName: "Địa chỉ thường trú", width: 180 },
  { field: "permanentCountry", headerName: "Quốc gia thường trú", width: 180 },
  { field: "permanentDistrict", headerName: "Quận thường trú", width: 180 },
  { field: "permanentCity", headerName: "Thành phố thường trú", width: 180 },
  { field: "currentAddress", headerName: "Địa chỉ hiện tại", width: 180 },
  { field: "currentCountry", headerName: "Quốc gia hiện tại", width: 180 },
  { field: "currentCity", headerName: "Thành phố hiện tại", width: 180 },
  { field: "currentDistrict", headerName: "Quận hiện tại", width: 180 },
  { field: "status", headerName: "Đang hoạt động", width: 180 }
];


function createData(
  id: number,
  fistName: string,
  lastName: string,
  dayOfBirth: string,
  staffType: string,
  phone: string,
  gender: number,
  jobTitle: string,
  email: string,
  createdate: string,
  planInterviewDate: string,
  idCardNoPassport: string,
  dateOfIssue: string,
  placeOfIssue: string,
  ethnic: string,
  searchingSource: string,
  addressWebsite: string,
  educationalLevel: string,
  contact: string,
  phoneContact: string,
  description: string,
  permanentAddress: number,
  permanentCountry: number,
  permanentDistrict: number,
  permanentCity: number,
  currentAddress: number,
  currentCountry: number,
  currentCity: number,
  currentDistrict: number,
  status: number,
) {
  return {
    id,
    fistName,
    lastName,
    dayOfBirth,
    staffType,
    phone,
    gender,
    jobTitle,
    email,
    createdate,
    planInterviewDate,
    idCardNoPassport,
    dateOfIssue,
    placeOfIssue,
    ethnic,
    searchingSource,
    addressWebsite,
    educationalLevel,
    contact,
    phoneContact,
    description,
    permanentAddress,
    permanentCountry,
    permanentDistrict,
    permanentCity,
    currentAddress,
    currentCountry,
    currentCity,
    currentDistrict,
    status,
  };
}
function StaffManagement() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);


  const companyDataSource = useSelector((state: AppState) => state.systemsCompanyState.companyDataSource);
  // if (companyDataSource && _.isArray(companyDataSource.data))
  let rows = [].map(result => createData(
    result.id,
    result.fistName,
    result.lastName,
    result.dayOfBirth,
    result.staffType,
    result.phone,
    result.gender,
    result.jobTitle,
    result.email,
    result.createdate,
    result.planInterviewDate,
    result.idCardNoPassport,
    result.dateOfIssue,
    result.placeOfIssue,
    result.ethnic,
    result.searchingSource,
    result.addressWebsite,
    result.educationalLevel,
    result.contact,
    result.phoneContact,
    result.description,
    result.permanentAddress,
    result.permanentCountry,
    result.permanentDistrict,
    result.permanentCity,
    result.currentAddress,
    result.currentCountry,
    result.currentCity,
    result.currentDistrict,
    result.status,
  ))

  const handleYesButtonModal = () => {
    // dispatch(getCompany(companyId));
    setOpen(false);
    setOpenForm(true)
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <p className={classes.title}>Thông Tin Nhân Viên</p>
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
          // onClick={handleDeleteButton}
          >
            Xóa
          </Button>
        </div>
      </div>
      {/* 
       */}
      <div className="d-flex justify-content-around align-items-center p-2">
        <Button
          variant="contained"
          className={classes.buttonStyled}
          style={{ color: '#fff', backgroundColor: '#FF9D42' }}
        >
          Nhóm người dùng
          </Button>
        <Button
          variant="contained"
          className={classes.buttonStyled}
          style={{ color: '#fff', backgroundColor: '#FF7294' }}
        >
          Thiết lập phòng ban
          </Button>
        <Button
          variant="contained"
          className={classes.buttonStyled}
          style={{ color: '#fff', backgroundColor: '#61E2BC' }}
        >
          Thiết lập ca
          </Button>
        <Button
          variant="contained"
          className={classes.buttonStyled}
          style={{ color: '#fff', backgroundColor: '#F5DB3F' }}
        >
          Lương nhân viên
          </Button>
        <Button
          variant="contained"
          className={classes.buttonStyled}
          style={{ color: '#fff', backgroundColor: '#404040' }}
        >
          NGhỉ việc
          </Button>
        <Button
          variant="contained"
          className={classes.buttonStyled}
          style={{ color: '#fff', backgroundColor: '#FF6363' }}
        >
          Xem/Tạo hợp đồng
          </Button>
        <Button
          variant="contained"
          className={classes.buttonStyled}
          style={{ color: '#fff', backgroundColor: '#B0DF63' }}
        >
          Tổng nhân viên
          </Button>

      </div>

      <div className="p-2">
        <>
          <div className="d-flex justify-content-center">
            <div style={{ height: 700, width: '95%' }}>
              <DataGrid className={classes.root}
                rows={rows}
                columns={columns}
                checkboxSelection
              //   paginationMode="server"
              //   pagination
              //   rowsPerPageOptions={[5, 10]}
              //   page={companyDataSource.page}
              //   pageSize={companyDataSource.pageSize}
              //   rowCount={companyDataSource.total}
              //   onPageChange={option => {
              //     const page = option.page - 1;

              //     if (page < 0)
              //       return;
              //     if (option.page === companyDataSource.page) return;
              //     dispatch(getCompanyList({ page, pageSize: option.pageSize }))
              //   }}
              //   disableSelectionOnClick
              //   onCellClick={(params) => {
              //     if (params.field === "companyName") { handleResultClick(params.data.id) }
              //   }}
              //   onSelectionChange={option => {
              //     return selectItemId = option.rows.map(row => { return row.id });
              //     // console.log(selectItemId)
              //     // return selectItemId = selectItemId
              //   }}
              // //onSortModelChange={params => console.log(params)}


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
            <StaffManagementForm setOpenForm={() => setOpenForm(false)} />

          </Dialog>

        </>
      </div >
    </div>
  );
}

export default StaffManagement
