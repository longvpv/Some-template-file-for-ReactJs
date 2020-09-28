import React from "react";
import SideBar from "../component/sideBar/sideBar";
import TopNav from "../component/topNav/topnav";
import { Scrollbars } from 'react-custom-scrollbars';

export default class MainLayout extends React.Component {

  render() {
    return (
      <div className="app-wrapper">
        <div className="sticky-top">
          <TopNav />
        </div>
        <div className="row">
          <div className="col-md-2 p-0 ">
            <SideBar />
          </div>
          <div className="col-md-10 p-0 pt-2" style={{ backgroundColor: '#F2F2F2' }}>

            <React.Fragment>
              <Scrollbars style={{ height: '90vh' }}>
                {this.props.children}
              </Scrollbars>
            </React.Fragment>
          </div>
        </div>
        <style jsx>
          {`
          
          `}
        </style>
      </div>

    );
  }
}
