import { createStyles, fade, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => createStyles({
  root: {

    "& .MuiDataGrid-root": {
      borderRadius: "25px"
    },
    "& .MuiDataGrid-colCellWrapper": {
      backgroundColor: "#E9F6FF",

    },
    "& .MuiDataGrid-colCellTitle": {
      fontWeight: "bold"
    },
    "& .MuiDataGrid-window": {
      backgroundColor: "#FFF"
    },

    "& .MuiDropzoneArea-icon": {
      color: "#B9E3FF",
    }
  },
  rootDropZone: {
    "& .MuiDropzoneArea-root": {
      paddingTop: "20px",
      width: "140px",
      height: "140px",
      minHeight: 0,
      marginRight: "12px"
    },
  },
  buttonStyled: {
    borderRadius: "8px",
    width: "200px",
    height: "48px",
    margin: "6px",
    fontWeight: 'bold'
  },

  avatar: {
    display: "flex",
    width: "140px",
    height: "140px",

    background: "#FFFFFF",
  },
  avatarLabel: {
    width: "80px",
    height: "24px",

    "font-family": "Quicksand",
    "font-style": "normal",
    "font-weight": "normal",
    "font-size": "14px",
    "line-height": "24px",

    "align-items": "center",
    "text-align": "center",

    color: "#4E4E4E",
  },
  title: {
    fontFamily: "Quicksand",
    fontWeight: "bold",
    fontSize: "24px",
    padding: '24px',
    margin: '0',
  },
  buttonSave: {
    borderRadius: "8px",
    width: "120px",
    margin: "12px",
    backgroundColor: "#F2F2F2",
    color: "#2FAAFC",
    borderColor: '#2FAAFC',
    fontWeight: 'bold'
  },
  buttonCreate: {
    borderRadius: "8px",
    width: "120px",
    margin: "12px",
    backgroundColor: "#2FAAFC",
    color: "#FFF",
    borderColor: '#2FAAFC',
    fontWeight: 'bold'
  },
  buttonDelete: {
    borderRadius: "8px",
    width: "120px",
    margin: "12px",
    backgroundColor: "#FDABAB", color: "#FFFFFF",
    fontWeight: 'bold'
  },

  formGroup: {
    display: "flex",
    alignItems: 'center',
    margin: "3px",
  },
  formControl: {
    width: "100%",
    height: "100%",
    margin: "3px 3px",
    backgroundColor: "#FFFFFF",
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
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  buttonDefault: {
    borderRadius: "8px",
    width: "120px",
    margin: "12px",
    backgroundColor: "#2FAAFC",
    color: "#FFF",
    borderColor: '#2FAAFC',
    fontWeight: 'bold',
  },
  buttonAbsolute: {
    borderRadius: "8px",
    width: "120px",
    margin: "12px",
    backgroundColor: "#2FAAFC",
    color: "#FFF",
    borderColor: '#2FAAFC',
    fontWeight: 'bold',
  },
  uploadTitle: {
    fontFamily: "Quicksand",
    fontSize: "14px",
    margin: '12px',
  }
}));

export default useStyle