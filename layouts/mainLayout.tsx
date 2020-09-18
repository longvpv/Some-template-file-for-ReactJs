import React from "react";
import Breadcrumb from "../component/breadcrumb/Breadcrumb";
import SideBar from "../component/sideBar/sideBar";
import TopNav from "../component/topNav/topnav";

export default class MainLayout extends React.Component {

  render() {
    return (
      <div id="app-wrapper">
        <div className="sticky-top">
          <TopNav />
        </div>
        <div className="row">
          <div className="col-md-2 p-0 "><SideBar /></div>
          <div className="col-md-10 pt-2" style={{ backgroundColor: '#F2F2F2' }}>

            <Breadcrumb />
            <div className="mt-2">
              {this.props.children}
            </div>
          </div>
        </div>

      </div>
    );
  }
}
