// CenteredText.js

import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import RoundedButton from "../Button";

// import MM from "../../assets/MM.mp4";

const useStyles = makeStyles((theme) => ({
  centeredTextContainer: {
    display: "flex",
    justifyContent: "center",
    // alignItems: 'center',
    // height: "100vh",
  },
  centeredText: {
    textAlign: "center",
  },
  text: {
    fontSize: "10.5rem",
  },
}));

const Products = () => {
//   const videos = [{ src: MM }, { src: MM }];
  const classes = useStyles();

  return (
    <div className={classes.centeredTextContainer}>
      <div className={classes.centeredText}>
        <Typography
          className={classes.text}
          style={{
            fontSize: "2.5rem",
            width: "100%",
     
            marginTop: '5rem'
          }}
        >
          A complete suite of products to
        </Typography>
        
        <Typography
          className={classes.text}
          style={{
            fontSize: "2.5rem",
            width: "100%",
          }}
        >
          create and participate in web3
        </Typography>
        <RoundedButton
          label="Explore all products"
          onClick={() => console.log("click")}
        />
      </div>

    </div>
  );
};

export default Products;
// text='A complete suite of products to create and participate in web3'
