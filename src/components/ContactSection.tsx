import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Globe, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Mail, 
  ArrowUpRight,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';
import { PROFILE_DATA } from '../data/profileData';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    collaborationType: 'Institutional Partnership',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding" style={{ background: 'var(--navy-primary)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge gold">
            <MessageSquare size={14} />
            <span>Open Dialogue & Partnership</span>
          </div>
          <h2 className="section-title">
            "Let's Create Opportunities Together."
          </h2>
          <p className="section-description">
            For collaboration, educational initiatives, student development, global engagement and institutional partnerships.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            maxWidth: 1100,
            margin: '0 auto',
            alignItems: 'flex-start'
          }}
        >
          {/* Left Column: Official Contact Channels from PDF */}
          <div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--ivory-light)', marginBottom: '0.75rem' }}>
              Direct Channels & Professional Profiles
            </h3>
            <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
              Whether you represent an international university seeking student exchange partnerships, an educational institution, a parent seeking academic counseling, or a youth empowerment foundation, feel welcome to connect.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              
              {/* Phone Card */}
              <a
                href={`tel:${PROFILE_DATA.contact.phone.replace(/\s+/g, '')}`}
                className="academic-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  padding: '1.25rem',
                  border: '1px solid var(--navy-border)'
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(30, 107, 104, 0.2)',
                    border: '1px solid rgba(45, 163, 158, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--teal-light)'
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                    Telephone / Work Line
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--ivory-light)' }}>
                    {PROFILE_DATA.contact.phoneDisplay}
                  </div>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href={PROFILE_DATA.contact.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="academic-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  padding: '1.25rem',
                  border: '1px solid var(--navy-border)'
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(10, 102, 194, 0.2)',
                    border: '1px solid rgba(10, 102, 194, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38bdf8'
                  }}
                >
                  <LinkedinIcon size={20} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                    Official LinkedIn
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--ivory-light)' }}>
                    {PROFILE_DATA.contact.linkedInDisplay}
                  </div>
                </div>
                <ArrowUpRight size={18} style={{ color: 'var(--text-muted)' }} />
              </a>

              {/* Portfolio Link Card */}
              <a
                href={`https://${PROFILE_DATA.contact.portfolioDisplay}`}
                target="_blank"
                rel="noopener noreferrer"
                className="academic-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  padding: '1.25rem',
                  border: '1px solid var(--navy-border)'
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(197, 160, 89, 0.15)',
                    border: '1px solid rgba(197, 160, 89, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-light)'
                  }}
                >
                  <Globe size={20} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                    Web Profile & Portfolio
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--ivory-light)' }}>
                    {PROFILE_DATA.contact.portfolioDisplay}
                  </div>
                </div>
                <ArrowUpRight size={18} style={{ color: 'var(--text-muted)' }} />
              </a>

              {/* Location Card */}
              <div
                className="academic-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  padding: '1.25rem',
                  border: '1px solid var(--navy-border)'
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(45, 163, 158, 0.15)',
                    border: '1px solid rgba(45, 163, 158, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--teal-light)'
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                    Executive Office Location
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--ivory-light)' }}>
                    {PROFILE_DATA.contact.location}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Collaboration Inquiry Form */}
          <div
            style={{
              background: 'var(--navy-card)',
              border: '1px solid rgba(197, 160, 89, 0.35)',
              borderRadius: 'var(--radius-md)',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--gold-light)', fontWeight: 600, letterSpacing: '0.06em' }}>
                Inquiry & Collaboration
              </div>
              <h3 style={{ fontSize: '1.45rem', color: 'var(--ivory-light)', marginTop: '0.2rem' }}>
                Initiate a Conversation
              </h3>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  padding: '2.5rem 1.5rem',
                  textAlign: 'center',
                  background: 'rgba(7, 14, 24, 0.7)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid rgba(45, 163, 158, 0.4)'
                }}
              >
                <div style={{ color: 'var(--teal-light)', marginBottom: '1rem' }}>
                  <CheckCircle2 size={48} style={{ margin: '0 auto' }} />
                </div>
                <h4 style={{ fontSize: '1.3rem', color: 'var(--ivory-light)', marginBottom: '0.5rem' }}>
                  Inquiry Dispatched
                </h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: 360, margin: '0 auto' }}>
                  Thank you for reaching out. Your educational inquiry has been formatted. Shakir Hussain Shakir will connect with you promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                  style={{ marginTop: '1.5rem', fontSize: '0.85rem' }}
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--ivory-muted)', marginBottom: '0.4rem' }}>
                    Full Name / Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Ayesha Khan / Dean of International Affairs"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(7, 14, 24, 0.8)',
                      border: '1px solid var(--navy-border)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--ivory-light)',
                      fontSize: '0.92rem',
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--ivory-muted)', marginBottom: '0.4rem' }}>
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@institution.edu"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        background: 'rgba(7, 14, 24, 0.8)',
                        border: '1px solid var(--navy-border)',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--ivory-light)',
                        fontSize: '0.92rem',
                        outline: 'none',
                        fontFamily: 'inherit'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--ivory-muted)', marginBottom: '0.4rem' }}>
                      Institution / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="University / Organization"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        background: 'rgba(7, 14, 24, 0.8)',
                        border: '1px solid var(--navy-border)',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--ivory-light)',
                        fontSize: '0.92rem',
                        outline: 'none',
                        fontFamily: 'inherit'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--ivory-muted)', marginBottom: '0.4rem' }}>
                    Collaboration Focus
                  </label>
                  <select
                    value={formData.collaborationType}
                    onChange={(e) => setFormData({ ...formData, collaborationType: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(7, 14, 24, 0.95)',
                      border: '1px solid var(--navy-border)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--ivory-light)',
                      fontSize: '0.92rem',
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                  >
                    <option value="Institutional Partnership">Institutional Partnership & MoUs</option>
                    <option value="Student Exchange">Student Exchange & Global Mobility</option>
                    <option value="Scholarship Dissemination">Scholarships & Financial Aid Pathways</option>
                    <option value="Student Counselling">Student Advising & Career Readiness</option>
                    <option value="Keynote / Advisory">Educational Advisory & Speaking</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--ivory-muted)', marginBottom: '0.4rem' }}>
                    Message / Objective *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your proposed educational initiative, partnership scope, or student consultation query..."
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(7, 14, 24, 0.8)',
                      border: '1px solid var(--navy-border)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--ivory-light)',
                      fontSize: '0.92rem',
                      outline: 'none',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold"
                  style={{ width: '100%', marginTop: '0.5rem', padding: '0.85rem' }}
                >
                  <span>Submit Inquiry to Shakir H. Shakir</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
