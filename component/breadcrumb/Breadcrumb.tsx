import React from "react";
import { Breadcrumbs, Link, Typography } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

function Breadcrumb() {
  const handleClick = (event) => {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  };
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon />}>
        <Typography color="textSecondary">Quản trị hệ thống</Typography>
        <Typography color="textSecondary">Thiết lập hệ thống</Typography>
        <Typography color="textPrimary">Công ty / Chi Nhánh</Typography>
      </Breadcrumbs>
    </div>
  );
}

export default Breadcrumb;
