import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";

export default function About() {
  return (
    <Grid container style={{ height: "80vh" }}>
      <Grid
        item
        xs={12}
        sm={6}
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ background: "#fff", padding: "2rem" }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/static/about-dog.jpg`}
          alt="dog"
          style={{ width: "auto", height: "75vh" }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ background: "#fff", padding: "2rem" }}
      >
        <Typography
          variant="h2"
          align="center"
          color="primary"
          style={{ lineHeight: "3.5rem" }}
        >
          Animals has come to mean so much in live
        </Typography>
        <Typography
          variant="h5"
          align="center"
          style={{
            marginTop: "1rem",
            marginBottom: "3rem",
            fontSize: "1.5rem",
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, sit
          voluptates odit velit ipsam temporibus.
        </Typography>
        <Button size="large" variant="contained" color="secondary">
          Learn More
        </Button>
      </Grid>
    </Grid>
  );
}
