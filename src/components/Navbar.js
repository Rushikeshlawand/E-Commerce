// src/components/PrimarySearchAppBar.js
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button'; // Import Button for navigation links
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// Styled components for Search bar
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 'auto', // Push search bar to the right
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from SearchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '12ch',
    '&:focus': {
      width: '20ch',
    },
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false); // State for the drawer

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // Handlers for Profile Menu
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handlers to close menus
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  // Handlers to open mobile menu
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  // Handlers to toggle Drawer
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  // Menu for Profile
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
     <MenuItem component={Link} to="../component/Login" onClick={handleMenuClose}>
      <p>Login</p>
    </MenuItem>
    <MenuItem component={Link} to="/SignUp" onClick={handleMenuClose}>
      <p>Sign Up</p>
    </MenuItem>
    </Menu>
  );

  // Mobile Menu
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* Navigation Links in Mobile Menu */}
      <MenuItem component={Link} to="/men">
        <p>Men</p>
      </MenuItem>
      <MenuItem component={Link} to="/women-clothes">
        <p>Women</p>
      </MenuItem>
      <MenuItem component={Link} to="/electronics">
        <p>Electronics</p>
      </MenuItem>
      <MenuItem component={Link} to="/shoes">
        <p>Shoes</p>
      </MenuItem>
      <MenuItem component={Link} to="/kids-wear">
        <p>Kids Wear</p>
      </MenuItem>
      <MenuItem component={Link} to="/toys">
        <p>Toys</p>
      </MenuItem>
      <MenuItem component={Link} to="/contact-us">
        <p>Contact Us</p>
      </MenuItem>
      

      {/* Other Mobile Menu Items */}
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 4 new mails"
          color="inherit"
        >
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  // Drawer Content
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} to="/men-clothes">
          <ListItemText primary="Men" />
        </ListItem>
        <ListItem button component={Link} to="/women-clothes">
          <ListItemText primary="Women" />
        </ListItem>
        <ListItem button component={Link} to="/electronics">
          <ListItemText primary="Electronics" />
        </ListItem>
        <ListItem button component={Link} to="/shoes">
          <ListItemText primary="Shoes" />
        </ListItem>
        <ListItem button component={Link} to="/kids-wear">
          <ListItemText primary="Kids Wear" />
        </ListItem>
        <ListItem button component={Link} to="/toys">
          <ListItemText primary="Toys" />
        </ListItem>
        {/* Add Contact Us to the Drawer */}
        <ListItem button component={Link} to="/contact">
          <ListItemText primary="Contact Us" />
        </ListItem>
      </List>
      <ListItem button component={Link} to="/sign-up">
  <ListItemText primary="SignUp" />
</ListItem>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* Icon Button to Open Drawer */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)} // Open drawer
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* E-Commerce Title */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              E-Commerce
            </Link>
          </Typography>

          {/* Navigation Links: Men, Women, Electronics, Shoes, Kids Wear, Contact Us */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 2 }}>
            <Button component={Link} to="/men-clothes" color="inherit">
              Men
            </Button>
            <Button component={Link} to="/women-clothes" color="inherit">
              Women
            </Button>
            <Button component={Link} to="/electronics" color="inherit">
              Electronics
            </Button>
            <Button component={Link} to="/shoes" color="inherit">
              Shoes
            </Button>
            <Button component={Link} to="/kids-wear" color="inherit">
              Kids Wear
            </Button>
            <Button component={Link} to="/contact" color="inherit">
              Contact Us
            </Button>
          </Box>

          {/* Spacer to push search bar to the right */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Search Bar */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          {/* Icons for Larger Screens */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
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

          {/* Hamburger Menu for Mobile */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
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

      {/* Render Menus */}
      {renderMobileMenu}
      {renderMenu}

      {/* Drawer for the Toggle Menu */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </Box>
  );
}
