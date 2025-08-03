import React, { useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'

const ParticleBackground = () => {
  // Generate particles with random properties
  const particles = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }))
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
      
      {/* Animated Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-primary-400/20 via-purple-400/20 to-pink-400/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Large Floating Elements */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-primary-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-xl"
      />
      
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-primary-500/10 rounded-full blur-xl"
      />

      {/* Geometric Shapes */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/3 right-1/4 w-24 h-24 border border-primary-500/10 rounded-lg transform rotate-45"
      />
      
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/3 left-1/4 w-16 h-16 border border-purple-500/10 rounded-full"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <motion.div
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(rgba(14, 165, 233, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>
    </div>
  )
}

export default ParticleBackground