'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, Infinity, BarChart3 } from 'lucide-react';
const BusinessImpact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };
  const Section = ({ title, items, icon: Icon }) => (
    <motion.div
      variants={itemVariants}
      className="mb-8 p-6 bg-white/60 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6 text-blue-900" />
        <h3 className="text-xl font-bold text-blue-900">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            className="flex items-start gap-2"
          >
            <span className="text-blue-800 mt-1.5">•</span>
            <p className="text-gray-700">{item}</p>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
  return (
    <section className="min-h-screen p-6 bg-gradient-to-br from-blue-50 to-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 pb-2 border-b-2 border-blue-900"
        >
          Results and Business Impact
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-6">
          <Section
            title="Leveraging Local Talent"
            icon={Users}
            items={[
              "Skilled Workforce: Access to a large pool of educated professionals in India effectively meets Nabis's needs.",
              "Competitive Compensation: Lower salary expenses compared to Western markets maintain quality without overspending."
            ]}
          />
          <Section
            title="Streamlined Operations through ODC"
            icon={Building2}
            items={[
              "Reduced Overhead Expenses: Minimizing physical office and utility expenses allows for better resource allocation.",
              "Efficient Project Management: Agile methodologies ensure timely project completion within budget."
            ]}
          />
          <Section
            title="Scalable Resource Management"
            icon={BarChart3}
            items={[
              "Flexible Team Structures: Quick adjustments to team sizes based on project demands prevent unnecessary expenditures.",
              "Rapid Onboarding: Swift recruitment of additional resources keeps projects on track without delays."
            ]}
          />
          <Section
            title="Focus on Continuous Improvement"
            icon={Infinity}
            items={[
              "Best Practices Implementation: Regular refinement of processes enhances efficiency and quality.",
              "Ongoing Training: Investment in workforce development keeps skills current, ensuring high-quality deliverables at lower investment levels."
            ]}
          />
        </div>
        <motion.div
          variants={itemVariants}
          className="mt-12 bg-blue-900 text-white p-8 rounded-lg shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">Value to the Client</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <span className="mt-1.5">•</span>
              <p>Our services facilitated a seamless transformation by implementing a scalable system architecture, positioning the client for growth and future scalability.</p>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5">•</span>
              <p>Provided actionable insights through enhanced business operations monitoring and financial analysis, empowering the client to make informed, long-term strategic decisions</p>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default BusinessImpact;










