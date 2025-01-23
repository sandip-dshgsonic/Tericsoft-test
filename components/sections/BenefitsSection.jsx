// 'use client';

// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Lightbulb, Clock, Shield, Users, Scale } from 'lucide-react';

// const benefits = [
//   {
//     icon: Lightbulb,
//     title: 'Enhanced Innovation',
//     description: 'Access to diverse perspectives and cutting-edge technologies.',
//   },
//   {
//     icon: Clock,
//     title: '24/7 Operations',
//     description: 'Round-the-clock development and support capabilities.',
//   },
//   {
//     icon: Shield,
//     title: 'Risk Mitigation',
//     description: 'Reduced operational and compliance risks through expert management.',
//   },
//   {
//     icon: Users,
//     title: 'Access to Talent',
//     description: 'Tap into a vast pool of skilled technology professionals.',
//   },
//   {
//     icon: Scale,
//     title: 'Scalability',
//     description: 'Flexible team scaling based on project requirements.',
//   },
// ];

// export default function BenefitsSection() {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <section id="benefits" className="section-padding bg-gray-50 dark:bg-gray-900">
//       <div className="container mx-auto container-padding">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="heading-2 mb-4 text-gray-900 dark:text-gray-100">ODC Benefits</h2>
//           <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             Discover the advantages of partnering with Tericsoft for your ODC needs
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {benefits.map((benefit, index) => (
//             <motion.div
//               key={benefit.title}
//               initial={{ opacity: 0, y: 20 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               className="card group hover:scale-105 transition-transform duration-300 bg-white dark:bg-gray-800 dark:shadow-gray-700 shadow-lg p-6 rounded-lg"
//             >
//               <div className="mb-4 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300">
//                 <benefit.icon size={32} />
//               </div>
//               <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{benefit.title}</h3>
//               <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, Clock, Shield, Users, Scale } from 'lucide-react';

const benefits = [
  {
    icon: Lightbulb,
    title: 'Enhanced Innovation',
    description: 'Access to diverse perspectives and cutting-edge technologies.',
    gradient: 'from-blue-400 to-purple-500',
  },
  {
    icon: Clock,
    title: '24/7 Operations',
    description: 'Round-the-clock development and support capabilities.',
    gradient: 'from-green-400 to-teal-500',
  },
  {
    icon: Shield,
    title: 'Risk Mitigation',
    description: 'Reduced operational and compliance risks through expert management.',
    gradient: 'from-red-400 to-pink-500',
  },
  {
    icon: Users,
    title: 'Access to Talent',
    description: 'Tap into a vast pool of skilled technology professionals.',
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    icon: Scale,
    title: 'Scalability',
    description: 'Flexible team scaling based on project requirements.',
    gradient: 'from-indigo-400 to-purple-500',
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
  hover: {
    scale: 1.05,
    y: -10,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: { 
    scale: 1, 
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  },
  hover: {
    rotate: 360,
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  }
};

export default function BenefitsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section  id="benifits" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >


           <motion.div 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="inline-block mb-6"
                      >
                        <span className="px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium">
                          Our Advantages
                        </span>
                      </motion.div>
          <motion.h2 
            className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            ODC Benefits
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Discover the advantages of partnering with Tericsoft for your ODC needs
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={cardVariants}
              whileHover="hover"
              className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-5 dark:opacity-10" />
              <motion.div 
                variants={iconVariants}
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${benefit.gradient} flex items-center justify-center mb-6`}
              >
                <benefit.icon className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {benefit.description}
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${benefit.gradient}" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}