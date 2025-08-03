import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            About <span className="text-gradient">EgySyr</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We are a leading technology company dedicated to delivering innovative 
            solutions that transform businesses and create lasting impact.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Building the Future, One Solution at a Time
            </h3>
            <p className="text-gray-300 leading-relaxed">
              At EgySyr, we believe technology should empower businesses to reach their full potential. 
              Our team of experienced developers, designers, and strategists work together to create 
              cutting-edge solutions that drive growth and innovation.
            </p>
            <p className="text-gray-300 leading-relaxed">
              From concept to deployment, we're committed to delivering excellence in every project. 
              Our comprehensive approach ensures that your digital transformation journey is smooth, 
              efficient, and results-driven.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary mt-8"
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="card-gradient p-8 relative overflow-hidden">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute top-4 right-4 w-16 h-16 border border-primary-500/20 rounded-full"
              />
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Years Experience', value: '5+' },
                  { label: 'Team Members', value: '20+' },
                  { label: 'Technologies', value: '15+' },
                  { label: 'Countries Served', value: '10+' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-gradient mb-2">{item.value}</div>
                    <div className="text-gray-400 text-sm">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About