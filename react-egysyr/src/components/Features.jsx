import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  ClockIcon, 
  UserGroupIcon, 
  CubeIcon, 
  CurrencyDollarIcon,
  HeartIcon,
  BoltIcon 
} from '@heroicons/react/24/outline'

const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: ClockIcon,
      title: '24/7 Support',
      description: 'Round-the-clock technical support to ensure your business never stops running smoothly.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: UserGroupIcon,
      title: 'Expert Team',
      description: 'Highly skilled developers and designers with years of experience in cutting-edge technologies.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: CubeIcon,
      title: 'Rich Experience',
      description: 'Years of proven track record in delivering successful projects across various industries.',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Affordable Pricing',
      description: 'Competitive rates without compromising on quality and service excellence.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: HeartIcon,
      title: 'Client Commitment',
      description: 'Dedicated to building long-term relationships and ensuring client satisfaction.',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: BoltIcon,
      title: 'Technical Excellence',
      description: 'Cutting-edge technologies and best practices implemented in every project we deliver.',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-primary-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl lg:text-6xl font-display font-bold mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why Choose{' '}
            <span className="text-gradient">EgySyr</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We provide exceptional technology solutions with unmatched quality, 
            innovation, and dedicated support for your business success.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const FeatureCard = ({ feature, index, variants }) => {
  const Icon = feature.icon

  return (
    <motion.div
      variants={variants}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className="card-gradient p-8 group cursor-pointer relative overflow-hidden"
    >
      {/* Hover Effect Background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Floating Animation */}
      <motion.div
        animate={{
          y: [0, -5, 0],
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2
          }
        }}
        className="relative z-10"
      >
        {/* Icon */}
        <motion.div
          whileHover={{ 
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.2 }
          }}
          className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 shadow-lg`}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300">
          {feature.title}
        </h3>
        
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {feature.description}
        </p>

        {/* Animated Border */}
        <motion.div
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          viewport={{ once: true }}
        />
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-4 right-4 w-16 h-16 border border-gray-700/30 rounded-full opacity-30"
      />
    </motion.div>
  )
}

export default Features