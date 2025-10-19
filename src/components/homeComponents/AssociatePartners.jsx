import React, { useState } from 'react';
import { Box, Typography, Grid, Button, Card, CardContent } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

// ===== Styled Components =====
const PartnersContainer = styled(Box)(({ theme }) => ({
  width: '100vw',
  minHeight: '70vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'left',
  position: 'relative',
  background: 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 100%)',
  padding: theme.spacing(8, 4),
  overflow: 'hidden',
  marginLeft: 'calc(-50vw + 50%)',
  marginRight: 'calc(-50vw + 50%)',
  maxWidth: 'none',
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 20% 50%, rgba(202, 175, 92, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(202, 175, 92, 0.05) 0%, transparent 50%)',
    pointerEvents: 'none',
  },

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 2),
  },
}));

const PartnerCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(145deg, rgba(10, 20, 35, 0.8), rgba(20, 30, 45, 0.9))',
  borderRadius: '20px',
  border: '1px solid rgba(202, 175, 92, 0.2)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(202, 175, 92, 0.05)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  height: '200px',
  width: '280px',
  minWidth: '280px',
  maxWidth: '280px',
  display: 'flex',
  flexDirection: 'column',
  backdropFilter: 'blur(10px)',
  color: theme.palette.text.primary,
  cursor: 'pointer',
  flexShrink: 0,
  '&:hover': {
    transform: 'translateY(-8px) scale(1.02)',
    boxShadow: '0 16px 48px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(202, 175, 92, 0.25)',
    border: '1px solid rgba(202, 175, 92, 0.3)',
  },
}));

const ViewAllButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #CAAF5C 0%, #D4C070 50%, #A08F4A 100%)',
  color: '#000',
  fontWeight: 600,
  padding: theme.spacing(1.5, 4),
  borderRadius: '12px',
  textTransform: 'none',
  fontSize: '1.1rem',
  boxShadow: '0 8px 24px rgba(202, 175, 92, 0.3)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 12px 32px rgba(202, 175, 92, 0.4)',
    background: 'linear-gradient(135deg, #D4C070 0%, #CAAF5C 50%, #B8A85A 100%)',
  },
}));

// ===== Partner Data =====
const allPartners = [
  'IDFC FIRST Bank', 'Aditya Birla Capital', 'TATA CAPITAL Housing Finance', 'TATA CAPITAL',
  'IIFL', 'Indiabulls', 'Piramal Finance', 'SHRIRAM City',
  'U GRO CAPITAL', 'POONAWALLA FINCORP', 'VASTU HOUSING FINANCE', 'SUNDARAM FINANCE',
  'DBS', 'SBI', 'ARKA FINCAP', 'Aavishkaar Group',
  'BAJAJ HOUSING FINANCE', 'CREDIT SAISON INDIA', 'Equitas', 'ftcash',
  'HINDUJA HOUSING FINANCE', 'indifi', 'Inditrade', 'JM Financial',
  'InCred Finance', 'LIC HFL', 'LOAN WIRED', 'Mahindra Finance',
  'MAS Financial Services', 'Money Wide', 'NAVI', 'PROFECTUS CAPITAL',
  'Protium', 'POONAWALLA HOUSING FINANCE', 'Saraswat Bank', 'SBM Bank',
  'Shinhan Bank', 'SIDBI', 'SMC Finance', 'SURYODAY',
  'TEZZRACT', 'Unity Small Finance Bank', 'L&T Finance', 'Utkarsh Small Finance Bank',
  'TRU', 'TVS CREDIT', 'YES BANK', 'SMFG IndiaCredit',
  'CLIX', 'Capri Loans', 'AVANSE', 'MOTILAL OSWAL',
  'KreditBee', 'DMI Finance', 'fibe', 'HDFC BANK',
  'BHANGI FINANCE', 'Motilal Oswal Home Finance', 'ADITYA BIRLA CAPITAL HOME LOANS', 'DCB BANK',
  'DMI HOUSING FINANCE', 'Aavas', 'AU Small Finance Bank', 'Bajaj Finserv'
];

// ===== Component =====
export default function AssociatePartners() {
  const theme = useTheme();
  const [showAll, setShowAll] = useState(false);
  
  const displayedPartners = showAll ? allPartners : allPartners.slice(0, 8);

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <PartnersContainer id="associate-partners">
      <Box sx={{ 
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: theme.spacing(0, 4),
        position: 'relative',
        zIndex: 2,
        [theme.breakpoints.down('md')]: {
          padding: theme.spacing(0, 2),
        },
      }}>
        <Box sx={{ position: 'relative', zIndex: 2, mb: 6, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              background: 'linear-gradient(135deg, #CAAF5C 0%, #D4C070 50%, #A08F4A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              mb: 2,
              textAlign: { xs: 'center', md: 'left' },
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              textShadow: '0 4px 8px rgba(0,0,0,0.3)',
            }}
          >
            Associate Partners
          </Typography>
          
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255,255,255,0.8)',
              textAlign: { xs: 'center', md: 'left' },
              fontWeight: 400,
              maxWidth: '600px',
              margin: { xs: '0 auto', md: '0' },
              lineHeight: 1.6,
            }}
          >
            Trusted by leading financial institutions and banks across India
          </Typography>
        </Box>

        {/* Partners Grid */}
        <Grid container spacing={3} sx={{ 
          mb: 4,
          '& .MuiGrid-item': {
            display: 'flex',
            justifyContent: 'center',
          }
        }}>
          {displayedPartners.map((partner, index) => (
            <Grid item xs={12} sm={6} md={3} lg={3} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
              <PartnerCard>
                <CardContent sx={{ 
                  p: 2,
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  height: '100%',
                  width: '100%',
                  boxSizing: 'border-box',
                }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'rgba(255,255,255,0.9)',
                      fontWeight: 600,
                      fontSize: '1rem',
                      lineHeight: 1.3,
                      textAlign: 'center',
                      wordBreak: 'break-word',
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      maxHeight: '3.9em',
                    }}
                  >
                    {partner}
                  </Typography>
                </CardContent>
              </PartnerCard>
            </Grid>
          ))}
        </Grid>

        {/* View All Button */}
        <Box sx={{ textAlign: 'center' }}>
          <ViewAllButton
            onClick={handleToggleShowAll}
            variant="contained"
            size="large"
          >
            {showAll ? 'VIEW LESS' : 'VIEW ALL'}
          </ViewAllButton>
        </Box>

      </Box>
    </PartnersContainer>
  );
}
