import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, School, MapPin, Award, Compass, Heart, Shield, Sparkles, BookOpen } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

const COUNTER_ITEMS = [
  {
    value: 13000,
    prefix: '',
    suffix: '+',
    label: 'Students Impacted',
    detail: "Social, emotional, psychological, career, academic, personal and professional well-being",
    icon: Users,
    color: '#2da39e'
  },
  {
    value: 27,
    prefix: '',
    suffix: '',
    label: 'Campuses Nationwide',
    detail: "Multinational school network of the Turkish Government across Pakistan",
    icon: School,
    color: '#c5a059'
  },
  {
    value: 10,
    prefix: '',
    suffix: '',
    label: 'Major Cities',
    detail: "Institutional footprint delivering high-caliber standardized educational equity",
    icon: MapPin,
    color: '#2da39e'
  },
  {
    value: 20,
    prefix: '',
    suffix: '+',
    label: 'Counselling Officers Led',
    detail: "Direct management, training, and strategic coordination of professional counselors",
    icon: Award,
    color: '#c5a059'
  }
];

const IMPACT_DOMAINS = [
  { name: 'Social Well-being', desc: 'Community belonging, peer empathy & relational development' },
  { name: 'Emotional Health', desc: 'Resilience, psychological safety & stress management' },
  { name: 'Academic Guidance', desc: 'Subject trajectories, test prep & intellectual rigor' },
  { name: 'Career Pathways', desc: 'Internships, industry exposure & university admissions' },
  { name: 'Personal Growth', desc: 'Self-confidence, ethical character & communicative skills' },
  { name: 'Professional Readiness', desc: 'Mock interviews, resume crafting & global competencies' }
];

function AnimatedCounter({ value, suffix, prefix }: { value: number; suffix: string; prefix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = value / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export const ImpactSection: React.FC = () => {
  return (
    <section id="impact" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Graphic: Subtle Education Network */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.05,
          backgroundImage: `radial-gradient(#2da39e 1px, transparent 1px), radial-gradient(#c5a059 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Header */}
        <div className="section-header">
          <div className="section-badge gold">
            <Sparkles size={14} />
            <span>Scale & Mandate</span>
          </div>
          <h2 className="section-title">
            Impact Through Education
          </h2>
          <p className="section-description">
            Mandated to foster the social, emotional, psychological, academic, career, personal and professional development of over 13,000 students across 27 campuses in 10 major cities nationwide.
          </p>
        </div>

        {/* Dashboard Metric Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3.5rem'
          }}
        >
          {COUNTER_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="academic-card"
                style={{
                  background: 'linear-gradient(145deg, #11223b, #0c182b)',
                  border: '1px solid rgba(255, 255, 255, 0.09)',
                  boxShadow: 'var(--shadow-md)',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(11, 23, 40, 0.8)',
                      border: `1px solid ${item.color}55`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: item.color
                    }}
                  >
                    <Icon size={24} />
                  </div>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>
                    Verified Metric
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '3rem',
                    fontWeight: 700,
                    color: item.color,
                    lineHeight: 1,
                    marginBottom: '0.5rem'
                  }}
                >
                  <AnimatedCounter value={item.value} suffix={item.suffix} prefix={item.prefix} />
                </div>

                <div style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--ivory-light)', marginBottom: '0.65rem' }}>
                  {item.label}
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  {item.detail}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Holistic Support Dashboard Module */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: 'var(--navy-card)',
            border: '1px solid var(--navy-border)',
            borderRadius: 'var(--radius-md)',
            padding: '2.5rem',
            position: 'relative'
          }}
        >
          <div style={{ marginBottom: '1.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--teal-light)', fontWeight: 600, letterSpacing: '0.06em' }}>
                Holistic Framework
              </div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--ivory-light)' }}>
                Dimensions of Student Well-being & Growth
              </h3>
            </div>
            <div className="institution-badge">
              <span>Pak-Turk Maarif Institutional Mandate</span>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {IMPACT_DOMAINS.map((domain) => (
              <div
                key={domain.name}
                style={{
                  padding: '1.25rem',
                  background: 'rgba(7, 14, 24, 0.6)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.35rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gold-light)', fontWeight: 600, fontSize: '0.98rem' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--teal-light)' }} />
                  {domain.name}
                </div>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {domain.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
