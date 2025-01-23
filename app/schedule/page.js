'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Users, MessageSquare } from 'lucide-react';

export default function SchedulePage() {
  const steps = [
    {
      icon: Calendar,
      title: 'Choose Date',
      description: 'Select your preferred consultation date'
    },
    {
      icon: Clock,
      title: 'Pick Time',
      description: 'Choose a convenient time slot'
    },
    {
      icon: Users,
      title: 'Team Size',
      description: 'Specify your team requirements'
    },
    {
      icon: MessageSquare,
      title: 'Discussion',
      description: 'Brief about your project needs'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="heading-1 mb-4">Schedule a Consultation</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let&apos;s discuss how our ODC solutions can transform your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4 mb-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="glass-card p-4 text-center"
                >
                  <step.icon className="w-8 h-8 mx-auto mb-2 text-primary-600" />
                  <h3 className="font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Time
                </label>
                <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500">
                  <option>09:00 AM</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>02:00 PM</option>
                  <option>03:00 PM</option>
                  <option>04:00 PM</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Team Size
                </label>
                <input
                  type="number"
                  min="1"
                  placeholder="Enter team size"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Description
                </label>
                <textarea
                  rows="4"
                  placeholder="Brief description of your project needs"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Schedule Consultation
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8"
          >
            <h2 className="heading-3 mb-6">Why Choose Our Consultation?</h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 mt-2 bg-primary-600 rounded-full"></span>
                <p className="text-gray-600">Expert guidance on ODC implementation</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 mt-2 bg-primary-600 rounded-full"></span>
                <p className="text-gray-600">Customized solutions for your business needs</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 mt-2 bg-primary-600 rounded-full"></span>
                <p className="text-gray-600">Detailed cost analysis and optimization strategies</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 mt-2 bg-primary-600 rounded-full"></span>
                <p className="text-gray-600">Technology stack recommendations</p>
              </li>
            </ul>

            <div className="mt-8 p-4 bg-primary-50 rounded-lg">
              <h3 className="font-semibold mb-2">Free Initial Consultation</h3>
              <p className="text-gray-600">
                Book your free 30-minute consultation with our experts to discuss your ODC requirements.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}