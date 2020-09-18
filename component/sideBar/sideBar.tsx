import React, { useState } from "react";
import { IconButton, Badge, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import QuanTriHeThong from "./QuanTriHeThong/QuanTriHeThong";
import NhanSu from "./NhanSu/NhanSu";

const useStyles = makeStyles({
  root: {
    overflow: 'auto'
  },
  title: {
    fontFamily: "Quicksand",
    fontSize: "16px",
    fontWeight: 'bold',
    color: "#2FAAFC",
    paddingLeft: "6px",
    margin: '0'
  },

});

function SideBar(props) {
  const [key, setKey] = useState(1);
  const classes = useStyles();
  return (
    <div className="container pr-0" >
      <div className="d-flex bg-white">
        <div className="d-flex justify-content-start align-items-start pr-0">
          <div
            className=" d-flex flex-column justify-content-start align-items-center pt-2 sticky"
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
        <div style={{ width: 'calc(100% - 60px)', paddingLeft: '8px' }}>

          {key === 1 &&
            <div>
              <p className={classes.title}>
                QUẢN TRỊ HỆ THỐNG
              </p>
              <QuanTriHeThong />
            </div>
          }
          {key === 2 &&
            <div>
              <p className={classes.title}>
                NHÂN SỰ
            </p>
              <NhanSu />
            </div>
          }
          {key === 3 &&
            <div>
              <p className={classes.title}>
                CÔNG VIỆC
            </p>
              {/* <QuanTriHeThong /> */}
            </div>
          }
          {key === 4 &&
            <div>
              <p className={classes.title}>
                BÁO CÁO
            </p>
              {/* <QuanTriHeThong /> */}
            </div>
          }
          {key === 5 &&
            <div>
              <p className={classes.title}>
                NHÂN SỰ
            </p>
              {/* <QuanTriHeThong /> */}
            </div>
          }
          {key === 6 &&
            <div>
              <p className={classes.title}>
                KẾ TOÁN
            </p>
              {/* <QuanTriHeThong /> */}
            </div>
          }
          {key === 7 &&
            <div>
              <p className={classes.title}>
                KHÁCH HÀNG &amp; BÁN HÀNG
            </p>
              {/* <QuanTriHeThong /> */}
            </div>
          }
          {key === 8 &&
            <div>
              <p className={classes.title}>
                SẢN PHẨM
            </p>
              {/* <QuanTriHeThong /> */}
            </div>
          }
          {key === 9 &&
            <div>
              <p className={classes.title}>
                BÁO GIÁ
            </p>
              {/* <QuanTriHeThong /> */}
            </div>
          }
          {key === 10 &&
            <div>
              <p className={classes.title}>
                QUẢN LÝ KHO
            </p>
              {/* <QuanTriHeThong /> */}
            </div>
          }
          {key === 11 &&
            <div>
              <p className={classes.title}>
                THU MUA
            </p>
              {/* <QuanTriHeThong /> */}
            </div>
          }
          {key === 12 &&
            <div>
              <p className={classes.title}>
                DASHBOARD
            </p>
              {/* <QuanTriHeThong /> */}
            </div>
          }
          {key === 13 &&
            <div>
              <p className={classes.title}>
                IMPORT/EXPORT
            </p>
              {/* <QuanTriHeThong /> */}
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default SideBar;
