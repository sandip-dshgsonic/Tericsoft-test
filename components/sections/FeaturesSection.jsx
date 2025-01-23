// 'use client';

// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { DollarSign, Settings, Code } from 'lucide-react';

// const features = [
//   {
//     icon: DollarSign,
//     title: 'Pay',
//     description: 'Streamlined HR & Accounting',
//     details: [
//       'Automated Payroll Processing',
//       'Expense Management',
//       'Tax Compliance',
//       'Benefits Administration',
//     ],
//   },
//   {
//     icon: Settings,
//     title: 'Manage',
//     description: 'IT Management Features',
//     details: [
//       'Resource Allocation',
//       'Performance Monitoring',
//       'Infrastructure Management',
//       'Security Controls',
//     ],
//   },
//   {
//     icon: Code,
//     title: 'Develop',
//     description: 'Team Development Tools',
//     details: [
//       'Code Version Control',
//       'CI/CD Integration',
//       'Quality Assurance',
//       'Technical Documentation',
//     ],
//   },
// ];

// export default function FeaturesSection() {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <section id="features" className="section-padding bg-gray-50 dark:bg-gray-900">
//       <div className="container mx-auto container-padding">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="heading-2 mb-4 text-gray-900 dark:text-gray-100">Tericsoft Platform Features</h2>
//           <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             Comprehensive tools and features to manage your offshore development center
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <motion.div
//               key={feature.title}
//               initial={{ opacity: 0, y: 20 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               className="card group hover:scale-105 transition-transform duration-300 bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-700 p-6 rounded-lg"
//             >
//               <div className="mb-6 text-primary-600 group-hover:scale-110 transition-transform duration-300 dark:text-primary-400">
//                 <feature.icon size={40} />
//               </div>
//               <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{feature.title}</h3>
//               <p className="text-gray-600 dark:text-gray-400 mb-4">{feature.description}</p>
//               <ul className="space-y-2">
//                 {feature.details.map((detail) => (
//                   <li key={detail} className="flex items-center text-gray-700 dark:text-gray-300">
//                     <span className="w-2 h-2 bg-primary-600 rounded-full mr-2 dark:bg-primary-400"></span>
//                     {detail}
//                   </li>
//                 ))}
//               </ul>
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
import { DollarSign, Settings, Code } from 'lucide-react';

const features = [
  {
    icon: DollarSign,
    title: 'Pay',
    description: 'Streamlined HR & Accounting',
    details: [
      'Automated Payroll Processing',
      'Expense Management',
      'Tax Compliance',
      'Benefits Administration',
    ],
  },
  {
    icon: Settings,
    title: 'Manage',
    description: 'IT Management Features',
    details: [
      'Resource Allocation',
      'Performance Monitoring',
      'Infrastructure Management',
      'Security Controls',
    ],
  },
  {
    icon: Code,
    title: 'Develop',
    description: 'Team Development Tools',
    details: [
      'Code Version Control',
      'CI/CD Integration',
      'Quality Assurance',
      'Technical Documentation',
    ],
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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const iconVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.2,
    rotate: 360,
    transition: { duration: 0.6, ease: "easeInOut" }
  }
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5 }
  }
};

export default function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
           <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium">
                Our Tools & Features
              </span>
            </motion.div>
          <motion.h2
            className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Tericsoft Platform Features
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Comprehensive tools and features to manage your offshore development center
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-xl dark:shadow-gray-700/30 border border-gray-100 dark:border-gray-700"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary-500/10 rounded-bl-full" />
              
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                className="relative mb-8 inline-block text-primary-600 dark:text-primary-400"
              >
                <feature.icon size={48} />
              </motion.div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {feature.description}
              </p>

              <motion.ul className="space-y-3">
                {feature.details.map((detail, detailIndex) => (
                  <motion.li
                    key={detail}
                    variants={listItemVariants}
                    custom={detailIndex}
                    className="flex items-center text-gray-700 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
                    {detail}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}