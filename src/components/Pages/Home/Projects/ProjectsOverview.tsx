import React, { useEffect, useRef, useState } from 'react';
import './projects-overview.css';

const projects = [
  {
    id: '01',
    name: 'SHAVEJ PORTFOLIO',
    tagline: 'Personal brand & portfolio',
    desc: 'A high-performance portfolio built with React & TypeScript, featuring smooth animations, dark aesthetic, and fully responsive design.',
    tech: ['React', 'TypeScript', 'CSS', 'Framer Motion'],
    year: '2026',
    type: 'Personal',
    accent: 'red',
    status: 'live',
    metrics: [{ n: '100', l: 'Lighthouse' }, { n: '<1s', l: 'Load Time' }],
    link: '#',
    github: '#',
  },
  {
    id: '02',
    name: 'E-COMMERCE APP',
    tagline: 'Full-stack shopping platform',
    desc: 'End-to-end e-commerce solution with cart, payments, admin dashboard, and real-time inventory management.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    year: '2025',
    type: 'Freelance',
    accent: 'sand',
    status: 'live',
    metrics: [{ n: '2K+', l: 'Users' }, { n: '98%', l: 'Uptime' }],
    link: '#',
    github: '#',
  },
  {
    id: '03',
    name: 'TASK MANAGER',
    tagline: 'Real-time collaboration tool',
    desc: 'Kanban-style project management app with real-time sync, team collaboration, and role-based access control.',
    tech: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
    year: '2025',
    type: 'Open Source',
    accent: 'slate',
    status: 'wip',
    metrics: [{ n: '50+', l: 'Stars' }, { n: '8', l: 'Contributors' }],
    link: '#',
    github: '#',
  },
  {
    id: '04',
    name: 'MOBILE FITNESS',
    tagline: 'React Native health tracker',
    desc: 'Cross-platform fitness tracking app with workout logging, progress charts, and push notifications.',
    tech: ['React Native', 'TypeScript', 'Redux', 'AWS'],
    year: '2024',
    type: 'Freelance',
    accent: 'sand',
    status: 'live',
    metrics: [{ n: '500+', l: 'Downloads' }, { n: '4.8★', l: 'Rating' }],
    link: '#',
    github: '#',
  },
];

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const ExternalIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3H3v10h10v-3M10 2h4v4M14 2L7 9" />
  </svg>
);

function ProjectCard({ p, index }: { p: typeof projects[0]; index: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`po-card po-card--${p.accent} ${visible ? 'po-card--visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Top row */}
      <div className="po-card-top">
        <div className="po-card-top-left">
          <span className="po-card-id">{p.id}</span>
          <span className={`po-card-type po-card-type--${p.accent}`}>{p.type}</span>
          <span className="po-card-year">{p.year}</span>
        </div>
        <span className={`po-card-status po-card-status--${p.status}`}>
          <span className="po-card-status-dot" />
          {p.status === 'live' ? 'Live' : 'In Progress'}
        </span>
      </div>

      {/* Name */}
      <h3 className="po-card-name">{p.name}</h3>
      <p className="po-card-tagline">{p.tagline}</p>

      {/* Divider */}
      <div className="po-card-divider" />

      {/* Description */}
      <p className="po-card-desc">{p.desc}</p>

      {/* Tech pills */}
      <div className="po-card-tech">
        {p.tech.map((t, i) => (
          <span className={`po-tech-pill po-tech-pill--${p.accent}`} key={i}>{t}</span>
        ))}
      </div>

      {/* Metrics */}
      <div className="po-card-metrics">
        {p.metrics.map((m, i) => (
          <div className="po-metric" key={i}>
            <span className={`po-metric-n po-metric-n--${p.accent}`}>{m.n}</span>
            <span className="po-metric-l">{m.l}</span>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="po-card-actions">
        <a href={p.link} className={`po-btn po-btn--primary po-btn--${p.accent}`}>
          <ExternalIcon /> View Live
        </a>
        <a href={p.github} className="po-btn po-btn--ghost">
          <GithubIcon /> GitHub
        </a>
      </div>
    </div>
  );
}

function ProjectsOverview() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.15 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="po-section">

      {/* ── Header ── */}
      <div
        className={`po-header ${headerVisible ? 'po-header--visible' : ''}`}
        ref={headerRef}
      >
        <div className="po-eyebrow">Selected Work</div>
        <div className="po-header-row">
          <h2 className="po-title">MY <em>PROJECTS</em></h2>
          <div className="po-header-right">
            <p className="po-subtitle">
              A selection of projects I've built — from full-stack web apps
              to cross-platform mobile experiences.
            </p>
            <div className="po-header-counts">
              <div className="po-count">
                <span className="po-count-n">{projects.length}</span>
                <span className="po-count-l">Projects</span>
              </div>
              <div className="po-count">
                <span className="po-count-n">{projects.filter(p => p.status === 'live').length}</span>
                <span className="po-count-l">Live</span>
              </div>
              <div className="po-count">
                <span className="po-count-n">3+</span>
                <span className="po-count-l">Years</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="po-divider" />

      {/* ── Grid ── */}
      <div className="po-grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} p={p} index={i} />
        ))}
      </div>

      {/* ── CTA ── */}
      <div className="po-cta-wrap">
        <a href="#" className="po-cta">
          View All Projects <ArrowIcon />
        </a>
      </div>

    </section>
  );
}

export default ProjectsOverview;