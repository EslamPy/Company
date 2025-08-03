import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  const statsData = [
    { number: 100, suffix: '+', label: 'Happy Clients', icon: '😊' },
    { number: 50, suffix: '+', label: 'Projects Completed', icon: '🚀' },
    { number: 80, suffix: '%', label: 'Client Satisfaction', icon: '⭐' },
    { number: 24, suffix: '/7', label: 'Support Available', icon: '💬' },
  ]

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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/10 via-purple-900/10 to-pink-900/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {statsData.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} variants={itemVariants} isInView={isInView} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const StatCard = ({ stat, index, variants, isInView }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const increment = stat.number / 50
        const updateCount = () => {
          setCount(prev => {
            const newCount = prev + increment
            return newCount >= stat.number ? stat.number : newCount
          })
        }
        const interval = setInterval(updateCount, 30)
        setTimeout(() => clearInterval(interval), 1500)
      }, index * 200)
      
      return () => clearTimeout(timer)
    }
  }, [isInView, stat.number, index])

  return (
    <motion.div
      variants={variants}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className="card-gradient p-8 text-center group"
    >
      <motion.div
        animate={{
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut"
        }}
        className="text-4xl mb-4"
      >
        {stat.icon}
      </motion.div>
      
      <motion.div 
        className="text-4xl lg:text-5xl font-bold text-gradient mb-2"
        animate={{
          scale: isInView ? [1, 1.1, 1] : 1
        }}
        transition={{
          duration: 0.5,
          delay: index * 0.2
        }}
      >
        {Math.floor(count)}{stat.suffix}
      </motion.div>
      
      <p className="text-gray-300 font-medium text-lg">{stat.label}</p>
      
      <motion.div
        className="mt-4 h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 1, delay: index * 0.2 }}
      />
    </motion.div>
  )
}

export default Stats