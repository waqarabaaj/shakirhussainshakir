import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, ShieldCheck, HeartHandshake, Quote, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

const PILLARS = [
  {
    title: "Student Development",
    subtitle: "Holistic Youth Growth",
    description: "Supporting students academically, personally, and professionally. Focusing on psycho-social well-being, emotional stability, career clarity, and intellectual confidence.",
    points: ["Academic advising & goal setting", "Career roadmaps & personal counselling", "Internship & experiential readiness"],
    icon: Users,
    accent: "teal"
  },
  {
    title: "Global Opportunities",
    subtitle: "World-Class Pathways",
    description: "Connecting students with international admissions, bilateral student exchanges, prestigious scholarships, and transformative cross-cultural learning experiences across the globe.",
    points: ["International admissions & visa guidance", "Merit & cultural exchange scholarships", "Bilateral university partnerships & MoUs"],
    icon: Globe,
    accent: "gold"
  },
  {
    title: "Educational Leadership",
    subtitle: "Cultivating Excellence",
    description: "Building resilient cross-functional teams, establishing open-door communication, nurturing future educators, and fostering a constructive, high-belonging institutional culture.",
    points: ["Mentoring 20+ counseling officers", "Strategic policy formulation & rollout", "Accountability & organizational cohesion"],
    icon: ShieldCheck,
    accent: "teal"
  },
  {
    title: "Social Impact & Service",
    subtitle: "Equitable Outreach",
    description: "Dedicated to serving marginalized, underprivileged communities through voluntary mentorship, knowledge sharing, women empowerment, and educational equity initiatives.",
    points: ["Youth & women skills development", "Community mobilization & advocacy", "Voluntary advisory for deserving youth"],
    icon: HeartHandshake,
    accent: "gold"
  }
];

export const AboutEducator: React.FC = () => {
  return (
    <section id="about" className="section-padding" style={{ background: 'var(--navy-primary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Quote size={14} />
            <span>Core Philosophy</span>
          </div>
          <h2 className="section-title">
            "Education Is About People, Not Just Programs."
          </h2>
          <p className="section-description">
            A multitasking, result-driven educational leader with international exposure, dedicated to shaping institutional excellence, unlocking student potential, and bridging local ambition with global opportunity.
          </p>
        </div>

        {/* The 4 Elegant Content Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}
        >
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            const isGold = pillar.accent === 'gold';

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="academic-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: isGold ? '2px solid rgba(197, 160, 89, 0.4)' : '2px solid rgba(45, 163, 158, 0.4)'
                }}
              >
                <div>
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 'var(--radius-sm)',
                      background: isGold ? 'rgba(197, 160, 89, 0.12)' : 'rgba(30, 107, 104, 0.2)',
                      border: `1px solid ${isGold ? 'rgba(197, 160, 89, 0.35)' : 'rgba(45, 163, 158, 0.35)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isGold ? 'var(--gold-light)' : 'var(--teal-light)',
                      marginBottom: '1.5rem'
                    }}
                  >
                    <Icon size={26} />
                  </div>

                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: isGold ? 'var(--gold-light)' : 'var(--teal-light)', fontWeight: 600, marginBottom: '0.35rem' }}>
                    {pillar.subtitle}
                  </div>

                  <h3 style={{ fontSize: '1.45rem', marginBottom: '1rem', color: 'var(--ivory-light)' }}>
                    {pillar.title}
                  </h3>

                  <p style={{ fontSize: '0.98rem', lineHeight: 1.65, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                    {pillar.description}
                  </p>
                </div>

                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--navy-border)' }}>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {pillar.points.map((pt) => (
                      <li key={pt} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                        <CheckCircle2 size={15} style={{ color: isGold ? 'var(--gold-light)' : 'var(--teal-light)', flexShrink: 0 }} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Editorial Thought Leadership Callout Box from PDF Summary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, rgba(17, 34, 59, 0.9), rgba(11, 23, 40, 0.95))',
            border: '1px solid rgba(197, 160, 89, 0.3)',
            borderRadius: 'var(--radius-md)',
            padding: '2.5rem',
            position: 'relative',
            boxShadow: 'var(--shadow-md)'
          }}
        >
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: 'rgba(197, 160, 89, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--gold-light)',
                flexShrink: 0
              }}
            >
              <Quote size={24} />
            </div>

            <div>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--ivory-light)', lineHeight: 1.7, marginBottom: '1rem' }}>
                "As an emerging leader, I recognize the importance of empowering others, fostering open dialogue, embracing constructive criticism, grooming future leaders, advocating for open-door policies, and promoting a culture of positivity and a sense of belonging within teams."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--gold-light)', fontSize: '1rem' }}>
                    Shakir Hussain Shakir
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    Head Department of Student Affairs, PAK-TURK Maarif International Schools & Colleges
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {["Diversity", "Inclusion", "Equity", "Meritocracy"].map((v) => (
                    <span
                      key={v}
                      style={{
                        fontSize: '0.75rem',
                        padding: '0.2rem 0.6rem',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--navy-border)',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--ivory-muted)'
                      }}
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
