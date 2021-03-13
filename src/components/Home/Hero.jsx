import React from "react";

import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    minHeight: "90vh",
    display: "flex",
  },
  heroImg: {
    maxWidth: "55vw",
    height: "auto",
    borderRadius: "0.25rem",
  },
  bannerText: {
    padding: "4rem",
    textAlign: "center",
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
          <Typography variant="h3">Saving Animals Changing Live</Typography>
          <Typography variant="h6" style={{ marginBottom: "3rem" }}>
            Far far away, behind the word mountains, far from the countries
            vokalia.
          </Typography>
          <Button size="large" variant="contained" color="secondary">
            <Link
              to="/services"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Our Services
            </Link>
          </Button>
        </Box>
        <img
          className={classes.heroImg}
          src={`${process.env.PUBLIC_URL}/static/home-dog.jpg`}
          alt="hero"
        />
      </Box>
    </>
  );
}
