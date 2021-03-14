import React from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: "64rem",
  },
  cardFlex: {
    display: "flex",
  },
}));

export default function ItemCard({ elem, index }) {
  const classes = useStyles();
  return (
    <>
      <Card key={index} className={classes.card}>
        <CardActionArea className={classes.cardFlex}>
          <CardMedia
            component="img"
            alt={elem.title}
            height="320"
            image="https://source.unsplash.com/1600x900/?dog"
            title={elem.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {elem.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {elem.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
