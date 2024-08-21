import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  TextField,
  IconButton,
  MenuItem,
  Menu
} from "@mui/material";
import { Adb } from "@mui/icons-material";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
import {MoreVertIcon} from '@mui/icons-material';

function Header() {
  const pages = ["library", "discover", "social", "more"];

  // const navigate = useNavigate()

  
  let location = useLocation();

  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    console.log(location)
    if (location.pathname === "/autorization") {
      setIsHidden(true);
    }
  }, [location])

  
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const handleMenuItemClick = (option) => {
      console.log('Selected option:', option);
      handleClose();
    };

  //const [anchorElNav, setAnchorElNav] = useState(null);
  // const [anchorElNav, setAnchorElNav] = useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  if (isHidden) {
    return null;
  }

  return (
    <AppBar
      position="static"
      sx={{ display: { xs: "none", md: "flex" }, mr: "0" }}
    >
      <Container sx={{ margin: "0", width: "100%" }} maxWidth="false">
        <Toolbar
          disableGutters
          sx={{
            display: { xs: "none", md: "flex" },
            maxWidth: "100%",
            mr: "0",
            justifyContent: "space-between",
          }}
        >
          <Container
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              alignItems: "center",
              maxWidth: "100%",
            }}
          >
            <Adb sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "flex", alignItems: "center" },
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                NamiComi
              </Typography>

              {pages.map((page, index) => (
                <Link key={index + "lfkdenwkflned"} to={page}>
                  <Button sx={{ my: 2, color: "black", display: "block" }}>
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}></Box>
          </Container>
          <Container
            sx={{
              my: 2,
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              marginRight: "15rem",
            }}
          >
            <TextField
              sx={{
                "& fieldset": {
                  borderRadius: "40px",
                  width: "300px",
                  label: "Поиск",
                },
              }}
            ></TextField>
            <div>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem id='login' onClick={() => handleMenuItemClick('Option 1')}>Option 1</MenuItem>
        <MenuItem id='register' onClick={() => handleMenuItemClick('Option 2')}>Option 2</MenuItem>
        <MenuItem id='settings' onClick={() => handleMenuItemClick('Option 3')}>Option 3</MenuItem>
      </Menu>
    </div>
          </Container>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
