import { AppBar, IconButton, Toolbar, Typography, Box, MenuItem, Menu, Button, Container, TextField } from '@mui/material';
//import { useState } from 'react';
import { Adb } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header() {

  const pages = ['library', 'discover', 'social', 'more'];
  const hj = '/lybrary'

  let location = useLocation();

  const [isHidden, setIsHidden] = useState(false);

  // useEffect(() => {
  //   console.log(location)
  //   if (location.pathname === "/library") {
  //     setIsHidden(true);
  //   }
  // }, [location])


  //const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  if (isHidden) {
    return null;
  }




  return (
    <AppBar position="static" sx={{ mr: '0' }}>
      <Container >
        <Toolbar disableGutters>
          <Container sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, alignItems: 'center' }
          }
          >
            <Adb sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                NamiComi
              </Typography>


              {
                pages.map((page, index) => <Link key={index + 'lfkdenwkflned'} to={page}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                </Link>)
              }
            </Box>

            <Box sx={{ flexGrow: 0 }}>

            </Box>
          </Container>
          <Container>
            <TextField
              sx={{
                "& fieldset": { borderRadius: '40px', width: '300px', label: 'Поиск' },
              }}>
            </TextField>
          </Container>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
