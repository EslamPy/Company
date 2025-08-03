import React from 'react'
import { motion } from 'framer-motion'
import { 
  ComputerDesktopIcon, 
  DevicePhoneMobileIcon, 
  Cog6ToothIcon,
  PaintBrushIcon,
  CloudIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const Services = () => {
  const services = [
    {
      icon: ComputerDesktopIcon,
      title: 'Website Development',
      description: 'Custom, responsive websites built with modern technologies and optimized for performance.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile-First'],
      gradient: 'from-blue-500 via-purple-500 to-pink-500'
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
      features: ['iOS & Android', 'Cross-Platform', 'Native Performance', 'App Store Ready'],
      gradient: 'from-green-500 via-teal-500 to-cyan-500'
    },
    {
      icon: Cog6ToothIcon,
      title: 'Admin Systems',
      description: 'Powerful administrative systems and dashboards for efficient business management.',
      features: ['User Management', 'Analytics', 'Real-time Data', 'Secure Access'],
      gradient: 'from-orange-500 via-red-500 to-pink-500'
    },
    {
      icon: PaintBrushIcon,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that enhance user experience and drive engagement.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      gradient: 'from-purple-500 via-indigo-500 to-blue-500'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions for modern applications.',
      features: ['AWS/Azure', 'Auto Scaling', 'Load Balancing', 'Monitoring'],
      gradient: 'from-teal-500 via-green-500 to-lime-500'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security & Maintenance',
      description: 'Comprehensive security measures and ongoing maintenance for your digital assets.',
      features: ['SSL Certificates', 'Regular Updates', 'Backup Solutions', '24/7 Monitoring'],
      gradient: 'from-red-500 via-pink-500 to-purple-500'
    }
  ]

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-primary-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 270, 180, 90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-primary-500/10 rounded-full blur-3xl"
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
            Our <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comprehensive technology solutions designed to transform your business 
            and accelerate your digital growth.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -15,
        transition: { duration: 0.3 }
      }}
      className="card-gradient p-8 group cursor-pointer relative overflow-hidden h-full"
    >
      {/* Background Gradient on Hover */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          whileHover={{ 
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.2 }
          }}
          className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
          {service.description}
        </p>

        {/* Features */}
        <div className="space-y-2">
          {service.features.map((feature, featureIndex) => (
            <motion.div
              key={featureIndex}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.1) }}
              viewport={{ once: true }}
              className="flex items-center text-sm text-gray-300"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3`}
              />
              {feature}
            </motion.div>
          ))}
        </div>

        {/* Learn More Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-transparent border border-gray-600 text-gray-300 rounded-lg hover:border-primary-500 hover:text-primary-400 transition-all duration-300 group-hover:border-primary-400"
        >
          Learn More
        </motion.button>

        {/* Animated Border */}
        <motion.div
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.gradient} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 1, delay: index * 0.2 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-4 right-4 w-16 h-16 border border-gray-700/20 rounded-full opacity-30"
      />
      
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-4 right-8 w-8 h-8 border border-gray-600/20 rounded-full opacity-20"
      />
    </motion.div>
  )
}

export default Services