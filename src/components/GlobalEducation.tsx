import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, GraduationCap, Award, Plane, BookOpen, Building2, Check, ArrowUpRight, Compass } from 'lucide-react';

const GLOBAL_PILLARS = [
  {
    id: 'linkages',
    title: 'University Linkages & MoUs',
    description: 'Initiating and establishing bilateral partnerships with top-ranking global institutions, negotiating financial agreements, and securing tuition fee waivers for students.',
    icon: Building2,
    badge: 'Institutional Linkages'
  },
  {
    id: 'exchange',
    title: 'Bilateral Student Exchange',
    description: 'Designing welcoming and departure orientations for incoming international and outgoing local exchange scholars, overseeing academic credit transfers and student safety.',
    icon: Plane,
    badge: 'Cross-Cultural Mobility'
  },
  {
    id: 'scholarships',
    title: 'Global Scholarships & Grants',
    description: 'Guiding candidates to win prestigious fully funded international scholarships, bilateral grants, and cultural exchange opportunities to cultivate global perspectives.',
    icon: Award,
    badge: 'Fully Funded Opportunities'
  },
  {
    id: 'admissions',
    title: 'International Admissions (USA, Canada & Global)',
    description: 'Expertise in international admission cycles, SAT & TR-YÖS examinations, visa documentation, and standardized test centers across developed nations.',
    icon: GraduationCap,
    badge: 'Standardized Admissions'
  }
];

export const GlobalEducation: React.FC = () => {
  const [activePillar, setActivePillar] = useState(GLOBAL_PILLARS[0].id);

  return (
    <section id="global" className="section-padding" style={{ background: 'var(--navy-deep)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Decorative Rings */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800,
          height: 800,
          borderRadius: '50%',
          border: '1px solid rgba(45, 163, 158, 0.08)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Globe size={14} />
            <span>Internationalization & Mobility</span>
          </div>
          <h2 className="section-title">
            Connecting Students to the World
          </h2>
          <p className="section-description">
            Building global bridges through bilateral university agreements, cross-cultural student exchanges, fully funded international scholarships, and global admission pathways.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Interactive Global Sphere Canvas / SVG Graphic */}
          <div style={{ position: 'relative', height: 420, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            
            {/* Pulsing Atmosphere */}
            <div
              style={{
                position: 'absolute',
                width: 320,
                height: 320,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(45, 163, 158, 0.15) 0%, rgba(197, 160, 89, 0.08) 50%, transparent 70%)',
                filter: 'blur(30px)'
              }}
            />

            {/* Abstract Global Network Coordinate Grid */}
            <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%', maxWidth: 400, maxHeight: 400 }}>
              <defs>
                <radialGradient id="globeGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#152845" />
                  <stop offset="100%" stopColor="#0b1728" />
                </radialGradient>
              </defs>

              {/* Outer boundary */}
              <circle cx="200" cy="200" r="150" fill="url(#globeGrad)" stroke="rgba(197, 160, 89, 0.35)" strokeWidth="1.5" />
              
              {/* Latitude & Longitude Arcs */}
              <ellipse cx="200" cy="200" rx="150" ry="60" fill="none" stroke="rgba(45, 163, 158, 0.25)" strokeDasharray="4 4" />
              <ellipse cx="200" cy="200" rx="60" ry="150" fill="none" stroke="rgba(45, 163, 158, 0.25)" strokeDasharray="4 4" />
              <ellipse cx="200" cy="200" rx="110" ry="150" fill="none" stroke="rgba(255, 255, 255, 0.08)" />

              {/* Dynamic Flight / Connection Arcs */}
              <path d="M 100,160 Q 200,80 300,150" fill="none" stroke="#2da39e" strokeWidth="1.5" strokeDasharray="6 4">
                <animate attributeName="stroke-dashoffset" values="50;0" dur="4s" repeatCount="indefinite" />
              </path>
              <path d="M 120,240 Q 220,310 280,220" fill="none" stroke="#c5a059" strokeWidth="1.5" strokeDasharray="6 4">
                <animate attributeName="stroke-dashoffset" values="0;50" dur="5s" repeatCount="indefinite" />
              </path>

              {/* Academic Nodes */}
              {[
                { cx: 100, cy: 160, label: 'Exchange Hub' },
                { cx: 300, cy: 150, label: 'Global Univ' },
                { cx: 200, cy: 200, label: 'LUMS / Maarif' },
                { cx: 120, cy: 240, label: 'Scholarships' },
                { cx: 280, cy: 220, label: 'Admissions' }
              ].map((n, idx) => (
                <g key={idx}>
                  <circle cx={n.cx} cy={n.cy} r="6" fill="#c5a059" />
                  <circle cx={n.cx} cy={n.cy} r="12" fill="none" stroke="#2da39e" strokeOpacity="0.5">
                    <animate attributeName="r" values="8;16;8" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="stroke-opacity" values="0.8;0.2;0.8" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <text x={n.cx} y={n.cy - 12} textAnchor="middle" fill="#f5f1e9" fontSize="9" fontFamily="var(--font-sans)">
                    {n.label}
                  </text>
                </g>
              ))}
            </svg>

            {/* Central Badge Overlay */}
            <div
              style={{
                position: 'absolute',
                bottom: 10,
                padding: '0.4rem 1rem',
                background: 'rgba(7, 14, 24, 0.95)',
                border: '1px solid rgba(197, 160, 89, 0.4)',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.78rem',
                color: 'var(--gold-light)',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <Compass size={14} />
              <span>Internationalization Strategy & Mobility</span>
            </div>

          </div>

          {/* Right Column: 4 Global Engagement Pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {GLOBAL_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              const isActive = activePillar === pillar.id;

              return (
                <div
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar.id)}
                  style={{
                    padding: '1.5rem',
                    background: isActive ? 'var(--navy-card)' : 'rgba(17, 34, 59, 0.4)',
                    border: `1px solid ${isActive ? 'rgba(45, 163, 158, 0.5)' : 'var(--navy-border)'}`,
                    borderRadius: 'var(--radius-md)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: isActive ? 'var(--shadow-teal)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 'var(--radius-sm)',
                          background: isActive ? 'rgba(45, 163, 158, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: isActive ? 'var(--teal-light)' : 'var(--text-muted)'
                        }}
                      >
                        <Icon size={18} />
                      </div>
                      <h4 style={{ fontSize: '1.15rem', color: isActive ? 'var(--ivory-light)' : 'var(--text-secondary)' }}>
                        {pillar.title}
                      </h4>
                    </div>

                    <span style={{ fontSize: '0.75rem', color: 'var(--gold-light)', background: 'rgba(197, 160, 89, 0.1)', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(197, 160, 89, 0.2)' }}>
                      {pillar.badge}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-secondary)', paddingLeft: '3rem' }}>
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
