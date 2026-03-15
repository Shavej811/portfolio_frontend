import './projects.css';

const PROJECTS = [
  {
    id: '01',
    name: 'ShopSwift',
    tagline: 'E-commerce mobile experience, reimagined.',
    type: 'Mobile App',
    status: 'Live',
    year: '2024',
    description:
      'A full-featured cross-platform e-commerce app with real-time inventory, Stripe payments, order tracking, and push notifications. Built for speed and scale.',
    tech: ['React Native', 'Expo', 'Redux Toolkit', 'Stripe', 'Firebase'],
    metrics: [
      { n: '10k+', l: 'Active Users' },
      { n: '4.8★', l: 'App Store' },
      { n: '38%', l: 'Faster Checkout' },
    ],
    links: { live: '#', github: '#' },
    accent: '#2730C4',
  },
  {
    id: '02',
    name: 'TrackFlow',
    tagline: 'Build habits. Track streaks. Stay consistent.',
    type: 'Mobile App',
    status: 'Live',
    year: '2024',
    description:
      'A productivity and habit-tracking app with streak analytics, smart push reminders, cloud sync across devices, and a clean minimal interface users love.',
    tech: ['React Native', 'Firebase', 'React Query', 'Reanimated'],
    metrics: [
      { n: '2k+', l: 'Downloads' },
      { n: '91%', l: 'Retention' },
      { n: '60fps', l: 'Animations' },
    ],
    links: { live: '#', github: '#' },
    accent: '#0f766e',
  },
  {
    id: '03',
    name: 'Dashify',
    tagline: 'Analytics dashboard for modern SaaS teams.',
    type: 'Web App',
    status: 'Live',
    year: '2023',
    description:
      'A SaaS analytics platform with real-time KPI cards, filterable data tables, multi-chart views, and one-click CSV exports. Used by 50+ small businesses.',
    tech: ['React.js', 'TypeScript', 'Recharts', 'REST API', 'Tailwind'],
    metrics: [
      { n: '50+', l: 'Businesses' },
      { n: '12', l: 'Chart Types' },
      { n: '22%', l: 'Bundle Reduction' },
    ],
    links: { live: '#', github: '#' },
    accent: '#7c3aed',
  },
  {
    id: '04',
    name: 'Folio.dev',
    tagline: 'Your portfolio, live in under 5 minutes.',
    type: 'Web App',
    status: 'Live',
    year: '2023',
    description:
      'A portfolio builder where developers fill a form and get a fully generated, deployed portfolio page. Supports custom themes, domains, and project showcases.',
    tech: ['React.js', 'Vite', 'Framer Motion', 'Node.js', 'Vercel'],
    metrics: [
      { n: '500+', l: 'Portfolios Built' },
      { n: '5min', l: 'Time to Deploy' },
      { n: '8', l: 'Themes' },
    ],
    links: { live: '#', github: '#' },
    accent: '#b45309',
  },
  {
    id: '05',
    name: 'MediBook',
    tagline: 'Doctor appointments, simplified.',
    type: 'Mobile App',
    status: 'In Progress',
    year: '2025',
    description:
      'A healthcare appointment booking app with real-time slot availability, doctor profiles, video consultations, and prescription management. Built for clinics and patients.',
    tech: ['React Native', 'Expo', 'Supabase', 'WebRTC', 'Zustand'],
    metrics: [
      { n: '3', l: 'Clinic Pilots' },
      { n: 'HIPAA', l: 'Compliant' },
      { n: 'Live', l: 'Video Calls' },
    ],
    links: { live: '#', github: '#' },
    accent: '#0284c7',
  },
  {
    id: '06',
    name: 'Rentify',
    tagline: 'Find your next home, not just a listing.',
    type: 'Web App',
    status: 'Completed',
    year: '2023',
    description:
      'A real estate rental platform with Mapbox-powered search, virtual tour previews, saved listings, and an inquiry management system for landlords.',
    tech: ['React.js', 'Mapbox', 'TypeScript', 'Node.js', 'PostgreSQL'],
    metrics: [
      { n: '1.2k', l: 'Listings' },
      { n: '300+', l: 'Users' },
      { n: 'Map', l: 'Powered Search' },
    ],
    links: { live: '#', github: '#' },
    accent: '#be185d',
  },
];

const STATUS_COLOR: Record<string, string> = {
  Live: '#22c55e',
  'In Progress': '#f59e0b',
  Completed: '#6b7280',
};

const Projects = () => {
  return (
    <main className="projects-page">

      {/* ── Header ── */}
      <section className="projects-header">
        <div className="projects-header-left">
          <p className="projects-eyebrow">Selected Work</p>
          <h1 className="projects-title">
            Things I've<br /><em>built &amp; shipped.</em>
          </h1>
        </div>
        <div className="projects-header-right">
          <p className="projects-subtitle">
            A curated collection of web and mobile products — from concept
            to production. Each one built with care for performance,
            design, and the people using them.
          </p>
          <div className="projects-count-row">
            {[
              { n: `${PROJECTS.length}`, l: 'Projects' },
              { n: '2', l: 'Platforms' },
              { n: '3+', l: 'Years' },
            ].map(({ n, l }) => (
              <div key={l} className="projects-count">
                <span className="projects-count-n">{n}</span>
                <span className="projects-count-l">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="projects-divider" />

      {/* ── Filter pills ── */}
      <div className="projects-filters">
        {['All', 'Web App', 'Mobile App'].map((f) => (
          <button key={f} className={`filter-pill ${f === 'All' ? 'filter-pill--active' : ''}`}>
            {f}
          </button>
        ))}
      </div>

      {/* ── Project list ── */}
      <div className="projects-list">
        {PROJECTS.map((p) => (
          <article key={p.id} className="project-row">

            <div className="project-row-left">
              <div className="project-id-col">
                <span className="project-id">{p.id}</span>
                <div className="project-id-line" />
              </div>

              <div className="project-meta">
                <div className="project-meta-top">
                  <span
                    className="project-status-dot"
                    style={{ background: STATUS_COLOR[p.status] }}
                    title={p.status}
                  />
                  <span className="project-type-tag">{p.type}</span>
                  <span className="project-year">{p.year}</span>
                </div>
                <h2 className="project-name">{p.name}</h2>
                <p className="project-tagline">{p.tagline}</p>
                <p className="project-desc">{p.description}</p>

                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span key={t} className="project-tech-pill">{t}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a href={p.links.live} className="project-btn project-btn--primary">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="8" cy="8" r="6" /><path d="M2 8h12M8 2a9 9 0 0 1 0 12M8 2a9 9 0 0 0 0 12" />
                    </svg>
                    Live Preview
                  </a>
                  <a href={p.links.github} className="project-btn project-btn--ghost">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="project-row-right">
              <div className="project-metrics">
                {p.metrics.map(({ n, l }) => (
                  <div key={l} className="project-metric">
                    <span className="metric-n" style={{ color: p.accent }}>{n}</span>
                    <span className="metric-l">{l}</span>
                  </div>
                ))}
              </div>
              <div
                className="project-visual"
                style={{ '--accent': p.accent } as React.CSSProperties}
              >
                <span className="project-visual-name">{p.name}</span>
                <div
                  className="project-status-badge"
                  style={{ color: STATUS_COLOR[p.status], background: `${STATUS_COLOR[p.status]}18` }}
                >
                  <span
                    className="status-badge-dot"
                    style={{ background: STATUS_COLOR[p.status] }}
                  />
                  {p.status}
                </div>
              </div>
            </div>

          </article>
        ))}
      </div>

    </main>
  );
};

export default Projects;