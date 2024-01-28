// // Navbar.js

// import React from 'react';
// import { makeStyles } from '@mui/styles';
// import { AppBar, Toolbar, Typography, Container } from '@mui/material';

// const useStyles = makeStyles((theme) => ({
//   appBar: {
//     backgroundColor: 'red',
//     margin: '0 auto', // Center the Navbar
//   },
//   title: {
//     flexGrow: 1,
//   },
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//   },
// }));

// const Navbar = () => {
//   const classes = useStyles();

//   return (
//     <div style={{ width: '50%', margin: '0 auto', marginTop: '1rem' }} >
//     <AppBar position="static" className={classes.appBar}>
//       <Container maxWidth="md" className={classes.container}>
//         <Toolbar>
//           <Typography variant="h6" className={classes.title}>
//             T Sec
//           </Typography>
//           {/* Add your navigation links or other components here */}
//         </Toolbar>
//       </Container>
//     </AppBar>
//     </div>
//   );
// };

// export default Navbar;


// App.js

import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar style={{ width: '60%', margin: '0 auto',  background: 'red', backgroundColor: '#f8f8ff', marginTop: '2rem' }} position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ABC
        </Typography>

        {isSmallScreen ? (
          <>
            <IconButton size="large" color="inherit" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="responsive-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Item 1</MenuItem>
              <MenuItem onClick={handleMenuClose}>Item 2</MenuItem>
              <MenuItem onClick={handleMenuClose}>Item 3</MenuItem>
            </Menu>
          </>
        ) : (
          // Additional items or components for larger screens
          <>
            <Typography color="black" fontSize='0.8rem' variant="h6" sx={{ paddingRight: '70px' }}>
              Products
            </Typography>
            <Typography color="black" fontSize='0.8rem'  variant="h6" sx={{ paddingRight: '50px' }}>
              Ecosystem
            </Typography>
            <Typography color="black" fontSize='0.8rem' variant="h6" sx={{ marginRight: '50px' }}>
              Company
            </Typography>
            <Typography color="black" fontSize='0.8rem' variant="h6" sx={{ marginRight: '20px' }}>
              Blog
            </Typography>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};


export default Navbar;