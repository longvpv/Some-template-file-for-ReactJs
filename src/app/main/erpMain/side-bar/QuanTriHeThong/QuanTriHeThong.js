import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { Typography } from "@material-ui/core";
import CachedIcon from "@material-ui/icons/Cached";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(1),
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
    <div className="w-full">
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        <ListItem button onClick={() => handleClick(1)}>
          <ListItemText
            className={classes.itemText}
            primary="Thiết lập hệ thống"
          />
          {open1 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon />
              <Typography className={classes.itemText}>
                SYS005 - Công ty / Chi nhánh
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon />
              <Typography className={classes.itemText}>
                SYS006 - Phòng ban
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon />
              <Typography className={classes.itemText}>
                SYS506 - Ngân hàng
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon />
              <Typography className={classes.itemText}>
                SYS022 - Máy chủ
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon />
              <Typography className={classes.itemText}>
                SYS509 - Quy đỏi đơn vị tiền tệ
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon />
              <Typography className={classes.itemText}>
                SYS520 - Ngày nghỉ của công ty
              </Typography>
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick(2)}>
          <ListItemText primary="Phân quyền nhân viên" />
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon />
              <Typography className={classes.itemText}>
                SYS010 - Quản lý nhân viên
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon />
              <Typography className={classes.itemText}>
                SYS009 - Lớp người dùng
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon />
              <Typography className={classes.itemText}>
                SYS008 - Thiết lập nhân viên vào lớp người dùng
              </Typography>
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick(3)}>
          <ListItemText primary="Phân quyền dữ liệu" />
          {open3 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open3} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon />
              <Typography className={classes.itemText}>
                SYS504 - Chỉ định nhân viên vào phòng ban
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon />
              <Typography className={classes.itemText}>
                SYS503 - Xem kết cấu của doanh nghiệp
              </Typography>
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick(4)}>
          <ListItemText primary="Thiết lập mã hệ thống" />
          {open4 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open4} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon />
              <Typography className={classes.itemText}>
                SYS302 - Mã hệ thống chính
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon />
              <Typography className={classes.itemText}>
                SYS501 - Tạo mã chặn
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon />
              <Typography className={classes.itemText}>
                SYS601 - Tạo mã phí
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon />
              <Typography className={classes.itemText}>
                SYS602 - Nội dung phí
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon />
              <Typography className={classes.itemText}>
                SYS502 - Thiết lập lớp người dùng đc xóa stop
              </Typography>
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick(5)}>
          <ListItemText primary="Tiện ích" />
          {open5 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open5} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon />
              <Typography className={classes.itemText}>
                SYS600 - Dịch ngôn ngữ
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon />
              <Typography className={classes.itemText}>
                SYS703 - Tạo Thành phố
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon />
              <Typography className={classes.itemText}>
                SYS704 - Tạo Quận, Huyện
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon />
              <Typography className={classes.itemText}>
                SYS705 - Tạo Phường, Xã
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon />
              <Typography className={classes.itemText}>
                SYS025 - Kiểm tra hoạt động
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon />
              <Typography className={classes.itemText}>
                SYS020 - Thiết lập hoạt động người dùng
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon />
              <Typography className={classes.itemText}>
                SYS012 - Thay đổi mật khẩu
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon />
              <Typography className={classes.itemText}>
                SYS150 - Location setting
              </Typography>
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick(6)}>
          <ListItemText primary="Thông tin hệ thống" />
          {open6 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open6} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon />
              <Typography className={classes.itemText}>
                SYS811 - Ghi chú phát hành tính năng mới
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon />
              <Typography className={classes.itemText}>
                SYS812 - Quy trình công ty
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon />
              <Typography className={classes.itemText}>
                -License Information
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon />
              <Typography className={classes.itemText}>
                SYS888 - System Intergrity Management
              </Typography>
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick(7)}>
          <ListItemText primary="Cập nhật mới" />
          <img src="static/icon/Sync.png"></img>
        </ListItem>
      </List>
    </div>
  );
}

export default QuanTriHeThong;
