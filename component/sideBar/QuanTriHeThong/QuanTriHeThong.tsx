import { TableContainer, Typography } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from '@material-ui/core/styles';
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import CachedIcon from "@material-ui/icons/Cached";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Link from "next/link";
import React from "react";
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto'
  },
  nested: {
    paddingLeft: theme.spacing(1),
  },
  titleText: {
    fontFamily: "Quicksand",
    fontSize: "14px",
    // fontWeight: "bold",
  },
  itemText: {
    fontFamily: "Quicksand",
    fontSize: "12px",
  },
}));

function QuanTriHeThong() {
  const classes = useStyles();
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  const [open7, setOpen7] = React.useState(false);

  const handleClick = (number) => {
    number === 1 && setOpen1(!open1);
    number === 2 && setOpen2(!open2);
    number === 3 && setOpen3(!open3);
    number === 4 && setOpen4(!open4);
    number === 5 && setOpen5(!open5);
    number === 6 && setOpen6(!open6);
    number === 7 && setOpen7(!open7);
  };
  return (
    <div className="w-100">
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        <ListItem button onClick={() => handleClick(1)} className="d-flex justify-content-between">
          <Typography className={classes.titleText} style={{ fontWeight: (open1 ? 'bold' : 'normal') }}>
            Thiết Lập Hệ Thống
          </Typography>
          {open1 ? (
            <ExpandLess fontSize="small" color="disabled" />
          ) : (
              <ExpandMore fontSize="small" color="disabled" />
            )}
        </ListItem>
        <Collapse in={open1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link href="/QuanTriHeThong/ThietLapHeThong/CongTyChiNhanh">
              <ListItem button className={classes.nested}>
                <ArrowRightIcon fontSize="small" color="disabled" />
                <Typography className={classes.itemText}>
                  SYS005 - Công ty / Chi nhánh
              </Typography>
              </ListItem>
            </Link>
            <Link href="/QuanTriHeThong/ThietLapHeThong/PhongBan">
              <ListItem button className={classes.nested}>
                <ArrowRightIcon fontSize="small" color="disabled" />
                <Typography className={classes.itemText}>
                  SYS006 - Phòng ban
              </Typography>
              </ListItem>
            </Link>
            <Link href="/QuanTriHeThong/ThietLapHeThong/NganHang">
              <ListItem button className={classes.nested}>
                <ArrowRightIcon fontSize="small" color="disabled" />
                <Typography className={classes.itemText}>
                  SYS506 - Ngân hàng
              </Typography>
              </ListItem>
            </Link>
            <Link href="/QuanTriHeThong/ThietLapHeThong/MayChu">
              <ListItem button className={classes.nested}>
                <ArrowRightIcon fontSize="small" color="disabled" />
                <Typography className={classes.itemText}>
                  SYS022 - Máy chủ
              </Typography>
              </ListItem>
            </Link>
            <Link href="/QuanTriHeThong/ThietLapHeThong/QuyDoiDonViTienTe">
              <ListItem button className={classes.nested}>
                <ArrowRightIcon fontSize="small" color="disabled" />
                <Typography className={classes.itemText}>
                  SYS509 - Quy đỏi đơn vị tiền tệ
              </Typography>
              </ListItem>
            </Link>
            <Link href="/QuanTriHeThong/ThietLapHeThong/NgayNghiCongTy">
              <ListItem button className={classes.nested}>
                <ArrowRightIcon fontSize="small" color="disabled" />
                <Typography className={classes.itemText}>
                  SYS520 - Ngày nghỉ của công ty
              </Typography>
              </ListItem>
            </Link>
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick(2)} className="d-flex justify-content-between">

          <Typography className={classes.titleText} style={{ fontWeight: (open2 ? 'bold' : 'normal') }}>
            Phân quyền nhân viên
          </Typography>
          {open2 ? (
            <ExpandLess fontSize="small" color="disabled" />
          ) : (
              <ExpandMore fontSize="small" color="disabled" />
            )}
        </ListItem>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link href="/QuanTriHeThong/PhanQuyenNhanVien/QuanLyNhanVien">
              <ListItem button className={classes.nested}>
                <ArrowRightIcon fontSize="small" color="disabled" />
                <Typography className={classes.itemText}>
                  SYS010 - Quản lý nhân viên
              </Typography>
              </ListItem>
            </Link>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon fontSize="small" color="disabled" />
              <Typography className={classes.itemText}>
                SYS009 - Lớp người dùng
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon fontSize="small" color="disabled" />
              <Typography className={classes.itemText}>
                SYS008 - Thiết lập nhân viên vào lớp người dùng
              </Typography>
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick(3)} className="d-flex justify-content-between">
          <Typography className={classes.titleText} style={{ fontWeight: (open3 ? 'bold' : 'normal') }}>
            Phân quyền dữ liệu
          </Typography>
          {open3 ? (
            <ExpandLess fontSize="small" color="disabled" />
          ) : (
              <ExpandMore fontSize="small" color="disabled" />
            )}
        </ListItem>
        <Collapse in={open3} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon fontSize="small" color="disabled" />
              <Typography className={classes.itemText}>
                SYS504 - Chỉ định nhân viên vào phòng ban
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon fontSize="small" color="disabled" />
              <Typography className={classes.itemText}>
                SYS503 - Xem kết cấu của doanh nghiệp
              </Typography>
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick(4)} className="d-flex justify-content-between">
          <Typography className={classes.titleText} style={{ fontWeight: (open4 ? 'bold' : 'normal') }}>
            Thiết lập mã hệ thống
          </Typography>
          {open4 ? (
            <ExpandLess fontSize="small" color="disabled" />
          ) : (
              <ExpandMore fontSize="small" color="disabled" />
            )}
        </ListItem>
        <Collapse in={open4} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon fontSize="small" color="disabled" />
              <Typography className={classes.itemText}>
                SYS302 - Mã hệ thống chính
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon fontSize="small" color="disabled" />
              <Typography className={classes.itemText}>
                SYS501 - Tạo mã chặn
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon fontSize="small" color="disabled" />
              <Typography className={classes.itemText}>
                SYS601 - Tạo mã phí
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon fontSize="small" color="disabled" />
              <Typography className={classes.itemText}>
                SYS602 - Nội dung phí
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon fontSize="small" color="disabled" />
              <Typography className={classes.itemText}>
                SYS502 - Thiết lập lớp người dùng đc xóa stop
              </Typography>
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick(5)} className="d-flex justify-content-between">
          <Typography className={classes.titleText} style={{ fontWeight: (open5 ? 'bold' : 'normal') }}>
            Tiện ích
          </Typography>
          {open5 ? (
            <ExpandLess fontSize="small" color="disabled" />
          ) : (
              <ExpandMore fontSize="small" color="disabled" />
            )}
        </ListItem>
        <Collapse in={open5} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon fontSize="small" color="disabled" />
              <Typography className={classes.itemText}>
                SYS600 - Dịch ngôn ngữ
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon fontSize="small" color="disabled" />
              <Typography className={classes.itemText}>
                SYS703 - Tạo Thành phố
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon fontSize="small" color="disabled" />
              <Typography className={classes.itemText}>
                SYS704 - Tạo Quận, Huyện
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon fontSize="small" color="disabled" />
              <Typography className={classes.itemText}>
                SYS705 - Tạo Phường, Xã
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon fontSize="small" color="disabled" />
              <Typography className={classes.itemText}>
                SYS025 - Kiểm tra hoạt động
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon fontSize="small" color="disabled" />
              <Typography className={classes.itemText}>
                SYS020 - Thiết lập hoạt động người dùng
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon fontSize="small" color="disabled" />
              <Typography className={classes.itemText}>
                SYS012 - Thay đổi mật khẩu
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon fontSize="small" color="disabled" />
              <Typography className={classes.itemText}>
                SYS150 - Location setting
              </Typography>
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick(6)} className="d-flex justify-content-between">
          <Typography className={classes.titleText} style={{ fontWeight: (open6 ? 'bold' : 'normal') }}>
            Thông tin hệ thống
          </Typography>
          {open6 ? (
            <ExpandLess fontSize="small" color="disabled" />
          ) : (
              <ExpandMore fontSize="small" color="disabled" />
            )}
        </ListItem>
        <Collapse in={open6} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon fontSize="small" color="disabled" />
              <Typography className={classes.itemText}>
                SYS811 - Ghi chú phát hành tính năng mới
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon fontSize="small" color="disabled" />
              <Typography className={classes.itemText}>
                SYS812 - Quy trình công ty
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon fontSize="small" color="disabled" />
              <Typography className={classes.itemText}>
                -License Information
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon fontSize="small" color="disabled" />
              <Typography className={classes.itemText}>
                SYS888 - System Intergrity Management
              </Typography>
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick(7)} className="d-flex justify-content-between">
          <Typography className={classes.titleText} style={{ fontWeight: (open7 ? 'bold' : 'normal') }}>
            Cập nhật mới
          </Typography>
          <CachedIcon style={{ color: '#4EEFA2' }} />
        </ListItem>
      </List>
    </div>

  );
}

export default QuanTriHeThong;
