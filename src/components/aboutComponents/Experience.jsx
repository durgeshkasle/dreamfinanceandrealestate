import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Icons
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import StarIcon from '@mui/icons-material/Star';
import StorageIcon from '@mui/icons-material/Storage';
import BugReportIcon from '@mui/icons-material/BugReport';
import TimelineIcon from '@mui/icons-material/Timeline';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import DashboardIcon from '@mui/icons-material/Dashboard';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AssignmentIcon from '@mui/icons-material/Assignment';

const ExperienceContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(8, 1),
}));

const ExperienceCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5, 3),
  borderRadius: '20px',
  background: 'linear-gradient(135deg, #101624, #0a0f1c)',
  color: theme.palette.text.primary,
  boxShadow: '0px 8px 24px rgba(0,0,0,0.4)',
  width: '100%',
}));

export default function Experience() {
  const theme = useTheme();

  const highlights = [
    {
      text: 'Proficient in building scalable full-stack applications using React.js, Node.js, Express, and MongoDB with clean and maintainable code.',
      icon: <CodeIcon color="primary" />,
    },
    {
      text: 'Hands-on experience in developing REST APIs, implementing JWT authentication, and delivering secure backend solutions.',
      icon: <WorkIcon color="secondary" />,
    },
    {
      text: 'Strong problem-solving skills with expertise in clean architecture, modular coding practices, and performance optimization.',
      icon: <StarIcon sx={{ color: '#ffb400' }} />,
    },
    {
      text: 'Collaborated effectively with cross-functional teams, following Agile methodology to deliver high-quality applications on time.',
      icon: <GroupWorkIcon color="info" />,
    },
    {
      text: 'Developed reusable and optimized UI components, managing state efficiently with Redux Toolkit and RTK Query.',
      icon: <AssignmentIcon color="success" />,
    },
    {
      text: 'Enhanced database performance through query optimization and indexing, reducing application response times by 25%.',
      icon: <StorageIcon color="warning" />,
    },
    {
      text: 'Integrated AI-assisted tools such as Windsurf AI to improve code efficiency, reduce bugs, and accelerate development workflows.',
      icon: <BugReportIcon color="error" />,
    },
    {
      text: 'Delivered multiple production-ready modules and applications for enterprise-level projects, including V5 Global.',
      icon: <RocketLaunchIcon color="primary" />,
    },
    {
      text: 'Designed and built interactive analytics dashboards and data visualization features using Highcharts and Recharts.',
      icon: <DashboardIcon color="secondary" />,
    },
    {
      text: 'Led a 5-member team to design and deploy a college website, increasing student engagement by more than 40%.',
      icon: <TimelineIcon color="info" />,
    },
    {
      text: 'Recognized as Lead Intern for consistently outperforming peers and contributing to successful project deliveries.',
      icon: <EmojiEventsIcon sx={{ color: '#ffb400' }} />,
    },
    {
      text: 'Worked on diverse projects including MagicBus, MultiAct, TOMOR, and Jarvis Analytics, handling both frontend and backend roles.',
      icon: <WorkIcon color="success" />,
    },
    {
      text: 'Skilled in debugging, troubleshooting, and maintaining large-scale applications to ensure high uptime and client satisfaction.',
      icon: <BugReportIcon color="secondary" />,
    },
  ];

  return (
    <ExperienceContainer id="experience">
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          color: 'primary.main',
          mb: 4,
          textAlign: 'center',
          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Professional Experience
      </Typography>

      <ExperienceCard>
        <Grid container spacing={4}>
          {/* Summary */}
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Professional Summary
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 2, color: 'text.secondary', pl: '25px', pr: '10px' }}
            >
              I’m a passionate <strong>MERN Stack Developer</strong> with{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>
                2 years 2 months
              </Box>{' '}
              of professional experience and{' '}
              <Box component="span" sx={{ color: 'secondary.main' }}>
                3 months internship
              </Box>
              . Skilled in designing, developing, and deploying full-stack web applications with
              clean and scalable code.
            </Typography>
          </Grid>

          {/* Key Highlights */}
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Key Highlights
            </Typography>
            <List sx={{ pl: { xs: 0, md: 1 }, pr: { xs: 0, md: 1 } }}>
              {highlights.map((item, i) => (
                <ListItem key={i} sx={{ py: 1 }}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </ExperienceCard>
    </ExperienceContainer>
  );
}
