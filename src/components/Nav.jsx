import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CAT, CONTENT } from '../data/content.js';

export default function Nav({ onSearch }) {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [catOpen, setCatOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200 }}>
      <nav style={{
        height: '52px', display: 'flex', alignItems: 'center', padding: '0 1.75rem', gap: '1.5rem',
        background: scrolled ? 'rgba(244,242,237,0.96)' : 'rgba(15,14,23,1)',
        backdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'rgba(255,255,255,0.07)'}`,
        transition: 'background .4s, border-color .4s',
      }}>
        <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, flexShrink: 0 }}>
          <span className="fr" style={{ fontSize: '1.1rem', fontWeight: 600, letterSpacing: '-0.04em', color: scrolled ? 'var(--ink)' : 'white' }}>
            ANLA<span style={{ color: 'var(--teal)' }}>.</span>TR
          </span>
        </button>

        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          {['Bu Hafta', 'Hakkımızda'].map(l => (
            <button key={l}
              onClick={l === 'Bu Hafta' ? () => navigate('/') : undefined}
              style={{
                background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                fontSize: '0.82rem', fontWeight: 500,
                color: scrolled ? 'var(--muted)' : 'rgba(255,255,255,0.5)',
                padding: '0.4rem 0.75rem', borderRadius: '6px', transition: 'color .12s,background .12s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = scrolled ? 'var(--ink)' : 'white'; e.currentTarget.style.background = scrolled ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.06)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = scrolled ? 'var(--muted)' : 'rgba(255,255,255,0.5)'; e.currentTarget.style.background = 'none'; }}
            >{l}</button>
          ))}

          <div style={{ position: 'relative' }} onMouseEnter={() => setCatOpen(true)} onMouseLeave={() => setCatOpen(false)}>
            <button style={{
              background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit',
              fontSize: '0.82rem', fontWeight: 500,
              color: scrolled ? 'var(--muted)' : 'rgba(255,255,255,0.5)',
              padding: '0.4rem 0.75rem', borderRadius: '6px',
              display: 'inline-flex', alignItems: 'center', gap: '3px',
              transition: 'color .12s,background .12s',
            }}
              onMouseEnter={e => { e.currentTarget.style.color = scrolled ? 'var(--ink)' : 'white'; e.currentTarget.style.background = scrolled ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.06)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = scrolled ? 'var(--muted)' : 'rgba(255,255,255,0.5)'; e.currentTarget.style.background = 'none'; }}
            >
              Kategoriler
              <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                <path d="M1.5 3L4.5 6 7.5 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {catOpen && (
              <div className="fi" style={{
                position: 'absolute', top: 'calc(100% + 4px)', left: 0,
                background: 'white', border: '1px solid var(--border)',
                borderRadius: '10px', overflow: 'hidden', minWidth: '180px',
                boxShadow: '0 16px 40px rgba(0,0,0,0.12)', zIndex: 300, marginTop: '4px',
              }}>
                {Object.entries(CAT).map(([cat, m]) => (
                  <button key={cat}
                    onClick={() => {
                      const p = new URLSearchParams({ cat });
                      navigate(`/?${p}`);
                      setCatOpen(false);
                    }}
                    style={{
                      width: '100%', display: 'flex', alignItems: 'center', gap: '8px',
                      padding: '0.55rem 1rem', background: 'none', border: 'none', cursor: 'pointer',
                      fontFamily: 'inherit', fontSize: '0.83rem', color: 'var(--ink)', textAlign: 'left',
                      transition: 'background .1s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--bg)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'none'}
                  >
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: m.c, display: 'inline-block', flexShrink: 0 }} />
                    {cat}
                    <span style={{ marginLeft: 'auto', fontSize: '0.72rem', color: 'var(--dim)' }}>
                      {CONTENT.filter(c => c.category === cat).length}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <button onClick={onSearch} style={{
            background: 'none',
            border: `1px solid ${scrolled ? 'var(--border)' : 'rgba(255,255,255,0.12)'}`,
            cursor: 'pointer',
            color: scrolled ? 'var(--muted)' : 'rgba(255,255,255,0.45)',
            padding: '5px 10px', borderRadius: '7px',
            display: 'flex', alignItems: 'center', gap: '5px',
            fontSize: '0.78rem', fontFamily: 'inherit', transition: 'all .15s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = scrolled ? 'var(--teal)' : 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = scrolled ? 'var(--teal)' : 'white'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = scrolled ? 'var(--border)' : 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = scrolled ? 'var(--muted)' : 'rgba(255,255,255,0.45)'; }}
          >
            <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
              <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M13 13l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Ara
          </button>
          <button onClick={() => navigate('/subscribe')} style={{
            background: 'var(--teal)', color: 'white', border: 'none',
            padding: '0.38rem 1rem', borderRadius: '7px',
            fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer',
            fontFamily: 'inherit', transition: 'background .15s,transform .1s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--teal-d)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--teal)'; e.currentTarget.style.transform = 'none'; }}
          >
            Abone Ol
          </button>
        </div>
      </nav>
    </div>
  );
}
