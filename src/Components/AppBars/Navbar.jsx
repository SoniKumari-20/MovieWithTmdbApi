import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuIcon,
  MenuItem,
  Menu,
  AccountCircle,
  MoreIcon,
  Box,
  Button,
  Typography
} from "../AllData/MuiModules";

import "../style.css";
import { MyContext } from "../../Context/Mainprovider";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { page } = React.useContext(MyContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const { fetchMovieData, fetchTvData} = React.useContext(MyContext);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Log out</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={() => fetchTvData()}
        >
          Tv
        </Button>
      </MenuItem>
      <MenuItem>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={() => fetchMovieData(`/discover/movie?page=${page}`)}
        >
          Movies
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="static" sx={{ backgroundColor: "rgba(62,13,53,255)" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Link to="/">
              <span
                style={{
                  color: "white",
                  fontWeight: "bolder",
                  cursor: "pointer",
                }}
                onClick={() => fetchMovieData(`/discover/movie?page=${page}`)}
              >
                Movies & Tv
              </span>
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              sx={{
                height: "30px",
                marginTop: "8px",
                marginRight: "5px",
                backgroundColor: "white",
                color: "black",
              }}
              onClick={() =>fetchTvData()}
            >
              TV
            </Button>
            <Button
              sx={{
                height: "30px",
                marginTop: "8px",
                backgroundColor: "white",
                color: "black",
              }}
              onClick={() =>fetchMovieData(`/discover/movie?page=${page}`)}
            >
              Movies
            </Button>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
