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

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  itemText: {
    fontFamily: "Quicksand",
    fontWeight: "600",
    fontSize: "14px",
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

  const handleClick = (number) => {
    number === 1 && setOpen1(!open1);
    number === 2 && setOpen2(!open2);
    number === 3 && setOpen3(!open3);
    number === 4 && setOpen4(!open4);
    number === 5 && setOpen5(!open5);
    number === 6 && setOpen6(!open6);
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
              <ListItemText
                className={classes.itemText}
                primary="Công ty / Chi nhánh"
              />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon />
              <ListItemText className={classes.itemText} primary="Phòng ban" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon />
              <ListItemText className={classes.itemText} primary="Ngân hàng" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon />
              <ListItemText className={classes.itemText} primary="Máy chủ" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon />
              <ListItemText
                className={classes.itemText}
                primary="Quy đỏi đơn vị tiền tệ"
              />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ArrowRightIcon />
              <ListItemText
                className={classes.itemText}
                primary="Ngày nghỉ của công ty"
              />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick(2)}>
          <ListItemText primary="Phân quyền nhân viên" />
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <ListItem button onClick={() => handleClick(3)}>
          <ListItemText primary="Thiết lập mã hệ thống" />
          {open3 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <ListItem button onClick={() => handleClick(4)}>
          <ListItemText primary="Tiện ích" />
          {open4 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <ListItem button onClick={() => handleClick(5)}>
          <ListItemText primary="Thông tin hệ thống" />
          {open5 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <ListItem button onClick={() => handleClick(6)}>
          <ListItemText primary="Cập nhật mới" />
          {open6 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
      </List>
    </div>
  );
}

export default QuanTriHeThong;
