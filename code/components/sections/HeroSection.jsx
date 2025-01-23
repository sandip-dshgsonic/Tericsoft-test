// 'use client';

// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { ArrowRight, Play } from 'lucide-react';
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';

// const stats = [
//   { 
//     label: 'Total Cost Reduction', 
//     value: '40%',
//     description: 'Average savings achieved'
//   },
//   { 
//     label: 'Operation Streamlined', 
//     value: '60%',
//     description: 'Improvement in efficiency'
//   },
//   { 
//     label: 'Increased Workforce Efficiency', 
//     value: '30%',
//     description: 'Productivity boost'
//   },
// ];

// export default function HeroSection() {
//   const router = useRouter();
//   const [isHovering, setIsHovering] = useState(false);
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const handleGetStarted = () => {
//     router.push('/login');
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
//       {/* Background Video with enhanced handling */}
//       <div className="absolute inset-0 w-full h-full">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute top-0 left-0 w-full h-full object-cover z-0 scale-105"
//           style={{ filter: 'brightness(0.7) contrast(1.1)' }}
//         >
//           <source src="/Videos/Buisness.mp4" type="video/mp4" />
//         </video>
//         {/* Modern gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/75 to-gray-900/90 z-1"></div>
//         {/* Mesh gradient for added depth */}
//         <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[radial-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-primary-600 to-purple-600"></div>
//       </div>

//       <div className="container mx-auto px-4 py-16 text-center relative z-20">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="max-w-4xl mx-auto"
//         >
//           {/* Highlight badge */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="inline-block mb-6 mt-8"
//           >
//             <span className="px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-primary-500/20 border border-primary-500/20 text-primary-400 text-sm font-medium">
//               Next-Gen Business Solutions
//             </span>
//           </motion.div>

//           <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-orange-400 to-red-500">
//   Transform Your Business with{' '}
//   <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
//     Intelligent Automation
//   </span>
// </h1>

          
//           <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
//             Leverage cutting-edge AI and machine learning to optimize operations, reduce costs, and drive unprecedented efficiency across your organization.
//           </p>

//           <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onMouseEnter={() => setIsHovering(true)}
//               onMouseLeave={() => setIsHovering(false)}
//               onClick={handleGetStarted}
//               className="group bg-gradient-to-r from-primary-600 to-blue-600 text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex items-center gap-2"
//             >
//               Get Started 
//               <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovering ? 'translate-x-1' : ''}`} />
//             </motion.button>
            
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
//             >
//               <Play className="w-5 h-5" /> Watch Demo
//             </motion.button>
//           </div>


// <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-10xl mx-auto">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 className="group hover:scale-105 transition-transform duration-600"
//               >
//                 <div className="relative p-6 h-[180px] w-[290px] rounded-2xl overflow-hidden flex flex-col items-center justify-center">
//                   {/* Card background with gradient */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl"></div>
                  
//                   {/* Content */}
//                   <div className="relative z-10">
//                     <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-blue-400 mb-2">
//                       {stat.value}
//                     </h3>
//                     <p className="text-white font-medium mb-1">{stat.label}</p>
//                     <p className="text-sm text-gray-400">{stat.description}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Play } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const stats = [
  { 
    label: 'Total Cost Reduction', 
    value: '40%',
    description: 'Average savings achieved'
  },
  { 
    label: 'Operation Streamlined', 
    value: '60%',
    description: 'Improvement in efficiency'
  },
  { 
    label: 'Increased Workforce Efficiency', 
    value: '30%',
    description: 'Productivity boost'
  },
];

export default function HeroSection() {
  const router = useRouter();
  const [isHovering, setIsHovering] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleGetStarted = () => {
    router.push('/login');
  };

  const handleWatchDemo = () => {
    router.push('/Videoshowcase'); // Navigate to the Videoshowcase page
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
      {/* Background Video with enhanced handling */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 scale-105"
          style={{ filter: 'brightness(0.7) contrast(1.1)' }}
        >
          <source src="/Videos/Buisness.mp4" type="video/mp4" />
        </video>
        {/* Modern gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/75 to-gray-900/90 z-1"></div>
        {/* Mesh gradient for added depth */}
        <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[radial-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-primary-600 to-purple-600"></div>
      </div>

      <div className="container mx-auto px-4 py-16 text-center relative z-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Highlight badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6 mt-8"
          >
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-primary-500/20 border border-primary-500/20 text-primary-400 text-sm font-medium">
              Next-Gen Business Solutions
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-orange-400 to-red-500">
            Transform Your Business with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Intelligent Automation
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Leverage cutting-edge AI and machine learning to optimize operations, reduce costs, and drive unprecedented efficiency across your organization.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              // onClick={handleGetStarted}
              className="group bg-gradient-to-r from-primary-600 to-blue-600 text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex items-center gap-2"
            >
              Get Started 
              <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovering ? 'translate-x-1' : ''}`} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              // onClick={handleWatchDemo} // Navigate to Videoshowcase page
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
            >
              <Play className="w-5 h-5" /> Watch Demo
            </motion.button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-10xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group hover:scale-105 transition-transform duration-600"
              >
                <div className="relative p-6 h-[180px] w-[290px] rounded-2xl overflow-hidden flex flex-col items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl"></div>
                  <div className="relative z-10">
                    <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-blue-400 mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-white font-medium mb-1">{stat.label}</p>
                    <p className="text-sm text-gray-400">{stat.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
