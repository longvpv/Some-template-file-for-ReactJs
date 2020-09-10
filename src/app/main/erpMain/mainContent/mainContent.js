import React from "react";
import Breadcrumb from "./Breadcrumbs/Breadcrumbs";
import Content from "./Content/Content";

function MainContent(props) {
  return (
    <div>
      <Breadcrumb />
      <div className="mt-5">
        <Content />
      </div>
    </div>
  );
}

export default MainContent;
