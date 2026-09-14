import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutEducator } from './components/AboutEducator';
import { ImpactSection } from './components/ImpactSection';
import { LeadershipScale } from './components/LeadershipScale';
import { CareerJourney } from './components/CareerJourney';
import { GlobalEducation } from './components/GlobalEducation';
import { StudentPathway } from './components/StudentPathway';
import { LeadershipPillars } from './components/LeadershipPillars';
import { ExpertiseGrid } from './components/ExpertiseGrid';
import { Recognition } from './components/Recognition';
import { EducationSection } from './components/EducationSection';
import { PersonalValues } from './components/PersonalValues';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div style={{ minHeight: '100vh', background: 'var(--navy-deep)', color: 'var(--text-primary)', position: 'relative' }}>
      
      {/* Scroll Progress Bar at very top */}
      <motion.div className="scroll-progress-bar" style={{ scaleX }} />

      {/* Navigation */}
      <Navbar />

      {/* Main Educator Portfolio Flow */}
      <main>
        {/* 1. Cinematic Hero Section */}
        <Hero />

        {/* 2. About The Educator: "Education Is About People, Not Just Programs." */}
        <AboutEducator />

        {/* 3. Impact Through Education (13K+ Students, 27 Campuses, 10 Cities, 20+ Officers) */}
        <ImpactSection />

        {/* 4. Educational Leadership: "Leading Student Success at Scale" (Pak-Turk Maarif & 15 Domains) */}
        <LeadershipScale />

        {/* 5. Career Journey (Maarif, LUMS, Hashoo Training, Hashoo Admissions, Foreign Ed Services) */}
        <CareerJourney />

        {/* 6. Global Education: "Connecting Students to the World" (University Linkages, Exchange, Scholarships) */}
        <GlobalEducation />

        {/* 7. Student Counselling: "Guidance That Opens Doors" (Student → Education → Scholarship → Exchange → Internship → Career → Leadership) */}
        <StudentPathway />

        {/* 8. Leadership Philosophy: "Developing People. Building Leaders." */}
        <LeadershipPillars />

        {/* 9. Areas of Expertise (19 Verified Competencies) */}
        <ExpertiseGrid />

        {/* 10. Recognition & Professional Development (Awards & Certifications) */}
        <Recognition />

        {/* 11. Scholastic Background (Troy Univ, GCU Lahore, Aga Khan HSS) */}
        <EducationSection />

        {/* 12. Personal Values: "What I Believe In" (Diversity, Equity, Meritocracy, Fairness, etc.) */}
        <PersonalValues />

        {/* 13. Contact & Collaboration: "Let's Create Opportunities Together" */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
