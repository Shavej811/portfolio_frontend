import { useState } from 'react';
import './contact.css';

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    handle: '@shavej',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    handle: 'Shavej Chaudhary',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    handle: '@shavejdev',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l16 16M4 20L20 4" />
      </svg>
    ),
  },
  {
    label: 'Email',
    handle: 'shavej@email.com',
    href: 'mailto:shavej@email.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

type FormState = { name: string; email: string; subject: string; message: string };
type Status = 'idle' | 'sending' | 'sent' | 'error';

const Contact = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise((r) => setTimeout(r, 1600));
    setStatus('sent');
  };

  return (
    <main className="contact-page">

      {/* ── Header ── */}
      <section className="contact-header">
        <div className="contact-header-left">
          <p className="contact-eyebrow">Get In Touch</p>
          <h1 className="contact-title">
            Let's work<br /><em>together.</em>
          </h1>
        </div>
        <div className="contact-header-right">
          <p className="contact-subtitle">
            Whether you have a project in mind, want to collaborate,
            or just want to say hello — my inbox is always open.
            I typically respond within 24 hours.
          </p>
          <div className="contact-availability">
            <span className="avail-dot" />
            <span className="avail-text">Available for freelance &amp; full-time roles</span>
          </div>
        </div>
      </section>

      <div className="contact-divider" />

      {/* ── Body ── */}
      <div className="contact-body">

        {/* ── LEFT: Form ── */}
        <div className="contact-form-col">
          <p className="col-eyebrow">Send a Message</p>

          {status === 'sent' ? (
            <div className="form-success">
              <div className="form-success-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="form-success-title">Message sent!</h3>
              <p className="form-success-sub">Thanks for reaching out. I'll get back to you within 24 hours.</p>
              <button className="form-reset-btn" onClick={() => { setStatus('idle'); setForm({ name: '', email: '', subject: '', message: '' }); }}>
                Send another
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-field">
                  <label className="form-label" htmlFor="name">Full Name</label>
                  <input
                    className="form-input"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Shavej Chaudhary"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <input
                    className="form-input"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="subject">Subject</label>
                <select
                  className="form-input form-select"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select a topic…</option>
                  <option value="freelance">Freelance Project</option>
                  <option value="fulltime">Full-time Opportunity</option>
                  <option value="collab">Collaboration</option>
                  <option value="other">Just saying hi</option>
                </select>
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  className="form-input form-textarea"
                  id="message"
                  name="message"
                  placeholder="Tell me about your project, timeline, budget — anything helps."
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                />
                <span className="form-char-count">{form.message.length} / 1000</span>
              </div>

              <button
                className={`form-submit ${status === 'sending' ? 'form-submit--sending' : ''}`}
                type="submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    <span className="submit-spinner" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 8h12M9 4l4 4-4 4" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* ── RIGHT: Info ── */}
        <div className="contact-info-col">

          <div className="contact-info-block">
            <p className="col-eyebrow">Direct Contact</p>
            <div className="social-list">
              {SOCIAL_LINKS.map(({ label, handle, href, icon }) => (
                <a key={label} href={href} className="social-card" target="_blank" rel="noopener noreferrer">
                  <div className="social-card-icon">{icon}</div>
                  <div className="social-card-text">
                    <span className="social-card-label">{label}</span>
                    <span className="social-card-handle">{handle}</span>
                  </div>
                  <svg className="social-card-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 13L13 3M5 3h8v8" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-divider-h" />

          <div className="contact-info-block">
            <p className="col-eyebrow">Working Hours</p>
            <div className="hours-list">
              {[
                { day: 'Monday — Friday', time: '9:00 AM – 7:00 PM IST', active: true },
                { day: 'Saturday', time: '10:00 AM – 4:00 PM IST', active: true },
                { day: 'Sunday', time: 'Unavailable', active: false },
              ].map(({ day, time, active }) => (
                <div key={day} className="hours-row">
                  <span className="hours-day">{day}</span>
                  <span className={`hours-time ${!active ? 'hours-time--off' : ''}`}>{time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-divider-h" />

          <div className="contact-info-block">
            <p className="col-eyebrow">Location</p>
            <div className="location-card">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <p className="location-city">Delhi, India</p>
                <p className="location-note">Open to remote worldwide</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Contact;