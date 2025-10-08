// src/components/about/Education.jsx
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
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const EducationContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(8, 2),
}));

const EducationCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: '20px',
  background: 'linear-gradient(135deg, #101624, #0a0f1c)',
  color: theme.palette.text.primary,
  boxShadow: '0px 8px 24px rgba(0,0,0,0.4)',
  width: '100%',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4),
  },
}));

export default function Education() {
  const educationDetails = [
    {
      icon: <SchoolIcon color="primary" />,
      title: 'Bachelor of Science (B.Sc.) in Information Technology',
      institution: 'V.P.M R.Z Shah College, Mumbai, Maharashtra',
      year: '2022 - 2025',
    },
    {
      icon: <SchoolIcon color="primary" />,
      title: 'Senior Secondary (Class XII), Central Board of Secondary Education (CBSE)',
      institution: 'A.B.S International School & College',
      year: '2020 - 2022',
    },
  ];

  const certifications = [
    {
      icon: <WorkspacePremiumIcon color="secondary" />,
      name: 'React.js Developer',
      org: 'Tech Paathshala, Mumbai',
      year: '2023',
    },
    {
      icon: <WorkspacePremiumIcon color="success" />,
      name: 'Node.js Developer',
      org: 'Tech Paathshala, Mumbai',
      year: '2024',
    },
  ];

  const achievements = [
    {
      icon: <EmojiEventsIcon sx={{ color: '#ffb400' }} />,
      text: 'Led a 5-member team to design & deploy a college website, increasing student engagement by 40%.',
    },
    {
      icon: <EmojiEventsIcon sx={{ color: '#ffb400' }} />,
      text: 'Promoted to Lead Intern after consistently outperforming peers in project delivery.',
    },
    {
      icon: <EmojiEventsIcon sx={{ color: '#ffb400' }} />,
      text: 'Successfully delivered 4 full-scale projects from development to deployment, ensuring client satisfaction.',
    },
  ];

  return (
    <EducationContainer id="education">
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          color: 'primary.main',
          mb: 4,
          textAlign: 'center',
        }}
      >
        Education & Certifications
      </Typography>

      <EducationCard>
        <Box sx={{ display: { xs: 'block', md: 'flex' }, justifyContent: 'space-between' }}>
          {/* Education */}
          <Box sx={{ marginLeft: { xs: '0px', md: '-5px' } }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Education
            </Typography>
            <List dense>
              {educationDetails.map((edu, index) => (
                <ListItem key={index} sx={{ alignItems: 'center', py: 1 }}>
                  <ListItemIcon sx={{ minWidth: '40px' }}>{edu.icon}</ListItemIcon>
                  <ListItemText
                    primary={edu.title}
                    secondary={`${edu.institution} | ${edu.year}`}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Certifications */}
          <Box sx={{ mr: { xs: '0px', md: '20px' } }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Certifications
            </Typography>
            <List dense>
              {certifications.map((cert, index) => (
                <ListItem key={index} sx={{ alignItems: 'center', py: 1 }}>
                  <ListItemIcon sx={{ minWidth: '40px' }}>{cert.icon}</ListItemIcon>
                  <ListItemText primary={cert.name} secondary={`${cert.org} | ${cert.year}`} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>

        {/* Achievements */}
        <Box sx={{ mt: '20px' }}>
          <Typography variant="h5" sx={{ mb: 1 }}>
            Achievements
          </Typography>
          <List dense>
            {achievements.map((ach, index) => (
              <ListItem key={index} sx={{ py: 1 }}>
                <ListItemIcon sx={{ minWidth: '40px' }}>{ach.icon}</ListItemIcon>
                <ListItemText primary={ach.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </EducationCard>
    </EducationContainer>
  );
}
