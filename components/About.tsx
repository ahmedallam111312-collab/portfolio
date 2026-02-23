'use client'

import { useEffect, useRef } from 'react'

const skills = [
  { name: 'Python', desc: 'Automation, scripting, data workflows' },
  { name: 'Web Development', desc: 'Full-stack, responsive, modern frameworks' },
  { name: 'WooCommerce', desc: 'E-commerce setup, payment integration, plugins' },
  { name: 'Data Entry', desc: 'Structured data management & quality control' },
  { name: 'Clinical Research', desc: 'Medical data analysis & healthcare informatics' },
]

function useScrollReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current
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
    el.style.transform = 'translateY(24px)'
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref])
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  useScrollReveal(sectionRef as React.RefObject<HTMLElement>)
  useScrollReveal(skillsRef as React.RefObject<HTMLElement>)

  return (
    <section id="about" className="py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">
          00 / About
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div ref={sectionRef}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight mb-8">
              Where Clinical Rigor Meets Code.
            </h2>
            <div className="space-y-5 text-secondary text-lg leading-relaxed">
              <p>
                I'm Ahmed Mohamed — a developer and data specialist with a foot in two worlds:
                healthcare and technology. My background spans clinical research environments and
                modern web development, giving me a rare ability to build solutions that are both
                medically accurate and technically robust.
              </p>
              <p>
                Whether I'm architecting an e-commerce store, automating repetitive workflows with
                Python, or building applications for maternal health tracking, I bring methodical
                thinking and precision to every project.
              </p>
              <p>
                I believe the best software is built by people who understand the domain deeply —
                not just the code.
              </p>
            </div>
          </div>

          {/* Right: Skills */}
          <div ref={skillsRef} className="mt-4">
            <h3 className="font-serif text-2xl font-bold text-primary mb-6">Core Skills</h3>
            <div className="divide-y border-base">
              {skills.map((skill, i) => (
                <div
                  key={skill.name}
                  className="py-5 flex items-start justify-between gap-4 group"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <div>
                    <p className="font-medium text-primary group-hover:text-accent transition-colors duration-200">
                      {skill.name}
                    </p>
                    <p className="text-sm text-secondary mt-0.5">{skill.desc}</p>
                  </div>
                  <span className="text-xs font-mono text-secondary shrink-0 mt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
