import React, { useRef, useState, useEffect } from 'react';
import './contact-overview.css';

// ── Types ──────────────────────────────
interface SocialLink {
  label: string;
  handle: string;
  href: string;
  accent: 'red' | 'sand' | 'slate';
  icon: React.ReactNode;
}

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// ── Icons ──────────────────────────────
const ArrowIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

const GithubIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x={2} y={9} width={4} height={12} />
    <circle cx={4} cy={4} r={2} />
  </svg>
);

const TwitterIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l16 16M4 20L20 4" />
  </svg>
);

const EmailIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22 6 12 13 2 6" />
  </svg>
);

const CheckIcon: React.FC = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

// ── Data ───────────────────────────────
const socials: SocialLink[] = [
  { label: 'GitHub',      handle: '@shavej',          href: '#',                       accent: 'slate', icon: <GithubIcon />   },
  { label: 'LinkedIn',    handle: 'Shavej Chaudhary', href: '#',                       accent: 'sand',  icon: <LinkedinIcon /> },
  { label: 'Twitter / X', handle: '@shavej_dev',      href: '#',                       accent: 'slate', icon: <TwitterIcon />  },
  { label: 'Email',       handle: 'shavej@email.com', href: 'mailto:shavej@email.com', accent: 'red',   icon: <EmailIcon />    },
];

// ── Visibility Hook ────────────────────
function useVisible(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

// ── Component ──────────────────────────
const ContactOverview: React.FC = () => {
  const header = useVisible(0.1);
  const formEl = useVisible(0.1);
  const infoEl = useVisible(0.1);

  const [form, setForm]       = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent]       = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 1800);
  };

  const handleReset = () => {
    setSent(false);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="co-section">

      {/* ── Header ── */}
      <div
        ref={header.ref}
        className={`co-header${header.visible ? ' co-header--visible' : ''}`}
      >
        <p className="co-eyebrow">Get In Touch</p>
        <div className="co-header-row">
          <h2 className="co-title">LET'S <em>TALK</em></h2>
          <p className="co-subtitle">
            Have a project in mind, a question, or just want to say hello?
            I'm always open to new opportunities and conversations.
          </p>
        </div>
      </div>

      <div className="co-divider" />

      {/* ── Body ── */}
      <div className="co-body">

        {/* Left — Form */}
        <div
          ref={formEl.ref}
          className={`co-form-wrap${formEl.visible ? ' co-form-wrap--visible' : ''}`}
        >
          {!sent ? (
            <>
              <p className="co-form-label">Send a Message</p>
              <form className="co-form" onSubmit={handleSubmit} noValidate>

                <div className="co-form-row">
                  <div className="co-field">
                    <label className="co-field-label" htmlFor="co-name">Full Name</label>
                    <input
                      id="co-name" name="name" type="text"
                      className="co-input" placeholder="Shavej Chaudhary"
                      value={form.name} onChange={handleChange} required
                    />
                  </div>
                  <div className="co-field">
                    <label className="co-field-label" htmlFor="co-email">Email Address</label>
                    <input
                      id="co-email" name="email" type="email"
                      className="co-input" placeholder="you@email.com"
                      value={form.email} onChange={handleChange} required
                    />
                  </div>
                </div>

                <div className="co-field">
                  <label className="co-field-label" htmlFor="co-subject">Subject</label>
                  <input
                    id="co-subject" name="subject" type="text"
                    className="co-input" placeholder="Project enquiry / Collaboration / Other"
                    value={form.subject} onChange={handleChange} required
                  />
                </div>

                <div className="co-field">
                  <label className="co-field-label" htmlFor="co-message">Message</label>
                  <textarea
                    id="co-message" name="message"
                    className="co-textarea"
                    placeholder="Tell me about your project or idea..."
                    rows={5} value={form.message} onChange={handleChange} required
                  />
                </div>

                <button
                  type="submit"
                  className={`co-submit${sending ? ' co-submit--sending' : ''}`}
                  disabled={sending}
                >
                  {sending
                    ? <><span className="co-submit-spinner" /> Sending...</>
                    : <>Send Message <ArrowIcon /></>
                  }
                </button>

              </form>
            </>
          ) : (
            <div className="co-success">
              <div className="co-success-icon"><CheckIcon /></div>
              <h3 className="co-success-title">Message Sent!</h3>
              <p className="co-success-text">
                Thanks for reaching out. I'll get back to you within 24 hours.
              </p>
              <button className="co-success-reset" onClick={handleReset}>
                Send Another
              </button>
            </div>
          )}
        </div>

        {/* Right — Info */}
        <div
          ref={infoEl.ref}
          className={`co-info${infoEl.visible ? ' co-info--visible' : ''}`}
        >

          {/* Availability */}
          <div className="co-avail-card">
            <div className="co-avail-top">
              <span className="co-avail-dot" />
              <span className="co-avail-label">Available for Work</span>
            </div>
            <p className="co-avail-text">
              Currently open to freelance projects, full-time roles, and exciting collaborations.
            </p>
            {/* FIX: was co-avail-tags — CSS uses co-avail-meta */}
            <div className="co-avail-meta">
              {['Remote', 'Freelance', 'Full-time'].map(tag => (
                <span key={tag} className="co-avail-tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* Stats — FIX: was co-stats-card / co-stat / co-stat-n / co-stat-l / co-stat-divider */}
          <div className="co-response-card">
            <div className="co-response-row">
              <div className="co-response-stat">
                <span className="co-response-n">&lt;24h</span>
                <span className="co-response-l">Response Time</span>
              </div>
              <div className="co-response-stat">
                <span className="co-response-n">100%</span>
                <span className="co-response-l">Reply Rate</span>
              </div>
            </div>
          </div>

          {/* Socials */}
          <p className="co-socials-label">Find Me Online</p>
          <div className="co-socials">
            {socials.map((s: SocialLink, i: number) => (
              // FIX: opening <a> tag was missing entirely
              <a
                key={s.label}
                href={s.href}
                className={`co-social-row co-social-row--${s.accent}`}
                style={{ transitionDelay: `${i * 60}ms` }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={`co-social-icon co-social-icon--${s.accent}`}>
                  {s.icon}
                </span>
                {/* FIX: was co-social-text — CSS uses co-social-meta */}
                <div className="co-social-meta">
                  <span className="co-social-platform">{s.label}</span>
                  <span className="co-social-handle">{s.handle}</span>
                </div>
                <span className="co-social-arrow"><ArrowIcon /></span>
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* Footer — FIX: was co-footer — CSS uses co-footer-strip */}
      <div className="co-footer-strip">
        <span className="co-footer-text">© 2026 Shavej Chaudhary — Designed &amp; Built with care</span>
        <span className="co-footer-dot" />
        <span className="co-footer-text">Made in India 🇮🇳</span>
      </div>

    </section>
  );
};

export default ContactOverview;