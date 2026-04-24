import { useState } from 'react';
import Footer from '../components/Footer.jsx';

export default function SubscribePage({ onNav }) {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  return (
    <div style={{ paddingTop: '52px', minHeight: '100vh', background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '420px', width: '100%', textAlign: 'center' }}>
          {!done ? (
            <>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'var(--teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeWidth="1.5" />
                  <path d="M22 6l-10 7L2 6" stroke="white" strokeWidth="1.5" />
                </svg>
              </div>
              <h1 className="fr" style={{ fontSize: '1.85rem', fontWeight: 300, letterSpacing: '-0.04em', color: 'var(--ink)', marginBottom: '0.75rem' }}>
                Yeni konulardan haberdar ol
              </h1>
              <p style={{ color: 'var(--muted)', marginBottom: '1.75rem', fontSize: '0.875rem', lineHeight: 1.65 }}>
                Haftada bir, sade. Fazlası yok.
              </p>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="e-posta adresin"
                  style={{
                    flex: 1, padding: '0.65rem 0.9rem',
                    border: '1.5px solid var(--border)', borderRadius: '8px',
                    fontSize: '0.875rem', fontFamily: 'inherit',
                    color: 'var(--ink)', background: 'white', transition: 'border-color .15s',
                  }}
                  onFocus={e => e.target.style.borderColor = 'var(--teal)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  onKeyDown={e => e.key === 'Enter' && email.includes('@') && setDone(true)}
                />
                <button onClick={() => { if (email.includes('@')) setDone(true); }}
                  style={{
                    background: 'var(--teal)', color: 'white', border: 'none',
                    padding: '0.65rem 1.15rem', borderRadius: '8px',
                    fontSize: '0.83rem', fontWeight: 700, cursor: 'pointer',
                    fontFamily: 'inherit', whiteSpace: 'nowrap', transition: 'background .15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--teal-d)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'var(--teal)'}
                >
                  Abone Ol
                </button>
              </div>
            </>
          ) : (
            <div className="fu">
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--teal-l)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12l5 5L20 7" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="fr" style={{ fontSize: '1.6rem', fontWeight: 300, letterSpacing: '-0.04em', color: 'var(--ink)', marginBottom: '0.5rem' }}>Teşekkürler!</h2>
              <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', fontSize: '0.875rem' }}>{email}</p>
              <button onClick={() => onNav('home')}
                style={{
                  background: 'none', border: '1.5px solid var(--border)',
                  padding: '0.55rem 1.35rem', borderRadius: '7px',
                  cursor: 'pointer', fontFamily: 'inherit',
                  fontSize: '0.875rem', fontWeight: 500, color: 'var(--ink)',
                  transition: 'border-color .15s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--teal)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                Ana sayfaya dön
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer onNav={onNav} />
    </div>
  );
}
