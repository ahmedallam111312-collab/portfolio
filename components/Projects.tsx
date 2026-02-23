'use client'

import { useEffect, useRef, useState } from 'react'
import { ExternalLink, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'Darwish Market',
    description:
      'E-commerce platform built from scratch. Features robust product management, secure payment integration, and responsive design optimized for conversion.',
    longDescription:
      'A fully custom WooCommerce build covering catalog architecture, payment gateway integration, inventory sync, and mobile-first responsive design — engineered for real-world retail performance.',
    tags: ['WooCommerce', 'WordPress', 'E-commerce'],
    link: 'https://darwishmarket1.com',
    category: 'E-Commerce',
    year: '2024',
    accent: '#c8622a',
    stat: { value: '100+', label: 'Products Listed' },
  },
  {
    number: '02',
    title: 'Smart Pregnancy App',
    description:
      'An interactive medical web application for monitoring maternal health indicators and tracking Gestational Diabetes Mellitus (GDM) — built with clinical accuracy at its core.',
    longDescription:
      'Combines clinical research protocols with modern web development. Tracks GDM risk factors, visualizes maternal health indicators, and surfaces evidence-based guidance — bridging the gap between healthcare data and patient-facing UI.',
    tags: ['Medical Research', 'Web Development', 'Healthcare Tech'],
    link: 'https://smart-pregnancy-app-deploy.vercel.app/',
    category: 'Medical Tech',
    year: '2024',
    accent: '#2a7c6f',
    stat: { value: 'GDM', label: 'Risk Tracking' },
  },
  {
    number: '03',
    title: 'Clock-In Connect',
    description:
      'A streamlined employee attendance management system with an organized dashboard for tracking work hours, shifts, and workforce analytics.',
    longDescription:
      'A business automation tool that replaces manual timesheets with a clean dashboard. Tracks clock-in/out events, calculates hours, flags anomalies, and exports reports — giving managers real-time workforce visibility.',
    tags: ['Business Automation', 'Time Management'],
    link: 'https://clock-in-connect.vercel.app/',
    category: 'Business Tools',
    year: '2024',
    accent: '#2a4a7c',
    stat: { value: '∞', label: 'Hours Tracked' },
  },
]

type Project = (typeof projects)[0]

function FeaturedCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    el.style.opacity = '0'
    el.style.transform = 'translateY(32px)'
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={cardRef} className="mb-6">
      <div
        className="relative overflow-hidden border p-0 flex flex-col md:flex-row transition-all duration-500"
        style={{
          borderColor: hovered ? project.accent : 'var(--border)',
          background: 'var(--bg)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Animated accent bar */}
        <div
          className="absolute top-0 left-0 h-0.5 transition-all duration-700 ease-out"
          style={{
            width: hovered ? '100%' : '0%',
            background: project.accent,
          }}
        />

        {/* Left: large number + stat */}
        <div
          className="md:w-56 shrink-0 flex flex-col justify-between p-8 border-r"
          style={{
            borderColor: 'var(--border)',
            background: hovered ? project.accent + '08' : 'transparent',
            transition: 'background 0.4s ease',
          }}
        >
          <div>
            <span
              className="font-serif font-bold leading-none select-none"
              style={{
                fontSize: 'clamp(4rem, 8vw, 7rem)',
                color: hovered ? project.accent : 'var(--border)',
                transition: 'color 0.4s ease',
              }}
            >
              {project.number}
            </span>
          </div>
          <div className="mt-8 md:mt-0">
            <p
              className="font-serif text-3xl font-bold"
              style={{ color: project.accent }}
            >
              {project.stat.value}
            </p>
            <p className="text-xs font-mono uppercase tracking-widest mt-1"
              style={{ color: 'var(--text-secondary)' }}>
              {project.stat.label}
            </p>
          </div>
        </div>

        {/* Right: content */}
        <div className="flex flex-col justify-between p-8 flex-1">
          <div>
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <span
                  className="text-xs font-mono uppercase tracking-widest px-2.5 py-1"
                  style={{
                    background: project.accent + '15',
                    color: project.accent,
                    border: `1px solid ${project.accent}40`,
                  }}
                >
                  {project.category}
                </span>
                <span className="text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
                  {project.year}
                </span>
              </div>
              <span
                className="text-xs font-mono uppercase tracking-widest px-2 py-1"
                style={{
                  background: 'var(--bg-secondary)',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border)',
                }}
              >
                Featured
              </span>
            </div>

            <h3
              className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-4 transition-colors duration-300"
              style={{ color: hovered ? project.accent : 'var(--text-primary)' }}
            >
              {project.title}
            </h3>

            <p className="leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
              {project.description}
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{
                color: 'var(--text-secondary)',
                opacity: hovered ? 1 : 0,
                transform: hovered ? 'translateY(0)' : 'translateY(8px)',
                transition: 'opacity 0.4s ease, transform 0.4s ease',
                maxHeight: hovered ? '100px' : '0',
                overflow: 'hidden',
              }}
            >
              {project.longDescription}
            </p>
          </div>

          <div className="flex items-end justify-between mt-8 flex-wrap gap-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2.5 py-1"
                  style={{
                    background: 'var(--bg-secondary)',
                    color: 'var(--text-secondary)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium transition-all duration-200 shrink-0"
              style={{
                background: hovered ? project.accent : 'transparent',
                color: hovered ? '#fdfaf5' : project.accent,
                border: `1px solid ${project.accent}`,
              }}
            >
              View Live Project
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function SmallCard({ project, delay }: { project: Project; delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }, delay)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    el.style.opacity = '0'
    el.style.transform = 'translateY(24px)'
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden border flex flex-col transition-all duration-300 cursor-default"
      style={{
        borderColor: hovered ? project.accent : 'var(--border)',
        background: 'var(--bg)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top accent line */}
      <div
        className="h-0.5 transition-all duration-500"
        style={{
          width: hovered ? '100%' : '0%',
          background: project.accent,
        }}
      />

      <div className="p-7 flex flex-col flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between mb-5">
          <span
            className="font-serif font-bold text-5xl leading-none select-none transition-colors duration-300"
            style={{ color: hovered ? project.accent : 'var(--border)' }}
          >
            {project.number}
          </span>
          <span
            className="text-xs font-mono uppercase tracking-wider px-2 py-1 mt-1"
            style={{
              background: hovered ? project.accent + '15' : 'var(--bg-secondary)',
              color: hovered ? project.accent : 'var(--text-secondary)',
              border: `1px solid ${hovered ? project.accent + '40' : 'var(--border)'}`,
              transition: 'all 0.3s ease',
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-serif text-2xl font-bold leading-tight mb-3 transition-colors duration-300"
          style={{ color: hovered ? project.accent : 'var(--text-primary)' }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed flex-1 mb-5"
          style={{ color: 'var(--text-secondary)' }}>
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2 py-0.5 transition-all duration-300"
              style={{
                background: hovered ? project.accent + '10' : 'var(--bg-secondary)',
                color: hovered ? project.accent : 'var(--text-secondary)',
                border: `1px solid ${hovered ? project.accent + '30' : 'var(--border)'}`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer row */}
        <div className="flex items-center justify-between pt-5 border-t"
          style={{ borderColor: 'var(--border)' }}>
          <span className="text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
            {project.year}
          </span>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200 group/link"
            style={{ color: project.accent }}
          >
            <span
              className="border-b border-transparent transition-colors"
              style={{ borderColor: hovered ? project.accent : 'transparent' }}
            >
              View Project
            </span>
            <ExternalLink
              size={13}
              className="transition-transform duration-200"
              style={{
                transform: hovered ? 'translate(2px, -2px)' : 'translate(0,0)',
              }}
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const [featured, ...rest] = projects

  return (
    <section
      id="projects"
      className="py-24 md:py-36"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="font-mono text-xs tracking-widest uppercase mb-4"
              style={{ color: 'var(--accent)' }}>
              01 / Projects
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight"
              style={{ color: 'var(--text-primary)' }}>
              Selected Work.
            </h2>
          </div>
          <div className="flex items-center gap-8 md:gap-12">
            <div>
              <p className="font-serif text-3xl font-bold" style={{ color: 'var(--accent)' }}>3</p>
              <p className="text-xs font-mono uppercase tracking-widest mt-1"
                style={{ color: 'var(--text-secondary)' }}>Projects</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>3</p>
              <p className="text-xs font-mono uppercase tracking-widest mt-1"
                style={{ color: 'var(--text-secondary)' }}>Domains</p>
            </div>
            <p className="text-sm leading-relaxed max-w-xs hidden md:block"
              style={{ color: 'var(--text-secondary)' }}>
              Spanning healthcare technology, e-commerce, and business automation.
            </p>
          </div>
        </div>

        {/* Featured project — full width */}
        <FeaturedCard project={featured} />

        {/* Remaining projects — 2 col grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((project, i) => (
            <SmallCard key={project.title} project={project} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  )
}