import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Compass, ArrowRight, ArrowDown, GraduationCap, Globe, BookOpen } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';
import { GlobalNetworkVisual } from './GlobalNetworkVisual';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '6rem',
        paddingBottom: '4rem',
        overflow: 'hidden'
      }}
    >
      {/* Background Academic Patterns */}
      <div className="bg-academic-pattern" />
      <div className="subtle-grid" />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '3.5rem'
          }}
        >
          {/* Left Column: Dignified Academic Bio & Intent */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Academic Institution Tag */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 1rem',
                background: 'rgba(17, 34, 59, 0.85)',
                border: '1px solid rgba(197, 160, 89, 0.35)',
                borderRadius: 'var(--radius-full)',
                marginBottom: '1.5rem',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div style={{ color: 'var(--gold-light)' }}>
                <GraduationCap size={16} />
              </div>
              <span style={{ fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.04em', color: 'var(--ivory-base)' }}>
                PAK-TURK Maarif International Schools & Colleges
              </span>
            </div>

            {/* Large Name Heading */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                color: 'var(--ivory-light)',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                marginBottom: '1rem'
              }}
            >
              {PROFILE_DATA.name}
            </h1>

            {/* Subheading Title */}
            <div
              style={{
                fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)',
                color: 'var(--gold-light)',
                fontWeight: 500,
                letterSpacing: '0.01em',
                marginBottom: '1.25rem',
                fontFamily: 'var(--font-academic-seal)'
              }}
            >
              {PROFILE_DATA.headline}
            </div>

            {/* Concise Mission Statement */}
            <p
              style={{
                fontSize: '1.18rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem',
                maxWidth: 560
              }}
            >
              "{PROFILE_DATA.heroStatement}"
            </p>

            {/* Location & Key Institutional Indicator */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                marginBottom: '2.25rem',
                flexWrap: 'wrap'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                <MapPin size={17} style={{ color: 'var(--teal-light)' }} />
                <span>{PROFILE_DATA.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                <Globe size={17} style={{ color: 'var(--gold-light)' }} />
                <span>Global Partnerships & Exchange</span>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => scrollTo('journey')}
                className="btn-primary"
                style={{ padding: '0.9rem 1.85rem' }}
              >
                <span>Explore My Journey</span>
                <ArrowRight size={17} />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="btn-secondary"
                style={{ padding: '0.9rem 1.85rem' }}
              >
                <span>Let's Connect</span>
              </button>
            </div>

            {/* Micro Credential Badges Strip */}
            <div
              style={{
                marginTop: '2.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--navy-border)',
                display: 'flex',
                gap: '1.5rem',
                flexWrap: 'wrap'
              }}
            >
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--ivory-light)' }}>
                  13,000+
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Students Supported
                </div>
              </div>
              <div style={{ width: 1, background: 'var(--navy-border)' }} />
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--ivory-light)' }}>
                  27
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Campuses
                </div>
              </div>
              <div style={{ width: 1, background: 'var(--navy-border)' }} />
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--ivory-light)' }}>
                  20+
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Counsellors Led
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Educational System Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <GlobalNetworkVisual />
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3.5rem' }}>
          <button
            onClick={() => scrollTo('about')}
            aria-label="Scroll to about section"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--text-muted)',
              fontSize: '0.78rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              opacity: 0.75,
              transition: 'opacity 0.2s ease'
            }}
          >
            <span>Learn More</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ArrowDown size={16} />
            </motion.div>
          </button>
        </div>
      </div>
    </section>
  );
};
