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
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import AppState from "../../../@types/appTypes/appState";
import useStyles from "../../../component/coreUseStyle/useStyle";
import { getAllStaff } from "../../../redux/systemsManagement/staff/actions";
import StaffManagementForm from "./StaffManagementForm";


const columns: ColDef[] = [
  { field: "active", headerName: "Trạng thái", width: 200 },
  { field: "fullName", headerName: "Họ tên", width: 350 },
  { field: "email", headerName: "Email cá nhân", width: 350 },
  { field: "genderId", headerName: "Giới tính", width: 150 },
  { field: "staffTypeId", headerName: "Loại nhân viên", width: 250 },

];



function createData(
  id: number,
  active: string,
  fullName: string,
  email: string,
  genderId: string,
  staffTypeId: number,

) {
  return {
    id,
    active,
    fullName,
    email,
    genderId,
    staffTypeId,
  };
}
function StaffManagement() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  useEffect(() => {
    dispatch(getAllStaff())

  }, [])


  const allStaffInfo = useSelector((state: AppState) => state.staffState.allStaff);
  console.log(allStaffInfo);
  if (allStaffInfo && _.isArray(allStaffInfo)) {

  }
  let rows = allStaffInfo.map(result => createData(
    result.id,
    (result.active ? "Đang hoạt động" : "Không hoạt động"),
    result.fullName,
    result.email,
    (result.genderId === 0 ? "Nữ" : "Nam"),
    result.staffTypeId,
  ))

  const handleYesButtonModal = () => {
    // dispatch(getCompany(companyId));
    setOpen(false);
    setOpenForm(true)
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <p className={classes.title}>Quản Lý Nhân Viên</p>
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
            className={classes.buttonDefault}
          >
            Tất cả
          </Button>
          <Button
            variant="contained"
            className={classes.buttonCreate}
            style={{ width: "180px" }}
            onClick={() => setOpenForm(true)}
          >
            Thêm nhân viên
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
            <DialogTitle id="alert-dialog-title">Thay đổi thông tin nhân viên này ?</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Bạn có chắc chắn muốn thay đổi thông tin nhân viên này, dổi rồi không quay về cái cũ lại được đâu á nha !!!
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
