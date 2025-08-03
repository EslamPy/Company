import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Award, Zap, Globe } from 'lucide-react';

const StatsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: Users,
      number: 150,
      suffix: "+",
      label: "Happy Clients",
      description: "Satisfied customers worldwide"
    },
    {
      icon: Award,
      number: 200,
      suffix: "+",
      label: "Projects Completed",
      description: "Successful deliveries"
    },
    {
      icon: Zap,
      number: 24,
      suffix: "/7",
      label: "Support Available",
      description: "Round the clock assistance"
    },
    {
      icon: Globe,
      number: 5,
      suffix: "+",
      label: "Years Experience",
      description: "Industry expertise"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="section-padding bg-gradient-to-b from-dark-900 to-dark-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[size:20px_20px]" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="text-center group"
            >
              <div className="relative p-8 glass-effect rounded-2xl card-hover">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-primary-500/30 transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Number */}
                <div className="mb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                    className="text-4xl md:text-5xl font-bold gradient-text"
                  >
                    {isInView ? (
                      <CountUp end={stat.number} duration={2} delay={0.5 + index * 0.1} />
                    ) : (
                      "0"
                    )}
                    {stat.suffix}
                  </motion.div>
                </div>

                {/* Label */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm">
                  {stat.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gradient-from/10 via-gradient-via/10 to-gradient-to/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// CountUp Component
interface CountUpProps {
  end: number;
  duration: number;
  delay: number;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration, delay }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      const increment = end / (duration * 60); // 60fps
      let current = 0;
      
      const counter = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, 1000 / 60);

      return () => clearInterval(counter);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [end, duration, delay]);

  return <span>{count}</span>;
};

export default StatsSection;