import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);




  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };




  return (
    <>
  
        <AppBar position="fixed" className='headcolor'>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ display: { xs: 'none', gap: 50 }, fontFamily: "Times" }} className="nav-container ">
                <Link href={'/'} className='items'>Home</Link>
                <Link href={'/exchanges'} className='items'>Exchange</Link>
                <Link href={'/rates'} className='items'>Rates</Link>
                <Link href={'/markets'} className='items'>Market</Link>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

    </>
  );
};

export default Header;
