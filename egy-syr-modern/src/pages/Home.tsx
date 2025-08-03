import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  Smartphone, 
  Globe, 
  Users, 
  Award,
  ChevronDown,
  Play
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import StatsSection from '../components/StatsSection';
import ServicesPreview from '../components/ServicesPreview';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ServicesPreview />
      <TestimonialsSection />
      <CTASection />
    </motion.div>
  );
};

export default Home;