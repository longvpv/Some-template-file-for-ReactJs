import { Badge, InputBase, Menu, MenuItem } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { fade, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { AccountCircle } from "@material-ui/icons";
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import MenuIcon from '@material-ui/icons/Menu';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';
import MoreIcon from '@material-ui/icons/More';
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  fullwidth: {
    width: '100vw'
  },
  companyTitle: {
    color: '#101010',
    fontSize: "16px",
    fontWeight: 'bold',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: '#101010',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: "16px",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: '#101010',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  accName: {
    display: "flex",
    alignItems: "center",
  },
}));

function TopNav(props) {
  const classes = useStyles();

  // -----------------------------
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };


  return (
    <div className={classes.fullwidth}>
      <div className={classes.grow}>
        <AppBar
          position="static"
          className="bg-white"
          style={{ boxShadow: "none" }}
        >
          <Toolbar>
            <img src="\images\VVlogo.png" className="pr-5" />
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="primary"
              aria-label="open drawer"
            >
              <MenuIcon style={{ color: '#DCE0E2', fontSize: '40' }} />
            </IconButton>
            <span className={classes.companyTitle}>Công ty VV Solutions</span>
            <div className={classes.search} style={{ background: "#F7F7F7" }}>
              <div className={classes.searchIcon}>
                <SearchIcon style={{ color: '#2FAAFC' }} />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton aria-label="show " color="primary">
                <Badge color="primary">
                  <SettingsIcon style={{ color: '#5A5A5A' }} />
                </Badge>
              </IconButton>
              <IconButton aria-label="show " color="primary">
                <Badge color="primary">
                  <TrendingUpIcon style={{ color: '#5A5A5A' }} />
                </Badge>
              </IconButton>
              <IconButton aria-label="show" color="primary">
                <Badge color="primary">
                  <HelpIcon style={{ color: '#5A5A5A' }} />
                </Badge>
              </IconButton>
              <Typography
                className={classes.title}
                variant="subtitle1"
                color="primary"
              >
                Hỗ trợ
              </Typography>

              <IconButton
                aria-label="show 17 new notifications"
                color="primary"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon style={{ color: '#5A5A5A' }} />
                </Badge>
              </IconButton>
              <Typography
                className={classes.title}
                variant="subtitle1"
                color="primary"
              >
                Account Name
              </Typography>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="primary"
              >
                <AccountCircle style={{ color: '#5A5A5A' }} />
              </IconButton>
            </div>

          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

export default TopNav;
