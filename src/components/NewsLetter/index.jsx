import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const NewsLetter = () => {
  return (
    <div>
      <Typography>NEWSLETTER</Typography>
      <Typography>Follow</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card
            sx={{
              display: "flex",
              textDecoration: "none",
              alignItems: "center",
              background: "#f2f2f2",
              justifyContent: "space-between",
              position: "relative",
              height: "100%",
              margin: "5px",
              width: "95%",

              ":hover": {
                boxShadow: 10, // theme.shadows[20]  
                background: '#c1ff14'
              },
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography style={{ fontSize: "18px", fontFamily: 'grill' }}>CONSENSYS</Typography>
              </CardContent>
            </Box>

            <AddIcon style={{ marginRight: "3rem" }} />
            
          </Card>
        </Grid>
        <Grid item xs={6}>
          {/* <Typography>xs=4</Typography> */}
        </Grid>
   
      </Grid>
    </div>
  );
};
