import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const Hero = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-primary-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="space-y-8"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h1 
              className="text-4xl sm:text-6xl lg:text-8xl font-display font-bold leading-tight"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className="block text-white">Advanced</span>
              <motion.span 
                className="block text-gradient"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                Technological
              </motion.span>
              <span className="block text-white">Solutions</span>
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-xl sm:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Building a{' '}
            <motion.span
              animate={{ color: ['#0ea5e9', '#8b5cf6', '#ec4899', '#0ea5e9'] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="font-semibold"
            >
              smarter
            </motion.span>
            {' '}and{' '}
            <motion.span
              animate={{ color: ['#ec4899', '#0ea5e9', '#8b5cf6', '#ec4899'] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              className="font-semibold"
            >
              easier
            </motion.span>
            {' '}future through innovation
          </motion.p>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            We deliver cutting-edge website design, mobile applications, and administrative systems 
            that transform your business with the highest standards of quality and innovation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(14, 165, 233, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary group relative overflow-hidden"
            >
              <span className="relative z-10">Start Your Project</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-primary-600"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              View Our Work
            </motion.button>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            animate={floatingAnimation}
            className="absolute top-20 left-10 hidden lg:block"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full opacity-20 blur-sm" />
          </motion.div>
          
          <motion.div
            animate={{
              y: [0, -15, 0],
              transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }
            }}
            className="absolute top-32 right-20 hidden lg:block"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-primary-500 rounded-full opacity-30 blur-sm" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDownIcon className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero