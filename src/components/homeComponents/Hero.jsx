import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { styled, keyframes, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Import images
import homeImage from '../../assets/images/homeImages/home-images.jpeg';
import loanImage from '../../assets/images/homeImages/home.jpeg';

// ===== Keyframe Animations =========
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

// ===== Styled Components =========
const HeroContainer = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: '80vh',
  position: 'relative',
  overflow: 'hidden',
  marginLeft: 'calc(-50vw + 50%)',
  marginRight: 'calc(-50vw + 50%)',
  maxWidth: 'none',
  marginTop: -23,
  paddingTop: 0,
  boxShadow: '0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(202, 175, 92, 0.1)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 30% 20%, rgba(202, 175, 92, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(202, 175, 92, 0.05) 0%, transparent 50%)',
    zIndex: 1,
    pointerEvents: 'none',
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '110%',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const HeroImage = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  opacity: 0.3,
  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
  filter: 'brightness(0.7) contrast(1.1)',
  '&:hover': {
    transform: 'scale(1.02)',
    opacity: 0.4,
  },
}));

const Overlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.4) 100%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 50% 50%, rgba(202, 175, 92, 0.1) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(0,0,0,0.5)',
  color: 'white',
  zIndex: 3,
  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
}));

const ContactButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
  color: 'white',
  padding: '16px 32px',
  borderRadius: '30px',
  fontWeight: 700,
  textTransform: 'none',
  fontSize: '1.2rem',
  boxShadow: '0 8px 25px rgba(202, 175, 92, 0.3), 0 0 0 1px rgba(202, 175, 92, 0.2)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
    transition: 'left 0.5s ease',
  },
  '&:hover': {
    background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
    transform: 'translateY(-3px) scale(1.05)',
    boxShadow: '0 12px 35px rgba(202, 175, 92, 0.4), 0 0 0 1px rgba(202, 175, 92, 0.3)',
    '&::before': {
      left: '100%',
    },
  },
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  animation: `${fadeInUp} 1s ease-out 0.5s both`,
}));

const ImageIndicator = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '80px',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: '8px',
  zIndex: 3,
}));

const IndicatorDot = styled(Box)(({ theme, active }) => ({
  width: active ? '16px' : '12px',
  height: active ? '16px' : '12px',
  borderRadius: '50%',
  backgroundColor: active ? theme.palette.primary.main : 'rgba(255,255,255,0.4)',
  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: active ? '0 0 20px rgba(202, 175, 92, 0.5)' : '0 0 0px rgba(202, 175, 92, 0)',
  '&:hover': {
    backgroundColor: active ? theme.palette.primary.dark : 'rgba(255,255,255,0.8)',
    transform: 'scale(1.2)',
    boxShadow: '0 0 25px rgba(202, 175, 92, 0.6)',
  },
}));

// ========== Component ==========
export default function Hero() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    {
      src: homeImage,
      alt: 'Dream Finance Home',
      title: 'Welcome to Dream Finance & Real Estate',
      subtitle: 'Your Financial and Real Estate Dreams, Our Priority',
      description: 'Experience premium financial services with personalized solutions tailored to your unique needs'
    },
    {
      src: loanImage,
      alt: 'Real Estate Services',
      title: 'Real Estate Solutions',
      subtitle: 'Your Property Dreams, Our Expertise',
      description: 'From property investment to real estate financing, we provide comprehensive solutions to help you achieve your property goals'
    },
  ];

  // Manual navigation only - no auto-slide

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const handleContactUs = () => {
    navigate('/contact');
  };

  return (
    <HeroContainer id="hero">
      <ImageContainer>
        <HeroImage
          sx={{
            backgroundImage: `url(${images[currentImageIndex].src})`,
          }}
        />
        
        <Overlay>
          <Box sx={{ 
            textAlign: 'center', 
            maxWidth: '800px', 
            px: 3,
            animation: `${fadeInUp} 1s ease-out 0.2s both`
          }}>
            <Typography
              variant="h1"
              sx={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 50%, #e0e0e0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 800,
                textAlign: 'center',
                mb: 2,
                textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                fontSize: { xs: '2.5rem', md: '4rem' },
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              {images[currentImageIndex].title}
            </Typography>
            
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.primary.main,
                textAlign: 'center',
                mb: 2,
                fontWeight: 600,
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                fontSize: { xs: '1.3rem', md: '1.8rem' },
                animation: `${fadeInUp} 1s ease-out 0.4s both`
              }}
            >
              {images[currentImageIndex].subtitle}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255,255,255,0.9)',
                textAlign: 'center',
                mb: 10,
                fontWeight: 400,
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                fontSize: { xs: '1rem', md: '1.2rem' },
                lineHeight: 1.6,
                maxWidth: '600px',
                margin: '0 auto',
                animation: `${fadeInUp} 1s ease-out 0.6s both`
              }}
            >
              {images[currentImageIndex].description}
            </Typography>

            <Box sx={{ mt: 3 }}>
              <ContactButton
                endIcon={<ArrowForwardIcon />}
                onClick={handleContactUs}
                size="large"
              >
                Get Started Today
              </ContactButton>
            </Box>
          </Box>
        </Overlay>

        {/* Navigation Buttons */}
        {/* <NavigationButton
          onClick={prevImage}
          sx={{ left: '20px' }}
        >
          <ChevronLeftIcon />
        </NavigationButton>
        
        <NavigationButton
          onClick={nextImage}
          sx={{ right: '20px' }}
        >
          <ChevronRightIcon />
        </NavigationButton> */}

        {/* Image Indicators */}
        <ImageIndicator>
          {images.map((_, index) => (
            <IndicatorDot
              key={index}
              active={index === currentImageIndex}
              onClick={() => goToImage(index)}
            />
          ))}
        </ImageIndicator>
      </ImageContainer>
    </HeroContainer>
  );
}
