import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";

import ItemCard from "./Card";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "2rem",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    maxWidth: "32rem",
  },
}));

const data = [
  {
    title: "Pet Training",
    desc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla hic labore mollitia ducimus distinctio quod, libero quisquam necessitatibus cumque quo.",
  },
  {
    title: "Hygienic Cleaning",
    desc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla hic labore mollitia ducimus distinctio quod, libero quisquam necessitatibus cumque quo.",
  },
  {
    title: "Pet Treatment",
    desc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla hic labore mollitia ducimus distinctio quod, libero quisquam necessitatibus cumque quo.",
  },
  {
    title: "Pet Grooming",
    desc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla hic labore mollitia ducimus distinctio quod, libero quisquam necessitatibus cumque quo.",
  },
];

export default function Services() {
  const classes = useStyles();
  return (
    <Box className={classes.root} component="div">
      <Typography variant="h2" style={{ margin: "2rem" }}>
        Our Services
      </Typography>
      <Carousel
        interval={5000}
        autoPlay={true}
        animation="fade"
        indicators={false}
        navButtonsAlwaysVisible={false}
        navButtonsAlwaysInvisible={false}
      >
        {data.map((elem, index) => (
          <ItemCard elem={elem} key={index} />
        ))}
      </Carousel>
    </Box>
  );
}
