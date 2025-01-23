'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, UserCheck, UserCog } from 'lucide-react';

const teamStructure = [
  {
    icon: Users,
    title: 'High Level Arbitration',
    description: 'Executive oversight and strategic decision-making.',
    color: 'bg-blue-500 dark:bg-blue-600',
    gradient: 'from-blue-500 to-blue-300 dark:from-blue-600 dark:to-blue-400',
  },
  {
    icon: UserCheck,
    title: 'Steering Committee',
    description: 'Project governance and quality assurance.',
    color: 'bg-purple-500 dark:bg-purple-600',
    gradient: 'from-purple-500 to-purple-300 dark:from-purple-600 dark:to-purple-400',
  },
  {
    icon: UserCog,
    title: 'Project Managers',
    description: 'Day-to-day operations and team coordination.',
    color: 'bg-green-500 dark:bg-green-600',
    gradient: 'from-green-500 to-green-300 dark:from-green-600 dark:to-green-400',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 50,
    scale: 0.9
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
};

const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export default function TeamSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          ref={ref}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            variants={titleVariants}
            className="text-center mb-16"
          >
            <motion.h2
                        className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.2, duration: 0.8 }}
                      >
              Team Structure
            </motion.h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Our organized approach to team management ensures efficient delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamStructure.map((role, index) => (
              <motion.div
                key={role.title}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-2xl p-8 relative overflow-hidden group backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80"
              >
                {/* Animated background gradient */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className={`absolute -right-10 -top-10 w-40 h-40 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r ${role.gradient}`}
                />
                
                {/* Icon container */}
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${role.color} transform-gpu`}
                >
                  <role.icon size={32} className="text-white" />
                </motion.div>

                {/* Content */}
                <motion.h3 
                  className="text-2xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {role.title}
                </motion.h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {role.description}
                </p>

                {/* Animated underline */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />

                {/* Hover effect spotlight */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-white/0 to-purple-500/0 dark:via-blue-400/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}






// 'use client';

// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Users, UserCheck, UserCog } from 'lucide-react';

// const teamStructure = [
//   {
//     icon: Users,
//     title: 'High Level Arbitration',
//     description: 'Executive oversight and strategic decision-making.',
//   },
//   {
//     icon: UserCheck,
//     title: 'Steering Committee',
//     description: 'Project governance and quality assurance.',
//   },
//   {
//     icon: UserCog,
//     title: 'Project Managers',
//     description: 'Day-to-day operations and team coordination.',
//   },
// ];

// export default function TeamSection() {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <section id="team" className="section-padding">
//       <div className="container mx-auto container-padding">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="heading-2 mb-4">Team Structure</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Our organized approach to team management ensures efficient delivery
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {teamStructure.map((role, index) => (
//             <motion.div
//               key={role.title}
//               initial={{ opacity: 0, y: 20 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               className="card group hover:scale-105 transition-transform duration-300"
//             >
//               <div className="mb-4 text-primary-600 group-hover:scale-110 transition-transform duration-300">
//                 <role.icon size={32} />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
//               <p className="text-gray-600">{role.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }