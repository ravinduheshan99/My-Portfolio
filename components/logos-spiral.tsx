"use client"

import { useRef, useMemo, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Html } from "@react-three/drei"
import * as THREE from "three"

interface DragonInfinityProps {
  isDark: boolean
}

export default function DragonInfinity({ isDark }: DragonInfinityProps) {
  const groupRef = useRef<THREE.Group>(null)
  const particlesRef = useRef<THREE.Points>(null)
  const timeRef = useRef(0)
  const [, setFrame] = useState(0)
  const [screenSize, setScreenSize] = useState({ width: 1024, height: 768 })
  
  // Detect screen size for responsive scaling
  useState(() => {
    const updateSize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  })
  
  // Calculate scale factors based on screen size
  const isMobile = screenSize.width < 768
  const isTablet = screenSize.width >= 768 && screenSize.width < 1024
  
  // Tech stack icons - orbiting around photo
  const techIcons = useMemo(() => {
    // Base radius for all screen sizes - no shrinking
    const baseRadius = 4.0
    
    return [
      // DevOps Tools
      { name: 'Docker', image: '/icons/docker.png', position: 0, radius: baseRadius * 0.85, color: '#2496ED' },
      { name: 'Kubernetes', image: '/icons/kubernetes.png', position: 1, radius: baseRadius * 0.92, color: '#326CE5' },
      { name: 'Jenkins', image: '/icons/jenkins.png', position: 2, radius: baseRadius * 0.78, color: '#D24939' },
      { name: 'GitHub', image: '/icons/github.png', position: 3, radius: baseRadius * 1.0, color: '#181717' },
      
      // Cloud Platforms
      { name: 'AWS', image: '/icons/aws.png', position: 5, radius: baseRadius * 0.95, color: '#FF9900' },
      { name: 'Azure', image: '/icons/azure.png', position: 6, radius: baseRadius * 0.88, color: '#0078D4' },
      { name: 'Oracle', image: '/icons/oracle.png', position: 7, radius: baseRadius * 1.0, color: '#4285F4' },
      
      // Testing Tools
      { name: 'Selenium', image: '/icons/selenium.png', position: 8, radius: baseRadius * 0.75, color: '#43B02A' },
      { name: 'Jest', image: '/icons/jest.png', position: 9, radius: baseRadius * 0.92, color: '#C21325' },
      { name: 'Cypress', image: '/icons/cypress.png', position: 10, radius: baseRadius * 0.78, color: '#17202C' },
      
      // Languages
      { name: 'Python', image: '/icons/python.png', position: 11, radius: baseRadius * 0.85, color: '#3776AB' },
      { name: 'JavaScript', image: '/icons/javascript.png', position: 12, radius: baseRadius * 0.95, color: '#F7DF1E' },
      { name: 'TypeScript', image: '/icons/typescript.png', position: 13, radius: baseRadius * 0.82, color: '#3178C6' },
      
      // Databases
      { name: 'MongoDB', image: '/icons/mongodb.png', position: 14, radius: baseRadius * 0.88, color: '#47A248' },
      { name: 'PostgreSQL', image: '/icons/postgresql.png', position: 15, radius: baseRadius * 1.0, color: '#4169E1' },
      { name: 'Redis', image: '/icons/redis.png', position: 16, radius: baseRadius * 0.78, color: '#DC382D' },
      
      // AI/ML
      { name: 'TensorFlow', image: '/icons/tensorflow.png', position: 17, radius: baseRadius * 0.92, color: '#FF6F00' },
      { name: 'PyTorch', image: '/icons/pytorch.png', position: 18, radius: baseRadius * 0.85, color: '#EE4C2C' },
      
      // Monitoring
      { name: 'Grafana', image: '/icons/grafana.png', position: 19, radius: baseRadius * 0.95, color: '#F46800' },
      { name: 'Prometheus', image: '/icons/prometheus.png', position: 20, radius: baseRadius * 0.82, color: '#E6522C' },
      
      // Additional DevOps & CI/CD
      { name: 'GitHub Actions', image: '/icons/github-actions.png', position: 21, radius: baseRadius * 0.88, color: '#2088FF' },
      { name: 'Git', image: '/icons/git.png', position: 22, radius: baseRadius * 1.0, color: '#F05032' },
      
      // Frameworks & Libraries
      { name: 'Node.js', image: '/icons/nodejs.png', position: 23, radius: baseRadius * 0.78, color: '#339933' },
      { name: 'React', image: '/icons/react.png', position: 24, radius: baseRadius * 0.92, color: '#61DAFB' },
      { name: 'Next.js', image: '/icons/nextjs.png', position: 25, radius: baseRadius * 0.85, color: '#000000' },
      { name: 'Express.js', image: '/icons/expressjs.png', position: 26, radius: baseRadius * 0.95, color: '#000000' },
      
      // Operating Systems
      { name: 'Linux', image: '/icons/linux.png', position: 27, radius: baseRadius * 0.82, color: '#FCC624' },
      
      // Additional Testing Tools
      { name: 'Postman', image: '/icons/postman.png', position: 28, radius: baseRadius * 0.88, color: '#FF6C37' },
      { name: 'Playwright', image: '/icons/playwright.png', position: 29, radius: baseRadius * 1.0, color: '#2EAD33' },
    ]
  }, [])

  // Orbiting paths for tech icons
  const orbitPositions = useMemo(() => {
    return techIcons.map((icon) => ({
      ...icon,
      offset: (icon.position / techIcons.length) * Math.PI * 2,
      speed: 0.1 + Math.random() * 0.1,
      verticalOffset: Math.sin(icon.position) * 0.5
    }))
  }, [techIcons])

  // Sparkle particles around icons
  const particles = useMemo(() => {
    const count = 200
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)

    // Base particle radius - no shrinking
    const baseParticleRadius = 3.5
    const heightMultiplier = 1.0

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2
      const radius = (baseParticleRadius * 0.5 + Math.random() * baseParticleRadius * 0.8)
      const height = (Math.random() - 0.5) * 3 * heightMultiplier

      positions[i * 3] = Math.cos(angle) * radius
      positions[i * 3 + 1] = height
      positions[i * 3 + 2] = Math.sin(angle) * radius

      sizes[i] = Math.random() * 0.05 + 0.02

      // Random sparkle colors
      const sparkleColor = new THREE.Color()
      sparkleColor.setHSL(Math.random(), 0.7, isDark ? 0.7 : 0.5)
      colors[i * 3] = sparkleColor.r
      colors[i * 3 + 1] = sparkleColor.g
      colors[i * 3 + 2] = sparkleColor.b
    }

    return { positions, colors, sizes, count }
  }, [isDark])

  useFrame((state) => {
    timeRef.current = state.clock.elapsedTime

    // Animate sparkle particles
    if (particlesRef.current) {
      const sizes = particlesRef.current.geometry.attributes.size.array as Float32Array

      for (let i = 0; i < particles.count; i++) {
        // Twinkling effect
        sizes[i] = particles.sizes[i] * (0.5 + Math.sin(timeRef.current * 3 + i) * 0.5)
      }

      particlesRef.current.geometry.attributes.size.needsUpdate = true
    }

    // Force re-render to update icon positions
    setFrame(state.clock.elapsedTime)
  })

  return (
    <group ref={groupRef}>
      {/* Center Hub - Your Photo (STATIONARY - like the Sun) */}
      <Html 
        center 
        transform 
        distanceFactor={1.5}
        style={{
          transform: `translateY(${Math.sin(timeRef.current * 0.5) * 5}px)`, // Gentle floating
        }}
      >
        <div className="relative">
          {/* Glowing aura - Scaled with photo */}
          <div className="absolute inset-0 -m-8 sm:-m-12 md:-m-14 lg:-m-16 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-2xl animate-pulse" />
          <div className="absolute inset-0 -m-6 sm:-m-8 md:-m-10 lg:-m-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 opacity-25 blur-xl" />

          {/* Profile photo - 5x larger on mobile, 1.5x on desktop */}
          <div className="relative w-[1120px] h-[1120px] sm:w-[480px] sm:h-[480px] md:w-[576px] md:h-[576px] lg:w-[672px] lg:h-[672px] rounded-full overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm">
            <img src="/me.jpg" alt="Yugan Kavinda" className="w-full h-full object-cover" />
          </div>
        </div>
      </Html>

      {/* Orbiting Tech Icons - Scaled to screen size */}
      {orbitPositions.map((tech, index) => {
        // Each icon orbits independently - continuous circular motion
        const angle = timeRef.current * tech.speed + tech.offset
        
        // Reduce distance for smaller screens instead of scaling down
        const distanceMultiplier = isMobile ? 0.6 : isTablet ? 0.85 : 1.0
        
        // Scale orbit to use full container boundary
        const x = isMobile 
          ? Math.cos(angle) * tech.radius * 0.7 // Mobile: more horizontal spread
          : Math.cos(angle) * tech.radius * distanceMultiplier
        const z = isMobile ? 0 : Math.sin(angle) * tech.radius * distanceMultiplier
        const y = isMobile 
          ? Math.sin(angle) * tech.radius * 0.8 // Mobile: use full vertical space
          : tech.verticalOffset + Math.sin(timeRef.current * 0.5 + index) * 0.5

        return (
          <Html
            key={tech.name}
            position={[x, y, z]}
            transform
            distanceFactor={1.2}
            style={{
              transition: 'all 0.3s ease',
            }}
          >
            <div className="relative group cursor-pointer">
              {/* Icon container with glow - 5x larger on mobile */}
              <div 
                className="relative w-[200px] h-[200px] sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 backdrop-blur-md border border-white/10 overflow-hidden"
                style={{
                  background: `radial-gradient(circle at center, ${tech.color}20, transparent)`,
                  boxShadow: `0 0 20px ${tech.color}40`,
                }}
              >
                {/* Tech icon image - 5x larger on mobile */}
                <img 
                  src={tech.image} 
                  alt={tech.name}
                  className="w-[140px] h-[140px] sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain drop-shadow-lg"
                  onError={(e) => {
                    // Fallback to gradient background if image fails to load
                    e.currentTarget.style.display = 'none'
                  }}
                />
                
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-md"
                  style={{
                    background: `radial-gradient(circle at center, ${tech.color}60, transparent)`,
                  }}
                />
              </div>

              {/* Tooltip on hover */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                <div className="bg-black/90 backdrop-blur-sm px-4 py-2 rounded-lg whitespace-nowrap text-sm text-white border border-white/20 shadow-xl">
                  {tech.name}
                </div>
              </div>
            </div>
          </Html>
        )
      })}

      {/* Sparkle particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.count}
            array={particles.positions}
            itemSize={3}
            args={[particles.positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particles.count}
            array={particles.colors}
            itemSize={3}
            args={[particles.colors, 3]}
          />
          <bufferAttribute
            attach="attributes-size"
            count={particles.count}
            array={particles.sizes}
            itemSize={1}
            args={[particles.sizes, 1]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          vertexColors
          sizeAttenuation
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Soft ambient lighting */}
      <ambientLight intensity={isDark ? 0.4 : 0.6} />
      <hemisphereLight args={[isDark ? "#6366f1" : "#93c5fd", isDark ? "#1e1b4b" : "#dbeafe", 0.5]} />
      
      {/* Subtle point lights for depth */}
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#a78bfa" />
      <pointLight position={[-5, -5, -5]} intensity={0.3} color="#60a5fa" />
    </group>
  )
}
