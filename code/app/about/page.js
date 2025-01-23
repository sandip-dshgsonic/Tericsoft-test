'use client';

import { motion } from 'framer-motion';
import { Award, Users, Globe, Target } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { icon: Users, value: '200+', label: 'Team Members' },
    { icon: Globe, value: '20+', label: 'Countries Served' },
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: Target, value: '95%', label: 'Client Satisfaction' },
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
          <h1 className="heading-1 mb-4">About Tericsoft</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Leading the way in offshore development center solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 mb-6">Our Story</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                Founded in 2010, Tericsoft has been at the forefront of providing innovative ODC solutions to businesses worldwide. Our journey began with a simple mission: to bridge the gap between talented developers and businesses seeking quality software development services.
              </p>
              <p>
                Today, we're proud to have helped numerous organizations achieve their technological goals through our comprehensive ODC solutions. Our commitment to excellence and customer satisfaction has made us a trusted partner in the global IT industry.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="glass-card text-center p-6"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary-600" />
                <h3 className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="heading-2 text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'Constantly pushing boundaries to deliver cutting-edge solutions',
              },
              {
                title: 'Excellence',
                description: 'Maintaining the highest standards in everything we do',
              },
              {
                title: 'Integrity',
                description: 'Building trust through transparent and ethical practices',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.2 }}
                className="glass-card text-center p-6"
              >
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}