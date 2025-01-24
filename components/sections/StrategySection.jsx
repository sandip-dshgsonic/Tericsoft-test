// 'use client';

// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { ClipboardCheck, Users, LogOut, Database } from 'lucide-react';

// const steps = [
//   {
//     icon: ClipboardCheck,
//     title: 'Hassle-Free Registration',
//     description: 'Quick and simple process to get started with our ODC services.',
//     gradient: 'from-blue-500 to-cyan-500',
//     bgGradient: 'from-blue-500/10 to-cyan-500/10',
//   },
//   {
//     icon: Users,
//     title: 'Streamlined Onboarding',
//     description: 'Efficient team integration and project setup procedures.',
//     gradient: 'from-purple-500 to-pink-500',
//     bgGradient: 'from-purple-500/10 to-pink-500/10',
//   },
//   {
//     icon: Database,
//     title: 'Robust Technology Integration',
//     description: 'Seamless integration with your existing technology stack.',
//     gradient: 'from-emerald-500 to-teal-500',
//     bgGradient: 'from-emerald-500/10 to-teal-500/10',
//   },
//   {
//     icon: LogOut,
//     title: 'Effective Offboarding',
//     description: 'Smooth transition and knowledge transfer processes.',
//     gradient: 'from-orange-500 to-amber-500',
//     bgGradient: 'from-orange-500/10 to-amber-500/10',
//   },
// ];

// export default function StrategySection() {
//   const { ref, inView } = useInView({
//     triggerOnce: false,
//     threshold: 0.1,
//   });

//   // Enhanced bounce animation variants for cards
//   const bounceCardVariants = {
//     offscreen: {
//       y: 100,
//       opacity: 0,
//       scale: 0.7
//     },
//     onscreen: (index) => ({
//       y: 0,
//       opacity: 1,
//       scale: 1,
//       transition: {
//         type: "spring",
//         bounce: 0.4,
//         duration: 0.8,
//         delay: index * 0.2 // Staggered animation
//       }
//     })
//   };

//   return (
//     <section id="strategy" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
//       <div className="container mx-auto px-4 relative z-10">
//         <div ref={ref} className="space-y-16">
//           <div className="text-center">
//             <h2           className="text-4xl lg:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-gray-600 to-gray-600 bg-clip-text text-transparent"
//             >
//               ODC Implementation Strategy
//             </h2>
//             <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//               Our proven approach to establishing and managing your offshore development center
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {steps.map((step, index) => (
//               <motion.div
//                 key={step.title}
//                 initial="offscreen"
//                 whileInView="onscreen"
//                 viewport={{ once: true, amount: 0.1 }}
//                 custom={index}
//                 variants={bounceCardVariants}
//                 whileHover={{ 
//                   scale: 1.05,
//                   transition: { type: "spring", stiffness: 300, damping: 20 }
//                 }}
//                 className="relative group"
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-br ${step.bgGradient} rounded-2xl transform group-hover:scale-105 transition-transform duration-300 blur-xl`} />
//                 <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
//                   <motion.div 
//                     className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.gradient} p-4 mb-6`}
//                     whileHover={{ 
//                       rotate: 360,
//                       scale: 1.1
//                     }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <step.icon className="w-full h-full text-white" />
//                   </motion.div>
                  
//                   <h3 className="text-xl font-bold mb-3 text-orange-500 dark:text-white">
//                     {step.title}
//                   </h3>
//                   <p className="text-gray-600 dark:text-gray-300">
//                     {step.description}
//                   </p>
                  
//                   <motion.div 
//                     className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                     initial={{ scaleX: 0 }}
//                     whileHover={{ scaleX: 1 }}
//                     transition={{ duration: 0.3 }}
//                     style={{
//                       backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
//                       '--tw-gradient-from': '#4f46e5',
//                       '--tw-gradient-to': '#06b6d4'
//                     }}
//                   />
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





'use client';
import { useState, useEffect } from 'react';
import { ClipboardCheck, Users, LogOut, Database } from 'lucide-react';
const steps = [
  {
    icon: ClipboardCheck,
    title: 'Hassle-Free Registration',
    description: 'Quick and simple process to get started with our ODC services.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Streamlined Onboarding',
    description: 'Efficient team integration and project setup procedures.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Database,
    title: 'Robust Technology Integration',
    description: 'Seamless integration with your existing technology stack.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: LogOut,
    title: 'Effective Offboarding',
    description: 'Smooth transition and knowledge transfer processes.',
    gradient: 'from-orange-500 to-amber-500',
  },
];
export default function StrategySection() {
  const [rotateY, setRotateY] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  useEffect(() => {
    let interval;
    if (isAutoRotating && !isDragging) {
      interval = setInterval(() => {
        setRotateY(prev => (prev + 1) % 360);
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isAutoRotating, isDragging]);
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsAutoRotating(false);
    setStartX(e.clientX);
  };
  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - startX;
      setRotateY(prev => (prev + deltaX * 0.5) % 360);
      setStartX(e.clientX);
    }
  };
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  return (
    <section id="strategy" className="min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-600 to-gray-600 bg-clip-text text-transparent">
            ODC Implementation Strategy
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
            Our proven approach to establishing and managing your offshore development center
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div
            className="relative w-80 h-80 cursor-grab"
            style={{ perspective: '1000px' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onClick={() => !isDragging && setIsAutoRotating(!isAutoRotating)}
          >
            <div
              className="w-full h-full relative"
              style={{
                transformStyle: 'preserve-3d',
                transform: `rotateY(${rotateY}deg)`,
                transition: isDragging ? 'none' : 'transform 0.5s ease-out'
              }}
            >
              {steps.map((step, index) => {
                const rotation = index * 90;
                return (
                  <div
                    key={step.title}
                    className="absolute top-0 left-0 w-full h-full bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 p-6"
                    style={{
                      transform: `rotateY(${rotation}deg) translateZ(10rem)`,
                      backfaceVisibility: 'visible',
                    }}
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.gradient} p-4 mb-6`}>
                      <step.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-orange-500 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

