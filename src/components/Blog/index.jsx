import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import HelloBuilderImg from "../../assets/hello.avif";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import Article2Img from "../../assets/article2.avif";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    transition: "box-shadow 0.3s",
    "&:hover": {
      boxShadow: `0px 40px 80px rgba(0, 255, 1, 0.5)`, // Change the rgba values to the desired color
      // paddingLeft: '20px'
    },
  },
}));

function Blog() {
  const classes = useStyles();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  console.log("is small screen", isSmallScreen);
  console.log("is medium", isMediumScreen);

  return (
    <div style={{ marginLeft: "25px", marginRight: "25px" }}>
      <Grid
        container
        spacing={3}
        style={{
          flexDirection: isSmallScreen ? "column" : "row",
          marginTop: "1.5rem",
        }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <CardMedia
            component="img"
       
            image={HelloBuilderImg}
            alt="Live from space album cover"
            className={classes.cardMedia}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardMedia
            component="img"
            image={Article2Img}
            alt="Live from space album cover"
            className={classes.cardMedia}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardMedia
            component="img"
            image={Article2Img}
            alt="Live from space album cover"
            className={classes.cardMedia}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Blog;
