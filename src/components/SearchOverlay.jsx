import { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { CONTENT } from '../data/content.js';
import { ILLUS } from './illustrations/index.jsx';
import Badge from './Badge.jsx';
import { hl } from '../utils.jsx';

export default function SearchOverlay({ onClose }) {
  const navigate = useNavigate();
  const [q, setQ] = useState('');
  const ref = useRef(null);

  const results = useMemo(() =>
    !q.trim() ? [] : CONTENT.filter(c =>
      c.title.toLowerCase().includes(q.toLowerCase()) ||
      c.summary.toLowerCase().includes(q.toLowerCase())
    ), [q]);

  useEffect(() => { setTimeout(() => ref.current?.focus(), 50); }, []);

  const go = (id) => { navigate(`/${id}`); onClose(); };

  return (
    <div className="fi"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(15,14,23,0.88)', backdropFilter: 'blur(16px)',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '15vh 1.5rem 2rem',
      }}
    >
      <div style={{ width: '100%', maxWidth: '560px' }}>
        <div style={{ position: 'relative', marginBottom: '1rem' }}>
          <svg style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.3, pointerEvents: 'none' }}
            width="16" height="16" viewBox="0 0 20 20" fill="none">
            <circle cx="8.5" cy="8.5" r="5.5" stroke="white" strokeWidth="1.5" />
            <path d="M13 13l4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input ref={ref} type="text" value={q} onChange={e => setQ(e.target.value)}
            placeholder="Ne anlamak istiyorsun?"
            style={{
              width: '100%', padding: '0.85rem 2.5rem', fontSize: '0.95rem',
              background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '10px', color: 'white', fontFamily: 'inherit',
            }}
            onFocus={e => e.target.style.borderColor = 'rgba(13,148,136,0.5)'}
            onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
          />
          <button onClick={onClose} style={{
            position: 'absolute', right: '0.85rem', top: '50%', transform: 'translateY(-50%)',
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'rgba(255,255,255,0.3)', fontSize: '1.2rem', lineHeight: 1, padding: '4px',
          }}>×</button>
        </div>

        {results.map(item => {
          const Illu = ILLUS[item.id];
          return (
            <button key={item.id} onClick={() => go(item.id)}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', gap: '0.85rem',
                padding: '0.7rem 0.85rem', borderRadius: '8px',
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'inherit', textAlign: 'left', transition: 'background .12s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
              onMouseLeave={e => e.currentTarget.style.background = 'none'}
            >
              <div style={{ width: '52px', height: '38px', borderRadius: '5px', overflow: 'hidden', flexShrink: 0 }}>
                {Illu && <Illu />}
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '0.88rem', fontWeight: 600, color: 'white', marginBottom: '1px' }}>
                  {hl(item.title, q)}
                </p>
                <p style={{ fontSize: '0.74rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.3 }}>
                  {item.summary.slice(0, 70)}…
                </p>
              </div>
              <Badge label={item.category} sm />
            </button>
          );
        })}

        {!q.trim() && (
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.2)', fontSize: '0.82rem', marginTop: '1rem' }}>
            Ara veya ⌘K ile aç
          </p>
        )}
      </div>
    </div>
  );
}
