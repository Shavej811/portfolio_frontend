import './resume.css';

const EXPERIENCE = [
  {
    role: 'React Native Developer',
    company: 'TechCraft Solutions',
    period: '2023 — Present',
    location: 'Remote',
    points: [
      'Built and shipped 3 cross-platform mobile apps with React Native & Expo, serving 10k+ active users.',
      'Architected scalable state management using Redux Toolkit and React Query, cutting API load times by 38%.',
      'Integrated RESTful APIs, push notifications, and in-app purchases across iOS & Android.',
      'Collaborated with UI/UX designers to implement pixel-perfect interfaces with smooth 60fps animations.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Pixel Republic',
    period: '2022 — 2023',
    location: 'Delhi, IN',
    points: [
      'Developed 5 responsive React.js web applications for clients across e-commerce and fintech verticals.',
      'Migrated legacy class components to functional components with hooks, reducing bundle size by 22%.',
      'Built reusable component libraries with TypeScript, improving team delivery speed by 30%.',
      'Implemented CI/CD pipelines via GitHub Actions for automated testing and deployment.',
    ],
  },
  {
    role: 'Junior React Developer',
    company: 'Nexova Labs',
    period: '2021 — 2022',
    location: 'Delhi, IN',
    points: [
      'Contributed to a SaaS dashboard product used by 200+ businesses, built in React & Tailwind CSS.',
      'Consumed and integrated third-party REST APIs including Stripe, Firebase, and Mapbox.',
      'Wrote unit and integration tests using Jest and React Testing Library.',
    ],
  },
];

const PROJECTS = [
  {
    name: 'ShopSwift',
    type: 'Mobile App',
    tech: ['React Native', 'Expo', 'Redux', 'Stripe'],
    description:
      'A full-featured e-commerce mobile app with cart management, real-time inventory, Stripe payments, and order tracking. Available on iOS & Android.',
    link: '#',
  },
  {
    name: 'TrackFlow',
    type: 'Mobile App',
    tech: ['React Native', 'Firebase', 'React Query'],
    description:
      'A productivity and habit-tracking app with streak analytics, push reminders, and cloud sync. Reached 2k+ downloads in the first month.',
    link: '#',
  },
  {
    name: 'Dashify',
    type: 'Web App',
    tech: ['React.js', 'TypeScript', 'Recharts', 'REST API'],
    description:
      'A SaaS analytics dashboard with real-time KPI cards, filterable data tables, and exportable reports. Used by 50+ small businesses.',
    link: '#',
  },
  {
    name: 'Folio.dev',
    type: 'Web App',
    tech: ['React.js', 'Vite', 'Framer Motion', 'CSS'],
    description:
      'A portfolio builder web app where developers can generate and publish personal portfolio pages in under 5 minutes.',
    link: '#',
  },
];

const SKILLS = {
  'Mobile': ['React Native', 'Expo', 'iOS & Android', 'Push Notifications', 'App Store Deploy'],
  'Frontend': ['React.js', 'TypeScript', 'Next.js', 'Vite', 'Tailwind CSS'],
  'State & Data': ['Redux Toolkit', 'React Query', 'Context API', 'Zustand'],
  'Backend & Tools': ['Node.js', 'REST APIs', 'Firebase', 'Git', 'GitHub Actions'],
};

const Resume = () => {
  return (
    <main className="resume-page">

      {/* ── Hero ── */}
      <section className="resume-hero">
        <div className="resume-hero-left">
          <p className="resume-eyebrow">Curriculum Vitae</p>
          <h1 className="resume-name">Shavej<br /><em>Chaudhary</em></h1>
          <div className="resume-role-badge">
            <span className="resume-role-dot" />
            React &amp; React Native Developer
          </div>
        </div>
        <div className="resume-hero-right">
          <div className="resume-contact-grid">
            {[
              { label: 'Email', value: 'shavej@email.com', href: 'mailto:shavej@email.com' },
              { label: 'Location', value: 'Delhi, India', href: '#' },
              { label: 'GitHub', value: 'github.com/shavej', href: '#' },
              { label: 'LinkedIn', value: 'linkedin.com/in/shavej', href: '#' },
            ].map(({ label, value, href }) => (
              <div key={label} className="resume-contact-item">
                <span className="contact-label">{label}</span>
                <a href={href} className="contact-value">{value}</a>
              </div>
            ))}
          </div>
          <a href="#" className="resume-download-btn" download>
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 2v8M4 7l4 4 4-4M2 13h12" />
            </svg>
            Download PDF
          </a>
        </div>
      </section>

      <div className="resume-divider" />

      {/* ── Stats ── */}
      <section className="resume-stats">
        {[
          { n: '3+', l: 'Years Experience' },
          { n: '20+', l: 'Projects Shipped' },
          { n: '10+', l: 'Happy Clients' },
          { n: '2', l: 'Platforms (iOS & Android)' },
        ].map(({ n, l }) => (
          <div key={l} className="resume-stat">
            <span className="resume-stat-n">{n}</span>
            <span className="resume-stat-l">{l}</span>
          </div>
        ))}
      </section>

      <div className="resume-divider" />

      {/* ── Body ── */}
      <div className="resume-body">

        {/* ── LEFT COL ── */}
        <div className="resume-col-left">

          {/* Experience */}
          <section className="resume-section">
            <h2 className="section-title">
              <span className="section-title-line" />
              Experience
            </h2>
            <div className="exp-list">
              {EXPERIENCE.map((job) => (
                <div key={job.company} className="exp-item">
                  <div className="exp-header">
                    <div>
                      <p className="exp-role">{job.role}</p>
                      <p className="exp-company">{job.company} &middot; {job.location}</p>
                    </div>
                    <span className="exp-period">{job.period}</span>
                  </div>
                  <ul className="exp-points">
                    {job.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="resume-section">
            <h2 className="section-title">
              <span className="section-title-line" />
              Projects
            </h2>
            <div className="project-grid">
              {PROJECTS.map((p) => (
                <a key={p.name} href={p.link} className="project-card">
                  <div className="project-card-top">
                    <div>
                      <p className="project-name">{p.name}</p>
                      <span className="project-type">{p.type}</span>
                    </div>
                    <svg className="project-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 13L13 3M5 3h8v8" />
                    </svg>
                  </div>
                  <p className="project-desc">{p.description}</p>
                  <div className="project-tech">
                    {p.tech.map((t) => <span key={t} className="tech-pill">{t}</span>)}
                  </div>
                </a>
              ))}
            </div>
          </section>

        </div>

        {/* ── RIGHT COL ── */}
        <div className="resume-col-right">

          {/* About */}
          <section className="resume-section">
            <h2 className="section-title">
              <span className="section-title-line" />
              About
            </h2>
            <p className="resume-about">
              Passionate React &amp; React Native developer with 3+ years building
              fast, polished products across web and mobile. I care deeply about
              clean architecture, smooth UX, and shipping things that actually work.
              Currently open to exciting full-time roles and freelance projects.
            </p>
          </section>

          {/* Skills */}
          <section className="resume-section">
            <h2 className="section-title">
              <span className="section-title-line" />
              Skills
            </h2>
            <div className="skills-list">
              {Object.entries(SKILLS).map(([category, items]) => (
                <div key={category} className="skill-group">
                  <p className="skill-category">{category}</p>
                  <div className="skill-pills">
                    {items.map((s) => <span key={s} className="skill-pill">{s}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="resume-section">
            <h2 className="section-title">
              <span className="section-title-line" />
              Education
            </h2>
            <div className="edu-item">
              <p className="edu-degree">B.Tech — Computer Science</p>
              <p className="edu-school">Guru Gobind Singh Indraprastha University</p>
              <span className="edu-year">2018 — 2022</span>
            </div>
          </section>

          {/* Languages */}
          <section className="resume-section">
            <h2 className="section-title">
              <span className="section-title-line" />
              Languages
            </h2>
            <div className="lang-list">
              {[
                { lang: 'English', level: 'Fluent', pct: 90 },
                { lang: 'Hindi', level: 'Native', pct: 100 },
              ].map(({ lang, level, pct }) => (
                <div key={lang} className="lang-item">
                  <div className="lang-meta">
                    <span className="lang-name">{lang}</span>
                    <span className="lang-level">{level}</span>
                  </div>
                  <div className="lang-bar-bg">
                    <div className="lang-bar-fill" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </main>
  );
};

export default Resume;