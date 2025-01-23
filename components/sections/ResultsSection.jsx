// 'use client';

// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { TrendingUp, Award, Target } from 'lucide-react';

// const metrics = [
//   {
//     icon: TrendingUp,
//     value: '150%',
//     label: 'Increased Productivity',
//   },
//   {
//     icon: Award,
//     value: '99%',
//     label: 'Client Satisfaction',
//   },
//   {
//     icon: Target,
//     value: '45+',
//     label: 'Successful Projects',
//   },
// ];

// export default function ResultsSection() {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <section id="results" className="section-padding bg-gray-50 dark:bg-gray-900">
//       <div className="container mx-auto container-padding">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="heading-2 mb-4 text-gray-900 dark:text-gray-100">Our Impact</h2>
//           <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             Real results achieved through our ODC solutions
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//           {metrics.map((metric, index) => (
//             <motion.div
//               key={metric.label}
//               initial={{ opacity: 0, y: 20 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               className="card text-center bg-white dark:bg-gray-800 dark:shadow-gray-700 shadow-lg p-6 rounded-lg"
//             >
//               <div className="mb-4 text-primary-600 dark:text-primary-400 inline-block">
//                 <metric.icon size={32} />
//               </div>
//               <h3 className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
//                 {metric.value}
//               </h3>
//               <p className="text-gray-600 dark:text-gray-400">{metric.label}</p>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           className="card bg-white dark:bg-gray-800 dark:shadow-gray-700 shadow-lg p-6 rounded-lg"
//         >
//           <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Success Story: Nabis</h3>
//           <p className="text-gray-600 dark:text-gray-400 mb-6">
//             Partnering with Tericsoft ODC, Nabis achieved a 40% reduction in operational costs
//             while maintaining high quality standards and accelerating their development timeline.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="bg-primary-50 dark:bg-primary-900 p-4 rounded-lg">
//               <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Before ODC</h4>
//               <ul className="text-gray-600 dark:text-gray-400 space-y-2">
//                 <li>• High operational costs</li>
//                 <li>• Limited talent access</li>
//                 <li>• Slower development cycles</li>
//               </ul>
//             </div>
//             <div className="bg-primary-50 dark:bg-primary-900 p-4 rounded-lg">
//               <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">After ODC</h4>
//               <ul className="text-gray-600 dark:text-gray-400 space-y-2">
//                 <li>• 40% cost reduction</li>
//                 <li>• Access to global talent</li>
//                 <li>• Faster time to market</li>
//               </ul>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Award, Target, ArrowRight } from 'lucide-react';

const metrics = [
  {
    icon: TrendingUp,
    value: '150%',
    label: 'Increased Productivity',
    gradient: 'from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400',
  },
  {
    icon: Award,
    value: '99%',
    label: 'Client Satisfaction',
    gradient: 'from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400',
  },
  {
    icon: Target,
    value: '45+',
    label: 'Successful Projects',
    gradient: 'from-green-500 to-emerald-500 dark:from-green-400 dark:to-emerald-400',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const numberVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.8
    }
  }
};

export default function ResultsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="results" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
          <motion.h2
                      className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.2, duration: 0.8 }}
                    >
              Our Impact
            </motion.h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Real results achieved through our ODC solutions
            </p>
          </motion.div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, translateY: -5 }}
                className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-2xl p-8 overflow-hidden group"
              >
                {/* Background Gradient */}
                {/* <div className={`absolute inset-0 bg-gradient-to-r ${metric.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} /> */}
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="mb-6 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 p-4 rounded-xl inline-block"
                >
                  <metric.icon size={32} className="text-white" />
                </motion.div>

                {/* Value */}
                <motion.h3
                  variants={numberVariants}
                  className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-3"
                >
                  {metric.value}
                </motion.h3>

                {/* Label */}
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Success Story */}
          {/* <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-2xl p-8 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Success Story: Nabis
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
              Partnering with Tericsoft ODC, Nabis achieved a 40% reduction in operational costs
              while maintaining high quality standards and accelerating their development timeline.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 relative overflow-hidden group"
              >
                <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Before ODC</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-3">
                  {['High operational costs', 'Limited talent access', 'Slower development cycles'].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="flex items-center space-x-2"
                    >
                      <ArrowRight size={16} className="text-red-500 dark:text-red-400" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 relative overflow-hidden group"
              >
                <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">After ODC</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-3">
                  {['40% cost reduction', 'Access to global talent', 'Faster time to market'].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="flex items-center space-x-2"
                    >
                      <ArrowRight size={16} className="text-green-500 dark:text-green-400" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}