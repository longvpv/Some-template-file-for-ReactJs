import React from "react";
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
          <div className="col-md-2"><SideBar /></div>
          <div className="col-md-10">text{this.props.children}</div>
        </div>

      </div>
    );
  }
}
