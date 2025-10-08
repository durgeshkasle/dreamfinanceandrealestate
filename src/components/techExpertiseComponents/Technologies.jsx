import React from 'react';
import { Box, Grid, Typography, styled, useTheme } from '@mui/material';

// ==== Import MUI Icons ====
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import StarIcon from '@mui/icons-material/Star';
import StorageIcon from '@mui/icons-material/Storage';
import BugReportIcon from '@mui/icons-material/BugReport';
import TimelineIcon from '@mui/icons-material/Timeline';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import DashboardIcon from '@mui/icons-material/Dashboard';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CloudIcon from '@mui/icons-material/Cloud';
import BuildIcon from '@mui/icons-material/Build';
import TerminalIcon from '@mui/icons-material/Terminal';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import SecurityIcon from '@mui/icons-material/Security';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import DataObjectIcon from '@mui/icons-material/DataObject';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import ApiIcon from '@mui/icons-material/Api';
import WebIcon from '@mui/icons-material/Web';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SdStorageIcon from '@mui/icons-material/SdStorage';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HttpsIcon from '@mui/icons-material/Https';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import WidgetsIcon from '@mui/icons-material/Widgets';
import AnimationIcon from '@mui/icons-material/Animation';

// ======== Styled Components ========
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
  width: '400px',
  height: '1300px',
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
    width: '100%',
    maxWidth: '400px',
    minWidth: '320px',
    height: '100%',
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
const Technologies = () => {
  const theme = useTheme();

  const sections = [
    {
      title: 'Frontend',
      sectionIcon: <WebIcon sx={{ color: '#42a5f5', fontSize: '2rem', mr: 1 }} />,
      items: [
        {
          name: 'React.js',
          desc: 'Building dynamic UIs',
          icon: <CodeIcon sx={{ color: '#61dafb' }} />,
        },
        {
          name: 'Next.js',
          desc: 'Server-side rendering',
          icon: <RocketLaunchIcon sx={{ color: '#fff' }} />,
        },
        {
          name: 'JavaScript',
          desc: 'Core programming language',
          icon: <CodeIcon sx={{ color: '#f7df1e' }} />,
        },
        {
          name: 'Material UI',
          desc: 'UI component library',
          icon: <DesignServicesIcon sx={{ color: '#00b0ff' }} />,
        },
        {
          name: 'Tailwind CSS',
          desc: 'Utility-first CSS',
          icon: <DeveloperModeIcon sx={{ color: '#38bdf8' }} />,
        },
        {
          name: 'Redux Toolkit',
          desc: 'State Management',
          icon: <TimelineIcon sx={{ color: '#764abc' }} />,
        },
        {
          name: 'React Query',
          desc: 'Data fetching & caching',
          icon: <SyncAltIcon sx={{ color: '#00bfa5' }} />,
        },

        {
          name: 'Framer Motion',
          desc: 'Smooth animations',
          icon: <StarIcon sx={{ color: '#e91e63' }} />,
        },
        { name: 'Jest', desc: 'Unit testing', icon: <BugReportIcon sx={{ color: '#f4511e' }} /> },
        {
          name: 'React Hook Form',
          desc: 'Form handling & validation',
          icon: <AssignmentTurnedInIcon sx={{ color: '#4caf50' }} />,
        },
        {
          name: 'Yup',
          desc: 'Schema-based validation',
          icon: <CheckCircleIcon sx={{ color: '#ff9800' }} />,
        },
        {
          name: 'Axios / Fetch',
          desc: 'API requests',
          icon: <HttpsIcon sx={{ color: '#03a9f4' }} />,
        },
        // { name: "ESLint & Prettier", desc: "Code quality & formatting", icon: <SpellcheckIcon sx={{ color: "#ff5722" }} /> },

        // { name: "Storybook", desc: "UI component explorer", icon: <ViewInArIcon sx={{ color: "#ff4081" }} /> },
        // { name: "Vite", desc: "Fast frontend build tool", icon: <RocketLaunchIcon sx={{ color: "#673ab7" }} /> },
        {
          name: 'Chakra UI / Shadcn UI',
          desc: 'Component libraries',
          icon: <WidgetsIcon sx={{ color: '#00bcd4' }} />,
        },
        // { name: "Lottie / Rive", desc: "Animations & motion", icon: <AnimationIcon sx={{ color: "#e91e63" }} /> },
      ],
    },
    {
      title: 'Backend',
      sectionIcon: <StorageOutlinedIcon sx={{ color: '#ffb300', fontSize: '2rem', mr: 1 }} />,
      items: [
        {
          name: 'Node.js',
          desc: 'Runtime environment',
          icon: <TerminalIcon sx={{ color: '#68a063' }} />,
        },
        {
          name: 'Express.js',
          desc: 'Web framework',
          icon: <AssignmentIcon sx={{ color: '#ffffff' }} />,
        },
        {
          name: 'MongoDB',
          desc: 'NoSQL Database',
          icon: <StorageRoundedIcon sx={{ color: '#4db33d' }} />,
        },
        { name: 'REST APIs', desc: 'API development', icon: <ApiIcon sx={{ color: '#00e5ff' }} /> },
        {
          name: 'JWT Auth',
          desc: 'Secure authentication',
          icon: <SecurityIcon sx={{ color: '#ff4081' }} />,
        },
        { name: 'Firebase', desc: 'Cloud backend', icon: <CloudIcon sx={{ color: '#ffca28' }} /> },
        {
          name: 'TypeScript',
          desc: 'Typed JavaScript',
          icon: <DataObjectIcon sx={{ color: '#3178c6' }} />,
        },
        {
          name: 'Mongoose',
          desc: 'MongoDB ODM',
          icon: <SdStorageIcon sx={{ color: '#4db33d' }} />,
        },
        { name: 'Postman', desc: 'API testing', icon: <BuildIcon sx={{ color: '#ff6d00' }} /> },
        {
          name: 'Supertest',
          desc: 'API testing',
          icon: <AssessmentIcon sx={{ color: '#2962ff' }} />,
        },
      ],
    },
    {
      title: 'Tools & Platforms',
      sectionIcon: <SettingsApplicationsIcon sx={{ color: '#ab47bc', fontSize: '2rem', mr: 1 }} />,
      items: [
        {
          name: 'Git & GitHub',
          desc: 'Version control',
          icon: <BugReportIcon sx={{ color: '#f4511e' }} />,
        },
        {
          name: 'Vercel / Netlify',
          desc: 'Deployment',
          icon: <RocketLaunchIcon sx={{ color: '#00c853' }} />,
        },
        { name: 'Postman', desc: 'API testing', icon: <BuildIcon sx={{ color: '#ff6d00' }} /> },
        { name: 'VS Code', desc: 'Code Editor', icon: <WorkIcon sx={{ color: '#2979ff' }} /> },
        {
          name: 'Courser AI',
          desc: 'AI learning assistant',
          icon: <PsychologyIcon sx={{ color: '#ff4081' }} />,
        },
        {
          name: 'Windsurf AI',
          desc: 'AI-powered development',
          icon: <SmartToyIcon sx={{ color: '#00bfa5' }} />,
        },
        { name: 'ChatGPT', desc: 'AI assistant', icon: <SmartToyIcon sx={{ color: '#8e24aa' }} /> },
        {
          name: 'Figma',
          desc: 'Design collaboration',
          icon: <DashboardIcon sx={{ color: '#a259ff' }} />,
        },
        {
          name: 'JIRA',
          desc: 'Agile management',
          icon: <GroupWorkIcon sx={{ color: '#0288d1' }} />,
        },
        { name: 'Docker', desc: 'Containerization', icon: <CloudIcon sx={{ color: '#0db7ed' }} /> },
      ],
    },
  ];

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
          Technical Expertise
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.secondary,
            maxWidth: 650,
            mx: 'auto',
            lineHeight: 1.6,
          }}
        >
          Showcasing professional expertise across modern web technologies, frameworks, and tools.
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {sections.map((section) => (
          <Grid key={section.title} item xs={12} sm={10} md={8}>
            <SkillCard>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                {section.sectionIcon}
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.primary.light,
                  }}
                >
                  {section.title}
                </Typography>
              </Box>

              {section.items.map((item) => (
                <SkillItem key={item.name}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconWrapper>{item.icon}</IconWrapper>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 500,
                          color: theme.palette.text.primary,
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.secondary,
                        }}
                      >
                        {item.desc}
                      </Typography>
                    </Box>
                  </Box>
                </SkillItem>
              ))}
            </SkillCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Technologies;
