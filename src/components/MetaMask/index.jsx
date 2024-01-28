import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

export const MetaMask = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: '0 10rem 0 10rem', marginTop: '5rem' }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <h1>Carousel</h1>
        </Grid>
        <Grid item xs={6}  >
            <Typography style={{
                fontSize: 'max(1.5rem,24px)',
                fontWeight: 400,
                lineHeight: '1.2em',
                fontFamily: 'Atyp Display", sans-serif',
                letterSpacing: '0.05em',
            }} >MetaMask</Typography>
         <Typography
            style={{
                color: 'grey',
                fontSize: 'max(1.5rem,24px)',
                fontWeight: 'var(--font-weight-regular)',
                lineHeight: '1.2em',
                fontFamily: 'Atyp Display", sans-serif',
                width: '29rem',
                letterSpacing: '0.05em',
            }}
         >
         

        MetaMask is the leading self-custodial wallet for over 100 million users annually. MetaMask is everything 
        you need to manage your identity, digital assets and to explore web3. Available as a browser 
        extension and mobile app.
         </Typography>
        </Grid>
    
      </Grid>
    </Box>
  );
};
