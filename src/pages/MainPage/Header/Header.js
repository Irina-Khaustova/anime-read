import { AppBar, IconButton, Toolbar, Typography, Box, MenuItem, Menu, Button, Container, TextField, Link } from '@mui/material';
//import { useState } from 'react';
import {Adb} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

function Header() {

    const pages = ['library', 'discover', 'social', 'more'];
    const hj ='/lybrary'


    //const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElNav, setAnchorElNav] = useState(null);
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  

  
    return (
        <AppBar position="static" sx={{mr: '0'}}>
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
            
            
              {pages.map((page) => (
                <Button
                component={Link} to={`/${page}`}
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
  
            <Box sx={{ flexGrow: 0 }}>
              
            </Box>
            </Container>
            <Container>
                <TextField 
               sx={{
                "& fieldset": { borderRadius: '40px', width: '300px', label: 'Поиск'},
              }}>
                </TextField>
            </Container>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }

export default Header;
