import { useState } from 'react';
import { CAT } from '../data/content.js';
import { ILLUS } from './illustrations/index.jsx';
import Badge from './Badge.jsx';

function BentoCard({ item, span, tall, idx, onClick }) {
  const [hov, setHov] = useState(false);
  const m = CAT[item.category] || { c: 'var(--teal)', bg: 'var(--teal-l)' };
  const Illu = ILLUS[item.id];

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="fu"
      style={{
        gridColumn: `span ${span}`,
        background: 'var(--white)',
        border: `1px solid ${hov ? m.c : 'var(--border)'}`,
        borderRadius: '12px', overflow: 'hidden', cursor: 'pointer',
        display: 'flex', flexDirection: 'column',
        transition: 'border-color .18s,box-shadow .18s,transform .18s',
        boxShadow: hov ? `0 4px 20px rgba(0,0,0,0.08), 0 0 0 1px ${m.c}20` : '0 1px 3px rgba(0,0,0,0.04)',
        transform: hov ? 'translateY(-2px)' : 'none',
        animationDelay: `${idx * 0.035}s`,
      }}
    >
      <div style={{ position: 'relative', overflow: 'hidden', height: tall ? '220px' : '150px', background: '#0a0a12', flexShrink: 0 }}>
        {Illu && <Illu />}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(to top,var(--white),transparent)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
          <Badge label={item.category} sm />
        </div>
        <div style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)', background: 'rgba(0,0,0,0.3)', padding: '2px 7px', borderRadius: '20px' }}>
          {item.readMin} dk
        </div>
      </div>
      <div style={{ padding: tall ? '1.15rem 1.35rem 1.2rem' : '0.9rem 1.1rem 1rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        <h3 className="fr" style={{ fontSize: tall ? '1.15rem' : '0.97rem', fontWeight: 400, letterSpacing: '-0.025em', lineHeight: 1.2, color: 'var(--ink)' }}>
          {item.title}
        </h3>
        {tall && <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.6, flex: 1 }}>{item.summary}</p>}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: tall ? '0.6rem' : '0.4rem', borderTop: '1px solid var(--border2)', marginTop: 'auto' }}>
          <div style={{ display: 'flex', gap: '3px' }}>
            {item.tags.slice(0, tall ? 2 : 1).map(t => (
              <span key={t} style={{ fontSize: '0.63rem', color: 'var(--dim)', border: '1px solid var(--border)', padding: '1px 6px', borderRadius: '20px' }}>#{t}</span>
            ))}
          </div>
          <span style={{ fontSize: '0.72rem', fontWeight: 600, color: hov ? m.c : 'var(--dim)', display: 'flex', alignItems: 'center', gap: '2px', transition: 'color .15s' }}>
            Oku{' '}
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default function BentoGrid({ items, onNav }) {
  if (items.length === 0) {
    return <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--muted)' }}>Bu kategoride içerik bulunamadı.</div>;
  }
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', gap: '1rem', padding: '1.5rem 2rem 3rem', maxWidth: '1240px', margin: '0 auto' }}>
      {items.map((item, i) => (
        <BentoCard
          key={item.id}
          item={item}
          span={i === 0 ? 7 : i === 1 ? 5 : 4}
          tall={i === 0}
          idx={i}
          onClick={() => onNav('content', item.id)}
        />
      ))}
    </div>
  );
}
