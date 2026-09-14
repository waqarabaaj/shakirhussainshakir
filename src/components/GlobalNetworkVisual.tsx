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
  Compass
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
  const [viewMode, setViewMode] = useState<'network' | 'portrait'>('network');

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 520, height: 480, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      
      {/* Background Radiance */}
      <div 
        style={{
          position: 'absolute',
          width: 380,
          height: 380,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(45, 163, 158, 0.15) 0%, rgba(197, 160, 89, 0.08) 50%, transparent 70%)',
          filter: 'blur(35px)',
          pointerEvents: 'none'
        }}
      />

      {viewMode === 'network' ? (
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          
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
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#c5a059" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#2da39e" stopOpacity="0.6" />
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
                  {/* Subtle pulsing particle along line */}
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

          {/* Central Academic Leadership Node */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: [0.97, 1.03, 0.97] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            style={{
              position: 'relative',
              width: 130,
              height: 130,
              borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 35%, #183358, #0b1728)',
              border: '2px solid rgba(197, 160, 89, 0.6)',
              boxShadow: '0 0 40px rgba(197, 160, 89, 0.25), inset 0 0 20px rgba(45, 163, 158, 0.3)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
              cursor: 'pointer'
            }}
          >
            <div style={{ color: 'var(--gold-light)', marginBottom: 4 }}>
              <GraduationCap size={32} />
            </div>
            <div style={{ fontFamily: 'var(--font-academic-seal)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--ivory-light)', textAlign: 'center' }}>
              GLOBAL
            </div>
            <div style={{ fontSize: '0.65rem', color: 'var(--teal-light)', fontWeight: 600, letterSpacing: '0.04em' }}>
              EDUCATION
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
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
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
        </div>
      ) : (
        /* Classical Academic Leader Portrait Placeholder */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            width: 320,
            height: 380,
            borderRadius: 'var(--radius-md)',
            background: 'linear-gradient(145deg, #11223b, #091322)',
            border: '2px solid rgba(197, 160, 89, 0.4)',
            boxShadow: 'var(--shadow-lg), 0 0 35px rgba(197, 160, 89, 0.15)',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            textAlign: 'center'
          }}
        >
          {/* Classical Academic Arch Frame */}
          <div
            style={{
              width: 140,
              height: 140,
              borderRadius: '50%',
              background: 'radial-gradient(circle, #19355c, #0d1e35)',
              border: '2px solid rgba(45, 163, 158, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--gold-light)',
              marginBottom: '1.25rem',
              boxShadow: 'inset 0 0 25px rgba(0,0,0,0.5)'
            }}
          >
            <Compass size={64} strokeWidth={1.5} />
          </div>

          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--ivory-light)', fontWeight: 600 }}>
            Shakir Hussain Shakir
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--gold-light)', fontWeight: 500, marginTop: '0.25rem' }}>
            Academic Leader & Strategist
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.75rem', lineHeight: 1.5, maxWidth: 240 }}>
            Head of Student Affairs, PAK-TURK Maarif International Schools & Colleges
          </div>

          <div 
            style={{ 
              marginTop: '1.25rem',
              padding: '0.35rem 0.85rem',
              background: 'rgba(30, 107, 104, 0.2)',
              border: '1px solid rgba(45, 163, 158, 0.35)',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.75rem',
              color: 'var(--teal-light)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <Sparkles size={13} />
            <span>Official Educator Profile</span>
          </div>
        </motion.div>
      )}

      {/* Mode Switcher pill at bottom right */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: '50%',
          transform: 'translateX(50%)',
          display: 'flex',
          gap: '0.5rem',
          background: 'rgba(11, 23, 40, 0.95)',
          padding: '0.3rem',
          borderRadius: 'var(--radius-full)',
          border: '1px solid var(--navy-border)',
          zIndex: 30,
          boxShadow: 'var(--shadow-md)'
        }}
      >
        <button
          onClick={() => setViewMode('network')}
          style={{
            padding: '0.3rem 0.75rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.75rem',
            fontWeight: 600,
            background: viewMode === 'network' ? 'var(--teal-primary)' : 'transparent',
            color: viewMode === 'network' ? '#fff' : 'var(--text-muted)',
            transition: 'all 0.2s ease'
          }}
        >
          Education Network
        </button>
        <button
          onClick={() => setViewMode('portrait')}
          style={{
            padding: '0.3rem 0.75rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.75rem',
            fontWeight: 600,
            background: viewMode === 'portrait' ? 'var(--gold-dark)' : 'transparent',
            color: viewMode === 'portrait' ? '#fff' : 'var(--text-muted)',
            transition: 'all 0.2s ease'
          }}
        >
          Academic Seal
        </button>
      </div>

    </div>
  );
};
