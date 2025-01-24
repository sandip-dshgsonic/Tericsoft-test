'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Users, Calculator, Monitor, Target,
  Shield, Brain, Link, BarChart,
  Briefcase, MessageSquare, LogOut,
  CreditCard, FileText, Smartphone,
  Settings, Trophy, Clock
} from 'lucide-react';
const TericsoftFramework = () => {
  const sections = {
    hr: {
      title: 'Tericsoft HR',
      icon: Users,
      items: [
        { header: 'Onboarding', content: 'Requirement and Sourcing Interview and Screening', icon: Briefcase },
        { header: 'Team Activity', content: 'Communication, fostering collaboration', icon: MessageSquare },
        { header: 'Offboarding', content: 'Asset recovery, Knowledge Transfer', icon: LogOut }
      ]
    },
    accounting: {
      title: 'Tericsoft Accounting',
      icon: Calculator,
      items: [
        { header: 'Expense Management', content: 'Salary & Incentive PF, PT, TDS', icon: CreditCard },
        { header: 'Medical Insurance', content: 'Insurance management for employees', icon: FileText },
        { header: 'US Payroll Engine', content: 'Native payroll processing', icon: Calculator }
      ]
    },
    it: {
      title: 'Tericsoft IT',
      icon: Monitor,
      items: [
        { header: 'Device Procurement', content: 'Buy, lease devices', icon: Smartphone },
        { header: 'Device Management', content: 'Store, repair, track, erase devices', icon: Settings },
        { header: 'App Management', content: 'Access control and SaaS licenses', icon: Monitor }
      ]
    },
    engage: {
      title: 'Tericsoft Engage',
      icon: Target,
      items: [
        { header: 'Performance', content: 'OKRs, Goals, Feedback & Reviews', icon: Trophy },
        { header: 'Career Growth', content: 'Team guidance and mentorship', icon: Target },
        { header: 'Efficiency', content: 'Progress tracking, Monthly goals', icon: Clock }
      ]
    }
  };
  const bottomFeatures = [
    { title: 'Compliance', icon: Shield, bgColor: 'bg-purple-100', textColor: 'text-purple-600' },
    { title: 'AI Integration', icon: Brain, bgColor: 'bg-rose-100', textColor: 'text-rose-600' },
    { title: 'Open API', icon: Link, bgColor: 'bg-green-100', textColor: 'text-green-600' },
    { title: 'Analytics', icon: BarChart, bgColor: 'bg-sky-100', textColor: 'text-sky-600' }
  ];
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };
  return (
    <section id="framework" className="min-h-screen px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl lg:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-gray-600 to-gray-600 bg-clip-text text-transparent"
        >
          Tericsoft ODC Framework
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {Object.entries(sections).map(([key, section], idx) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={key}
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden backdrop-blur-sm border border-gray-100"
              >
                <div className="p-4 bg-gradient-to-r from-yellow-500 to-yellow-500 text-white">
                  <div className="flex items-center gap-3">
                    <Icon className="w-6 h-6" />
                    <h2 className="font-bold text-lg">{section.title}</h2>
                  </div>
                </div>
                <div className="p-4 space-y-4">
                  {section.items.map((item, index) => {
                    const ItemIcon = item.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <ItemIcon className="w-5 h-5 text-yellow-600" />
                          <h3 className="font-semibold text-gray-800">{item.header}</h3>
                        </div>
                        <p className="text-sm text-gray-600 ml-7">{item.content}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
        >
          {bottomFeatures.map((feature, index) => {
            const FeatureIcon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className={`p-3 rounded-lg ${feature.bgColor}`}>
                    <FeatureIcon className={`w-6 h-6 ${feature.textColor}`} />
                  </div>
                  <span className="font-semibold text-orange-500">{feature.title}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto p-8 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-500 text-white shadow-lg text-center"
        >
          <p className="text-lg font-medium">
            A comprehensive framework for managing business operations efficiently and effectively.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default TericsoftFramework;