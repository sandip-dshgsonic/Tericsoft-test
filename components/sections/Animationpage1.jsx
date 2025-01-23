// import React, { useRef, useState, useEffect } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { Volume2, VolumeX } from 'lucide-react';

// export default function EnterpriseLandingPage() {
//   const scrollRef = useRef(null);
//   const videoRef = useRef(null);
//   const audioRef = useRef(null);
//   const [isMuted, setIsMuted] = useState(true);

//   const { scrollYProgress } = useScroll({
//     target: scrollRef,
//     offset: ["start start", "end end"]
//   });

//   const deviceScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
//   const deviceOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
//   const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
//   const textOpacity = useTransform(scrollYProgress, [0.2, 0.5], [1, 0]);

//   const handleMute = () => {
//     const video = videoRef.current;
//     const audio = audioRef.current;
    
//     if (video && audio) {
//       video.muted = !isMuted;
//       audio.muted = !isMuted;
//       setIsMuted(!isMuted);
//     }
//   };

//   useEffect(() => {
//     const video = videoRef.current;
//     const audio = audioRef.current;

//     const handleUserInteraction = () => {
//       if (video && audio) {
//         video.play().catch(console.error);
//         audio.play().catch(console.error);
//       }
//       document.removeEventListener('click', handleUserInteraction);
//     };

//     // Add event listener for first user interaction
//     document.addEventListener('click', handleUserInteraction);

//     return () => {
//       document.removeEventListener('click', handleUserInteraction);
//     };
//   }, []);

//   return (
//     <div 
//       ref={scrollRef} 
//       className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-black py-20 relative overflow-hidden"
//     >
//       <div className="container mx-auto px-4 pt-15 relative">
//         <motion.div 
//           style={{ 
//             scale: deviceScale,
//             opacity: deviceOpacity
//           }}
//           className="flex justify-center mb-12 group"
//         >
//           <div className="relative">
//             <video 
//               ref={videoRef}
//               src="/Videos/animationvideo.mp4" 
//               width="900" 
//               height="500" 
//               autoPlay 
//               loop 
//               muted={isMuted}
//               playsInline
//               className="rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
//             />
            
//             <audio 
//               ref={audioRef}
//               src="/Audios/background-audio.mp3"
//               loop
//               autoPlay
//               muted={isMuted}
//             />

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//               className="absolute bottom-4 left-4"
//             >
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 onClick={handleMute}
//                 className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
//               >
//                 {isMuted ? (
//                   <VolumeX className="w-6 h-6 text-white" />
//                 ) : (
//                   <Volume2 className="w-6 h-6 text-white" />
//                 )}
//               </motion.button>
//             </motion.div>
//           </div>
//         </motion.div>

//         <motion.div 
//           initial="hidden"
//           animate="visible"
//           style={{ 
//             opacity: textOpacity, 
//             scale: textScale 
//           }}
//           className="text-center max-w-4xl mx-auto space-y-6"
//         >
//           <motion.h3 
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             className="text-6xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
//           >
//             Transform Your Business Workflow
//           </motion.h3>
//         </motion.div>
//       </div>
//     </div>
//   );
// }


import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

export default function EnterpriseLandingPage() {
  const scrollRef = useRef(null);
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  const deviceScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const deviceOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5], [1, 0]);

  const handleMute = () => {
    const video = videoRef.current;
    const audio = audioRef.current;
    
    if (video && audio) {
      video.muted = !isMuted;
      audio.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    const audio = audioRef.current;

    const handleUserInteraction = () => {
      if (video && audio) {
        video.play().catch(console.error);
        audio.play().catch(console.error);
      }
      document.removeEventListener('click', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
    };
  }, []);

  return (
    <section 
      ref={scrollRef} 
      id="features"
      className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-black flex items-center justify-center overflow-hidden"
    >
      <div className="container mx-auto px-4 relative w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
          <motion.div 
            style={{ 
              scale: deviceScale,
              opacity: deviceOpacity
            }}
            className="flex justify-center w-full group"
          >
            <div className="relative w-full max-w-[900px]">
              <video 
                ref={videoRef}
                src="/Videos/animationvideo.mp4" 
                width="100%" 
                height="auto" 
                autoPlay 
                loop 
                muted={isMuted}
                playsInline
                className="rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
              
              <audio 
                ref={audioRef}
                src="/Audios/background-audio.mp3"
                loop
                autoPlay
                muted={isMuted}
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-4 left-4"
              >
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
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate="visible"
            style={{ 
              opacity: textOpacity, 
              scale: textScale 
            }}
            className="text-center md:text-left space-y-6"
          >
            <motion.h3 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            >
              Transform Your Business Workflow
            </motion.h3>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="text-lg text-gray-300 max-w-xl mx-auto md:mx-0"
            >
              Streamline your operations with cutting-edge automation and intelligent solutions that drive efficiency and innovation.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
