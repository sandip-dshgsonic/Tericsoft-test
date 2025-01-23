import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FeatureCard = ({ title, description, icon }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0.2, 0.5], [50, 0]);

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, translateY }}
      className="bg-white/10 p-6 rounded-xl border border-white/20 space-y-4"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

export default function FeaturesShowcase() {
  const features = [
    { 
      title: "Secure Enterprise Management", 
      description: "Advanced security protocols and device management",
      icon: "🔒"
    },
    { 
      title: "Seamless Collaboration", 
      description: "Real-time team communication and document sharing",
      icon: "👥"
    },
    { 
      title: "AI-Powered Productivity", 
      description: "Smart workflows and intelligent task automation",
      icon: "🤖"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Enterprise-Grade Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}