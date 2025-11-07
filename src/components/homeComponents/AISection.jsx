import React, { useState } from 'react';

// @mui Components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { keyframes, styled, useTheme } from '@mui/material/styles';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

// Import modals
import HomeLoanModal from '../modals/HomeLoanModal';
import LoanAgainstPropertyModal from '../modals/LoanAgainstPropertyModal';
import BusinessLoanModal from '../modals/BusinessLoanModal';
import PersonalLoanModal from '../modals/PersonalLoanModal';
import CashCreditModal from '../modals/CashCreditModal';
import EducationLoanModal from '../modals/EducationLoanModal';
import RealEstateModal from '../modals/RealEstateModal';
import MachineryLoanModal from '../modals/MachineryLoanModal';
import LRDLoanModal from '../modals/LRDLoanModal';

//======== Styled components ===========
const Section = styled(Box)(({ theme }) => ({
  width: '100vw',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  display: 'flex',
  height: 'calc(100vh - 100px)',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: theme.spacing(4),
  position: 'relative',
  background: 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 100%)',
  overflow: 'visible',
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
    height: '100%',
    padding: theme.spacing(6, 2, 0, 2),
  },
}));

const FeatureCard = styled(Box)(({ theme }) => ({
  width:"100%",
  padding: theme.spacing(3),
  borderRadius: '20px',
  textAlign: 'center',
  background: 'linear-gradient(145deg, rgba(10, 20, 35, 0.8), rgba(20, 30, 45, 0.9))',
  border: '1px solid rgba(202, 175, 92, 0.2)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(202, 175, 92, 0.05)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  backdropFilter: 'blur(10px)',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  minHeight: '160px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  // Add subtle pulse animation to indicate interactivity
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '0',
    height: '0',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(202, 175, 92, 0.1) 0%, transparent 70%)',
    transform: 'translate(-50%, -50%)',
    transition: 'all 0.6s ease',
    pointerEvents: 'none',
    zIndex: 1,
  },
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(202, 175, 92, 0.03) 0%, transparent 50%)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    zIndex: 2,
  },
  
  // Enhanced hover effects for clickability
  '&:hover': {
    transform: 'translateY(-12px) scale(1.03)',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(202, 175, 92, 0.3), 0 0 30px rgba(202, 175, 92, 0.2)',
    border: '1px solid rgba(202, 175, 92, 0.4)',
    background: 'linear-gradient(145deg, rgba(10, 20, 35, 0.9), rgba(20, 30, 45, 0.95))',

    '&::after': {
      width: '120%',
      height: '120%',
      background: 'radial-gradient(circle, rgba(202, 175, 92, 0.15) 0%, transparent 70%)',
    },
    
    '&::before': {
      opacity: 1,
    },

    '& .click-indicator': {
      opacity: 1,
      transform: 'translateY(0)',
    },

    '& .card-title': {
      color: theme.palette.primary.main,
      textShadow: '0 0 10px rgba(202, 175, 92, 0.3)',
    },

    '& svg': {
      transform: 'scale(1.15)',
      filter: 'drop-shadow(0 8px 16px rgba(202, 175, 92, 0.6))',
    },
  },

  '&:active': {
    transform: 'translateY(-8px) scale(1.02)',
    transition: 'all 0.1s ease',
  },

  // Add focus styles for accessibility
  '&:focus': {
    outline: 'none',
    boxShadow: '0 0 0 3px rgba(202, 175, 92, 0.3), 0 8px 32px rgba(0, 0, 0, 0.3)',
  },
}));

const StackCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.5),
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(1.5),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  position: 'relative',
  zIndex: 10,
  '&:hover': {
    boxShadow: `0 0 12px ${theme.palette.success.main}66`,
    transform: 'translateY(-3px)',
    backgroundColor: 'rgba(202, 175, 92, 0.1)',
    border: `0px solid ${theme.palette.primary.main}`,
    zIndex: 20,
  },
  '&:active': {
    transform: 'translateY(-1px)',
  },
}));

const DevelopmentStackCard = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: '500px',
  padding: '30px',
  maxHeight: '700px',
  background: 'linear-gradient(145deg, rgba(10, 20, 35, 0.8), rgba(20, 30, 45, 0.9))',
  border: '1px solid rgba(202, 175, 92, 0.2)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(202, 175, 92, 0.05)',
  borderRadius: '20px',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  backdropFilter: 'blur(10px)',
  position: 'relative',
  overflow: 'visible',
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(202, 175, 92, 0.03) 0%, transparent 50%)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  
  // '&:hover': {
  //   transform: 'translateY(-8px) scale(1.02)',
  //   boxShadow: '0 16px 48px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(202, 175, 92, 0.2)',
  //   border: '1px solid rgba(202, 175, 92, 0.3)',
    
  //   '&::before': {
  //     opacity: 1,
  //   },
  // },
}));

const BlinkingLabel = styled(Typography)(({ theme }) => {
  const blinkGlow = keyframes`
    0% {
      box-shadow: 0 0 5px ${theme.palette.primary.main},
                  0 0 10px ${theme.palette.primary.main},
                  0 0 20px ${theme.palette.primary.main};
    }
    50% {
      box-shadow: 0 0 15px ${theme.palette.primary.main},
                  0 0 30px ${theme.palette.primary.main},
                  0 0 45px ${theme.palette.primary.main};
    }
    100% {
      box-shadow: 0 0 5px ${theme.palette.primary.main},
                  0 0 10px ${theme.palette.primary.main},
                  0 0 20px ${theme.palette.primary.main};
    }
  `;

  return {
    display: 'inline-block',
    padding: theme.spacing(0.5, 2),
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    borderRadius: '20px',
    marginBottom: theme.spacing(2),
    animation: `${blinkGlow} 2s infinite ease-in-out`,
  };
});

// ========= Component ==========
export default function AISection(props) {
  const { featureCards = [], stackCards = [] } = props;
  const theme = useTheme();

  // Modal states
  const [homeLoanModalOpen, setHomeLoanModalOpen] = useState(false);
  const [loanAgainstPropertyModalOpen, setLoanAgainstPropertyModalOpen] = useState(false);
  const [businessLoanModalOpen, setBusinessLoanModalOpen] = useState(false);
  const [personalLoanModalOpen, setPersonalLoanModalOpen] = useState(false);
  const [cashCreditModalOpen, setCashCreditModalOpen] = useState(false);
  const [educationLoanModalOpen, setEducationLoanModalOpen] = useState(false);
  const [realEstateModalOpen, setRealEstateModalOpen] = useState(false);
  const [machineryLoanModalOpen, setMachineryLoanModalOpen] = useState(false);
  const [lrdLoanModalOpen, setLrdLoanModalOpen] = useState(false);

  const handleStackCardClick = (stackTitle) => {
    switch (stackTitle) {
      case 'Personal Loans':
        setPersonalLoanModalOpen(true);
        break;
      case 'Business Loans':
        setBusinessLoanModalOpen(true);
        break;
      case 'Home Loans':
        setHomeLoanModalOpen(true);
        break;
      case 'Loan Against Property (LAP)':
        setLoanAgainstPropertyModalOpen(true);
        break;
      case 'Education Loans':
        setEducationLoanModalOpen(true);
        break;
      case 'Working Capital - Cash Credit/Overdraft':
        setCashCreditModalOpen(true);
        break;
      case 'Machinery Loan':
        setMachineryLoanModalOpen(true);
        break;
      case 'Lease Rental Discounting (LRD)':
        setLrdLoanModalOpen(true);
        break;
      default:
        break;
    }
  };

  const handleKeyPress = (event, card) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (card.title === 'Finance') {
        // Scroll to the loan services section
        const loanServicesSection = document.getElementById('loan-services');
        if (loanServicesSection) {
          loanServicesSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    }
  };

  return (
    <>
    <Section>
      {/* Content Container */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        gap: theme.spacing(4),
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: theme.spacing(0, 4),
        position: 'relative',
        zIndex: 2,
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column',
          padding: theme.spacing(0, 2),
        },
      }}>
        {/* Left Section */}
        <Box flex={1} minWidth={300}>
        <BlinkingLabel
          variant="subtitle2"
          sx={{
            display: 'inline-block',
            padding: theme.spacing(0.5, 2),
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.primary.contrastText,
            borderRadius: '20px',
            mb: 4,
          }}
        >
          Dream Finance & Real Estate
        </BlinkingLabel>

        <Typography 
          variant="h1" 
          sx={{ 
            fontWeight: 'bold', 
            mb: 2,
            color: theme.palette.primary.main,
          }}
        >
          Company Introduction <br />
          {/* <span style={{ color: theme.palette.success.main }}>AI & Vibe Coding</span> */}
        </Typography>

        <Typography variant="body1" sx={{ maxWidth: 600, mb: 4 }}>
          Dream Finance is an authorized representative who works on behalf of a bank or financial
          institution to source loan applications and financial products from potential customers.
          We act as a link between borrowers and lenders, helping clients find the right loan
          options while assisting banks in expanding their customer base. Our role identify
          interested customers, collect their documents, and submit applications to the concerned
          bank or NBFC for processing.
        </Typography>

        <Grid container spacing={3} sx={{ justifyContent: { md: 'start', xs: 'center' } }}>
          {featureCards.map((card, index) => {
            const handleCardClick = () => {
              if (card.title === 'Finance') {
                // Scroll to the loan services section
                const loanServicesSection = document.getElementById('loan-services');
                if (loanServicesSection) {
                  loanServicesSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              } else if (card.title === 'Real Estate') {
                setRealEstateModalOpen(true);
              }
            };

            return (
              <Grid item xs={12} md={6} key={index}>
                <FeatureCard 
                  onClick={handleCardClick} 
                  onKeyDown={(e) => handleKeyPress(e, card)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Click to ${card.title === 'Finance' ? 'view loan services' : 'learn more about ' + card.title.toLowerCase()}`}
                  sx={{ 
                    cursor: 'pointer',
                    position: 'relative',
                    zIndex: 3,
                  }}
                >
                  <Box 
                    sx={{ 
                      mb: 1.5,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '50px',
                      position: 'relative',
                      zIndex: 3,
                      '& svg': {
                        filter: 'drop-shadow(0 4px 8px rgba(202, 175, 92, 0.3))',
                        transition: 'all 0.3s ease',
                      },
                    }}
                  >
                    {card.icon}
                  </Box>
                  
                  <Typography 
                    className="card-title"
                    variant="h6" 
                    sx={{ 
                      fontWeight: 'bold',
                      mb: 0.5,
                      fontSize: '1.1rem',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      zIndex: 3,
                    }}
                  >
                    {card.title}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      fontSize: '0.85rem',
                      lineHeight: 1.4,
                      position: 'relative',
                      zIndex: 3,
                    }}
                  >
                    {card.desc}
                  </Typography>

                  {/* Click indicator */}
                  <Box
                    className="click-indicator"
                    sx={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, rgba(202, 175, 92, 0.8), rgba(202, 175, 92, 0.6))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transform: 'translateY(-10px)',
                      transition: 'all 0.3s ease',
                      zIndex: 4,
                      '&::before': {
                        content: '"👆"',
                        fontSize: '10px',
                        filter: 'grayscale(0)',
                      },
                    }}
                  />
                </FeatureCard>
              </Grid>
            );
          })}
        </Grid>
      </Box>

        {/* Right Section */}
        <DevelopmentStackCard>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {/* <RocketLaunchIcon
            sx={{
              backgroundColor: '#223b49',
              color: '#fff',
              borderRadius: '5px',
              width: '30px',
              height: '30px',
              padding: '5px',
            }}
          /> */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              background: `white`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Loans and Facilities
          </Typography>
        </Box>

        <Box mt={4}>
          {stackCards.map((stack, index) => (
            <StackCard 
              key={index} 
              sx={{ backgroundColor: stack.bg }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('StackCard clicked directly:', stack.title);
                handleStackCardClick(stack.title);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log('StackCard key pressed:', stack.title);
                  handleStackCardClick(stack.title);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Click to open ${stack.title} modal`}
            >
              {stack.icon}
              <Typography>{stack.title}</Typography>
            </StackCard>
          ))}
        </Box>
        </DevelopmentStackCard>
      </Box>
    </Section>

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
    <EducationLoanModal 
      open={educationLoanModalOpen} 
      onClose={() => setEducationLoanModalOpen(false)} 
    />
    <RealEstateModal 
      open={realEstateModalOpen} 
      onClose={() => setRealEstateModalOpen(false)} 
    />
    <MachineryLoanModal 
      open={machineryLoanModalOpen} 
      onClose={() => setMachineryLoanModalOpen(false)} 
    />
    <LRDLoanModal 
      open={lrdLoanModalOpen} 
      onClose={() => setLrdLoanModalOpen(false)} 
    />
    </>
  );
}
