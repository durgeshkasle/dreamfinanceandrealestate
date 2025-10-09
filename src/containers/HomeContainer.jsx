import React from 'react';
import HeroSection from '../components/homeComponents/HeroSection';
import QuickStats from '../components/homeComponents/QuickStats';
import DeveloperTerminal from '../components/homeComponents/DeveloperTerminal';
import GithubActivity from '../components/homeComponents/GithubActivity';
import ContributionStats from '../components/homeComponents/ContributionStats';
import AISection from '../components/homeComponents/AISection';

const HomeContainer = () => {
  return (
    <>
      <HeroSection />
      <AISection />
      {/* <QuickStats/> */}
      {/* <DeveloperTerminal/> */}
      {/* <GithubActivity/> */}
      {/* <ContributionStats/> */}
    </>
  );
};

export default HomeContainer;
