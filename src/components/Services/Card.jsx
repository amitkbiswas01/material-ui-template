import React from "react";
import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@material-ui/core";

export default function ItemCard({ elem, index }) {
  return (
    <>
      <Card key={index} style={{ maxWidth: "68rem" }}>
        <CardActionArea style={{ display: "flex" }}>
          <CardMedia
            component="img"
            alt={elem.title}
            height="340"
            image={`${process.env.PUBLIC_URL}/static/slide-dog.jpg`}
            title={elem.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h3" align="center">
              {elem.title}
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ marginLeft: "2rem", marginRight: "2rem" }}
            >
              {elem.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
