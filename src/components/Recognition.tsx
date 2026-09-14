import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Sparkles, 
  CheckCircle2, 
  BookOpen, 
  GraduationCap, 
  Languages, 
  Calendar,
  ShieldCheck,
  Globe2
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const Recognition: React.FC = () => {
  return (
    <section id="recognition" className="section-padding" style={{ background: 'var(--navy-deep)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge gold">
            <Award size={14} />
            <span>Distinction & Credentials</span>
          </div>
          <h2 className="section-title">
            Recognition & Professional Development
          </h2>
          <p className="section-description">
            Merit honors, international scholarships, and specialized certifications in career advising, guidance counseling, and social program management.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Column 1: Honors & Awards */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(197, 160, 89, 0.15)',
                  border: '1px solid rgba(197, 160, 89, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-light)'
                }}
              >
                <Award size={20} />
              </div>
              <h3 style={{ fontSize: '1.45rem', color: 'var(--ivory-light)' }}>
                Honors & Prestigious Awards
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {PROFILE_DATA.awards.map((award, idx) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="academic-card"
                  style={{
                    borderLeft: '3px solid var(--gold-light)',
                    background: 'var(--navy-card)',
                    padding: '1.5rem'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <h4 style={{ fontSize: '1.15rem', color: 'var(--ivory-light)', lineHeight: 1.35 }}>
                      {award.title}
                    </h4>
                    {award.year && (
                      <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.55rem', background: 'rgba(197, 160, 89, 0.15)', color: 'var(--gold-light)', borderRadius: 'var(--radius-sm)', fontWeight: 600 }}>
                        {award.year}
                      </span>
                    )}
                  </div>

                  {award.organization && (
                    <div style={{ fontSize: '0.85rem', color: 'var(--teal-light)', fontWeight: 600, marginBottom: '0.5rem' }}>
                      {award.organization}
                    </div>
                  )}

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                    {award.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2: Certifications & Continuous Development */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(30, 107, 104, 0.2)',
                  border: '1px solid rgba(45, 163, 158, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--teal-light)'
                }}
              >
                <BookOpen size={20} />
              </div>
              <h3 style={{ fontSize: '1.45rem', color: 'var(--ivory-light)' }}>
                Certifications & Training
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {PROFILE_DATA.certifications.map((cert, idx) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="academic-card"
                  style={{
                    borderLeft: '3px solid var(--teal-light)',
                    background: 'var(--navy-card)',
                    padding: '1.5rem'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <div>
                      <h4 style={{ fontSize: '1.12rem', color: 'var(--ivory-light)', marginBottom: '0.35rem' }}>
                        {cert.title}
                      </h4>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                        Focus Domain: <span style={{ color: 'var(--teal-light)' }}>{cert.category}</span>
                      </div>
                    </div>

                    {cert.year && (
                      <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.55rem', background: 'rgba(45, 163, 158, 0.15)', color: 'var(--teal-light)', borderRadius: 'var(--radius-sm)', fontWeight: 600 }}>
                        {cert.year}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Skills & Languages Verified Bar */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(17, 34, 59, 0.8), rgba(11, 23, 40, 0.9))',
            border: '1px solid var(--navy-border)',
            borderRadius: 'var(--radius-md)',
            padding: '2rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            alignItems: 'center'
          }}
        >
          {/* Top Skills from PDF */}
          <div>
            <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--gold-light)', fontWeight: 600, letterSpacing: '0.06em', marginBottom: '0.85rem' }}>
              Top Profile Skills (LinkedIn Verified)
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {PROFILE_DATA.topSkills.map((skill) => (
                <div key={skill} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--ivory-light)', fontSize: '0.95rem' }}>
                  <ShieldCheck size={16} style={{ color: 'var(--teal-light)' }} />
                  <span style={{ fontWeight: 500 }}>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages from PDF */}
          <div>
            <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--teal-light)', fontWeight: 600, letterSpacing: '0.06em', marginBottom: '0.85rem' }}>
              Working Languages
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              {PROFILE_DATA.languages.map((lang) => (
                <div key={lang.name} style={{ background: 'rgba(7, 14, 24, 0.6)', padding: '0.85rem 1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--navy-border)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--ivory-light)', fontWeight: 600, fontSize: '1.05rem' }}>
                    <Languages size={16} style={{ color: 'var(--gold-light)' }} />
                    <span>{lang.name}</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    {lang.level}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
