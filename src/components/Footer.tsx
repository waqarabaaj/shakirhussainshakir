import { GraduationCap, ArrowUp, Heart, Globe, Phone } from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';
import { PROFILE_DATA } from '../data/profileData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: 'var(--navy-deep)', borderTop: '1px solid var(--navy-border)', padding: '4.5rem 0 2.5rem 0', position: 'relative' }}>
      <div className="container">
        
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Col 1: Brand & Academic Mission */}
          <div style={{ maxWidth: 360 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
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
                  color: 'var(--gold-light)'
                }}
              >
                <GraduationCap size={22} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-academic-seal)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--ivory-light)' }}>
                  SHAKIR HUSSAIN SHAKIR
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  Education Leader & Student Development
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
              Empowering students, building institutional partnerships, and creating pathways to education, scholarships, careers and global opportunities.
            </p>

            <div style={{ fontSize: '0.82rem', color: 'var(--gold-light)' }}>
              Head Department of Student Affairs, PAK-TURK Maarif International Schools & Colleges
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <div style={{ fontFamily: 'var(--font-academic-seal)', fontSize: '0.9rem', color: 'var(--ivory-light)', letterSpacing: '0.06em', marginBottom: '1.25rem', textTransform: 'uppercase' }}>
              Portfolio Navigation
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                { id: 'hero', label: 'Home' },
                { id: 'about', label: 'About Shakir' },
                { id: 'impact', label: 'Impact Dashboard' },
                { id: 'leadership', label: 'Educational Leadership' },
                { id: 'journey', label: 'Career Journey' },
                { id: 'global', label: 'Global Education' },
                { id: 'counselling', label: 'Student Pathway' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                      transition: 'color var(--transition-fast)'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-light)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Competencies & Education */}
          <div>
            <div style={{ fontFamily: 'var(--font-academic-seal)', fontSize: '0.9rem', color: 'var(--ivory-light)', letterSpacing: '0.06em', marginBottom: '1.25rem', textTransform: 'uppercase' }}>
              Academic Institutions
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              <li>
                <div style={{ fontWeight: 600, color: 'var(--ivory-light)' }}>PAK-TURK Maarif</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Student Affairs & Global Engagement</div>
              </li>
              <li>
                <div style={{ fontWeight: 600, color: 'var(--ivory-light)' }}>LUMS</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Global Partnerships & Student Exchange</div>
              </li>
              <li>
                <div style={{ fontWeight: 600, color: 'var(--ivory-light)' }}>Troy University, USA</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Cultural Exchange & Leadership</div>
              </li>
              <li>
                <div style={{ fontWeight: 600, color: 'var(--ivory-light)' }}>GCU Lahore</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Bachelor's Degree (Honors)</div>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Channels */}
          <div>
            <div style={{ fontFamily: 'var(--font-academic-seal)', fontSize: '0.9rem', color: 'var(--ivory-light)', letterSpacing: '0.06em', marginBottom: '1.25rem', textTransform: 'uppercase' }}>
              Verified Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <a
                href={PROFILE_DATA.contact.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.88rem' }}
              >
                <LinkedinIcon size={16} style={{ color: '#38bdf8' }} />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={`https://${PROFILE_DATA.contact.portfolioDisplay}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.88rem' }}
              >
                <Globe size={16} style={{ color: 'var(--gold-light)' }} />
                <span>Web Portfolio</span>
              </a>
              <a
                href={`tel:${PROFILE_DATA.contact.phone.replace(/\s+/g, '')}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.88rem' }}
              >
                <Phone size={16} style={{ color: 'var(--teal-light)' }} />
                <span>{PROFILE_DATA.contact.phoneDisplay}</span>
              </a>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="btn-secondary"
              style={{
                marginTop: '1.5rem',
                padding: '0.5rem 1rem',
                fontSize: '0.82rem',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                gap: '0.4rem'
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={15} />
            </button>
          </div>

        </div>

        {/* Bottom Bar with Academic Integrity Note */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.82rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © {new Date().getFullYear()} Shakir Hussain Shakir. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span>Built exclusively from verified academic appointment & leadership records.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
