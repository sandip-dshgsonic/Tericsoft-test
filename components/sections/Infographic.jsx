'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Users, Building2, UserCog, User, ClipboardCheck } from 'lucide-react';
// const OdcStructure = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.3 }
//     }
//   };
//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5 }
//     }
//   };
//   const Box = ({ title, color, className, icon: Icon }) => (
//     <motion.div
//       variants={itemVariants}
//       className={`rounded-lg p-4 shadow-lg ${color} ${className} flex items-center justify-center gap-2`}
//     >
//       {Icon && <Icon className="w-5 h-5 text-gray-700" />}
//       <p className="text-gray-800 font-medium">{title}</p>
//     </motion.div>
//   );
//   const ConnectingLine = ({ className }) => (
//     <div className={`h-8 w-0.5 bg-blue-400 mx-auto ${className}`} />
//   );
//   return (
//     <section className="min-h-screen px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="max-w-6xl mx-auto rounded-xl shadow-xl p-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
//       >
//         <h1 className="text-3xl font-bold text-center mb-12 text-blue-900 border-b pb-4">
//           Infographics of Tericsoft ODC Structure
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Tericsoft Side */}
//           <div className="space-y-6">
//             <Box
//               title="Tericsoft (ODC)"
//               color="bg-green-100"
//               className="text-center"
//               icon={Building2}
//             />
//             <ConnectingLine />
//             <Box
//               title="High Level Arbitration"
//               color="bg-green-100"
//               icon={UserCog}
//             />
//             <ConnectingLine />
//             <Box
//               title="Project Manager"
//               color="bg-green-100"
//               icon={User}
//             />
//             <ConnectingLine />
//             <Box
//               title="Project Leader"
//               color="bg-green-100"
//               icon={User}
//             />
//             <ConnectingLine />
//             <div className="grid grid-cols-2 gap-4">
//               <Box
//                 title="Quality"
//                 color="bg-green-100"
//                 icon={ClipboardCheck}
//               />
//               <Box
//                 title="Offshore Team"
//                 color="bg-green-100"
//                 icon={Users}
//               />
//             </div>
//           </div>
//           {/* Nabis Side */}
//           <div className="space-y-6">
//             <Box
//               title="Nabis (Client)"
//               color="bg-rose-100"
//               className="text-center"
//               icon={Building2}
//             />
//             <ConnectingLine />
//             <Box
//               title="High Level Arbitration"
//               color="bg-rose-100"
//               icon={UserCog}
//             />
//             <ConnectingLine />
//             <Box
//               title="Nabis Project Manager"
//               color="bg-rose-100"
//               icon={User}
//             />
//             <ConnectingLine />
//             <Box
//               title="Onsite Coordinator"
//               color="bg-rose-100"
//               icon={User}
//             />
//             <ConnectingLine />
//             <div className="grid grid-cols-2 gap-4">
//               <Box
//                 title="Onsite Team"
//                 color="bg-rose-100"
//                 icon={Users}
//               />
//               <Box
//                 title="Nabis Team"
//                 color="bg-rose-100"
//                 icon={Users}
//               />
//             </div>
//           </div>
//         </div>
//         {/* Steering Committee */}
//         <motion.div
//           variants={itemVariants}
//           className="mt-12 mb-12"
//         >
//           <Box
//             title="Steering Committee"
//             color="bg-blue-100"
//             className="text-center max-w-md mx-auto"
//             icon={Users}
//           />
//         </motion.div>
//         {/* Footer Text */}
//         <motion.div
//           variants={itemVariants}
//           className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6 rounded-lg mt-8"
//         >
//           <p className="text-xl font-semibold text-center leading-relaxed">
//             ODC Smart Scaling: Pay only for what you need. Through precision resource management and optimized team expertise, experience 40% cost reduction while maintaining peak performance.
//           </p>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };
// export default OdcStructure;






'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
const OdcStructure = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };
  return (
    <section id="infograph" className="min-h-screen px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto rounded-lg shadow-2xl p-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      >
        <motion.div
          className="relative w-full h-[600px] rounded-md overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300"
          variants={imageVariants}
        >
          <Image
            src="/Images/image.png"
            alt="Tericsoft ODC Structure"
            fill
            className="object-contain transform hover:scale-105 transition-transform duration-300"
            priority
            quality={100}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-8 rounded-md mt-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <p className="text-xl font-semibold text-center leading-relaxed">
            ODC Smart Scaling: Pay only for what you need. Through precision resource management and optimized team expertise, experience 40% cost reduction while maintaining peak performance.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default OdcStructure;

