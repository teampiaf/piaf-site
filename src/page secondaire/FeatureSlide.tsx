import React from 'react';
import { motion } from 'framer-motion';
import { PhoneFrame } from './PhoneFrame';
interface FeatureSlideProps {
  title: string;
  description: string;
  mockup: React.ReactNode;
  isActive: boolean;
}
export function FeatureSlide({
  title,
  description,
  mockup,
  isActive
}: FeatureSlideProps) {
  // We don't render anything if not active to allow AnimatePresence to handle the exit
  // Actually, the parent will handle the conditional rendering with AnimatePresence
  // This component just defines the layout and internal animations
  return (
    <div className="w-full max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
      {/* Text Content - Left Side */}
      <div className="w-[45%] pr-12">
        <motion.div
          initial={{
            opacity: 0,
            y: 40
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -40
          }}
          transition={{
            duration: 0.6,
            ease: 'easeOut'
          }}>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            {title}
          </h2>
          <p className="text-xl text-gray-500 leading-relaxed font-light">
            {description}
          </p>
        </motion.div>
      </div>

      {/* Phone Mockup - Right Side */}
      <div className="w-[55%] flex justify-center items-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
            scale: 0.95
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }}
          exit={{
            opacity: 0,
            y: -100,
            scale: 0.95
          }}
          transition={{
            duration: 0.7,
            ease: 'easeOut',
            delay: 0.1
          }}
          className="relative">

          {/* Decorative blob behind phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] bg-gradient-to-tr from-indigo-100/50 to-purple-100/50 rounded-full blur-3xl -z-10"></div>

          <PhoneFrame>{mockup}</PhoneFrame>
        </motion.div>
      </div>
    </div>);

}