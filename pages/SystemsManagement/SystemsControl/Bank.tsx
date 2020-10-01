import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputBase,
  Popover,
  Typography
} from "@material-ui/core";
import { ColDef, DataGrid } from "@material-ui/data-grid";
import SearchIcon from '@material-ui/icons/Search';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import AppState from "../../../@types/appTypes/appState";
import useStyle from "../../../component/coreUseStyle/useStyle";
import { deleteCompanyBank, getBankInfo, getCompanyBankInfo } from "../../../redux/systemsManagement/companyBank/actions";
import BankForm from "./BankForm";

const columns: ColDef[] = [
  { field: 'id', headerName: 'ID', width: 50, resizable: true },
  { field: 'paypalAccount', headerName: 'Loại TK thanh toán', width: 180 },
  { field: 'paypalNumber', headerName: 'Số TK thanh toán', width: 180 },
  { field: 'accountingCodeId', headerName: "Accounting Code", width: 120 },
  { field: 'bankCode', headerName: 'Mã ngân hàng', width: 120 },
  { field: 'bankName', headerName: 'Tên ngân hàng', width: 180 },
  { field: 'bankAddress', headerName: 'Địa chỉ ngân hàng', width: 280 },
  { field: 'bankAccountName', headerName: 'Chủ TK ngân hàng', width: 180 },
  { field: 'bankAccountNumber', headerName: 'Số TK ngân hàng', width: 180 },
  { field: 'cifCode', headerName: 'Mã CIF', width: 180 },
  { field: 'iebCode', headerName: 'Mã IEB', width: 180 },
];

function createData(
  id: number,
  paypalAccount: string,
  paypalNumber: string,
  accountingCodeId: number,
  bankCode: string,
  bankName: string,
  bankAddress: string,
  bankAccountName: string,
  bankAccountNumber: string,
  cifCode: string,
  iebCode: string,

) {
  return {
    id,
    paypalAccount,
    paypalNumber,
    accountingCodeId,
    bankCode,
    bankName,
    bankAddress,
    bankAccountName,
    bankAccountNumber,
    cifCode,
    iebCode,

  };
}

function Bank() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [bankId, setBankId] = useState(0);
  let bankIdSelected = [];
  const classes = useStyle();
  useEffect(() => {
    dispatch(getCompanyBankInfo());
  }, []);
  const companyBankInfo = useSelector((state: AppState) => state.companyBankState.companyBankInfoDataResource);
  const handleResultClick = (id) => {
    setBankId(id)
    setOpen(true)
  }

  const handleDeleteButton = () => {
    const r = confirm(`Are you sure wanna delete this bank ?`);

    if (r) {
      bankIdSelected.forEach(id => dispatch(deleteCompanyBank(id)))
    }
  };

  const handleYesButtonModal = () => {
    dispatch(getBankInfo(bankId));
    setOpen(false);
    setOpenForm(true)
  }

  let rows = [];
  if (companyBankInfo && _.isArray(companyBankInfo.data))
    rows = companyBankInfo.data.map(result => createData(
      result.id,
      result.paypalAccount,
      result.paypalNumber,
      result.accountingCodeId,
      result.bankCode,
      result.bankName,
      result.bankAddress,
      result.bankAccountName,
      result.bankAccountNumber,
      result.cifCode,
      result.iebCode,
    ))

  return (
    <div>


      <div className="d-flex justify-content-between align-items-center">
        <p className={classes.title}>Thiết Lập Ngân Hàng</p>

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
      <div className="d-flex justify-content-center">
        <div style={{ height: 700, width: '95%' }}>
          <DataGrid className={classes.root}
            rows={rows}
            columns={columns}
            checkboxSelection
            paginationMode="server"
            pagination
            rowsPerPageOptions={[5, 10]}
            page={companyBankInfo.page}
            pageSize={companyBankInfo.pageSize}
            rowCount={companyBankInfo.total}
            onPageChange={option => {
              const page = option.page - 1;

              if (page < 0)
                return;
              if (option.page === companyBankInfo.page) return;
              dispatch(getCompanyBankInfo({ page, pageSize: option.pageSize }))
            }}
            disableSelectionOnClick
            onCellClick={(params) => {
              if (params.field === "paypalAccount") { handleResultClick(params.data.id) }
            }}
            onSelectionChange={option => {
              return bankIdSelected = option.rows.map(row => { return row.id });
            }}
            onCellHover={cell => (
              console.log(cell.value)
            )}
          //onSortModelChange={params => console.log(params)}

          />

        </div>
      </div>
      <div>

      </div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Thay đổi thông tin ngân hàng này ?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn có chắc chắn muốn thay đổi thông tin ngân hàng này, đổi rồi không quay về cái cũ lại được đâu á nha !!!
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
        <BankForm setOpenForm={() => setOpenForm(false)} />
      </Dialog>
    </div>
  )
}

export default Bank


