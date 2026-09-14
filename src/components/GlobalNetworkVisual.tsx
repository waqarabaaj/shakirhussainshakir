import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Globe, 
  Award, 
  Briefcase, 
  Users, 
  Building2, 
  Sparkles,
  BookOpen,
  Compass,
  User,
  ShieldCheck
} from 'lucide-react';

const NODES = [
  { id: 'univ', label: 'Universities', icon: Building2, angle: 0, distance: 160, color: '#2da39e', sub: 'Global Linkages' },
  { id: 'students', label: '13,000+ Students', icon: Users, angle: 60, distance: 175, color: '#c5a059', sub: 'Holistic Support' },
  { id: 'scholarships', label: 'Scholarships', icon: Award, angle: 120, distance: 165, color: '#dfbe78', sub: 'Funded Pathways' },
  { id: 'careers', label: 'Career Pathways', icon: Briefcase, angle: 180, distance: 170, color: '#2da39e', sub: 'Internships & Readiness' },
  { id: 'exchange', label: 'Student Exchange', icon: Globe, angle: 240, distance: 165, color: '#56c6c0', sub: 'Bilateral Mobility' },
  { id: 'partnerships', label: 'Institutional Alliances', icon: BookOpen, angle: 300, distance: 175, color: '#c5a059', sub: 'Bilateral MoUs' }
];

export const GlobalNetworkVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  // Default to portrait so the user's photo is immediately front and center!
  const [viewMode, setViewMode] = useState<'portrait' | 'network'>('portrait');

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 540, minHeight: 520, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      
      {/* Background Radiance */}
      <div 
        style={{
          position: 'absolute',
          width: 420,
          height: 420,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(45, 163, 158, 0.2) 0%, rgba(197, 160, 89, 0.12) 50%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none'
        }}
      />

      {viewMode === 'portrait' ? (
        /* Academic Leader Official Portrait Showcase */
        <motion.div
          key="portrait-view"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: 380,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {/* Main Portrait Frame */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: 440,
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: '2px solid rgba(197, 160, 89, 0.45)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 35px rgba(197, 160, 89, 0.2)',
              background: 'linear-gradient(145deg, #11223b, #070e18)'
            }}
          >
            {/* Real Professional Profile Photograph */}
            <img
              src="/shakir-profile.jpeg"
              alt="Shakir Hussain Shakir — Education Leader & Student Affairs Head"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block'
              }}
            />

            {/* Gradient Overlay for Academic Readability */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(7, 14, 24, 0.1) 0%, rgba(7, 14, 24, 0.2) 55%, rgba(7, 14, 24, 0.92) 100%)',
                pointerEvents: 'none'
              }}
            />

            {/* Bottom Caption Overlay */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '1.5rem',
                zIndex: 5
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.25rem 0.65rem',
                  background: 'rgba(30, 107, 104, 0.85)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(45, 163, 158, 0.4)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  marginBottom: '0.5rem',
                  letterSpacing: '0.04em'
                }}
              >
                <ShieldCheck size={12} />
                <span>Verified Education Leader</span>
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.45rem',
                  fontWeight: 700,
                  color: 'var(--ivory-light)',
                  lineHeight: 1.2,
                  marginBottom: '0.25rem'
                }}
              >
                Shakir Hussain Shakir
              </h2>

              <div
                style={{
                  fontSize: '0.86rem',
                  color: 'var(--gold-light)',
                  fontWeight: 600,
                  lineHeight: 1.3
                }}
              >
                Head Department of Student Affairs
              </div>

              <div
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-secondary)',
                  marginTop: '0.25rem'
                }}
              >
                PAK-TURK Maarif International Schools & Colleges
              </div>
            </div>
          </div>

          {/* Floating Achievement Badge 1 (Top Left) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{
              position: 'absolute',
              top: 25,
              left: -20,
              padding: '0.55rem 0.95rem',
              background: 'rgba(11, 23, 40, 0.92)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(197, 160, 89, 0.45)',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.55rem',
              boxShadow: 'var(--shadow-md), 0 0 20px rgba(197, 160, 89, 0.15)',
              zIndex: 10
            }}
          >
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: '50%',
                background: 'rgba(197, 160, 89, 0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--gold-light)'
              }}
            >
              <GraduationCap size={16} />
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--ivory-light)', lineHeight: 1.1 }}>
                13,000+
              </div>
              <div style={{ fontSize: '0.68rem', color: 'var(--gold-light)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Students Mentored
              </div>
            </div>
          </motion.div>

          {/* Floating Achievement Badge 2 (Bottom Right) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{
              position: 'absolute',
              bottom: 60,
              right: -20,
              padding: '0.55rem 0.95rem',
              background: 'rgba(11, 23, 40, 0.92)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(45, 163, 158, 0.45)',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.55rem',
              boxShadow: 'var(--shadow-md), 0 0 20px rgba(45, 163, 158, 0.15)',
              zIndex: 10
            }}
          >
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: '50%',
                background: 'rgba(30, 107, 104, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--teal-light)'
              }}
            >
              <Globe size={16} />
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--ivory-light)', lineHeight: 1.1 }}>
                27 Campuses
              </div>
              <div style={{ fontSize: '0.68rem', color: 'var(--teal-light)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                10 Major Cities
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        /* Global Education Network View (With Shakir at center) */
        <motion.div
          key="network-view"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{ position: 'relative', width: '100%', height: 480, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {/* Orbital SVG Rings & Thin Connection Lines */}
          <svg
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
            viewBox="0 0 500 500"
          >
            <defs>
              <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2da39e" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#c5a059" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#2da39e" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Concentric Coordinate Rings */}
            <circle cx="250" cy="250" r="110" fill="none" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 4" />
            <circle cx="250" cy="250" r="170" fill="none" stroke="url(#orbitGrad)" strokeWidth="1.2" strokeDasharray="6 6" />
            <circle cx="250" cy="250" r="220" fill="none" stroke="rgba(255,255,255,0.03)" />

            {/* Radiating Connection Rays */}
            {NODES.map((node) => {
              const rad = (node.angle * Math.PI) / 180;
              const x = 250 + Math.cos(rad) * node.distance;
              const y = 250 + Math.sin(rad) * node.distance;
              const isSelected = activeNode === node.id;

              return (
                <g key={`line-${node.id}`}>
                  <line
                    x1="250"
                    y1="250"
                    x2={x}
                    y2={y}
                    stroke={isSelected ? '#c5a059' : 'rgba(45, 163, 158, 0.28)'}
                    strokeWidth={isSelected ? 2 : 1}
                    strokeDasharray={isSelected ? 'none' : '4 3'}
                  />
                  <circle
                    cx={(250 + x) / 2}
                    cy={(250 + y) / 2}
                    r={isSelected ? 3 : 1.5}
                    fill={isSelected ? '#c5a059' : '#2da39e'}
                    opacity={0.8}
                  />
                </g>
              );
            })}
          </svg>

          {/* Central Academic Leadership Node with Shakir's portrait thumbnail */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: [0.97, 1.03, 0.97] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            style={{
              position: 'relative',
              width: 130,
              height: 130,
              borderRadius: '50%',
              border: '3px solid var(--gold-light)',
              boxShadow: '0 0 35px rgba(197, 160, 89, 0.35)',
              overflow: 'hidden',
              zIndex: 10,
              cursor: 'pointer'
            }}
          >
            <img
              src="/shakir-profile.jpeg"
              alt="Shakir Hussain Shakir"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top'
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '0.2rem 0',
                background: 'rgba(7, 14, 24, 0.85)',
                textAlign: 'center',
                fontSize: '0.65rem',
                fontWeight: 700,
                color: 'var(--gold-light)',
                letterSpacing: '0.04em'
              }}
            >
              SHAKIR
            </div>
          </motion.div>

          {/* Orbiting Educational Nodes */}
          {NODES.map((node, i) => {
            const rad = (node.angle * Math.PI) / 180;
            const x = Math.cos(rad) * node.distance;
            const y = Math.sin(rad) * node.distance;
            const isHovered = activeNode === node.id;
            const Icon = node.icon;

            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
                style={{
                  position: 'absolute',
                  transform: `translate(${x}px, ${y}px)`,
                  zIndex: isHovered ? 25 : 12,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                <div
                  style={{
                    width: isHovered ? 48 : 42,
                    height: isHovered ? 48 : 42,
                    borderRadius: '50%',
                    background: isHovered ? 'var(--navy-surface)' : 'var(--navy-card)',
                    border: `1.5px solid ${isHovered ? node.color : 'rgba(255,255,255,0.15)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: node.color,
                    boxShadow: isHovered ? `0 0 20px ${node.color}55` : 'var(--shadow-sm)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <Icon size={isHovered ? 22 : 18} />
                </div>

                <div
                  style={{
                    marginTop: 6,
                    padding: '0.2rem 0.6rem',
                    background: 'rgba(7, 14, 24, 0.88)',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: isHovered ? 'var(--ivory-light)' : 'var(--text-secondary)',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                    transition: 'color 0.2s ease'
                  }}
                >
                  {node.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      )}

      {/* Mode Switcher pill at bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: -15,
          right: '50%',
          transform: 'translateX(50%)',
          display: 'flex',
          gap: '0.4rem',
          background: 'rgba(11, 23, 40, 0.95)',
          backdropFilter: 'blur(10px)',
          padding: '0.35rem',
          borderRadius: 'var(--radius-full)',
          border: '1px solid rgba(197, 160, 89, 0.3)',
          zIndex: 30,
          boxShadow: 'var(--shadow-md)'
        }}
      >
        <button
          onClick={() => setViewMode('portrait')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            padding: '0.4rem 0.9rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.78rem',
            fontWeight: 600,
            background: viewMode === 'portrait' ? 'linear-gradient(135deg, var(--gold-dark), var(--gold-primary))' : 'transparent',
            color: viewMode === 'portrait' ? '#ffffff' : 'var(--text-muted)',
            transition: 'all 0.2s ease'
          }}
        >
          <User size={13} />
          <span>Profile Photo</span>
        </button>

        <button
          onClick={() => setViewMode('network')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            padding: '0.4rem 0.9rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.78rem',
            fontWeight: 600,
            background: viewMode === 'network' ? 'var(--teal-primary)' : 'transparent',
            color: viewMode === 'network' ? '#ffffff' : 'var(--text-muted)',
            transition: 'all 0.2s ease'
          }}
        >
          <Globe size={13} />
          <span>Education Network</span>
        </button>
      </div>

    </div>
  );
};
