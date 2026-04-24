import { useState } from 'react';

export default function MiniSub() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  if (done) {
    return <p style={{ fontSize: '0.8rem', color: 'var(--teal)' }}>Abone oldun!</p>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)}
        placeholder="E-posta adresiniz"
        style={{
          width: '100%', padding: '0.5rem 0.75rem',
          border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px',
          fontSize: '0.78rem', fontFamily: 'inherit',
          background: 'rgba(255,255,255,0.06)', color: 'white',
        }}
        onFocus={e => e.target.style.borderColor = 'rgba(13,148,136,0.4)'}
        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
      />
      <button onClick={() => { if (email.includes('@')) setDone(true); }}
        style={{
          width: '100%', background: 'var(--teal)', color: 'white',
          border: 'none', padding: '0.5rem', borderRadius: '6px',
          fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer',
          fontFamily: 'inherit', transition: 'background .15s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'var(--teal-d)'}
        onMouseLeave={e => e.currentTarget.style.background = 'var(--teal)'}
      >
        Kayıt Ol
      </button>
    </div>
  );
}
