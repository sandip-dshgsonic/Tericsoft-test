'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, Infinity, BarChart3 } from 'lucide-react';
const BusinessImpact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  const Section = ({ title, items, icon: Icon, index }) => (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
      className="relative overflow-hidden group"
    >
      <div className="p-6 bg-white/80 backdrop-blur-md rounded-lg shadow-lg
                    transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]
                    border border-gray-100 hover:border-blue-200">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
            <Icon className="w-6 h-6 text-blue-900" />
          </div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-blue-900 to-blue-700
                       bg-clip-text text-transparent">{title}</h3>
        </div>
        <ul className="space-y-4">
          {items.map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="flex items-start gap-3"
            >
              <span className="w-2 h-2 mt-2 rounded-full bg-blue-500 flex-shrink-0" />
              <p className="text-gray-700 leading-relaxed">{item}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
  return (
    <section className="min-h-screen p-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
          <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 pb-4
                     bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent
                     border-b-2 border-blue-200"
        >
          Results and Business Impact
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Section
            title="Leveraging Local Talent"
            icon={Users}
            items={[
              "Skilled Workforce: Access to a large pool of educated professionals in India effectively meets Nabis's needs.",
              "Competitive Compensation: Lower salary expenses compared to Western markets maintain quality without overspending."
            ]}
            index={0}
          />
          <Section
            title="Streamlined Operations through ODC"
            icon={Building2}
            items={[
              "Reduced Overhead Expenses: Minimizing physical office and utility expenses allows for better resource allocation.",
              "Efficient Project Management: Agile methodologies ensure timely project completion within budget."
            ]}
            index={1}
          />
          <Section
            title="Scalable Resource Management"
            icon={BarChart3}
            items={[
              "Flexible Team Structures: Quick adjustments to team sizes based on project demands prevent unnecessary expenditures.",
              "Rapid Onboarding: Swift recruitment of additional resources keeps projects on track without delays."
            ]}
            index={2}
          />
          <Section
            title="Focus on Continuous Improvement"
            icon={Infinity}
            items={[
              "Best Practices Implementation: Regular refinement of processes enhances efficiency and quality.",
              "Ongoing Training: Investment in workforce development keeps skills current, ensuring high-quality deliverables at lower investment levels."
            ]}
            index={3}
          />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 rounded-lg shadow-xl
                     transform hover:scale-[1.01] transition-transform duration-300"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 border-b pb-3 border-blue-400">
            Value to the Client
          </h2>
          <ul className="space-y-6">
            {[
              "Our services facilitated a seamless transformation by implementing a scalable system architecture, positioning the client for growth and future scalability.",
              "Provided actionable insights through enhanced business operations monitoring and financial analysis, empowering the client to make informed, long-term strategic decisions"
            ].map((value, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <span className="w-2 h-2 mt-2 rounded-full bg-blue-300 flex-shrink-0" />
                <p className="leading-relaxed">{value}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default BusinessImpact;









