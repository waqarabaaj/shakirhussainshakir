import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  MessageSquare, 
  Compass, 
  Award, 
  Share2, 
  Heart, 
  ShieldCheck, 
  Sparkles,
  GitFork
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

const PILLARS = [
  { title: "Team Empowerment", desc: "Equipping counseling officers and student leaders with autonomy, trust, and resources.", icon: Users },
  { title: "Open-Door Dialogue", desc: "Upholding psychological safety, welcoming constructive feedback, and flat communication.", icon: MessageSquare },
  { title: "Strategic Planning", desc: "Balancing institutional vision with data-driven execution and long-term sustainability.", icon: Compass },
  { title: "Future Leader Grooming", desc: "Investing purposefully in training emerging educators and student representatives.", icon: Award },
  { title: "Cross-Functional Synergy", desc: "Connecting academic faculty, parents, donors, and global partners into unified missions.", icon: Share2 },
  { title: "Positive Culture & Belonging", desc: "Creating a work environment rooted in empathy, diversity, mutual respect, and merit.", icon: Heart }
];

export const LeadershipPillars: React.FC = () => {
  return (
    <section className="section-padding" style={{ background: 'var(--navy-deep)', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge gold">
            <ShieldCheck size={14} />
            <span>Leadership Philosophy</span>
          </div>
          <h2 className="section-title">
            "Developing People. Building Leaders."
          </h2>
          <p className="section-description">
            True educational leadership is defined not by authority, but by the capacity to elevate others, build positive workplace cultures, and foster next-generation leadership.
          </p>
        </div>

        {/* Central Leadership Network Diagram */}
        <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto 3.5rem auto', padding: '2rem 1rem' }}>
          
          {/* Subtle Visual Diagram connecting central node to outer pillars */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
              position: 'relative'
            }}
          >
            {PILLARS.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="academic-card"
                  style={{
                    background: 'var(--navy-card)',
                    border: '1px solid var(--navy-border)',
                    padding: '1.75rem',
                    position: 'relative'
                  }}
                >
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
                      color: 'var(--teal-light)',
                      marginBottom: '1rem'
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  <h3 style={{ fontSize: '1.2rem', color: 'var(--ivory-light)', marginBottom: '0.45rem' }}>
                    {pillar.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Leadership Commitment Quote from PDF */}
        <div
          style={{
            maxWidth: 750,
            margin: '0 auto',
            textAlign: 'center',
            padding: '2rem',
            background: 'rgba(17, 34, 59, 0.5)',
            border: '1px solid var(--navy-border)',
            borderRadius: 'var(--radius-md)'
          }}
        >
          <div style={{ color: 'var(--gold-light)', display: 'inline-flex', marginBottom: '0.5rem' }}>
            <Sparkles size={20} />
          </div>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.12rem', fontStyle: 'italic', color: 'var(--ivory-light)', lineHeight: 1.65 }}>
            "In all my endeavours, I strive to leave a lasting impact through my performance, sense of accountability, effective coordination, and strong team-building and leadership skills."
          </p>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            — From the Professional Summary of Shakir Hussain Shakir
          </div>
        </div>

      </div>
    </section>
  );
};
