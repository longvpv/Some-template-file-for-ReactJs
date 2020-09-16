import React, { useState } from "react";
import { IconButton, Badge, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import QuanTriHeThong from "./QuanTriHeThong/QuanTriHeThong";
// import QuanTriHeThong from "./QuanTriHeThong/QuanTriHeThong";

const useStyles = makeStyles({
  root: {},
  title: {
    fontFamily: "Quicksand",
    fontSize: "16px",
    fontWeight: 'bold',
    color: "#2FAAFC",
    paddingLeft: "6px",
  },
});

function SideBar(props) {
  const [key, setKey] = useState(1);
  const classes = useStyles();
  return (
    <div className="container p-0">
      <div className="row h-full bg-white">
        <div className="col-md-2 d-flex justify-content-start align-items-start pr-0">
          <div
            className="h-full d-flex flex-column justify-content-start align-items-center pt-2 "
            style={{
              backgroundColor: "#2FAAFC",
              width: "52px",
              height: "100vh",
            }}
          >
            <IconButton aria-label="show" color="primary" style={{ width: "52px", height: "52px" }} onClick={() => setKey(1)}>
              <Badge color="primary">
                <img src="/images/icon/icon1.png" />
              </Badge>
            </IconButton>
            <IconButton aria-label="show" color="primary" style={{ width: "52px", height: "52px" }} onClick={() => setKey(2)}>
              <Badge color="primary">
                <img src="/images/icon/icon2.png" />
              </Badge>
            </IconButton>
            <IconButton aria-label="show" color="primary" style={{ width: "52px", height: "52px" }} onClick={() => setKey(3)}>
              <Badge color="primary">
                <img src="/images/icon/icon3.png" />
              </Badge>
            </IconButton>
            <IconButton aria-label="show" color="primary" style={{ width: "52px", height: "52px" }} onClick={() => setKey(4)}>
              <Badge color="primary">
                <img src="/images/icon/icon4.png" />
              </Badge>
            </IconButton>
            <IconButton aria-label="show" color="primary" style={{ width: "52px", height: "52px" }} onClick={() => setKey(5)}>
              <Badge color="primary">
                <img src="/images/icon/icon5.png" />
              </Badge>
            </IconButton>
            <IconButton aria-label="show" color="primary" style={{ width: "52px", height: "52px" }} onClick={() => setKey(6)}>
              <Badge color="primary">
                <img src="/images/icon/icon6.png" />
              </Badge>
            </IconButton>
            <IconButton aria-label="show" color="primary" style={{ width: "52px", height: "52px" }} onClick={() => setKey(7)}>
              <Badge color="primary">
                <img src="/images/icon/icon7.png" />
              </Badge>
            </IconButton>
            <IconButton aria-label="show" color="primary" style={{ width: "52px", height: "52px" }} onClick={() => setKey(8)}>
              <Badge color="primary">
                <img src="/images/icon/icon8.png" />
              </Badge>
            </IconButton>
            <IconButton aria-label="show" color="primary" style={{ width: "52px", height: "52px" }} onClick={() => setKey(9)}>
              <Badge color="primary">
                <img src="/images/icon/icon9.png" />
              </Badge>
            </IconButton>
            <IconButton aria-label="show" color="primary" style={{ width: "52px", height: "52px" }} onClick={() => setKey(10)}>
              <Badge color="primary">
                <img src="/images/icon/icon10.png" />
              </Badge>
            </IconButton>
            <IconButton aria-label="show" color="primary" style={{ width: "52px", height: "52px" }} onClick={() => setKey(11)}>
              <Badge color="primary">
                <img src="/images/icon/icon11.png" />
              </Badge>
            </IconButton>
            <IconButton aria-label="show" color="primary" style={{ width: "52px", height: "52px" }} onClick={() => setKey(12)}>
              <Badge color="primary">
                <img src="/images/icon/icon12.png" />
              </Badge>
            </IconButton>
            <IconButton aria-label="show" color="primary" style={{ width: "52px", height: "52px" }} onClick={() => setKey(13)}>
              <Badge color="primary">
                <img src="/images/icon/icon13.png" />
              </Badge>
            </IconButton>


          </div>
        </div>
        <div className="col-md-10 pr-0">
          <Typography className={classes.title}>
            {key === 1 && "QUẢN TRỊ HỆ THỐNG"}
            {key === 2 && "Bán lẻ POS"}
            {key === 3 && "Công việc"}
            {key === 4 && "Báo cáo"}
            {key === 5 && "Nhân sự"}
            {key === 6 && "Kế toán"}
            {key === 7 && "Khách hàng & bán hàng"}
            {key === 8 && "Sản phẩm"}
            {key === 9 && "Báo giá"}
            {key === 10 && "Quản lý kho"}
            {key === 11 && "Thu mua"}
            {key === 12 && "Dashboard"}
            {key === 13 && "Import/Export"}
          </Typography>
          <QuanTriHeThong />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
