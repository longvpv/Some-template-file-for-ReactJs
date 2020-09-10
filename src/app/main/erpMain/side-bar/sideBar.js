import React, { useState } from "react";
import { IconButton, Badge, Typography } from "@material-ui/core";

function SideBar(props) {
  const [key, setKey] = useState(1);
  return (
    <div className="container">
      <div className="row h-full">
        <div
          className="h-full d-flex flex-column justify-content-start align-items-center pt-2 "
          style={{ backgroundColor: "#2FAAFC", width: "52px", height: "100vh" }}
        >
          <a
            onClick={() => setKey(1)}
            className="d-flex justify-content-center align-items-center"
            style={{ height: "52px" }}
          >
            <img src="static/icon/icon1.png" />
          </a>
          <a
            onClick={() => setKey(2)}
            className="d-flex justify-content-center align-items-center"
            style={{ height: "52px" }}
          >
            <img src="static/icon/icon2.png" />
          </a>
          <a
            onClick={() => setKey(3)}
            className="d-flex justify-content-center align-items-center"
            style={{ height: "52px" }}
          >
            <img src="static/icon/icon3.png" />
          </a>
          <a
            onClick={() => setKey(4)}
            className="d-flex justify-content-center align-items-center"
            style={{ height: "52px" }}
          >
            <img src="static/icon/icon4.png" />
          </a>
          <a
            onClick={() => setKey(5)}
            className="d-flex justify-content-center align-items-center"
            style={{ height: "52px" }}
          >
            <img src="static/icon/icon5.png" />
          </a>
          <a
            onClick={() => setKey(6)}
            className="d-flex justify-content-center align-items-center"
            style={{ height: "52px" }}
          >
            <img src="static/icon/icon6.png" />
          </a>
          <a
            onClick={() => setKey(7)}
            className="d-flex justify-content-center align-items-center"
            style={{ height: "52px" }}
          >
            <img src="static/icon/icon7.png" />
          </a>
          <a
            onClick={() => setKey(8)}
            className="d-flex justify-content-center align-items-center"
            style={{ height: "52px" }}
          >
            <img src="static/icon/icon8.png" />
          </a>
          <a
            onClick={() => setKey(9)}
            className="d-flex justify-content-center align-items-center"
            style={{ height: "52px" }}
          >
            <img src="static/icon/icon9.png" />
          </a>
          <a
            onClick={() => setKey(10)}
            className="d-flex justify-content-center align-items-center"
            style={{ height: "52px" }}
          >
            <img src="static/icon/icon10.png" />
          </a>
          <a
            onClick={() => setKey(11)}
            className="d-flex justify-content-center align-items-center"
            style={{ height: "52px" }}
          >
            <img src="static/icon/icon11.png" />
          </a>
          <a
            onClick={() => setKey(12)}
            className="d-flex justify-content-center align-items-center"
            style={{ height: "52px" }}
          >
            <img src="static/icon/icon12.png" />
          </a>
          <a
            onClick={() => setKey(13)}
            className="d-flex justify-content-center align-items-center"
            style={{ height: "52px" }}
          >
            <img src="static/icon/icon13.png" />
          </a>
        </div>
        <div className=" h-full">
          <Typography variant="subtitle1" className="pl-3">
            {key === 1 && "Quản trị hệ thống"}
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
        </div>
      </div>
    </div>
  );
}

export default SideBar;
