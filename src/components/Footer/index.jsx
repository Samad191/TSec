// Footer.js

import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop:'10px',
    backgroundColor: '#99f524',
    padding: '10px',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: '10%'
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography variant="body2" color="textSecondary" fontSize={'2rem'} align="center">
          Hello World
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
