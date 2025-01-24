import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const gradientColors = {
  color1: "#231f20",
  color2: "#333333",
  color3: "#555555",
  color4: "#000000",
};

const stats = [
  {
    label: 'Increased Workforce Efficiency',
    value: '30%',
    description: 'Productivity boost'
  },
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
];

const CircularProgressCard = ({ stat, index, inView }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (inView) {
      const targetProgress = parseInt(stat.value);
      const animationDuration = 2000;
      const startTime = performance.now();

      const updateProgress = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progressPercentage = Math.min(elapsed / animationDuration * targetProgress, targetProgress);
        
        setProgress(Math.round(progressPercentage));

        if (progressPercentage < targetProgress) {
          requestAnimationFrame(updateProgress);
        }
      };

      requestAnimationFrame(updateProgress);
    }
  }, [inView, stat.value]);

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20, rotate: -360 }}
      animate={inView ? { 
        opacity: 1, 
        y: 0, 
        rotate: 0,
        transition: { 
          duration: 1, 
          type: "spring", 
          stiffness: 50 
        }
      } : {}}
      className="group hover:scale-105 transition-transform duration-600 flex justify-center"
    >
      <div className="relative p-8 h-[180px] w-full max-w-[300px] rounded-2xl overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/5 backdrop-blur-xl border border-black/10 rounded-2xl"></div>
        <div className="relative z-10 text-center">
          <div className="relative w-16 h-16 mb-2">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path 
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#eee"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#fbbf24"
                strokeWidth="3"
                strokeDasharray={`${progress}, 100`}
              />
              <text 
                x="18" 
                y="20.35" 
                fontFamily="Verdana" 
                fontSize="10" 
                textAnchor="middle" 
                fill="white"
              >
                {progress}%
              </text>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            {stat.value}
          </h3>
          <p className="text-yellow-400 font-medium mb-1">
            {stat.label}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function HeroSection() {
  const router = useRouter();
  const [isHovering, setIsHovering] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleGetStarted = () => {
    router.push("/login");
  };

  useEffect(() => {
    const canvas = document.getElementById("gradient-canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, gradientColors.color1);
    gradient.addColorStop(0.25, gradientColors.color2);
    gradient.addColorStop(0.5, gradientColors.color3);
    gradient.addColorStop(1, gradientColors.color4);

    let position = 0;

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      position -= 0.01;
      if (position < -1) {
        position = 0;
      }

      const patternSize = 400;
      for (let x = position * patternSize; x < canvas.width + patternSize; x += patternSize) {
        ctx.fillStyle = gradient;
        ctx.fillRect(x, 0, patternSize, canvas.height);
      }
    }

    animate();

    return () => {
      canvas.width = 0;
      canvas.height = 0;
    };
  }, []);

  return (
    <div className="w-full h-full relative">
      <div className="absolute inset-0 z-0">
        <canvas id="gradient-canvas" className="w-full h-full"></canvas>
      </div>

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 text-center relative z-20">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 51 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl mx-auto min-h-5xl"
          >
            <div className="relative">
              <img
                src="/images/10928.jpg"
                alt="Banner Image"
                className="w-full h-auto max-h-[500px] md:h-[500px] object-cover rounded-1xl mt-5"
              />
              <div className="text-left mt-6 px-1">
                <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
                  <span className="text-white">Transform Your Business with</span>
                  <br />
                  <span className="text-yellow-400">Intelligent Automation</span>
                </h3>
                <p className="text-left text-base md:text-xl text-gray-400 mb-10 max-w-3xl leading-relaxed">
                  Leverage cutting-edge AI and machine learning to optimize operations, reduce costs, and drive unprecedented efficiency across your organization.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-start items-center gap-4 mb-19">
              <motion.button
                onClick={handleGetStarted}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="group bg-gradient-to-r from-yellow-400 to-yellow-400 text-black px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Get Started
                <ArrowRight
                  className={`w-5 h-5 transition-transform duration-300 ${isHovering ? "translate-x-1" : ""}`}
                />
              </motion.button>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-10xl mx-auto justify-center mt-8 sm:mt-0">
                {stats.map((stat, index) => (
                  <CircularProgressCard 
                    key={index} 
                    stat={stat} 
                    index={index} 
                    inView={inView} 
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}






// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { useRouter } from "next/navigation";
// import { useState, useEffect } from "react";
// import { useInView } from "react-intersection-observer";

// const gradientColors = {
//   color1: "#231f20",
//   color2: "#333333",
//   color3: "#555555",
//   color4: "#000000",
// };

// const stats = [
//   {
//     label: 'Increased Workforce Efficiency',
//     value: '30%',
//     description: 'Productivity boost'
//   },
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
// ];

// const CircularProgressCard = ({ stat, index, inView }) => {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     if (inView) {
//       const targetProgress = parseInt(stat.value);
//       const animationDuration = 2000;
//       const startTime = performance.now();

//       const updateProgress = (currentTime) => {
//         const elapsed = currentTime - startTime;
//         const progressPercentage = Math.min(elapsed / animationDuration * targetProgress, targetProgress);
        
//         setProgress(Math.round(progressPercentage));

//         if (progressPercentage < targetProgress) {
//           requestAnimationFrame(updateProgress);
//         }
//       };

//       requestAnimationFrame(updateProgress);
//     }
//   }, [inView, stat.value]);

//   return (
//     <motion.div
//       key={index}
//       initial={{ opacity: 0, y: 20, rotate: -360 }}
//       animate={inView ? { 
//         opacity: 1, 
//         y: 0, 
//         rotate: 0,
//         transition: { 
//           duration: 1, 
//           type: "spring", 
//           stiffness: 50 
//         }
//       } : {}}
//       className="group hover:scale-105 transition-transform duration-600 flex justify-center"
//     >
//       <div className="relative p-8 h-[180px] w-full max-w-[300px] rounded-2xl overflow-hidden flex flex-col items-center justify-center">
//         <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/5 backdrop-blur-xl border border-black/10 rounded-2xl"></div>
//         <div className="relative z-10 text-center">
//           <div className="relative w-16 h-16 mb-2">
//             <svg className="w-full h-full" viewBox="0 0 36 36">
//               <path 
//                 d="M18 2.0845
//                   a 15.9155 15.9155 0 0 1 0 31.831
//                   a 15.9155 15.9155 0 0 1 0 -31.831"
//                 fill="none"
//                 stroke="#eee"
//                 strokeWidth="3"
//               />
//               <path
//                 d="M18 2.0845
//                   a 15.9155 15.9155 0 0 1 0 31.831
//                   a 15.9155 15.9155 0 0 1 0 -31.831"
//                 fill="none"
//                 stroke="#fbbf24"
//                 strokeWidth="3"
//                 strokeDasharray={`${progress}, 100`}
//               />
//               <text 
//                 x="18" 
//                 y="20.35" 
//                 fontFamily="Verdana" 
//                 fontSize="10" 
//                 textAnchor="middle" 
//                 fill="white"
//               >
//                 {progress}%
//               </text>
//             </svg>
//           </div>
//           <h3 className="text-2xl font-bold text-white mb-2">
//             {stat.value}
//           </h3>
//           <p className="text-yellow-400 font-medium mb-1">
//             {stat.label}
//           </p>
//           {/* <p className="text-sm text-gray-500">{stat.description}</p> */}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default function HeroSection() {
//   const router = useRouter();
//   const [isHovering, setIsHovering] = useState(false);
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

//   const handleGetStarted = () => {
//     router.push("/login");
//   };

//   useEffect(() => {
//     const canvas = document.getElementById("gradient-canvas");
//     const ctx = canvas.getContext("2d");

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
//     gradient.addColorStop(0, gradientColors.color1);
//     gradient.addColorStop(0.25, gradientColors.color2);
//     gradient.addColorStop(0.5, gradientColors.color3);
//     gradient.addColorStop(1, gradientColors.color4);

//     let position = 0;

//     function animate() {
//       requestAnimationFrame(animate);
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       position -= 0.01;
//       if (position < -1) {
//         position = 0;
//       }

//       const patternSize = 400;
//       for (let x = position * patternSize; x < canvas.width + patternSize; x += patternSize) {
//         ctx.fillStyle = gradient;
//         ctx.fillRect(x, 0, patternSize, canvas.height);
//       }
//     }

//     animate();

//     return () => {
//       canvas.width = 0;
//       canvas.height = 0;
//     };
//   }, []);

//   return (
//     <div className="w-full h-full relative">
//       <div className="absolute inset-0 z-0">
//         <canvas id="gradient-canvas" className="w-full h-full"></canvas>
//       </div>

//       <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
//         <div className="container mx-auto px-4 py-20 text-center relative z-20">
//           <motion.div
//             ref={ref}
//             initial={{ opacity: 0, y: 51 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="max-w-5xl mx-auto min-h-5xl"
//           >
//             <div className="relative">
//               <img
//                 src="/images/10928.jpg"
//                 alt="Banner Image"
//                 className="w-full h-[500px] object-cover rounded-1xl mt-5"
//               />
//               <div className="text-left mt-6 px-1">
//                 <h3 className="text-1xl md:text-5xl font-bold mb-6 leading-tight text-white">
//                   <span className="text-white">Transform Your Business with</span>
//                   <br />
//                   <span className="text-yellow-400">Intelligent Automation</span>
//                 </h3>
//                 <p className="text-left text-xl text-gray-400 mb-10 max-w-3xl leading-relaxed">
//                   Leverage cutting-edge AI and machine learning to optimize operations, reduce costs, and drive unprecedented efficiency across your organization.
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row justify-start items-center gap-4 mb-19">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onMouseEnter={() => setIsHovering(true)}
//                 onMouseLeave={() => setIsHovering(false)}
//                 className="group bg-gradient-to-r from-yellow-400 to-yellow-400 text-black px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
//               >
//                 Get Started
//                 <ArrowRight
//                   className={`w-5 h-5 transition-transform duration-300 ${isHovering ? "translate-x-1" : ""}`}
//                 />
//               </motion.button>

//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-10xl mx-auto justify-center">
//         {stats.map((stat, index) => (
//           <CircularProgressCard 
//             key={index} 
//             stat={stat} 
//             index={index} 
//             inView={inView} 
//           />
//         ))}
//       </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }