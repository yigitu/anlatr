import { useState } from 'react';

export default function NewsletterBand() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  return (
    <div style={{ background: 'var(--ink2)', padding: '3rem 2rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '3rem', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '200px' }}>
          <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '0.5rem' }}>Bülten</p>
          <h3 className="fr" style={{ fontSize: '1.5rem', fontWeight: 300, letterSpacing: '-0.03em', color: 'white', marginBottom: '0.35rem' }}>Zihninizi Güncel Tutun.</h3>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>Her hafta yeni bir konu. Sade, gereksiz detaysız.</p>
        </div>
        <div style={{ flex: 1, minWidth: '280px' }}>
          {!done ? (
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="E-posta adresiniz"
                style={{
                  flex: 1, padding: '0.65rem 0.9rem', border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '7px', fontSize: '0.83rem', fontFamily: 'inherit',
                  background: 'rgba(255,255,255,0.06)', color: 'white', transition: 'border-color .15s',
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(13,148,136,0.4)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                onKeyDown={e => e.key === 'Enter' && email.includes('@') && setDone(true)}
              />
              <button
                onClick={() => { if (email.includes('@')) setDone(true); }}
                style={{
                  background: 'var(--teal)', color: 'white', border: 'none',
                  padding: '0.65rem 1.15rem', borderRadius: '7px',
                  fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer',
                  fontFamily: 'inherit', whiteSpace: 'nowrap', transition: 'background .15s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--teal-d)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--teal)'}
              >
                ABONE OL
              </button>
            </div>
          ) : (
            <div className="fi" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1rem', background: 'rgba(13,148,136,0.1)', border: '1px solid rgba(13,148,136,0.25)', borderRadius: '7px' }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7l3.5 3.5L11.5 3" stroke="var(--teal)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ fontSize: '0.83rem', color: 'var(--teal)' }}>Abone oldun, teşekkürler!</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
