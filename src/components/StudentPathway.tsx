import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  BookOpen, 
  Award, 
  Globe, 
  Briefcase, 
  TrendingUp, 
  GraduationCap, 
  HeartHandshake, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const StudentPathway: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const getStepIcon = (stage: string) => {
    switch (stage) {
      case 'Student': return Compass;
      case 'Education': return BookOpen;
      case 'Scholarship': return Award;
      case 'Exchange': return Globe;
      case 'Internship': return Briefcase;
      case 'Career': return TrendingUp;
      case 'Leadership': return GraduationCap;
      default: return Sparkles;
    }
  };

  return (
    <section id="counselling" className="section-padding" style={{ background: 'var(--navy-primary)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <HeartHandshake size={14} />
            <span>Student Counseling & Mentorship</span>
          </div>
          <h2 className="section-title">
            "Guidance That Opens Doors"
          </h2>
          <p className="section-description">
            A human-centered developmental roadmap unlocking each student's potential — from initial academic orientation to global scholarships, high-impact internships, and ethical leadership.
          </p>
        </div>

        {/* Interactive Stepper Bar */}
        <div
          style={{
            position: 'relative',
            marginBottom: '3.5rem',
            paddingBottom: '1rem'
          }}
        >
          {/* Connecting Pathway Line */}
          <div
            style={{
              position: 'absolute',
              top: 28,
              left: '4%',
              right: '4%',
              height: 3,
              background: 'linear-gradient(90deg, var(--teal-light), var(--gold-primary))',
              zIndex: 1,
              opacity: 0.4
            }}
          />

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              position: 'relative',
              zIndex: 2,
              overflowX: 'auto',
              padding: '0.5rem 0'
            }}
          >
            {PROFILE_DATA.pathwayStages.map((stage) => {
              const Icon = getStepIcon(stage.stage);
              const isSelected = activeStep === stage.step;

              return (
                <button
                  key={stage.step}
                  onClick={() => setActiveStep(stage.step)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.6rem',
                    minWidth: 85,
                    cursor: 'pointer'
                  }}
                >
                  <div
                    style={{
                      width: isSelected ? 56 : 46,
                      height: isSelected ? 56 : 46,
                      borderRadius: '50%',
                      background: isSelected ? 'var(--gold-dark)' : 'var(--navy-surface)',
                      border: `2px solid ${isSelected ? 'var(--gold-light)' : 'rgba(255,255,255,0.15)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                      boxShadow: isSelected ? '0 0 20px rgba(197, 160, 89, 0.4)' : 'none',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <Icon size={isSelected ? 24 : 18} />
                  </div>

                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.72rem', color: isSelected ? 'var(--gold-light)' : 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
                      Phase 0{stage.step}
                    </div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 600, color: isSelected ? 'var(--ivory-light)' : 'var(--text-secondary)' }}>
                      {stage.stage}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Highlighted Stage Focus Card */}
        {(() => {
          const currentStage = PROFILE_DATA.pathwayStages.find(s => s.step === activeStep) || PROFILE_DATA.pathwayStages[0];
          const Icon = getStepIcon(currentStage.stage);

          return (
            <motion.div
              key={currentStage.step}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                background: 'linear-gradient(135deg, #11223b, #0c182b)',
                border: '1px solid rgba(197, 160, 89, 0.35)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(1.75rem, 3vw, 3rem)',
                boxShadow: 'var(--shadow-md)',
                maxWidth: 900,
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2.5rem',
                alignItems: 'center'
              }}
            >
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0.85rem', background: 'rgba(197, 160, 89, 0.12)', border: '1px solid rgba(197, 160, 89, 0.3)', borderRadius: 'var(--radius-full)', color: 'var(--gold-light)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '1.25rem' }}>
                  <Sparkles size={14} />
                  <span>Pathway Phase {currentStage.step} of 7</span>
                </div>

                <h3 style={{ fontSize: '2rem', color: 'var(--ivory-light)', marginBottom: '0.4rem' }}>
                  {currentStage.stage}: {currentStage.title}
                </h3>

                <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1.75rem' }}>
                  {currentStage.description}
                </p>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button
                    onClick={() => setActiveStep(activeStep < 7 ? activeStep + 1 : 1)}
                    className="btn-primary"
                    style={{ padding: '0.65rem 1.35rem', fontSize: '0.88rem' }}
                  >
                    <span>{activeStep < 7 ? `Next: ${PROFILE_DATA.pathwayStages[activeStep]?.stage}` : 'Restart Pathway'}</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>

              {/* Visual Pillar Box */}
              <div
                style={{
                  background: 'rgba(7, 14, 24, 0.85)',
                  border: '1px solid var(--navy-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '2rem',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: '50%',
                    background: 'rgba(45, 163, 158, 0.15)',
                    border: '1px solid rgba(45, 163, 158, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--teal-light)',
                    margin: '0 auto 1.25rem auto'
                  }}
                >
                  <Icon size={34} />
                </div>

                <div style={{ fontFamily: 'var(--font-academic-seal)', fontSize: '1.1rem', color: 'var(--ivory-light)', fontWeight: 600, marginBottom: '0.35rem' }}>
                  Mentorship Milestone
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--gold-light)' }}>
                  Shakir's Student Advisory Framework
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.75rem', lineHeight: 1.5 }}>
                  Guiding students from admission inquiries to international opportunities, career clarity, and giving back to society.
                </p>
              </div>
            </motion.div>
          );
        })()}

      </div>
    </section>
  );
};
