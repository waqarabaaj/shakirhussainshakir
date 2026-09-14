import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building, 
  Calendar, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  GraduationCap, 
  Globe2, 
  Award, 
  BookOpen, 
  Briefcase,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { PROFILE_DATA, ExperienceItem } from '../data/profileData';

export const CareerJourney: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('lums');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="journey" className="section-padding" style={{ background: 'var(--navy-primary)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge gold">
            <GraduationCap size={14} />
            <span>Milestones & Chapters</span>
          </div>
          <h2 className="section-title">
            Academic & Professional Journey
          </h2>
          <p className="section-description">
            A continuous trajectory of educational leadership, university internationalization, youth skills development, and student counselling.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto' }}>
          
          {/* Central Vertical Timeline Rule */}
          <div
            style={{
              position: 'absolute',
              top: 20,
              bottom: 20,
              left: 28,
              width: 2,
              background: 'linear-gradient(180deg, var(--gold-primary), var(--teal-primary), rgba(45, 163, 158, 0.2))',
              zIndex: 1
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {PROFILE_DATA.experiences.map((exp, index) => {
              const isExpanded = expandedId === exp.id;
              const isCurrent = exp.isCurrent;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{
                    position: 'relative',
                    paddingLeft: '4.5rem',
                    zIndex: 2
                  }}
                >
                  {/* Timeline Milestone Icon Node */}
                  <div
                    style={{
                      position: 'absolute',
                      left: 14,
                      top: 18,
                      transform: 'translateX(-50%)',
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: isCurrent ? 'var(--gold-dark)' : 'var(--navy-surface)',
                      border: `2px solid ${isCurrent ? 'var(--gold-light)' : 'var(--teal-light)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isCurrent ? '#ffffff' : 'var(--teal-light)',
                      boxShadow: isCurrent ? '0 0 15px rgba(197, 160, 89, 0.4)' : 'none',
                      zIndex: 3
                    }}
                  >
                    {isCurrent ? <Sparkles size={16} /> : <Briefcase size={15} />}
                  </div>

                  {/* Milestone Card */}
                  <div
                    className="academic-card"
                    style={{
                      borderLeft: isCurrent ? '3px solid var(--gold-light)' : '3px solid var(--teal-light)',
                      cursor: 'pointer'
                    }}
                    onClick={() => toggleExpand(exp.id)}
                  >
                    {/* Header bar */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <div className={`institution-badge ${isCurrent ? 'gold' : ''}`}>
                        <span>Chapter {index + 1}</span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                          <Calendar size={14} style={{ color: 'var(--teal-light)' }} />
                          <span>{exp.period}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                          <MapPin size={14} style={{ color: 'var(--gold-light)' }} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Role & Institution */}
                    <div style={{ marginBottom: '0.75rem' }}>
                      <h3 style={{ fontSize: '1.35rem', color: 'var(--ivory-light)', marginBottom: '0.2rem' }}>
                        {exp.role}
                      </h3>
                      <div style={{ fontSize: '1.05rem', color: isCurrent ? 'var(--gold-light)' : 'var(--teal-light)', fontWeight: 600 }}>
                        {exp.institution}
                      </div>
                      {exp.institutionSub && (
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                          {exp.institutionSub}
                        </div>
                      )}
                    </div>

                    {/* Brief synopsis */}
                    {exp.highlightSummary && (
                      <p style={{ fontSize: '0.94rem', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                        {exp.highlightSummary}
                      </p>
                    )}

                    {/* Expandable detailed responsibilities */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{
                            marginTop: '1.25rem',
                            paddingTop: '1.25rem',
                            borderTop: '1px solid var(--navy-border)'
                          }}
                        >
                          <div style={{ fontSize: '0.82rem', textTransform: 'uppercase', color: 'var(--gold-light)', fontWeight: 600, letterSpacing: '0.06em', marginBottom: '0.85rem' }}>
                            Key Mandates & Contributions:
                          </div>

                          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                            {exp.responsibilities.map((resp, rIdx) => (
                              <li key={rIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                <CheckCircle2 size={16} style={{ color: 'var(--teal-light)', flexShrink: 0, marginTop: 4 }} />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Footer toggler & tags */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.25rem', paddingTop: '0.85rem', borderTop: '1px solid rgba(255,255,255,0.05)', flexWrap: 'wrap', gap: '0.75rem' }}>
                      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              fontSize: '0.72rem',
                              padding: '0.2rem 0.55rem',
                              background: 'rgba(255, 255, 255, 0.04)',
                              border: '1px solid var(--navy-border)',
                              borderRadius: 'var(--radius-sm)',
                              color: 'var(--text-muted)'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--teal-light)', fontWeight: 600 }}>
                        <span>{isExpanded ? 'Hide Details' : `View ${exp.responsibilities.length} Responsibilities`}</span>
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
