import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle, 
  Layers, 
  Award,
  Globe2,
  Users2,
  BookMarked,
  FileCheck
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

const DOMAIN_CATEGORIES = ['All Domains', 'Student Affairs', 'Career & Counselling', 'Global Engagement', 'Academic & Training', 'Governance & Strategy'];

export const LeadershipScale: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Domains');
  const [expandedDomain, setExpandedDomain] = useState<string | null>(null);

  const filteredDomains = selectedCategory === 'All Domains'
    ? PROFILE_DATA.workingDomains
    : PROFILE_DATA.workingDomains.filter(d => d.category === selectedCategory);

  const currentRole = PROFILE_DATA.experiences[0];

  return (
    <section id="leadership" className="section-padding" style={{ background: 'var(--navy-deep)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Layers size={14} />
            <span>Institutional Leadership</span>
          </div>
          <h2 className="section-title">
            Leading Student Success at Scale
          </h2>
          <p className="section-description">
            Directing student life, psycho-social well-being, global linkages, and policy execution across Pakistan's premier multinational educational network.
          </p>
        </div>

        {/* Current Flagship Role Academic Institution Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, #11223b, #0d1b30)',
            border: '2px solid rgba(197, 160, 89, 0.45)',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(1.5rem, 3vw, 3rem)',
            boxShadow: 'var(--shadow-lg), 0 0 35px rgba(197, 160, 89, 0.12)',
            marginBottom: '3.5rem',
            position: 'relative'
          }}
        >
          {/* Header pill */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <div className="institution-badge gold">
              <Building2 size={16} />
              <span>CURRENT EXECUTIVE APPOINTMENT</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Calendar size={15} style={{ color: 'var(--teal-light)' }} />
                <span>March 2020 – Present</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MapPin size={15} style={{ color: 'var(--gold-light)' }} />
                <span>Islamabad, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Title & Institution */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', color: 'var(--ivory-light)', marginBottom: '0.4rem' }}>
              {currentRole.institution}
            </h3>
            <div style={{ fontSize: '1.15rem', color: 'var(--gold-light)', fontFamily: 'var(--font-academic-seal)', fontWeight: 600 }}>
              {currentRole.role}
            </div>
            <div style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
              {currentRole.institutionSub}
            </div>
          </div>

          <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: 960 }}>
            {currentRole.highlightSummary}
          </p>

          {/* Quick Metrics Bar within Maarif Card */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1rem',
              padding: '1.25rem',
              background: 'rgba(7, 14, 24, 0.7)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(255, 255, 255, 0.06)'
            }}
          >
            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Scope</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--teal-light)' }}>27 Campuses</div>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Footprint</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--ivory-light)' }}>10 Major Cities</div>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Student Population</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--gold-light)' }}>13,000+ Enrolled</div>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Counseling Cadre</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--teal-light)' }}>20+ Officers Led</div>
            </div>
          </div>
        </motion.div>

        {/* 15 Working Domains / Areas of Responsibility (Interactive Filter & Expandable Cards) */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--gold-light)', fontWeight: 600, letterSpacing: '0.06em' }}>
                Operational Portfolio
              </div>
              <h3 style={{ fontSize: '1.65rem', color: 'var(--ivory-light)' }}>
                15 Core Working Domains
              </h3>
            </div>

            {/* Category Filter Pills */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {DOMAIN_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '0.4rem 0.9rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    background: selectedCategory === cat ? 'var(--teal-primary)' : 'var(--navy-card)',
                    color: selectedCategory === cat ? '#fff' : 'var(--text-secondary)',
                    border: '1px solid',
                    borderColor: selectedCategory === cat ? 'var(--teal-light)' : 'var(--navy-border)',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Expandable Domains Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {filteredDomains.map((domain) => {
              const isExpanded = expandedDomain === domain.id;

              return (
                <div
                  key={domain.id}
                  onClick={() => setExpandedDomain(isExpanded ? null : domain.id)}
                  style={{
                    background: 'var(--navy-card)',
                    border: `1px solid ${isExpanded ? 'rgba(45, 163, 158, 0.5)' : 'var(--navy-border)'}`,
                    borderRadius: 'var(--radius-md)',
                    padding: '1.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: isExpanded ? 'var(--shadow-teal)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          color: 'var(--gold-light)',
                          fontWeight: 600
                        }}
                      >
                        {domain.category}
                      </span>
                      <h4 style={{ fontSize: '1.12rem', color: 'var(--ivory-light)', marginTop: '0.25rem', lineHeight: 1.4 }}>
                        {domain.title}
                      </h4>
                    </div>

                    <div
                      style={{
                        color: isExpanded ? 'var(--teal-light)' : 'var(--text-muted)',
                        padding: '0.2rem',
                        transition: 'transform 0.2s ease'
                      }}
                    >
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                      color: 'var(--text-secondary)',
                      marginTop: '0.85rem'
                    }}
                  >
                    {domain.description}
                  </p>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{
                          marginTop: '1rem',
                          paddingTop: '0.85rem',
                          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                          fontSize: '0.82rem',
                          color: 'var(--teal-light)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem'
                        }}
                      >
                        <CheckCircle size={14} />
                        <span>Active institutional standard implemented across all campuses</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
