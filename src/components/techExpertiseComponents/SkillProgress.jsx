import React from 'react';
import { Box, Typography, LinearProgress, styled, useTheme } from '@mui/material';

// ===== Styled Component =====
const Container = styled(Box)(({ theme }) => ({
  padding: '50px 24px',
  [theme.breakpoints.down('sm')]: {
    padding: '60px 16px',
  },
}));

const SkillCard = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: '20px',
  padding: '40px',
  width: '100%',
  margin: '0 auto',
  boxShadow: '0 6px 18px rgba(0,0,0,0.35)',
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
  },
}));

const ProgressWrapper = styled(Box)(({ theme }) => ({
  marginBottom: '16px',
}));

// ===== Skill Data =====
const skillsData = [
  { skill: 'React.js', level: 90 },
  { skill: 'Next.js', level: 85 },
  { skill: 'Node.js', level: 80 },
  { skill: 'MongoDB', level: 75 },
  { skill: 'Material UI', level: 88 },
  { skill: 'Redux Toolkit', level: 82 },
  { skill: 'TypeScript', level: 70 },
  { skill: 'Framer Motion', level: 65 },
  { skill: 'Axios / Fetch', level: 85 },
];

const SkillProgress = () => {
  const theme = useTheme();

  return (
    <Container>
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 1,
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          My Skill Proficiency
        </Typography>
      </Box>

      <SkillCard>
        {skillsData.map((item) => (
          <ProgressWrapper key={item.skill}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
              <Typography variant="subtitle2" sx={{ color: theme.palette.text.primary }}>
                {item.skill}
              </Typography>
              <Typography variant="subtitle2" sx={{ color: theme.palette.text.secondary }}>
                {item.level}%
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={item.level}
              sx={{
                height: 10,
                borderRadius: 5,
                backgroundColor: 'rgba(255,255,255,0.1)',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 5,
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                },
              }}
            />
          </ProgressWrapper>
        ))}
      </SkillCard>
    </Container>
  );
};

export default SkillProgress;
