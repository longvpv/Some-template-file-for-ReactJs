import React from "react";

export default class MainLayout extends React.Component {
  render() {
    return (
      <div id="app-wrapper">
        {this.props.children}
      </div>
    );
  }
}
