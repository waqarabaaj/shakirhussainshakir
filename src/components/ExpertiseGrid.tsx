import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Briefcase, 
  HeartHandshake, 
  BookOpen, 
  Globe2, 
  Building2, 
  Users, 
  Award, 
  Plane, 
  Sparkles, 
  FileText, 
  Compass, 
  Layers, 
  CheckCircle,
  HelpCircle,
  FolderKanban,
  BarChart3
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

const CATEGORIES = ['All Areas', 'Student Success', 'Global Partnerships', 'Governance', 'Institutional', 'Social Impact'];

const getExpertiseIcon = (name: string) => {
  switch (name) {
    case 'Student Affairs': return GraduationCap;
    case 'Career Development': return Briefcase;
    case 'Student Counselling': return HeartHandshake;
    case 'Academic Advising': return BookOpen;
    case 'Global Engagement': return Globe2;
    case 'International Partnerships': return Building2;
    case 'Admissions': return FileText;
    case 'Scholarships': return Award;
    case 'Student Exchange': return Plane;
    case 'Alumni Engagement': return Users;
    case 'Youth Development': return Sparkles;
    case 'Training & Development': return Compass;
    case 'Policy Development': return FileText;
    case 'Program Management': return FolderKanban;
    case 'Community Mobilization': return Users;
    case 'Strategic Planning': return Compass;
    case 'Team Leadership': return Layers;
    case 'Donor Reporting': return BarChart3;
    case 'Institutional Collaboration': return Building2;
    default: return CheckCircle;
  }
};

export const ExpertiseGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Areas');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const filteredItems = selectedCategory === 'All Areas'
    ? PROFILE_DATA.areasOfExpertise
    : PROFILE_DATA.areasOfExpertise.filter(item => item.category === selectedCategory);

  return (
    <section id="expertise" className="section-padding" style={{ background: 'var(--navy-primary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={14} />
            <span>Core Competencies</span>
          </div>
          <h2 className="section-title">
            Areas of Expertise
          </h2>
          <p className="section-description">
            A versatile leadership toolkit spanning educational administration, international partnerships, student counseling, policy governance, and social impact.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '0.45rem 1.1rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.84rem',
                fontWeight: 600,
                background: selectedCategory === cat ? 'var(--teal-primary)' : 'var(--navy-card)',
                color: selectedCategory === cat ? '#ffffff' : 'var(--text-secondary)',
                border: '1px solid',
                borderColor: selectedCategory === cat ? 'var(--teal-light)' : 'var(--navy-border)',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 19 Expertise Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {filteredItems.map((item, index) => {
            const Icon = getExpertiseIcon(item.name);
            const isHovered = hoveredCard === item.name;

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                onMouseEnter={() => setHoveredCard(item.name)}
                onMouseLeave={() => setHoveredCard(null)}
                className="academic-card"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: isHovered ? '2px solid var(--teal-light)' : '1px solid var(--navy-border)',
                  background: isHovered ? 'var(--navy-card-hover)' : 'var(--navy-card)',
                  transform: isHovered ? 'translateY(-5px)' : 'none',
                  boxShadow: isHovered ? 'var(--shadow-teal)' : 'var(--shadow-sm)',
                  transition: 'all 0.25s ease'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 'var(--radius-sm)',
                        background: isHovered ? 'rgba(45, 163, 158, 0.25)' : 'rgba(30, 107, 104, 0.15)',
                        border: '1px solid rgba(45, 163, 158, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--teal-light)',
                        transition: 'transform 0.2s ease',
                        transform: isHovered ? 'scale(1.08)' : 'scale(1)'
                      }}
                    >
                      <Icon size={20} />
                    </div>

                    <span style={{ fontSize: '0.7rem', color: 'var(--gold-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {item.category}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', color: 'var(--ivory-light)', marginBottom: '0.45rem', lineHeight: 1.35 }}>
                    {item.name}
                  </h3>

                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                    {item.description}
                  </p>
                </div>

                {/* Micro Tag at bottom */}
                <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', color: isHovered ? 'var(--teal-light)' : 'var(--text-muted)' }}>
                  <CheckCircle size={12} />
                  <span>Demonstrated Competency</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
