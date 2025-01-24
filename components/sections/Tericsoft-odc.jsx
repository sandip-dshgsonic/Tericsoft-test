'use client';
import { motion } from 'framer-motion';
import { Zap, Users, Cpu, Shield } from 'lucide-react';
const TericsoftInfo = () => {
  const features = [
    {
      title: "Streamlined Business Operations",
      icon: Zap,
      description: "Integrates HR, Accounting, IT, and Employee Engagement to enhance onboarding, payroll, device management, and project delivery.",
      color: "yellow"
    },
    {
      title: "Employee-Centric Approach",
      icon: Users,
      description: "Promotes collaboration and well-being through mentorship programs, medical insurance, and automated goal tracking.",
      color: "green"
    },
    {
      title: "Technological Enablement",
      icon: Cpu,
      description: "Uses the Tericsoft Platform with AI and analytics to optimize workflows and integrate with external tools (Jeera / Asana).",
      color: "purple"
    },
    {
      title: "Compliance",
      icon: Shield,
      description: "Ensures regulatory compliance and scalability with a US payroll engine, robust IT services, and advanced reporting.",
      color: "rose"
    }
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  return (
    <section className="min-h-screen w-full py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl lg:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-gray-600 to-gray-600 bg-clip-text text-transparent"
          >
            Tericsoft ODC
          </h1>
          {/* <div className="h-1 w-24 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"/> */}
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 px-4 sm:px-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`relative overflow-hidden p-6 sm:p-8 rounded-xl
                bg-white dark:bg-gray-800
                shadow-lg hover:shadow-xl
                transform transition-all duration-300
                border-l-4 border-${feature.color}-500
                hover:border-${feature.color}-600`}
            >
              <div className="flex items-start gap-4">
                <div className={`shrink-0 p-3 rounded-lg bg-${feature.color}-100 dark:bg-${feature.color}-900/20`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}-600 dark:text-${feature.color}-400`} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-3 text-orange-500 dark:text-white">
                    {feature.title}
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
              <div className={`absolute top-0 right-0 w-32 h-32 opacity-10
                transform translate-x-16 -translate-y-16
                rounded-full bg-${feature.color}-500 blur-2xl`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default TericsoftInfo;












