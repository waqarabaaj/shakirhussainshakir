import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Building2, Calendar, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="section-padding" style={{ background: 'var(--navy-primary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={14} />
            <span>Scholastic Background</span>
          </div>
          <h2 className="section-title">
            Academic Foundations
          </h2>
          <p className="section-description">
            Formative academic milestones and international leadership programs that shaped Shakir's educational vision and commitment to student empowerment.
          </p>
        </div>

        {/* Academic Timeline / Institution Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            maxWidth: 1100,
            margin: '0 auto'
          }}
        >
          {PROFILE_DATA.education.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.12 }}
              className="academic-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderTop: '2px solid rgba(45, 163, 158, 0.4)'
              }}
            >
              <div>
                {/* Institution Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(30, 107, 104, 0.18)',
                      border: '1px solid rgba(45, 163, 158, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--teal-light)'
                    }}
                  >
                    <Building2 size={22} />
                  </div>

                  <span className="institution-badge gold" style={{ fontSize: '0.75rem' }}>
                    {edu.badge}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: '0.5rem' }}>
                  <Calendar size={14} style={{ color: 'var(--teal-light)' }} />
                  <span>{edu.period}</span>
                </div>

                <h3 style={{ fontSize: '1.35rem', color: 'var(--ivory-light)', marginBottom: '0.35rem', lineHeight: 1.3 }}>
                  {edu.institution}
                </h3>

                <div style={{ fontSize: '1rem', color: 'var(--gold-light)', fontWeight: 600, marginBottom: '1rem' }}>
                  {edu.degree}
                </div>

                {edu.details && (
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                    {edu.details}
                  </p>
                )}
              </div>

              <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--navy-border)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--teal-light)' }}>
                <CheckCircle2 size={14} />
                <span>Verified Scholastic Record</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
