import React from "react";

function SideBar(props) {
  return (
    <div className="container h-screen">
      <div className="row h-full">
        <div className="col-md-2 bg-dark h-full d-flex flex-column justify-content-center align-item-center">
          <i class="fab fa-500px"></i>
          <i class="fab fa-500px"></i>
          <i class="fab fa-500px"></i>
          <i class="fab fa-500px"></i>
          <i class="fab fa-500px"></i>
          <i class="fab fa-500px"></i>
        </div>
        <div className="col-md-10 h-full"> test</div>
      </div>
    </div>
  );
}

export default SideBar;
