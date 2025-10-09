// import React from "react";
// import { Box, Typography, Paper, useTheme, styled } from "@mui/material";
// import BoltIcon from "@mui/icons-material/Bolt";
// import SpeedIcon from "@mui/icons-material/Speed";
// import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
// import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

// const CardGrid = styled(Box)(({ theme }) => ({
//   display: "grid",
//   gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
//   gap: theme.spacing(3),
//   marginTop: theme.spacing(4),
// }));

// const FeatureCard = styled(Paper)(({ theme }) => ({
//   background: theme.palette.background.paper,
//   padding: theme.spacing(3),
//   borderRadius: 16,
//   boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
//   textAlign: "center",
//   transition: "all 0.3s ease",
//   cursor: "pointer",
//   "&:hover": {
//     transform: "translateY(-6px)",
//     boxShadow: "0 12px 30px rgba(0,0,0,0.45)",
//     border: `1px solid ${theme.palette.primary.light}`,
//     background: "linear-gradient(145deg, rgba(25,35,55,0.95), rgba(16,22,36,0.9))",
//   },
// }));

// const features = [
//   { title: "AI-Powered Speed", desc: "Accelerate dev workflow", icon: <SpeedIcon color="primary" /> },
//   { title: "Smart Suggestions", desc: "Intuitive code assistance", icon: <BoltIcon color="secondary" /> },
//   { title: "Vibe Coding", desc: "UX-first & performance focus", icon: <AutoAwesomeIcon color="success" /> },
//   { title: "Rapid Deployment", desc: "CI/CD ready workflow", icon: <RocketLaunchIcon color="error" /> },
// ];

// const FeatureHighlights = () => {
//   const theme = useTheme();
//   return (
//     <CardGrid>
//       {features.map((feature) => (
//         <FeatureCard key={feature.title}>
//           <Box sx={{ fontSize: 40, mb: 2 }}>{feature.icon}</Box>
//           <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
//             {feature.title}
//           </Typography>
//           <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
//             {feature.desc}
//           </Typography>
//         </FeatureCard>
//       ))}
//     </CardGrid>
//   );
// };

// export default FeatureHighlights;

import React from 'react';
import { Box, Typography, Grid, keyframes, styled, useTheme, Card } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import BoltIcon from '@mui/icons-material/Bolt';
import CodeIcon from '@mui/icons-material/Code';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LayersIcon from '@mui/icons-material/Layers';

// import BlinkingStyledLabel from "../commonComponents/BlinkingLabel";

// Styled components
const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 2),
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: theme.spacing(4),
}));

const FeatureCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  textAlign: 'center',
  boxShadow: theme.shadows[3],
  transition: 'all 0.3s ease',
  borderRadius: '13px',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 12px 30px rgba(0,0,0,0.45)',
    border: `1px solid ${theme.palette.primary.light}`,
  },
}));

const StackCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(1.5),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: `0 0 12px ${theme.palette.success.main}66`,
    transform: 'translateY(-3px)',
  },
}));

const DevelopmentStackCard = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: '500px',
  padding: '30px',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[5],
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 12px 30px rgba(0,0,0,0.45)',
    border: `1px solid ${theme.palette.primary.light}`,
  },
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

const AISection = () => {
  const theme = useTheme();

  // Feature data
  const featureCards = [
    {
      icon: <StarIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 1 }} />,
      title: 'AI-Assisted',
      desc: '60% faster development with AI tools',
    },
    {
      icon: <BoltIcon sx={{ fontSize: 40, color: theme.palette.success.main, mb: 1 }} />,
      title: 'Vibe Coding',
      desc: 'Intuitive UX with performance focus',
    },
  ];

  // Stack data
  const stackCards = [
    {
      icon: <CodeIcon sx={{ color: theme.palette.info.main }} />,
      title: 'Claude AI',
      bg: '#152230',
    },
    {
      icon: <BoltIcon sx={{ color: theme.palette.error.main }} />,
      title: 'GPT Integration',
      bg: '#464343ff',
    },
    {
      icon: <StarIcon sx={{ color: theme.palette.primary.main }} />,
      title: 'GitHub Copilot',
      bg: '#152230',
    },
    {
      icon: <LayersIcon sx={{ color: theme.palette.success.main }} />,
      title: 'Vibe-First Design',
      bg: '#464343ff',
    },
    {
      icon: <LayersIcon sx={{ color: theme.palette.success.main }} />,
      title: 'Rapid Deployment',
      bg: '#152230',
    },
  ];

  return (
    <Section>
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
          AI-Powered Development
        </BlinkingLabel>

        <Typography variant="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
          Building with <br />
          <span style={{ color: theme.palette.success.main }}>AI & Vibe Coding</span>
        </Typography>

        <Typography variant="body1" sx={{ maxWidth: 600, mb: 4 }}>
          I leverage cutting-edge AI tools like Claude, GPT, and Copilot to accelerate development
          while practicing <strong style={{ color: '#7ddea1' }}>vibe coding</strong> — creating
          applications that feel natural, intuitive, and engaging through thoughtful UX patterns and
          performance optimization.
        </Typography>

        <Grid container spacing={3}>
          {featureCards.map((card, index) => (
            <Grid item xs={12} md={6} key={index}>
              <FeatureCard>
                {card.icon}
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {card.title}
                </Typography>
                <Typography variant="body2">{card.desc}</Typography>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Right Section */}
      <DevelopmentStackCard>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <RocketLaunchIcon
            sx={{
              backgroundColor: '#223b49',
              color: '#fff',
              borderRadius: '5px',
              width: '30px',
              height: '30px',
              padding: '5px',
            }}
          />
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            AI Development Stack
          </Typography>
        </Box>

        <Box mt={4}>
          {stackCards.map((stack, index) => (
            <StackCard key={index} sx={{ backgroundColor: stack.bg }}>
              {stack.icon}
              <Typography>{stack.title}</Typography>
            </StackCard>
          ))}
        </Box>
      </DevelopmentStackCard>
    </Section>
  );
};

export default AISection;
