import React from "react";
import TopNav from "./top-nav/topNav";
import SideBar from "./side-bar/sideBar";
import MainContent from "./mainContent/mainContent";

function ErpMain(props) {
  return (
    <div>
      <TopNav />
      <div className="container-fruid" style={{ overflow: "hidden" }}>
        <div className="row">
          <div className="col-md-2 h-screen">
            <SideBar />
          </div>
          <div className="col-md-10" style={{ backgroundColor: "#E5E5E5" }}>
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErpMain;
