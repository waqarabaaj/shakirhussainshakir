import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Menu, X, ArrowUpRight, GraduationCap, MapPin } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'impact', label: 'Impact' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'journey', label: 'Journey' },
  { id: 'global', label: 'Global Education' },
  { id: 'counselling', label: 'Student Pathway' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'recognition', label: 'Recognition' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sectionElements = NAV_LINKS.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(NAV_LINKS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all var(--transition-smooth)',
        backgroundColor: scrolled ? 'rgba(7, 14, 24, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--navy-border)' : '1px solid transparent',
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Academic Seal Brand */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('hero');
          }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 'var(--radius-sm)',
              background: 'linear-gradient(135deg, var(--navy-card), var(--navy-surface))',
              border: '1px solid rgba(197, 160, 89, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--gold-light)',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <GraduationCap size={22} />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-academic-seal)', fontSize: '1.05rem', fontWeight: 700, letterSpacing: '0.04em', color: 'var(--ivory-light)' }}>
              SHAKIR H. SHAKIR
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span style={{ color: 'var(--teal-light)' }}>●</span> Education Leader
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.25rem',
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.slice(0, 8).map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                style={{
                  color: isActive ? 'var(--gold-light)' : 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  fontWeight: isActive ? 600 : 500,
                  transition: 'color var(--transition-fast)',
                  position: 'relative',
                  padding: '0.4rem 0.25rem'
                }}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    style={{
                      position: 'absolute',
                      bottom: -2,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: 'linear-gradient(90deg, var(--teal-light), var(--gold-light))',
                      borderRadius: 1
                    }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Header CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={() => scrollTo('contact')}
            className="btn-primary"
            style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}
          >
            <span>Let's Connect</span>
            <ArrowUpRight size={15} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              padding: '0.5rem',
              color: 'var(--ivory-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--navy-border)',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--navy-card)'
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'var(--navy-primary)',
              borderBottom: '1px solid var(--navy-border)',
              overflow: 'hidden'
            }}
          >
            <div className="container" style={{ padding: '1.5rem 2rem 2rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  style={{
                    textAlign: 'left',
                    padding: '0.75rem 0',
                    fontSize: '1.05rem',
                    color: activeSection === link.id ? 'var(--gold-light)' : 'var(--text-secondary)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                    fontWeight: activeSection === link.id ? 600 : 400
                  }}
                >
                  {link.label}
                </button>
              ))}
              <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem' }}>
                <button
                  onClick={() => scrollTo('contact')}
                  className="btn-primary"
                  style={{ flex: 1 }}
                >
                  Contact Shakir
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
