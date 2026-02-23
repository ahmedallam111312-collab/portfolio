'use client'

import { useEffect, useRef } from 'react'
import { Mail, Linkedin, ArrowUpRight } from 'lucide-react'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)

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
      { threshold: 0.15 }
    )

    el.style.opacity = '0'
    el.style.transform = 'translateY(24px)'
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">
          02 / Contact
        </p>

        <div ref={ref}>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight mb-6 max-w-3xl">
            Let's Build Something Together.
          </h2>
          <p className="text-secondary text-xl leading-relaxed max-w-2xl mb-16">
            Whether you have a project in mind, a collaboration idea, or just want to connect —
            I'd love to hear from you.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-xl">
            {/* Email */}
            <a
              href="mailto:ahmedallam111312@gmail.com"
              className="group flex items-center gap-4 p-6 border border-base hover:border-accent transition-all duration-200"
              style={{ borderColor: 'var(--border)' }}
            >
              <div
                className="p-2.5 rounded-sm group-hover:bg-accent transition-colors duration-200"
                style={{ background: 'var(--bg-secondary)' }}
              >
                <Mail
                  size={18}
                  className="text-secondary group-hover:text-white transition-colors duration-200"
                />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-secondary mb-1">
                  Email
                </p>
                <p className="font-medium text-primary group-hover:text-accent transition-colors text-sm">
                  ahmedallam111312@gmail.com
                </p>
              </div>
              <ArrowUpRight
                size={16}
                className="ml-auto text-secondary group-hover:text-accent transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            {/* LinkedIn */}
            <a
              href="www.linkedin.com/in/ahmed-allam-71b7383b2"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 border border-base hover:border-accent transition-all duration-200"
              style={{ borderColor: 'var(--border)' }}
            >
              <div
                className="p-2.5 rounded-sm group-hover:bg-accent transition-colors duration-200"
                style={{ background: 'var(--bg-secondary)' }}
              >
                <Linkedin
                  size={18}
                  className="text-secondary group-hover:text-white transition-colors duration-200"
                />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-secondary mb-1">
                  LinkedIn
                </p>
                <p className="font-medium text-primary group-hover:text-accent transition-colors text-sm">
                  /in/ahmedmohamed
                </p>
              </div>
              <ArrowUpRight
                size={16}
                className="ml-auto text-secondary group-hover:text-accent transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
