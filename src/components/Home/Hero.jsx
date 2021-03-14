import React from "react";

import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "80vh",
    backgroundImage: `url(${process.env.PUBLIC_URL}/static/home-dog.jpg)`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
  },
  bannerText: {
    margin: "auto",
    padding: "3rem",
    width: "30rem",
    textAlign: "center",
    background: "rgba(255, 255, 255, 0.5)",
    borderRadius: "0.25rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Hero() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root} component="div">
        <Box className={classes.bannerText} component="div">
          <Typography
            variant="h2"
            style={{ marginBottom: "2rem", lineHeight: "3.5rem" }}
          >
            Saving Animals Changing Live
          </Typography>
          <Typography
            variant="h5"
            style={{ marginBottom: "3rem", fontWeight: 500 }}
          >
            Far far away, behind the word mountains, cold sentences, far from
            the countries vokalia.
          </Typography>
          <Button size="large" variant="contained" color="secondary">
            <NavLink
              to="/services"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Our Services
            </NavLink>
          </Button>
        </Box>
      </Box>
    </>
  );
}
