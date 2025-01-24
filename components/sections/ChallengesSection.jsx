"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  DollarSign,
  Users,
  Clock,
  Shield,
  TrendingUp,
  PieChart,
  BarChart2,
  Target,
} from "lucide-react";
import { useState, useEffect } from "react";

const businessIcons = [TrendingUp, PieChart, BarChart2, Target];
const challenges = [
  {
    icon: DollarSign,
    title: "High Operational Costs",
    description:
      "Managing in-house teams and infrastructure leads to significant overhead costs.",
    gradient: "from-blue-500 to-cyan-500",
    darkGradient: "dark:from-blue-600 dark:to-cyan-600",
  },
  {
    icon: Users,
    title: "Talent Shortages",
    description:
      "Difficulty finding and retaining skilled professionals in competitive markets.",
    gradient: "from-purple-500 to-pink-500",
    darkGradient: "dark:from-purple-600 dark:to-pink-600",
  },
  {
    icon: Clock,
    title: "Project Delays",
    description:
      "Coordination issues and resource constraints causing project timeline extensions.",
    gradient: "from-orange-500 to-red-500",
    darkGradient: "dark:from-orange-600 dark:to-red-600",
  },
  {
    icon: Shield,
    title: "Quality Control Issues",
    description:
      "Maintaining consistent quality standards across distributed teams.",
    gradient: "from-green-500 to-emerald-500",
    darkGradient: "dark:from-green-600 dark:to-emerald-600",
  },
];

export default function ChallengesSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prev) => (prev + 1) % businessIcons.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Bounce animation variants for cards
  const bounceCardVariants = {
    offscreen: {
      y: 300,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <section
      id="challenges"
      className="py-20 relative overflow-hidden bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            Key Business Challenges
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Common obstacles businesses face when scaling their development
            operations
          </p>
        </div>
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
              variants={bounceCardVariants}
              className="relative group"
            >
              <div className="h-full relative z-10 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className={`mb-6 p-4 rounded-xl bg-gradient-to-br ${challenge.gradient} ${challenge.darkGradient} text-white inline-block`}>
                  <challenge.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-orange-500 dark:text-white">
                  {challenge.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
// 'use client';

// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { DollarSign, Users, Clock, Shield } from 'lucide-react';
// import { useState } from 'react';

// const challenges = [
//   {
//     icon: DollarSign,
//     title: 'High Operational Costs',
//     description: 'Managing in-house teams and infrastructure leads to significant overhead costs.',
//     gradient: 'from-blue-500 to-cyan-500',
//     darkGradient: 'dark:from-blue-600 dark:to-cyan-600'
//   },
//   {
//     icon: Users,
//     title: 'Talent Shortages',
//     description: 'Difficulty finding and retaining skilled professionals in competitive markets.',
//     gradient: 'from-purple-500 to-pink-500',
//     darkGradient: 'dark:from-purple-600 dark:to-pink-600'
//   },
//   {
//     icon: Clock,
//     title: 'Project Delays',
//     description: 'Coordination issues and resource constraints causing project timeline extensions.',
//     gradient: 'from-orange-500 to-red-500',
//     darkGradient: 'dark:from-orange-600 dark:to-red-600'
//   },
//   {
//     icon: Shield,
//     title: 'Quality Control Issues',
//     description: 'Maintaining consistent quality standards across distributed teams.',
//     gradient: 'from-green-500 to-emerald-500',
//     darkGradient: 'dark:from-green-600 dark:to-emerald-600'
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.3
//     }
//   }
// };

// const cardVariants = {
//   hidden: {
//     opacity: 0,
//     y: 50,
//     scale: 0.9
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       type: "spring",
//       stiffness: 100,
//       damping: 12
//     }
//   }
// };

// export default function ChallengesSection() {
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <section id="challenges" className="py-20 relative overflow-hidden bg-gray-50 dark:bg-gray-900">
//       {/* Background Elements */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute top-0 left-0 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
//         <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
//         <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="text-center mb-16"
//         >
//           {/* Decorative element */}
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={inView ? { scale: 1 } : {}}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="inline-block mb-4"
//           >
//             <span className="px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium">
//               Common Challenges
//             </span>
//           </motion.div>

//           <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
//             Key Business Challenges
//           </h2>
//           <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
//             Common obstacles businesses face when scaling their development operations
//           </p>
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//         >
//           {challenges.map((challenge, index) => (
//             <motion.div
//               key={challenge.title}
//               variants={cardVariants}
//               onHoverStart={() => setHoveredCard(index)}
//               onHoverEnd={() => setHoveredCard(null)}
//               className="relative group"
//             >
//               <div className="h-full relative z-10 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
//                 {/* Gradient background on hover */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${challenge.gradient} ${challenge.darkGradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />

//                 {/* Icon with animation */}
//                 <motion.div
//                   animate={hoveredCard === index ? {
//                     scale: [1, 1.2, 1],
//                     rotate: [0, 10, -10, 0],
//                     transition: { duration: 0.5 }
//                   } : {}}
//                   className={`mb-6 p-4 rounded-xl bg-gradient-to-br ${challenge.gradient} ${challenge.darkGradient} text-white inline-block`}
//                 >
//                   <challenge.icon size={24} />
//                 </motion.div>

//                 {/* Content */}
//                 <motion.h3
//                   className="text-xl font-bold mb-3 text-gray-900 dark:text-white"
//                   animate={hoveredCard === index ? { x: [0, 5, 0] } : {}}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {challenge.title}
//                 </motion.h3>
//                 <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
//                   {challenge.description}
//                 </p>

//                 {/* Interactive decoration */}
//                 <motion.div
//                   className="absolute bottom-4 right-4 text-primary-500/20 dark:text-primary-400/20"
//                   animate={hoveredCard === index ? {
//                     scale: [1, 1.2],
//                     rotate: 90,
//                   } : {}}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <challenge.icon size={40} />
//                 </motion.div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
