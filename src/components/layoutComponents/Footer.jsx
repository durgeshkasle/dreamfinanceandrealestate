import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Grid, Typography, IconButton, Menu, MenuItem, ListItemIcon } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

// MUI Icons
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
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

// ===== Styled Components =====
const FooterContainer = styled(Box)(({ theme }) => ({
  width: '100vw',
  background: '#000000',
  borderTop: `2px solid ${theme.palette.primary.main}`,
  marginLeft: 'calc(-50vw + 50%)',
  marginRight: 'calc(-50vw + 50%)',
  maxWidth: 'none',
  marginTop: 0,
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(3),
  position: 'relative',
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 20% 50%, rgba(202, 175, 92, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(202, 175, 92, 0.04) 0%, transparent 50%)',
    pointerEvents: 'none',
  },
}));

const LogoImage = styled('img')(({ theme }) => ({
  height: '50px',
  width: 'auto',
  objectFit: 'contain',
  marginBottom: theme.spacing(2),
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: 'rgba(255,255,255,0.7)',
  textDecoration: 'none',
  display: 'block',
  marginBottom: theme.spacing(1),
  fontSize: '0.95rem',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
    paddingLeft: theme.spacing(1),
  },
}));

const ContactItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(2),
  color: 'rgba(255,255,255,0.7)',
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: 'rgba(255,255,255,0.7)',
  border: '1px solid rgba(202, 175, 92, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: 'rgba(202, 175, 92, 0.1)',
    borderColor: theme.palette.primary.main,
    transform: 'translateY(-3px)',
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

const ClickableText = styled(Typography)(({ theme }) => ({
  color: 'rgba(255,255,255,0.7)',
  display: 'block',
  marginBottom: theme.spacing(1),
  fontSize: '0.95rem',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
    paddingLeft: theme.spacing(1),
  },
}));

// ===== Component =====
const Footer = () => {
  const theme = useTheme();
  const [financeMenuAnchor, setFinanceMenuAnchor] = useState(null);
  
  // Modal states
  const [homeLoanModalOpen, setHomeLoanModalOpen] = useState(false);
  const [loanAgainstPropertyModalOpen, setLoanAgainstPropertyModalOpen] = useState(false);
  const [businessLoanModalOpen, setBusinessLoanModalOpen] = useState(false);
  const [personalLoanModalOpen, setPersonalLoanModalOpen] = useState(false);
  const [cashCreditModalOpen, setCashCreditModalOpen] = useState(false);
  const [overdraftModalOpen, setOverdraftModalOpen] = useState(false);
  const [educationLoanModalOpen, setEducationLoanModalOpen] = useState(false);
  const [realEstateModalOpen, setRealEstateModalOpen] = useState(false);

  const quickLinks = [
    { label: 'Home', path: '/home', type: 'link' },
    { label: 'About Us', path: '/about', type: 'link' },
    { label: 'Finance Services', path: '/finance', type: 'dropdown' },
    { label: 'Real Estate', path: '/real-estate', type: 'modal' },
    { label: 'Contact Us', path: '/contact', type: 'link' },
  ];

  const financeMenuItems = [
    { label: 'Home Loan', icon: <HomeIcon />, modal: 'homeLoan' },
    { label: 'Loan Against Property', icon: <RealEstateAgentIcon />, modal: 'loanAgainstProperty' },
    { label: 'Business Loan', icon: <BusinessIcon />, modal: 'businessLoan' },
    { label: 'Personal Loan', icon: <PersonIcon />, modal: 'personalLoan' },
    { label: 'Cash Credit', icon: <AccountBalanceIcon />, modal: 'cashCredit' },
    { label: 'Overdraft Facility', icon: <AccountBalanceIcon />, modal: 'overdraft' },
    { label: 'Education Loan', icon: <SchoolIcon />, modal: 'educationLoan' },
  ];

  const services = [
    'Home Loan',
    'Business Loan',
    'Personal Loan',
    'Loan Against Property',
    'Education Loan',
    'Real Estate Services',
  ];

  const socialLinks = [
    { icon: <FacebookIcon />, url: 'https://facebook.com', label: 'Facebook' },
    { icon: <InstagramIcon />, url: 'https://instagram.com', label: 'Instagram' },
    { icon: <LinkedInIcon />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <TwitterIcon />, url: 'https://twitter.com', label: 'Twitter' },
  ];

  const handleFinanceMenuOpen = (event) => {
    setFinanceMenuAnchor(event.currentTarget);
  };

  const handleFinanceMenuClose = () => {
    setFinanceMenuAnchor(null);
  };

  const handleFinanceMenuItemClick = (modalType) => {
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

  const handleRealEstateClick = () => {
    setRealEstateModalOpen(true);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/918976437111', '_blank', 'noopener,noreferrer');
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <FooterContainer>
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
        <Grid container spacing={4} sx={{ position: 'relative', zIndex: 2, justifyContent: 'space-between' }}>
          {/* Company Info */}
          <Grid item xs={12} sm={6} md={2.5}>
            <LogoImage src={dreamLogo} alt="Dream Finance Logo" />
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 700,
                mb: 2,
              }}
            >
              Dream Finance & Real Estate
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.7,
                mb: 2,
              }}
            >
              Your trusted partner for comprehensive financial solutions and real estate services across Mumbai.
            </Typography>
            
            {/* Social Media */}
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
              {socialLinks.map((social, index) => (
                <SocialButton
                  key={index}
                  size="small"
                  onClick={() => handleSocialClick(social.url)}
                  aria-label={social.label}
                >
                  {social.icon}
                </SocialButton>
              ))}
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 700,
                mb: 2,
              }}
            >
              Quick Links
            </Typography>
            {quickLinks.map((link, index) => {
              if (link.type === 'dropdown') {
                return (
                  <ClickableText 
                    key={index} 
                    onClick={handleFinanceMenuOpen}
                    variant="body2"
                  >
                    {link.label}
                  </ClickableText>
                );
              } else if (link.type === 'modal') {
                return (
                  <ClickableText 
                    key={index} 
                    onClick={handleRealEstateClick}
                    variant="body2"
                  >
                    {link.label}
                  </ClickableText>
                );
              } else {
                return (
                  <FooterLink key={index} to={link.path}>
                    {link.label}
                  </FooterLink>
                );
              }
            })}
            
            {/* Finance Dropdown Menu */}
            <StyledMenu
              anchorEl={financeMenuAnchor}
              open={Boolean(financeMenuAnchor)}
              onClose={handleFinanceMenuClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              {financeMenuItems.map((menuItem) => (
                <StyledMenuItem
                  key={menuItem.label}
                  onClick={() => handleFinanceMenuItemClick(menuItem.modal)}
                >
                  <ListItemIcon>
                    {menuItem.icon}
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {menuItem.label}
                  </Typography>
                </StyledMenuItem>
              ))}
            </StyledMenu>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={2.5}>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 700,
                mb: 2,
              }}
            >
              Our Services
            </Typography>
            {services.map((service, index) => (
              <Typography
                key={index}
                variant="body2"
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  mb: 1,
                  fontSize: '0.95rem',
                }}
              >
                • {service}
              </Typography>
            ))}
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3.5}>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 700,
                mb: 2,
              }}
            >
              Contact Us
            </Typography>

            <ContactItem>
              <LocationOnIcon sx={{ color: theme.palette.primary.main, fontSize: 20, mt: 0.3 }} />
              <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                Shop No 23, Ground floor, Evershine Mall,
                Chincholi Bundar Signal, Malad West - Mumbai 400 062
              </Typography>
            </ContactItem>

            <ContactItem>
              <EmailIcon sx={{ color: theme.palette.primary.main, fontSize: 20 }} />
              <Typography variant="body2">
                dreamfinanceandrealestate@gmail.com
              </Typography>
            </ContactItem>

            <ContactItem>
              <PhoneIcon sx={{ color: theme.palette.primary.main, fontSize: 20 }} />
              <Box>
                <Typography variant="body2">8976437111</Typography>
                <Typography variant="body2">8451921125</Typography>
              </Box>
            </ContactItem>

      
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            mt: 4,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255,255,255,0.6)',
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            © {new Date().getFullYear()} Dream Finance & Real Estate. All Rights Reserved.
          </Typography>
          
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255,255,255,0.6)',
              textAlign: { xs: 'center', sm: 'right' },
            }}
          >
            Designed with ❤️ by Dream Finance Team
          </Typography>
        </Box>
      </Container>

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
    </FooterContainer>
  );
};

export default Footer;
