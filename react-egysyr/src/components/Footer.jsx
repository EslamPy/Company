import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Website Development', href: '#services' },
        { name: 'Mobile Applications', href: '#services' },
        { name: 'Admin Systems', href: '#services' },
        { name: 'UI/UX Design', href: '#services' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Our Team', href: '#about' },
        { name: 'Careers', href: '#contact' },
        { name: 'Blog', href: '#contact' },
      ]
    }
  ]

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: '𝕏' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'GitHub', href: '#', icon: '🐙' },
    { name: 'Facebook', href: '#', icon: '📘' },
  ]

  return (
    <footer className="relative bg-dark-900 border-t border-gray-800">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-primary-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-display font-bold text-gradient mb-4">
                EgySyr
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Advanced technological solutions to build a smarter and easier future. 
                We transform businesses through innovative technology and exceptional service.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.2,
                      transition: { duration: 0.2 }
                    }}
                    className="w-12 h-12 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-lg flex items-center justify-center text-xl hover:from-primary-500 hover:to-purple-500 transition-all duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
                className="text-lg font-semibold text-white mb-4"
              >
                {section.title}
              </motion.h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={link.href}
                      whileHover={{ 
                        x: 5,
                        color: '#0ea5e9',
                        transition: { duration: 0.2 }
                      }}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-200 block"
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Stay Updated
              </h4>
              <p className="text-gray-400">
                Get the latest news and updates about our services and technology trends.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-dark-800 border border-gray-600 rounded-lg text-white focus:border-primary-500 focus:outline-none transition-colors duration-200"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-lg font-semibold hover:from-primary-600 hover:to-purple-600 transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} EgySyr. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <motion.a
              href="#"
              whileHover={{ color: '#0ea5e9' }}
              className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ color: '#0ea5e9' }}
              className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200"
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ color: '#0ea5e9' }}
              className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200"
            >
              Cookie Policy
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Animated Bottom Line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        style={{ originX: 0 }}
      />
    </footer>
  )
}

export default Footer