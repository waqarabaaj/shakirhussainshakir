import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Shield, Users, Scale, Eye, MessageSquare, Award, CheckSquare, HeartHandshake } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

const getValueIcon = (title: string) => {
  switch (title) {
    case 'Diversity': return Users;
    case 'Inclusion': return Heart;
    case 'Equity': return Scale;
    case 'Meritocracy': return Award;
    case 'Fairness': return Shield;
    case 'Empowerment': return Sparkles;
    case 'Open Dialogue': return MessageSquare;
    case 'Mentorship': return Eye;
    case 'Accountability': return CheckSquare;
    case 'Community Service': return HeartHandshake;
    default: return Sparkles;
  }
};

export const PersonalValues: React.FC = () => {
  return (
    <section className="section-padding" style={{ background: 'var(--navy-deep)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge gold">
            <Heart size={14} />
            <span>Ethical Foundation</span>
          </div>
          <h2 className="section-title">
            "What I Believe In"
          </h2>
          <p className="section-description">
            The unshakeable personal and professional principles guiding every student counseling session, policy formulation, team interaction, and institutional alliance.
          </p>
        </div>

        {/* 10 Core Values Editorial Layout Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
            maxWidth: 1100,
            margin: '0 auto 3.5rem auto'
          }}
        >
          {PROFILE_DATA.values.map((val, idx) => {
            const Icon = getValueIcon(val.title);

            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="academic-card"
                style={{
                  padding: '1.5rem',
                  background: 'rgba(17, 34, 59, 0.5)',
                  border: '1px solid var(--navy-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem'
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(197, 160, 89, 0.12)',
                    border: '1px solid rgba(197, 160, 89, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-light)'
                  }}
                >
                  <Icon size={18} />
                </div>

                <h3 style={{ fontSize: '1.2rem', color: 'var(--ivory-light)' }}>
                  {val.title}
                </h3>

                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  {val.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Social Commitment Quote Box */}
        <div
          style={{
            maxWidth: 800,
            margin: '0 auto',
            padding: '2rem 2.5rem',
            background: 'linear-gradient(135deg, rgba(30, 107, 104, 0.15), rgba(11, 23, 40, 0.8))',
            border: '1px solid rgba(45, 163, 158, 0.3)',
            borderRadius: 'var(--radius-md)',
            textAlign: 'center'
          }}
        >
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.18rem', color: 'var(--ivory-light)', fontStyle: 'italic', lineHeight: 1.7 }}>
            "Furthermore, I have a longstanding dedication to serving society, particularly marginalized and underprivileged communities, by generously and voluntarily contributing my time, knowledge and expertise."
          </p>
          <div style={{ marginTop: '0.85rem', fontSize: '0.85rem', color: 'var(--teal-light)', fontWeight: 600 }}>
            Shakir Hussain Shakir — Community & Educational Service Commitment
          </div>
        </div>

      </div>
    </section>
  );
};
