
// import HeroSection from '../components/sections/HeroSection';
// import ChallengesSection from '../components/sections/ChallengesSection';
// import StrategySection from '../components/sections/StrategySection';
// import FeaturesSection from '../components/sections/FeaturesSection';
// import CostSection from '../components/sections/CostSection';
// import BenefitsSection from '../components/sections/BenefitsSection';
// import TeamSection from '../components/sections/TeamSection';
// import ResultsSection from '../components/sections/ResultsSection';



// export default function Home() {
//   return (
//     <>
//       <HeroSection />
//       <ChallengesSection />
//       <StrategySection />
//       <FeaturesSection />
//       <CostSection />
//       <BenefitsSection />
//       <TeamSection />
//       <ResultsSection />
//     </>
//   );
// }


'use client';

import { motion } from 'framer-motion';
import HeroSection from '../components/sections/HeroSection';
import ChallengesSection from '../components/sections/ChallengesSection';
import StrategySection from '../components/sections/StrategySection';
import FeaturesSection from '../components/sections/FeaturesSection';
import CostSection from '../components/sections/CostSection';
import BenefitsSection from '../components/sections/BenefitsSection';
import TeamSection from '../components/sections/TeamSection';
import ResultsSection from '../components/sections/ResultsSection';
import Animationsection from '../components/sections/Animationsection'
import VideoShowcase from '../components/sections/Videoshowcase';
import VideoShowcase2 from '@/components/sections/videoshowcase2';

const BackgroundVideo = () => (
  <div className="fixed inset-0 w-full h-full -z-10">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover scale-105"
      style={{ filter: 'brightness(0.7) contrast(1.1)' }}
    >
      <source src="/Videos/Buisness.mp4" type="video/mp4" />
    </video>
    {/* Modern gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/75 to-gray-900/90"></div>
    {/* Mesh gradient for added depth */}
    <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[radial-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-primary-600 to-purple-600"></div>
  </div>
);

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="relative min-h-screen"
  >
    {children}
  </motion.div>
);

const ContentContainer = ({ children }) => (
  <div className="relative z-10 backdrop-blur-sm">
    {children}
  </div>
);

export default function Home() {
  return (
    <PageWrapper>
      {/* Background Video */}
      <BackgroundVideo />
      
      {/* Content */}
      <ContentContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <HeroSection />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ChallengesSection />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <StrategySection />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FeaturesSection />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <CostSection />
          </motion.div>



          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <VideoShowcase />
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <BenefitsSection />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Animationsection />
          </motion.div>



          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* <VideoShowcase2 /> */}
          </motion.div>

          



          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <TeamSection />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ResultsSection />
          </motion.div>
        </motion.div>
      </ContentContainer>
    </PageWrapper>
  );
}