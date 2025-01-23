'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ClipboardCheck, Users, LogOut, Database } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Hassle-Free Registration',
    description: 'Quick and simple process to get started with our ODC services.',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    icon: Users,
    title: 'Streamlined Onboarding',
    description: 'Efficient team integration and project setup procedures.',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 to-pink-500/10',
  },
  {
    icon: Database,
    title: 'Robust Technology Integration',
    description: 'Seamless integration with your existing technology stack.',
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-500/10 to-teal-500/10',
  },
  {
    icon: LogOut,
    title: 'Effective Offboarding',
    description: 'Smooth transition and knowledge transfer processes.',
    gradient: 'from-orange-500 to-amber-500',
    bgGradient: 'from-orange-500/10 to-amber-500/10',
  },
];

export default function StrategySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  return (
    <section id="strategy" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 top-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <motion.div variants={titleVariants} className="text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium">
                Our Approach
              </span>
            </motion.div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              ODC Implementation Strategy
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our proven approach to establishing and managing your offshore development center
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${step.bgGradient} rounded-2xl transform group-hover:scale-105 transition-transform duration-300 blur-xl`} />
                <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                  <motion.div 
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.gradient} p-4 mb-6`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <step.icon className="w-full h-full text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                  
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                      '--tw-gradient-from': '#4f46e5',
                      '--tw-gradient-to': '#06b6d4'
                    }}
                  />
                </div>
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
// import { ClipboardCheck, Users, LogOut, Database } from 'lucide-react';

// const steps = [
//   {
//     icon: ClipboardCheck,
//     title: 'Hassle-Free Registration',
//     description: 'Quick and simple process to get started with our ODC services.',
//   },
//   {
//     icon: Users,
//     title: 'Streamlined Onboarding',
//     description: 'Efficient team integration and project setup procedures.',
//   },
//   {
//     icon: Database,
//     title: 'Robust Technology Integration',
//     description: 'Seamless integration with your existing technology stack.',
//   },
//   {
//     icon: LogOut,
//     title: 'Effective Offboarding',
//     description: 'Smooth transition and knowledge transfer processes.',
//   },
// ];

// export default function StrategySection() {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <section id="strategy" className="section-padding">
//       <div className="container mx-auto container-padding">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="heading-2 mb-4">ODC Implementation Strategy</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Our proven approach to establishing and managing your offshore development center
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {steps.map((step, index) => (
//             <motion.div
//               key={step.title}
//               initial={{ opacity: 0, y: 20 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               className="card group hover:scale-105 transition-transform duration-300"
//             >
//               <div className="mb-4 text-primary-600 group-hover:scale-110 transition-transform duration-300">
//                 <step.icon size={32} />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
//               <p className="text-gray-600">{step.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }