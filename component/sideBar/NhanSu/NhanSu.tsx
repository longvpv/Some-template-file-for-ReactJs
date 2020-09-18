import { Typography } from "@material-ui/core";
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

function NhanSu() {
  const classes = useStyles();
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);

  const handleClick = (number) => {
    number === 1 && setOpen1(!open1);
    number === 2 && setOpen2(!open2);
    number === 3 && setOpen3(!open3);
    number === 4 && setOpen4(!open4);
    number === 5 && setOpen5(!open5);
  };
  return (
    <div className="w-100 overflow-auto">
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        <ListItem button onClick={() => handleClick(1)} className="d-flex justify-content-between">
          <Typography className={classes.titleText} style={{ fontWeight: (open1 ? 'bold' : 'normal') }}>
            Quản Lý Nhân Viên
          </Typography>
          {open1 ? (
            <ExpandLess fontSize="small" color="disabled" />
          ) : (
              <ExpandMore fontSize="small" color="disabled" />
            )}
        </ListItem>
        <Collapse in={open1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link href="/QuanTriHeThong/PhanQuyenNhanVien/QuanLyNhanVien">
              <ListItem button className={classes.nested}>
                <ArrowRightIcon fontSize="small" color="disabled" />
                <Typography className={classes.itemText}>
                  SYS010 - Quản lý nhân viên
              </Typography>
              </ListItem>
            </Link>
            {/* <Link href="/QuanTriHeThong/ThietLapHeThong/PhongBan"> */}
            <ListItem button className={classes.nested}>
              <ArrowRightIcon fontSize="small" color="disabled" />
              <Typography className={classes.itemText}>
                HRM229 - Hợp đồng nhân viên
              </Typography>
            </ListItem>
            {/* </Link> */}
            {/* <Link href="/QuanTriHeThong/ThietLapHeThong/NganHang"> */}
            <ListItem button className={classes.nested}>
              <ArrowRightIcon fontSize="small" color="disabled" />
              <Typography className={classes.itemText}>
                HRM406 - Phỏng vấn ứng viên
              </Typography>
            </ListItem>
            {/* </Link> */}
            <Link href="/QuanTriHeThong/ThietLapHeThong/MayChu">
              <ListItem button className={classes.nested}>
                <ArrowRightIcon fontSize="small" color="disabled" />
                <Typography className={classes.itemText}>
                  HRM405 - Thông tin ứng viên
              </Typography>
              </ListItem>
            </Link>
            {/* <Link href="/QuanTriHeThong/ThietLapHeThong/QuyDoiDonViTienTe"> */}
            <ListItem button className={classes.nested}>
              <ArrowRightIcon fontSize="small" color="disabled" />
              <Typography className={classes.itemText}>
                HRM407 - Nghỉ việc
              </Typography>
            </ListItem>
            {/* </Link> */}
            {/* <Link href="/QuanTriHeThong/ThietLapHeThong/NgayNghiCongTy"> */}
            <ListItem button className={classes.nested}>
              <ArrowRightIcon fontSize="small" color="disabled" />
              <Typography className={classes.itemText}>
                SYS015 - Giao dịch người dùng
              </Typography>
            </ListItem>
            {/* </Link> */}
            {/* <Link href="/QuanTriHeThong/ThietLapHeThong/NgayNghiCongTy"> */}
            <ListItem button className={classes.nested}>
              <ArrowRightIcon fontSize="small" color="disabled" />
              <Typography className={classes.itemText}>
                HRM165 - Kiểm toán
              </Typography>
            </ListItem>
            {/* </Link> */}
            {/* <Link href="/QuanTriHeThong/ThietLapHeThong/NgayNghiCongTy"> */}
            <ListItem button className={classes.nested}>
              <ArrowRightIcon fontSize="small" color="disabled" />
              <Typography className={classes.itemText}>
                MIS050 - KPI nhân viên
              </Typography>
            </ListItem>
            {/* </Link> */}
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick(2)} className="d-flex justify-content-between">

          <Typography className={classes.titleText} style={{ fontWeight: (open2 ? 'bold' : 'normal') }}>
            Chấm Công
          </Typography>
          {open2 ? (
            <ExpandLess fontSize="small" color="disabled" />
          ) : (
              <ExpandMore fontSize="small" color="disabled" />
            )}
        </ListItem>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* <Link href="/QuanTriHeThong/ThietLapHeThong/NgayNghiCongTy"> */}
            <ListItem button className={classes.nested}>
              <ArrowRightIcon fontSize="small" color="disabled" />
              <Typography className={classes.itemText}>
                HRM160 - Chấm công mỗi ngày
              </Typography>
            </ListItem>
            {/* </Link> */}
            {/* <Link href="/QuanTriHeThong/ThietLapHeThong/NgayNghiCongTy"> */}
            <ListItem button className={classes.nested}>
              <ArrowRightIcon fontSize="small" color="disabled" />
              <Typography className={classes.itemText}>
                HRM206 - Bảng công
              </Typography>
            </ListItem>
            {/* </Link> */}
            {/* <Link href="/QuanTriHeThong/ThietLapHeThong/NgayNghiCongTy"> */}
            <ListItem button className={classes.nested}>
              <ArrowRightIcon fontSize="small" color="disabled" />
              <Typography className={classes.itemText}>
                HRM207 - Quản lý nhân viên nghỉ việc
              </Typography>
            </ListItem>
            {/* </Link> */}
            {/* <Link href="/QuanTriHeThong/ThietLapHeThong/NgayNghiCongTy"> */}
            <ListItem button className={classes.nested}>
              <ArrowRightIcon fontSize="small" color="disabled" />
              <Typography className={classes.itemText}>
                HRM401 - Quản lý phép năm
              </Typography>
            </ListItem>
            {/* </Link> */}
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick(3)} className="d-flex justify-content-between">
          <Typography className={classes.titleText} style={{ fontWeight: (open3 ? 'bold' : 'normal') }}>
            Lương
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
            Hỗ trợ
          </Typography>

        </ListItem>

      </List>
    </div>
  );
}

export default NhanSu;
