import React, { useEffect, useRef, useState } from 'react';
import './skills.css';

const skillsData = [
  {
    category: 'Frontend',
    accent: 'red',
    tag: 'Web & Mobile UI',
    skills: [
      { name: 'React / Next.js', level: 92 },
      { name: 'React Native', level: 80 },
      { name: 'TypeScript', level: 88 },
      { name: 'CSS / Tailwind', level: 90 },
    ],
  },
  {
    category: 'Backend',
    accent: 'sand',
    tag: 'Server & Data',
    skills: [
      { name: 'Node.js / Express', level: 85 },
      { name: 'REST APIs', level: 88 },
      { name: 'MongoDB', level: 78 },
      { name: 'PostgreSQL', level: 72 },
    ],
  },
  {
    category: 'UI / UX',
    accent: 'slate',
    tag: 'Design & Systems',
    skills: [
      { name: 'Prototyping', level: 78 },
      { name: 'Design Systems', level: 80 },
      { name: 'Responsive Design', level: 94 },
      { name: 'Wireframing', level: 82 },
    ],
  },
  {
    category: 'DevOps & Tools',
    accent: 'sand',
    tag: 'Infra & Workflow',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Docker', level: 68 },
      { name: 'CI/CD Pipelines', level: 70 },
      { name: 'AWS Basics', level: 60 },
    ],
  },
];

const tools = [
  'React', 'React Native', 'Next.js', 'TypeScript', 'Node.js',
  'MongoDB', 'PostgreSQL', 'Docker', 'Git', 'GitHub',
  'Tailwind CSS', 'Express', 'REST API', 'AWS', 'Vite', 'Redux',
];

// SVG icons per category
const CategoryIcon = ({ accent }: { accent: string }) => {
  if (accent === 'red') return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  );
  if (accent === 'sand') return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  );
  if (accent === 'slate') return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
    </svg>
  );
  return null;
};

function SkillBar({ name, level, accent, index }: {
  name: string; level: number; accent: string; index: number;
}) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`skill-bar-row ${animated ? 'skill-bar-row--visible' : ''}`}
      ref={ref}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="skill-bar-top">
        <span className="skill-bar-name">{name}</span>
        <span className={`skill-bar-pct skill-bar-pct--${accent}`}>{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className={`skill-bar-fill skill-bar-fill--${accent}`}
          style={{ width: animated ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

function SkillsOverview() {
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
    <section className="skills-section">

      {/* ── Header ── */}
      <div
        className={`skills-header ${headerVisible ? 'skills-header--visible' : ''}`}
        ref={headerRef}
      >
        <div className="skills-eyebrow">Capabilities</div>
        <div className="skills-header-row">
          <h2 className="skills-title">MY <em>SKILLS</em></h2>
          <p className="skills-subtitle">
            A curated set of tools and technologies I use to bring ideas to life —
            from pixel-perfect interfaces to scalable backend systems.
          </p>
        </div>
      </div>

      <div className="skills-divider" />

      {/* ── Cards Grid ── */}
      <div className="skills-grid">
        {skillsData.map((group, gi) => (
          <div className={`skill-card skill-card--${group.accent}`} key={gi}>

            {/* Top strip */}
            <div className="skill-card-top-strip">
              <div className={`skill-card-icon-wrap skill-card-icon-wrap--${group.accent}`}>
                <CategoryIcon accent={group.accent} />
              </div>
              <div className="skill-card-meta">
                <span className="skill-card-cat">{group.category}</span>
                <span className={`skill-card-tag skill-card-tag--${group.accent}`}>{group.tag}</span>
              </div>
              <div className="skill-card-index">
                <span className="skill-card-index-num">0{gi + 1}</span>
                <span className="skill-card-index-total">/ 04</span>
              </div>
            </div>

            {/* Divider */}
            <div className="skill-card-divider" />

            {/* Skill bars */}
            <div className="skill-card-bars">
              {group.skills.map((s, si) => (
                <SkillBar
                  key={si}
                  name={s.name}
                  level={s.level}
                  accent={group.accent}
                  index={si}
                />
              ))}
            </div>

            {/* Bottom count badge */}
            <div className={`skill-card-footer skill-card-footer--${group.accent}`}>
              <span>{group.skills.length} technologies</span>
              <span className="skill-card-footer-avg">
                avg {Math.round(group.skills.reduce((a, s) => a + s.level, 0) / group.skills.length)}%
              </span>
            </div>

          </div>
        ))}
      </div>

      {/* ── Tools Strip ── */}
      <div className="skills-tools-wrap">
        <div className="skills-tools-label">Tools & Technologies</div>
        <div className="skills-tools">
          {tools.map((t, i) => (
            <span className="skills-tool-pill" key={i}>{t}</span>
          ))}
        </div>
      </div>

    </section>
  );
}

export default SkillsOverview;