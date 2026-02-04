import React, { useEffect, useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FeatureSlide } from './FeatureSlide';
import { ScrollIndicator } from './ScrollIndicator';
import {
  HomeScreen,
  TrackingScreen,
  AnalyticsScreen,
  ProfileScreen } from
'./MockupScreens';
const features = [
{
  id: 'home',
  title: 'Your Personal Hub',
  description:
  'Everything you need, beautifully organized in one place. Access your daily goals, schedule, and updates at a glance.',
  mockup: <HomeScreen />
},
{
  id: 'tracking',
  title: 'Smart Tracking',
  description:
  'Effortlessly monitor what matters most to you. Our intelligent system categorizes and prioritizes your tasks automatically.',
  mockup: <TrackingScreen />
},
{
  id: 'analytics',
  title: 'Actionable Insights',
  description:
  'Transform your data into meaningful progress. Visualize trends and understand your habits with beautiful, interactive charts.',
  mockup: <AnalyticsScreen />
},
{
  id: 'profile',
  title: 'Tailored to You',
  description:
  'Customize every detail to match your style. From themes to notification preferences, make the app truly yours.',
  mockup: <ProfileScreen />
}];

export function ScrollShowcase() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  // Handle scroll to update active step
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      // Calculate which section is currently in view
      // We add a small offset (windowHeight * 0.3) to trigger the change slightly earlier
      const step = Math.floor(
        (scrollPosition + windowHeight * 0.3) / windowHeight
      );
      // Clamp the step between 0 and features.length - 1
      const clampedStep = Math.max(0, Math.min(step, features.length - 1));
      if (clampedStep !== activeStep) {
        setActiveStep(clampedStep);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeStep]);
  const scrollToStep = (index: number) => {
    window.scrollTo({
      top: index * window.innerHeight,
      behavior: 'smooth'
    });
  };
  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#FAFAF9]"
      style={{
        height: `${features.length * 100}vh`
      }}>

      {/* Sticky Container */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">
        <div className="w-full h-full max-w-7xl mx-auto relative">
          {/* AnimatePresence handles the exit/enter transitions */}
          <AnimatePresence mode="wait">
            <FeatureSlide
              key={features[activeStep].id}
              title={features[activeStep].title}
              description={features[activeStep].description}
              mockup={features[activeStep].mockup}
              isActive={true} />

          </AnimatePresence>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator
        totalSteps={features.length}
        currentStep={activeStep}
        onStepClick={scrollToStep} />

    </div>);

}