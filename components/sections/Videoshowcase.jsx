// 'use client';

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Play, Pause, Maximize2, Volume2, VolumeX } from 'lucide-react';

// const VideoShowcase = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isMuted, setIsMuted] = useState(false);
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const handlePlayPause = () => {
//     const video = document.getElementById('projectVideo');
//     if (video) {
//       if (isPlaying) {
//         video.pause();
//       } else {
//         video.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   const handleMute = () => {
//     const video = document.getElementById('projectVideo');
//     if (video) {
//       video.muted = !isMuted;
//       setIsMuted(!isMuted);
//     }
//   };

//   const handleFullscreen = () => {
//     const video = document.getElementById('projectVideo');
//     if (video) {
//       if (!document.fullscreenElement) {
//         video.requestFullscreen();
//         setIsFullscreen(true);
//       } else {
//         document.exitFullscreen();
//         setIsFullscreen(false);
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 relative overflow-hidden">
//       {/* Animated Background Elements */}
//       <motion.div
//         className="absolute inset-0"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, -20, 0],
//               opacity: [0.2, 0.5, 0.2],
//             }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//               delay: i * 0.2,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </motion.div>

//       <div className="container mx-auto px-4">
//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Project Showcase
//           </h1>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             Watch our comprehensive project demonstration
//           </p>
//         </motion.div>

//         {/* Video Section */}
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={inView ? { opacity: 1, scale: 1 } : {}}
//           transition={{ duration: 0.8 }}
//           className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
//         >
//           {/* Video Glow Effect */}
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl" />
          
//           {/* Video Container */}
//           <div className="relative bg-gray-900 rounded-2xl overflow-hidden">
//             <video
//               id="projectVideo"
//               className="w-full aspect-video object-cover"
//               onPlay={() => setIsPlaying(true)}
//               onPause={() => setIsPlaying(false)}
//             >
//               {/* Replace the source with your video path */}
//               <source src="/Videos/animationvideo.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>

//             {/* Video Controls */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//               className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
//             >
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center space-x-4">
//                   <motion.button
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     onClick={handlePlayPause}
//                     className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
//                   >
//                     {isPlaying ? (
//                       <Pause className="w-6 h-6 text-white" />
//                     ) : (
//                       <Play className="w-6 h-6 text-white" />
//                     )}
//                   </motion.button>
                  
//                   <motion.button
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     onClick={handleMute}
//                     className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
//                   >
//                     {isMuted ? (
//                       <VolumeX className="w-6 h-6 text-white" />
//                     ) : (
//                       <Volume2 className="w-6 h-6 text-white" />
//                     )}
//                   </motion.button>
//                 </div>

//                 <motion.button
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   onClick={handleFullscreen}
//                   className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
//                 >
//                   <Maximize2 className="w-6 h-6 text-white" />
//                 </motion.button>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* Description Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.3 }}
//           className="max-w-3xl mx-auto mt-12 text-center"
//         >
//           <h2 className="text-2xl font-semibold text-white mb-4">
//             About the Project
//           </h2>
//           <p className="text-gray-300">
//             Experience our innovative solution in action. This video demonstrates the key features
//             and capabilities of our project, showcasing the seamless integration and efficient
//             workflow we've developed.
//           </p>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default VideoShowcase;


'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Volume2, VolumeX, Maximize2 } from 'lucide-react';
const VideoShowcase = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  useEffect(() => {
    const video = document.getElementById('projectVideo');
    if (video && inView) {
      video.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    } else if (video && !inView) {
      video.pause();
    }
  }, [inView]);
  const handleMute = () => {
    const video = document.getElementById('projectVideo');
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  const handleFullscreen = () => {
    const video = document.getElementById('projectVideo');
    if (video) {
      if (!document.fullscreenElement) {
        video.requestFullscreen();
        setIsFullscreen(true);
      } else {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-black py-20 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-md"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Project Showcase
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch our comprehensive project demonstration
          </p>
        </motion.div> */}
        {/* Video Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden"
        >
          {/* Enhanced Video Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-2xl animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-purple-500/10" />
          
          {/* Video Container */}
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.5)]">
            <video
              id="projectVideo"
              className="w-full aspect-video object-cover"
              muted={isMuted}
              loop
              playsInline
            >
              <source src="/Videos/animationvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Minimal Video Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
            >
              <div className="flex items-center justify-between">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleMute}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                  {isMuted ? (
                    <VolumeX className="w-6 h-6 text-white" />
                  ) : (
                    <Volume2 className="w-6 h-6 text-white" />
                  )}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleFullscreen}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                  <Maximize2 className="w-6 h-6 text-white" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
        {/* Description Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto mt-12 text-center"
        >
          <h2 className="text-3xl font-semibold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            About the Project
          </h2>
          <p className="text-gray-300 text-lg">
            Experience our innovative solution in action. This video demonstrates the key features
            and capabilities of our project, showcasing the seamless integration and efficient
            workflow we've developed.
          </p>
        </motion.div> */}
      </div>
    </div>
  );
};
export default VideoShowcase;