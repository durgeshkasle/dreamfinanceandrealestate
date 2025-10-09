import React from 'react';

// @mui Components :-
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

// ========= Style Components ===========
const StatsContainer = styled(Box)(({ theme }) => ({
  minHeight: '60vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(6, 2),
}));

const StatCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '20px',
  background: 'linear-gradient(135deg, #101624, #0a0f1c)',
  color: theme.palette.text.primary,
  boxShadow: '0px 8px 20px rgba(0,0,0,0.3)',
  textAlign: 'center',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  width: '290px',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0px 12px 28px rgba(0,0,0,0.45)',
  },
}));

// ========= Component ===========
export default function Stats(props) {
  const { stats = [] } = props;

  return (
    <StatsContainer id="stats">
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          color: 'primary.main',
          mb: { md: 6, xs: 3 },
          textAlign: 'center',
        }}
      >
        My Stats
      </Typography>

      <Grid container spacing={4} sx={{ justifyContent: { md: 'space-between', xs: 'center' } }}>
        {stats.map((stat, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
            <StatCard>
              <Box sx={{ mb: 2 }}>{stat.icon}</Box>
              <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main' }}>
                {stat.number}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                {stat.label}
              </Typography>
            </StatCard>
          </Grid>
        ))}
      </Grid>
    </StatsContainer>
  );
}
