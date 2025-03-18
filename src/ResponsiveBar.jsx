import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

const pages = ['XR.Awareness', 'Method' , 'About'];


function ResponsiveAppBar( {getButtonCliked} ) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    getButtonCliked(event.target.innerText);
    setAnchorElNav(null);
  };


  return (
    <div style={{display: "flex", justifyContent: "center"}}>
        <AppBar position="sticky" sx={{width: "60%", borderRadius: "62px", marginTop: "2em" }}>
        <Container maxWidth="false" >
            <Toolbar disableGutters>
            <DashboardIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 3, fontSize: 40 }} />
            
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                >
                <MenuIcon />
                </IconButton>
                <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
                >
                {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            
            

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'left' }}>
                {pages.map((page) => (
                <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block', mr: 2 }}
                >
                    {page}
                </Button>
                ))}
            </Box>
                
            
            <TextField 
                hiddenLabel
                id="filled-hidden-label-small"
                type="search"
                defaultValue=""
                slotProps={{
                    input: {
                      startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                    }
                  }}
                size="small"
                sx={{ 
                    "& .MuiOutlinedInput-root": { 
                      borderRadius: "60px" // Change border-radius
                    },
                    marginRight: -1
                  }}
       
            />
  

            </Toolbar>
        </Container>
        </AppBar>
    </div>
  );
}
export default ResponsiveAppBar;
