import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import { useTheme, styled } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Collapse from '@mui/material/Collapse';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SchoolIcon from '@mui/icons-material/School';
import RealEstateAgentIcon from '@mui/icons-material/RealEstateAgent';

// Import logo
import dreamLogo from '../../assets/images/homeImages/dream.jpg';

// Import modals
import HomeLoanModal from '../modals/HomeLoanModal';
import LoanAgainstPropertyModal from '../modals/LoanAgainstPropertyModal';
import BusinessLoanModal from '../modals/BusinessLoanModal';
import PersonalLoanModal from '../modals/PersonalLoanModal';
import CashCreditModal from '../modals/CashCreditModal';
import OverdraftModal from '../modals/OverdraftModal';
import EducationLoanModal from '../modals/EducationLoanModal';
import RealEstateModal from '../modals/RealEstateModal';

// ======== Styled Components =====
const GradientBorder = styled(Box)(({ theme }) => ({
  borderBottom: `0px solid transparent`,
  borderImage: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}) 1`,
}));

const AnimatedAppBar = styled(AppBar)(({ theme }) => ({
  background: '#000000',
  backdropFilter: 'blur(12px)',
  boxShadow: '0 6px 18px rgba(0,0,0,0.35)',
  transition: 'all 0.4s ease',
  animation: 'fadeInDown 1s ease',
  borderRadius: 0,
  '@keyframes fadeInDown': {
    '0%': { opacity: 0, transform: 'translateY(-20px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  },
}));

const LogoImage = styled('img')(({ theme }) => ({
  height: '40px',
  width: 'auto',
  objectFit: 'contain',
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const MenuButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  position: 'relative',
  fontWeight: 500,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: -2,
    width: 0,
    height: 2,
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.text.primary})`,
    transition: 'width 0.3s ease',
    borderRadius: 2,
  },
  '&:hover::after': {
    width: '100%',
  },
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: 'rgba(10, 20, 35, 0.95)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(202, 175, 92, 0.2)',
    borderRadius: '12px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(202, 175, 92, 0.1)',
    marginTop: '8px',
    minWidth: '250px',
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.text.primary,
  padding: theme.spacing(1.5, 2),
  '&:hover': {
    backgroundColor: 'rgba(202, 175, 92, 0.1)',
    color: theme.palette.primary.main,
  },
  '& .MuiListItemIcon-root': {
    color: theme.palette.primary.main,
    minWidth: '40px',
  },
}));

const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [financeMenuAnchor, setFinanceMenuAnchor] = useState(null);
  const [mobileFinanceExpanded, setMobileFinanceExpanded] = useState(false);
  const [currentPath, setCurrentPath] = useState(location.pathname);

  // Sync currentPath with actual route changes
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);
  
  // Modal states
  const [homeLoanModalOpen, setHomeLoanModalOpen] = useState(false);
  const [loanAgainstPropertyModalOpen, setLoanAgainstPropertyModalOpen] = useState(false);
  const [businessLoanModalOpen, setBusinessLoanModalOpen] = useState(false);
  const [personalLoanModalOpen, setPersonalLoanModalOpen] = useState(false);
  const [cashCreditModalOpen, setCashCreditModalOpen] = useState(false);
  const [overdraftModalOpen, setOverdraftModalOpen] = useState(false);
  const [educationLoanModalOpen, setEducationLoanModalOpen] = useState(false);
  const [realEstateModalOpen, setRealEstateModalOpen] = useState(false);

  const menuItems = [
    { label: 'Home', path: '/home' },
    { label: 'About Us', path: '/about' },
    { label: 'Finance', path: '/finance', hasDropdown: true },
    { label: 'Real Estate', path: '/real-estate', hasModal: true },
    { label: 'Contact Us', path: '/contact' },
  ];

  const financeMenuItems = [
    { label: 'Home Loan', icon: <HomeIcon />, modal: 'homeLoan' },
    { label: 'Loan Against Property', icon: <RealEstateAgentIcon />, modal: 'loanAgainstProperty' },
    { label: 'Business Loan', icon: <BusinessIcon />, modal: 'businessLoan' },
    { label: 'Personal Loan', icon: <PersonIcon />, modal: 'personalLoan' },
    { label: 'Cash Credit', icon: <AccountBalanceIcon />, modal: 'cashCredit' },
    { label: 'Overdraft Facility', icon: <AttachMoneyIcon />, modal: 'overdraft' },
    { label: 'Education Loan', icon: <SchoolIcon />, modal: 'educationLoan' },
  ];

  const handleFinanceMenuOpen = (event) => {
    setFinanceMenuAnchor(event.currentTarget);
  };

  const handleFinanceMenuClose = () => {
    setFinanceMenuAnchor(null);
  };

  const handleMobileFinanceToggle = () => {
    setMobileFinanceExpanded(!mobileFinanceExpanded);
  };

  const handleFinanceClick = (event) => {
    event.preventDefault();
    // Update URL to /finance without changing page content
    window.history.pushState({}, '', '/finance');
    // Update current path state for active styling
    setCurrentPath('/finance');
    // Open dropdown for immediate access to loan services
    setFinanceMenuAnchor(event.currentTarget);
  };

  const handleRealEstateClick = (event) => {
    event.preventDefault();
    // Update URL to /real-estate without changing page content
    window.history.pushState({}, '', '/real-estate');
    // Update current path state for active styling
    setCurrentPath('/real-estate');
    // Open Real Estate modal
    setRealEstateModalOpen(true);
  };

  const handleMenuItemClick = (modalType) => {
    handleFinanceMenuClose();
    switch (modalType) {
      case 'homeLoan':
        setHomeLoanModalOpen(true);
        break;
      case 'loanAgainstProperty':
        setLoanAgainstPropertyModalOpen(true);
        break;
      case 'businessLoan':
        setBusinessLoanModalOpen(true);
        break;
      case 'personalLoan':
        setPersonalLoanModalOpen(true);
        break;
      case 'cashCredit':
        setCashCreditModalOpen(true);
        break;
      case 'overdraft':
        setOverdraftModalOpen(true);
        break;
      case 'educationLoan':
        setEducationLoanModalOpen(true);
        break;
      default:
        break;
    }
  };

  return (
    <GradientBorder>
      <AnimatedAppBar position="sticky" elevation={0}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: { xs: 2, sm: 4, md: 8 },
            py: 1,
          }}
        >
          {/* === Logo Section === */}
          <Box
            sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            <LogoImage
              src={dreamLogo}
              alt="Dream Finance Logo"
            />
            <Typography sx={{color:"#CAAF5C",fontSize:"25px",mt:"3px",ml:"2px",fontWeight:600}}>Dream Finance & Real Estate</Typography>
          </Box>

          {/* === Desktop Menu === */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            {menuItems.map((item) => {
              // Handle both exact path match and root path redirect to home
              const isActive = currentPath === item.path || (item.path === '/home' && currentPath === '/');
              
              if (item.hasDropdown) {
                return (
                  <Box key={item.label}>
                    <MenuButton
                      onClick={handleFinanceClick}
                      sx={{
                        '&::after': {
                          width: isActive ? '100%' : 0,
                        },
                        color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
                        fontWeight: isActive ? 700 : 500,
                        transform: isActive ? 'scale(1.05)' : 'scale(1)',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {item.label}
                      <ArrowDropDownIcon sx={{ ml: 0.5, fontSize: '1.2rem' }} />
                    </MenuButton>
                    
                    <StyledMenu
                      anchorEl={financeMenuAnchor}
                      open={Boolean(financeMenuAnchor)}
                      onClose={handleFinanceMenuClose}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                    >
                      {financeMenuItems.map((menuItem) => (
                        <StyledMenuItem
                          key={menuItem.label}
                          onClick={() => handleMenuItemClick(menuItem.modal)}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            {menuItem.icon}
                            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                              {menuItem.label}
                            </Typography>
                          </Box>
                        </StyledMenuItem>
                      ))}
                    </StyledMenu>
                  </Box>
                );
              }
              
              if (item.hasModal) {
                return (
                  <MenuButton
                    key={item.label}
                    onClick={handleRealEstateClick}
                    sx={{
                      '&::after': {
                        width: isActive ? '100%' : 0,
                      },
                      color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
                      fontWeight: isActive ? 700 : 500,
                      transform: isActive ? 'scale(1.05)' : 'scale(1)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {item.label}
                  </MenuButton>
                );
              }
              
              return (
                <MenuButton
                  key={item.label}
                  component={Link}
                  to={item.path}
                  onClick={() => {}}
                  sx={{
                    '&::after': {
                      width: isActive ? '100%' : 0,
                    },
                    color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
                    fontWeight: isActive ? 700 : 500,
                    transform: isActive ? 'scale(1.05)' : 'scale(1)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {item.label}
                </MenuButton>
              );
            })}
          </Box>

          {/* === Mobile Menu Icon === */}
          <IconButton
            color="inherit"
            sx={{ display: { xs: 'flex', md: 'none' } }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AnimatedAppBar>

      {/* === Mobile Drawer Menu === */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: '#000000',
            color: theme.palette.text.primary,
            width: 220,
          },
        }}
      >
        <List>
          {menuItems.map((item) => {
            // Handle both exact path match and root path redirect to home
            const isActive = currentPath === item.path || (item.path === '/home' && currentPath === '/');
            
            if (item.hasDropdown) {
              return (
                <React.Fragment key={item.label}>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={handleMobileFinanceToggle}
                      sx={{
                        backgroundColor: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                        borderLeft: isActive
                          ? `3px solid ${theme.palette.primary.main}`
                          : '3px solid transparent',
                      }}
                    >
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontWeight: isActive ? 700 : 500,
                          textAlign: 'center',
                          color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
                        }}
                      />
                      {mobileFinanceExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ListItemButton>
                  </ListItem>
                  
                  <Collapse in={mobileFinanceExpanded} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {financeMenuItems.map((financeItem) => (
                        <ListItem key={financeItem.label} disablePadding>
                          <ListItemButton
                            onClick={() => {
                              handleMenuItemClick(financeItem.modal);
                              setDrawerOpen(false);
                              setMobileFinanceExpanded(false);
                            }}
                            sx={{
                              pl: 4,
                              backgroundColor: 'rgba(202, 175, 92, 0.05)',
                              '&:hover': {
                                backgroundColor: 'rgba(202, 175, 92, 0.1)',
                              },
                            }}
                          >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, width: '100%' }}>
                              {financeItem.icon}
                              <ListItemText
                                primary={financeItem.label}
                                primaryTypographyProps={{
                                  fontSize: '0.9rem',
                                  color: theme.palette.text.primary,
                                }}
                              />
                            </Box>
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </React.Fragment>
              );
            }
            
            if (item.hasModal) {
              return (
                <ListItem key={item.label} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      handleRealEstateClick({ preventDefault: () => {} });
                      setDrawerOpen(false);
                    }}
                    sx={{
                      backgroundColor: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                      borderLeft: isActive
                        ? `3px solid ${theme.palette.primary.main}`
                        : '3px solid transparent',
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontWeight: isActive ? 700 : 500,
                        textAlign: 'center',
                        color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            }
            
            return (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={() => {
                    setDrawerOpen(false);
                  }}
                  sx={{
                    backgroundColor: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                    borderLeft: isActive
                      ? `3px solid ${theme.palette.primary.main}`
                      : '3px solid transparent',
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: isActive ? 700 : 500,
                      textAlign: 'center',
                      color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>

      {/* Modals */}
      <HomeLoanModal 
        open={homeLoanModalOpen} 
        onClose={() => setHomeLoanModalOpen(false)} 
      />
      <LoanAgainstPropertyModal 
        open={loanAgainstPropertyModalOpen} 
        onClose={() => setLoanAgainstPropertyModalOpen(false)} 
      />
      <BusinessLoanModal 
        open={businessLoanModalOpen} 
        onClose={() => setBusinessLoanModalOpen(false)} 
      />
      <PersonalLoanModal 
        open={personalLoanModalOpen} 
        onClose={() => setPersonalLoanModalOpen(false)} 
      />
      <CashCreditModal 
        open={cashCreditModalOpen} 
        onClose={() => setCashCreditModalOpen(false)} 
      />
      <OverdraftModal 
        open={overdraftModalOpen} 
        onClose={() => setOverdraftModalOpen(false)} 
      />
      <EducationLoanModal 
        open={educationLoanModalOpen} 
        onClose={() => setEducationLoanModalOpen(false)} 
      />
      <RealEstateModal 
        open={realEstateModalOpen} 
        onClose={() => setRealEstateModalOpen(false)} 
      />
    </GradientBorder>
  );
};

export default Header;
