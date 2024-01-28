import natureImg from "../../assets/nature.jpg";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Grid, useMediaQuery } from "@mui/material";

export default function MediaControlCard() {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div style={{ marginTop: "4rem" }}>
      <Grid container spacing={3} style={{ flexDirection: isSmallScreen ? 'column' :  'row' }} >
        <Grid item xs={12} sm={6} md={4} >
          <Card
            sx={{
              display: "flex",
              display: "flex",
              textDecoration: "none",
              alignItems: "center",
              background: "#f2f2f2",
              justifyContent: "space-between",
              position: "relative",
              height: "100%",
              margin: "5px",
              width: '95%'
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography style={{ fontSize: "18px" }}>MetaMask</Typography>
                <Typography color="grey" style={{ fontSize: "14px" }}>
                  The world's leading web3 wallet
                </Typography>
              </CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
              ></Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151, height: "80%" }}
              image={natureImg}
              alt="Live from space album cover"
            />
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} >
        <Card
            sx={{
              display: "flex",
              display: "flex",
              textDecoration: "none",
              alignItems: "center",
              background: "#f2f2f2",
              justifyContent: "space-between",
              position: "relative",
              height: "100%",
              margin: "5px",
              width: '95%'
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography style={{ fontSize: "18px" }}>MetaMask</Typography>
                <Typography color="grey" style={{ fontSize: "14px" }}>
                  The world's leading web3 wallet
                </Typography>
              </CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
              ></Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151, height: "80%" }}
              image={natureImg}
              alt="Live from space album cover"
            />
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} >
        <Card
            sx={{
              display: "flex",
              display: "flex",
              textDecoration: "none",
              alignItems: "center",
              background: "#f2f2f2",
              justifyContent: "space-between",
              position: "relative",
              height: "100%",
              margin: "5px",
              width: '95%'
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography style={{ fontSize: "18px" }}>MetaMask</Typography>
                <Typography color="grey" style={{ fontSize: "14px" }}>
                  The world's leading web3 wallet
                </Typography>
              </CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
              ></Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151, height: "80%" }}
              image={natureImg}
              alt="Live from space album cover"
            />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
