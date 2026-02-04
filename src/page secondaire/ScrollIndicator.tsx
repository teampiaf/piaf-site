import React from 'react';
import { motion } from 'framer-motion';
interface ScrollIndicatorProps {
  totalSteps: number;
  currentStep: number;
  onStepClick: (index: number) => void;
}
export function ScrollIndicator({
  totalSteps,
  currentStep,
  onStepClick
}: ScrollIndicatorProps) {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
      {Array.from({
        length: totalSteps
      }).map((_, index) => {
        const isActive = index === currentStep;
        return (
          <button
            key={index}
            onClick={() => onStepClick(index)}
            className="group relative flex items-center justify-center w-4 h-4"
            aria-label={`Go to slide ${index + 1}`}>

            <motion.div
              className={`rounded-full border transition-colors duration-300 ${isActive ? 'bg-indigo-600 border-indigo-600' : 'bg-transparent border-gray-300 hover:border-gray-400'}`}
              initial={false}
              animate={{
                width: isActive ? 12 : 8,
                height: isActive ? 12 : 8,
                opacity: isActive ? 1 : 0.5
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20
              }} />

          </button>);

      })}
    </div>);

}