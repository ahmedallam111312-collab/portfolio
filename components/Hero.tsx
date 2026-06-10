'use client'

import { useEffect, useRef } from 'react'
import { ArrowDown, Stethoscope, Code2 } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    const timer = setTimeout(() => {
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-[0.04] dark:opacity-[0.06]"
          style={{ background: 'var(--accent)', filter: 'blur(80px)' }}
        />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-[0.03] dark:opacity-[0.05]"
          style={{ background: 'var(--accent)', filter: 'blur(100px)' }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div ref={containerRef} className="max-w-6xl mx-auto px-6 pt-24 pb-16 relative">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase text-secondary border border-base rounded-full px-3 py-1.5">
            <Stethoscope size={12} className="text-accent" />
            <span>Healthcare × Technology</span>
            <Code2 size={12} className="text-accent" />
          </div>
        </div>

        {/* Main headline */}
        <div className="mb-8 max-w-4xl">
          <h1 className="font-serif font-bold leading-[1.05] tracking-tight">
            <span className="block text-5xl sm:text-6xl lg:text-8xl text-primary mb-2">
              Ahmed
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-8xl text-primary mb-4">
              Mohamed
            </span>
            <span
              className="block text-3xl sm:text-4xl lg:text-5xl"
              style={{ color: 'var(--accent)' }}
            >
              Developer & Data Specialist
            </span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl text-primary">
              bridging Healthcare & Technology.
            </span>
          </h1>
        </div>

        {/* Bio */}
        <p className="text-lg sm:text-xl text-secondary max-w-2xl leading-relaxed mb-12 font-sans">
          I combine clinical rigor with technical expertise. I build e-commerce solutions,
          automate workflows with Python, and develop medical web applications.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-medium text-base rounded-none transition-all duration-300 group"
            style={{
              background: 'var(--accent)',
              color: '#ffffff',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = 'var(--text-primary)';
              (e.target as HTMLElement).style.color = 'var(--bg)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = 'var(--accent)';
              (e.target as HTMLElement).style.color = '#ffffff';
            }}
          >
            View My Work
            <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 font-medium text-base border border-base text-primary rounded-none hover:border-accent hover:text-accent transition-all duration-200"
          >
            Contact Me
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-24 hidden md:flex items-center gap-3 text-secondary">
          <div
            className="w-px h-12 animate-pulse"
            style={{ background: 'var(--accent)', opacity: 0.5 }}
          />
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        </div>
      </div>
    </section>
  )
}
