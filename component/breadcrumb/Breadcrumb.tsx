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
        <Link color="inherit" href="/" onClick={handleClick}>
          Quản trị hệ thống
        </Link>
        <Link
          color="inherit"
          href="/getting-started/installation/"
          onClick={handleClick}
        >
          Thiết lập hệ thống
        </Link>
        <Typography color="textPrimary">Công ty / Chi Nhánh</Typography>
      </Breadcrumbs>
    </div>
  );
}

export default Breadcrumb;
