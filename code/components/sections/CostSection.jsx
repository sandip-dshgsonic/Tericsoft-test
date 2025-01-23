// 'use client';

// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { BarChart as BarChartIcon } from 'lucide-react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const costData = [
//   {
//     name: 'Junior',
//     US: 30,
//     India: 20,
//   },
//   {
//     name: 'Senior',
//     US: 60,
//     India: 40,
//   },
//   {
//     name: 'Expert',
//     US: 100,
//     India: 70,
//   },
// ];

// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
//         <p className="font-semibold text-gray-900 dark:text-gray-100">{label}</p>
//         {payload.map((entry, index) => (
//           <p key={index} style={{ color: entry.color }}>
//             {entry.name}: ${entry.value}/hr
//           </p>
//         ))}
//       </div>
//     );
//   }
//   return null;
// };

// export default function CostSection() {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <section id="cost" className="section-padding">
//       <div className="container mx-auto container-padding">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="heading-2 mb-4 dark:text-gray-100">Cost Comparison</h2>
//           <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             See how our ODC solutions can significantly reduce your operational costs
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={inView ? { opacity: 1, scale: 1 } : {}}
//           transition={{ duration: 0.6 }}
//           className="card dark:bg-gray-800/50"
//         >
//           <div className="h-[400px] w-full">
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={costData}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
//                 <XAxis 
//                   dataKey="name"
//                   tick={{ fill: '#6B7280' }}
//                 />
//                 <YAxis
//                   tick={{ fill: '#6B7280' }}
//                 />
//                 <Tooltip content={<CustomTooltip />} />
//                 <Bar dataKey="US" fill="#0284c7" name="US Cost ($/hr)" />
//                 <Bar dataKey="India" fill="#38bdf8" name="India Cost ($/hr)" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DollarSign } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

const costData = [
  {
    name: 'Junior',
    US: 30,
    India: 20,
    category: 'Developer'
  },
  {
    name: 'Senior',
    US: 60,
    India: 40,
    category: 'Developer'
  },
  {
    name: 'Expert',
    US: 100,
    India: 70,
    category: 'Developer'
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 dark:bg-gray-800/95 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
        <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {label} {payload[0]?.payload?.category}
        </p>
        <div className="space-y-1">
          {payload.map((entry, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2"
            >
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: entry.color }} 
              />
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {entry.name}: ${entry.value}/hr
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

const CustomBar = (props) => {
  const { fill, x, y, width, height } = props;
  
  return (
    <g>
      <defs>
        <linearGradient id={`gradientUS`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity={1} />
          <stop offset="100%" stopColor="#1d4ed8" stopOpacity={1} />
        </linearGradient>
        <linearGradient id={`gradientIndia`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity={1} />
          <stop offset="100%" stopColor="#0891b2" stopOpacity={1} />
        </linearGradient>
      </defs>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill.includes('0284c7') ? 'url(#gradientUS)' : 'url(#gradientIndia)'}
        rx={6}
        ry={6}
      />
    </g>
  );
};

export default function CostSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="cost" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <span className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <DollarSign className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Cost Comparison
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Optimize your budget with our ODC solutions while maintaining exceptional quality
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700"
        >
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={costData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  stroke="#374151" 
                  opacity={0.1}
                />
                <XAxis 
                  dataKey="name"
                  tick={{ fill: '#6B7280' }}
                  axisLine={{ stroke: '#374151', strokeWidth: 1 }}
                  tickLine={{ stroke: '#374151' }}
                />
                <YAxis
                  tick={{ fill: '#6B7280' }}
                  axisLine={{ stroke: '#374151', strokeWidth: 1 }}
                  tickLine={{ stroke: '#374151' }}
                  label={{ 
                    value: 'Cost per Hour (USD)', 
                    angle: -90, 
                    position: 'insideLeft',
                    fill: '#6B7280'
                  }}
                />
                <Tooltip 
                  content={<CustomTooltip />}
                  cursor={{ fill: 'rgba(107, 114, 128, 0.1)' }}
                />
                <Bar 
                  dataKey="US" 
                  fill="#0284c7" 
                  name="US Cost" 
                  shape={<CustomBar />}
                  animationBegin={0}
                  animationDuration={1500}
                >
                  <LabelList 
                    dataKey="US" 
                    position="top" 
                    fill="#6B7280"
                    formatter={(value) => `$${value}`}
                  />
                </Bar>
                <Bar 
                  dataKey="India" 
                  fill="#38bdf8" 
                  name="India Cost" 
                  shape={<CustomBar />}
                  animationBegin={300}
                  animationDuration={1500}
                >
                  <LabelList 
                    dataKey="India" 
                    position="top" 
                    fill="#6B7280"
                    formatter={(value) => `$${value}`}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}