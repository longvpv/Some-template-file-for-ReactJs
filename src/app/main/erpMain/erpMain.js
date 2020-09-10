import React from "react";
import TopNav from "./top-nav/topNav";
import SideBar from "./side-bar/sideBar";

function ErpMain(props) {
  return (
    <div>
      <TopNav />
      <div className="container-fruid">
        <div className="row">
          <div className="col-md-2">
            <SideBar />
          </div>
          <div className="col-md-10"></div>
        </div>
      </div>
    </div>
  );
}

export default ErpMain;
