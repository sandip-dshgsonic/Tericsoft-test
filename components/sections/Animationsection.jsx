'use client';

import React, { useEffect, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  BarChart3, Users, Zap, Clock, Shield, TrendingUp,
  ChevronRight, ArrowRight, DollarSign, Target,
  Rocket, Globe, Code, Database
} from 'lucide-react';

// Animated Background with SVG Waves
const WaveBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <motion.div
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute inset-0"
    >
      <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full">
        <motion.path
          fill="rgba(59, 130, 246, 0.05)"
          animate={{
            d: [
              "M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,165.3C672,160,768,96,864,96C960,96,1056,160,1152,186.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,154.7C672,160,768,224,864,224C960,224,1056,160,1152,133.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>
    </motion.div>
  </div>
);

// Animated Stat Card
// const StatCard = ({ icon: Icon, title, value, unit, delay, description }) => {
//   const [ref, inView] = useInView({ triggerOnce: true });
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.8, delay }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl overflow-hidden"
//     >
//       <motion.div
//         animate={isHovered ? { scale: 1.2, rotate: 12 } : { scale: 1, rotate: 0 }}
//         className="absolute top-2 right-2 text-blue-500/20"
//       >
//         <Icon size={80} />
//       </motion.div>
      
//       <div className="relative z-10">
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={inView ? { scale: 1 } : {}}
//           transition={{ delay: delay + 0.3, type: "spring" }}
//           className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-4"
//         >
//           <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
//         </motion.div>
        
//         <h2 className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-2">{title}</h2>
//         <p className="text-gray-600 dark:text-gray-300">{description}</p>

//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={inView ? { opacity: 1, x: 0 } : {}}
//           transition={{ delay: delay + 0.5 }}
//           className="text-4xl font-bold text-gray-900 dark:text-gray-100"
//         >
//           <motion.span
//             initial={{ opacity: 0 }}
//             animate={inView ? { opacity: 1 } : {}}
//             transition={{ duration: 2, delay: delay + 0.7 }}
//           >
//             {value}
//           </motion.span>
//           <span className="text-blue-500 ml-1">{unit}</span>
//         </motion.div>
//       </div>

//       <motion.div
//         initial={false}
//         animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
//         className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10"
//       />
//     </motion.div>
//   );
// };

// Animated Feature Card
const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl overflow-hidden"
    >
      <motion.div
        animate={isHovered ? { scale: 1.1, y: -5 } : { scale: 1, y: 0 }}
        className="relative z-10"
      >
        <motion.div
          animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 0.5 }}
          className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-4"
        >
          <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </motion.div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </motion.div>

      <motion.div
        animate={isHovered ? { opacity: 1, scale: 1.1 } : { opacity: 0, scale: 1 }}
        className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-purple-500/5 to-pink-500/5"
      />
    </motion.div>
  );
};

// Main Component
export default function ModernNabisShowcase() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <WaveBackground />
      
      {/* Hero Section */}
      <div className="relative pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <motion.div
            animate={{
              scale: [1, 1.02, 1],
              transition: { duration: 3, repeat: Infinity }
            }}
          >
            <h4 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Nabis ODC Success Story
            </h4>
          </motion.div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-1">
            Transforming operations through strategic offshore development
          </p>
        </motion.div>
      </div>

      {/* Stats Section */}
      {/* <div className="container mx-auto px-4 mb-32">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <StatCard
    icon={TrendingUp}
    title="Increased Workforce Efficiency"
    description="Productivity boost"
    value="30"
    unit="%"
    delay={0.6}
  />
  <StatCard
    icon={BarChart3}
    title="Total Cost Reduction"
    description="Average savings achieved"
    value="40"
    unit="%"
    delay={0.2}
  />
  <StatCard
    icon={Zap}
    title="Operation Streamlined"
    description="Improvement in efficiency"
    value="60"
    unit="%"
    delay={0.4}
  />
</div> 

      </div> */}

      {/* Features Section */}
      <div className="container mx-auto px-4 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Globe}
            title="24/7 Operations"
            description="Continuous development cycles accelerating time-to-market"
            delay={0.2}
          />
          <FeatureCard
            icon={Users}
            title="Access to Talent"
            description="Leverage expertise of Indian software developers"
            delay={0.4}
          />
          <FeatureCard
            icon={Shield}
            title="Risk Mitigation"
            description="Shared responsibilities reduce project delivery risks"
            delay={0.6}
          />
          <FeatureCard
            icon={Rocket}
            title="Rapid Scaling"
            description="Quick team expansion based on project demands"
            delay={0.8}
          />
          <FeatureCard
            icon={Code}
            title="Tech Excellence"
            description="Access to cutting-edge development practices"
            delay={1.0}
          />
          <FeatureCard
            icon={Database}
            title="Resource Optimization"
            description="Efficient allocation of development resources"
            delay={1.2}
          />
        </div>
      </div>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg z-50"
        style={{
          boxShadow: '0 0 20px rgba(37, 99, 235, 0.5)'
        }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ArrowRight className="w-6 h-6" />
      </motion.button>
    </div>
  );
}