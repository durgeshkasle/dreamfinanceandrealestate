import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// @mui Components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// ======== Styled Components ========
const Container = styled(Box)(({ theme }) => ({
  padding: '50px 24px',
  [theme.breakpoints.down('sm')]: {
    padding: '10px 16px',
  },
}));

const SkillCard = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: '20px',
  padding: '40px',
  width: '400px',
  height: '1300px',
  margin: '0 auto',
  boxShadow: '0 6px 18px rgba(0,0,0,0.35)',
  background: 'linear-gradient(145deg, #0f172a, #111827)',
  border: '1px solid rgba(255,255,255,0.08)',
  transition: 'all 0.35s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 30px rgba(0,0,0,0.45)',
    border: `1px solid ${theme.palette.primary.light}`,
    background: 'linear-gradient(145deg, rgba(25,35,55,0.95), rgba(16,22,36,0.9))',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '28px',
    width: '340px',
    height: '100%',
    overflowY: 'auto',
    height: '600px',
  },
}));

const SkillItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  background: 'rgba(255,255,255,0.05)',
  borderRadius: '12px',
  padding: '14px 20px',
  marginBottom: '14px',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    background: 'rgba(255,255,255,0.1)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '12px 16px',
  },
}));

const IconWrapper = styled(Box)(() => ({
  fontSize: '1.8rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '18px',
}));

// ======== Component =========
export default function Technologies(props) {
  const { technologiesSectionsData = [] } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [activeTab, setActiveTab] = useState(0);
  const [isAuto, setIsAuto] = useState(true);

  // ===== Auto Switch Logic (only for mobile) =====
  useEffect(() => {
    if (!isMobile || !isAuto) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev === technologiesSectionsData.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [isMobile, isAuto, technologiesSectionsData.length]);

  const handleTabChange = (_, newValue) => {
    setActiveTab(newValue);
    setIsAuto(false); // Stop auto switching after manual click
  };

  // ===== Motion Variants =====
  const variants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <Container>
      <h1>Error : No projects found</h1>
    </Container>
  );
}
