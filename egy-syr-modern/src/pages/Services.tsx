import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Smartphone, 
  Palette, 
  Database, 
  Shield, 
  Globe,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Tailored software solutions built from scratch to meet your specific business requirements and goals.",
      features: [
        "Custom web applications",
        "Desktop software solutions",
        "API development",
        "System integration",
        "Legacy system modernization",
        "Performance optimization"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies and best practices.",
      features: [
        "Responsive web design",
        "E-commerce solutions",
        "Content management systems",
        "Progressive web apps",
        "SEO optimization",
        "Performance optimization"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with exceptional user experience.",
      features: [
        "iOS app development",
        "Android app development",
        "Cross-platform solutions",
        "App store optimization",
        "Push notifications",
        "Offline functionality"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that enhance user experience and drive engagement and conversions.",
      features: [
        "User interface design",
        "User experience design",
        "Wireframing & prototyping",
        "Design systems",
        "Usability testing",
        "Brand identity design"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust server-side solutions with scalable architecture and secure data management systems.",
      features: [
        "Database design",
        "API development",
        "Server architecture",
        "Cloud deployment",
        "Data security",
        "Performance monitoring"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Enterprise-grade security measures and compliance with industry standards and regulations.",
      features: [
        "Security audits",
        "Penetration testing",
        "Data encryption",
        "Compliance consulting",
        "Security training",
        "Incident response"
      ],
      color: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-dark-900 to-dark-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,0,128,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,217,255,0.1),transparent_50%)]" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-gradient-to-r from-gradient-from to-gradient-via rounded-full mr-2" />
              Our Services
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Comprehensive</span>{" "}
              <span className="gradient-text">Solutions</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              From concept to deployment, we provide end-to-end digital solutions that drive business growth and innovation.
            </p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-primary group"
            >
              <span className="flex items-center space-x-2">
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative p-8 glass-effect rounded-2xl card-hover h-full">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gradient-from group-hover:to-gradient-to transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center text-sm font-medium text-gradient-from group-hover:text-gradient-to transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.div>

                  {/* Hover Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gradient-from/5 via-gradient-via/5 to-gradient-to/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-dark-800 to-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,0,128,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,217,255,0.1),transparent_50%)]" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Ready to Start</span>{" "}
              <span className="gradient-text">Your Project?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss your requirements and create a custom solution that perfectly fits your business needs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="button-primary group"
              >
                <span className="flex items-center space-x-2">
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="button-secondary group"
              >
                <span className="flex items-center space-x-2">
                  <span>View Portfolio</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;