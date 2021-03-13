import React from "react";

import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// icons
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import { GitHub } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  topBar: {
    height: "3rem",
    paddingLeft: "1rem",
    backgroundColor: "#0194DF",
    display: "flex",
    justifyContent: "space-between",
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconStyle: {
    width: "20px",
    height: "auto",
    marginRight: "1rem",
    color: "#fff",
  },
  typography: {
    color: "#000",
    fontSize: "1rem",
    marginRight: "0.25rem",
  },
}));

export default function TopBar() {
  const classes = useStyles();

  return (
    <Box className={classes.topBar} component="div">
      <Box component="div" className={classes.icons}>
        <a href="https://www.facebook.com">
          <FacebookIcon className={classes.iconStyle} />
        </a>
        <a href="https://www.instagram.com">
          <InstagramIcon className={classes.iconStyle} />
        </a>
        <a href="https://www.github.com">
          <GitHub className={classes.iconStyle} />
        </a>
        <a href="https://www.twitter.com">
          <TwitterIcon className={classes.iconStyle} />
        </a>
      </Box>
      <Box component="div" className={classes.icons}>
        <Box component="div" className={classes.icons}>
          <Typography className={classes.typography}>
            78/A, Green lane, NYC
          </Typography>
          <LocationOnIcon className={classes.iconStyle} />
        </Box>
        <Box component="div" className={classes.icons}>
          <Typography className={classes.typography}>
            +10 (78) 367 3674
          </Typography>
          <PhoneIcon className={classes.iconStyle} />
        </Box>
        <Box component="div"></Box>
      </Box>
    </Box>
  );
}
