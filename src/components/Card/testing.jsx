import React from 'react';
import { Grid, useMediaQuery, useTheme } from '@mui/material';

function Testing() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container spacing={2} style={{ flexDirection: isSmallScreen ? 'column' : 'row' }}>
      <Grid item xs={4}>
        <h1>Hello </h1>
      </Grid>
      <Grid item xs={4}>
        <h1>World </h1>
      </Grid>
    </Grid>
  );
}

export default Testing;
