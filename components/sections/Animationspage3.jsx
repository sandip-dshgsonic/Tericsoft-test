import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PricingComparison() {
  const [selectedPlan, setSelectedPlan] = useState('enterprise');

  const plans = {
    standard: {
      name: 'Standard',
      price: 29.99,
      features: [
        'Basic Device Management',
        'Standard Security',
        'Email Support'
      ]
    },
    professional: {
      name: 'Professional',
      price: 59.99,
      features: [
        'Advanced Device Management',
        'Enhanced Security',
        'Priority Support',
        'Cloud Integration'
      ]
    },
    enterprise: {
      name: 'Enterprise',
      price: 99.99,
      features: [
        'Full Device Ecosystem Management',
        'Advanced Threat Protection',
        '24/7 Dedicated Support',
        'Custom Integration',
        'AI-Powered Analytics'
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Scalable Pricing for Every Business
        </h2>
        
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 rounded-full p-2 flex space-x-2">
            {Object.keys(plans).map(planKey => (
              <button
                key={planKey}
                onClick={() => setSelectedPlan(planKey)}
                className={`px-6 py-2 rounded-full transition ${
                  selectedPlan === planKey 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                {plans[planKey].name}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedPlan}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-white/10 rounded-xl p-8 max-w-md mx-auto"
          >
            <h3 className="text-3xl font-bold mb-4">
              {plans[selectedPlan].name} Plan
            </h3>
            <p className="text-5xl font-bold mb-6">
              ${plans[selectedPlan].price}/month
            </p>
            <ul className="space-y-4 mb-8">
              {plans[selectedPlan].features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-3 text-green-500">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-full transition">
              Get Started
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}