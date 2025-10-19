import React from 'react';

// @Mui Icons :-
import StarIcon from '@mui/icons-material/Star';
import BoltIcon from '@mui/icons-material/Bolt';
import CodeIcon from '@mui/icons-material/Code';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import RealEstateAgentIcon from '@mui/icons-material/RealEstateAgent';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LayersIcon from '@mui/icons-material/Layers';
import { useTheme } from '@mui/material/styles';

import Hero from '../components/homeComponents/Hero';
import AISection from '../components/homeComponents/AISection';

import QuickStats from '../components/homeComponents/QuickStats';
import DeveloperTerminal from '../components/homeComponents/DeveloperTerminal';
import GithubActivity from '../components/homeComponents/GithubActivity';
import ContributionStats from '../components/homeComponents/ContributionStats';
import Stats from '../components/aboutComponents/Stats';

// @mui cons
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import WorkIcon from '@mui/icons-material/Work';
import StorageIcon from '@mui/icons-material/Storage';
import BugReportIcon from '@mui/icons-material/BugReport';
import TimelineIcon from '@mui/icons-material/Timeline';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import DashboardIcon from '@mui/icons-material/Dashboard';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupIcon from '@mui/icons-material/Group';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import TerminalIcon from '@mui/icons-material/Terminal';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import ShieldIcon from '@mui/icons-material/Shield';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import FinanceStats from '../components/aboutComponents/FinanceStats';
import AssociatePartners from '../components/homeComponents/AssociatePartners';

const HomeContainer = () => {
  const theme = useTheme();
  // Feature data
  const featureCards = [
    {
      icon: <CurrencyRupeeIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 1 }} />,
      title: 'Finance',
      desc: 'Click here for finance related services',
    },
    {
      icon: <RealEstateAgentIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 1 }} />,
      title: 'Real Estate',
      desc: 'Click here for real-estate related services',
    },
  ];

  // Stack data
  const stackCards = [
    {
      icon: <CurrencyRupeeIcon sx={{ color: theme.palette.info.main }} />,
      title: 'Personal Loans',
      bg: '#152230',
    },
    {
      icon: <BusinessIcon sx={{ color: theme.palette.error.main }} />,
      title: 'Business Loans',
      bg: '#152230',
    },
    {
      icon: <HomeIcon sx={{ color: theme.palette.primary.main }} />,
      title: 'Home Loans',
      bg: '#152230',
    },
    {
      icon: <RealEstateAgentIcon sx={{ color: theme.palette.error.main }} />,
      title: 'Loan Against Property (LAP)',
      bg: '#152230',
    },
    {
      icon: <SchoolIcon sx={{ color: theme.palette.success.main }} />,
      title: 'Education Loans',
      bg: '#152230',
    },
    {
      icon: <AccountBalanceIcon sx={{ color: theme.palette.info.main }} />,
      title: 'Cash Credit Facilities',
      bg: '#152230',
    },
    {
      icon: <AttachMoneyIcon sx={{ color: theme.palette.primary.main }} />,
      title: 'Overdraft Facilities',
      bg: '#152230',
    },
  ];

    // ====== Finance stats Page data =========
    const stats = [
      {
        icon: <WorkIcon color="primary" sx={{ fontSize: 40 }} />,
        // number: '2+',
        label: 'Instant Loan Approval',
      },
      {
        icon: <ShieldIcon color="success" sx={{ fontSize: 40 }} />,
        // number: '4',
        label: 'Secure Data',
      },
      {
        icon: <ContentCopyIcon color="info" sx={{ fontSize: 40}} />,
        // number: '3 mo',
        label: 'Multiple Products',
      },
      {
        icon: <SupportAgentIcon color="error" sx={{ fontSize: 40 }} />,
        // number: '2',
        label: 'Excellent Customer Support',
      },
    
    ];

        // ====== Stats Page data =========
        const financestats = [
          {
            icon: <HomeIcon color="primary" sx={{ fontSize: 40 }} />,
            // number: '2+',
            label: 'Home Loan',
          },
          {
            icon: <RealEstateAgentIcon color="success" sx={{ fontSize: 40 }} />,
            // number: '4',
            label: 'Loan Against Property',
          },
          {
            icon: <BusinessIcon color="info" sx={{ fontSize: 40}} />,
            // number: '3 mo',
            label: 'Business Loan',
          },
          {
            icon: <CurrencyRupeeIcon color="error" sx={{ fontSize: 40 }} />,
            // number: '2',
            label: 'Personal Loan',
          },
          {
            icon: <AccountBalanceIcon color="primary" sx={{ fontSize: 40 }} />,
            // number: '2+',
            label: 'Cash Credit ',
          },
          {
            icon: <AttachMoneyIcon color="success" sx={{ fontSize: 40 }} />,
            // number: '4',
            label: 'Overdraft Facility',
          },
          {
            icon: <SchoolIcon color="info" sx={{ fontSize: 40}} />,
            // number: '3 mo',
            label: 'Education Loan',
          },
        ];
    

  return (
    <>
      <Hero />
      <AISection featureCards={featureCards} stackCards={stackCards} />
      <Stats stats={stats}/>
      <FinanceStats stats={financestats}/>
      <AssociatePartners />
      {/* <QuickStats/> */}
      {/* <DeveloperTerminal/> */}
      {/* <GithubActivity/> */}
      {/* <ContributionStats/> */}
    </>
  );
};

export default HomeContainer;
