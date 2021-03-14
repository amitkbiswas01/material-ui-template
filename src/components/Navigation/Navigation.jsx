import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  logo: {
    flexGrow: 1,
  },
  brandLogo: {
    paddingTop: "0.25rem",
    width: "10rem",
    height: "auto",
  },
  menuIcon: {
    "@media (min-width: 676px)": {
      display: "none",
    },
  },
  menuLink: {
    display: "flex",
    "@media (max-width: 676px)": {
      flexFlow: "column",
      display: "none",
    },
  },
  navlink: {
    color: "#000",
    textDecoration: "none",
  },
}));

export default function Navigation() {
  const classes = useStyles();

  const toggleMenu = () => {
    console.log("toggle clicked");
  };

  return (
    <AppBar position="sticky" elevation={0} style={{ backgroundColor: "#fff" }}>
      <Toolbar>
        <Box component="div" style={{ flexGrow: 1 }}>
          <NavLink to="/">
            <img
              className={classes.brandLogo}
              src={`${process.env.PUBLIC_URL}/static/nav-logo.png`}
              alt="brand-logo"
            />
          </NavLink>
        </Box>
        <IconButton
          className={classes.menuIcon}
          edge="end"
          color="primary"
          aria-label="menu"
          onClick={() => toggleMenu()}
        >
          <MenuIcon />
        </IconButton>
        <Box component="div" className={classes.menuLink}>
          <Button color="primary">
            <NavLink className={classes.navlink} to="/">
              Home
            </NavLink>
          </Button>
          <Button color="primary">
            <NavLink className={classes.navlink} to="/services">
              Services
            </NavLink>
          </Button>
          <Button color="primary">
            <NavLink className={classes.navlink} to="/about">
              About
            </NavLink>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
