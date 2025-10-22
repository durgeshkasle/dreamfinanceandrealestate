import React from 'react';

// @mui Components :-
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { useTheme, styled } from '@mui/material/styles';

// ========= Styled Components ===========
const StyledCard = styled(Card)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: '20px',
  overflow: 'hidden',
  width: '100%',
  width: '600px',
  transition: 'all 0.4s ease',
  border: `1px solid rgba(255,255,255,0.08)`,
  boxShadow: '0 6px 18px rgba(0,0,0,0.35)',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 12px 30px rgba(0,0,0,0.45)',
    border: `1px solid ${theme.palette.primary.light}`,
  },

  [theme.breakpoints.down('sm')]: {
    width: '300px',
  },
}));

// ========= Component =========
export default function ProjectCards(props) {
  const { projects = [] } = props;
  const theme = useTheme();

  return (
    <Box sx={{ py: { sm: 2, md: 5 }, px: { md: 0, sm: 2 } }}>
      <h1>Error: No projects found</h1>
    </Box>
  );
}
