import { CAT } from '../data/content.js';

export default function CatStrip({ active, setActive }) {
  return (
    <div style={{
      position: 'sticky', top: '52px', zIndex: 100,
      background: 'var(--white)', borderBottom: '1px solid var(--border)',
      padding: '0 2rem', display: 'flex', gap: '0', overflowX: 'auto',
    }}>
      {['Tümü', ...Object.keys(CAT)].map(cat => {
        const on = active === cat;
        const m = CAT[cat];
        return (
          <button key={cat} onClick={() => setActive(cat)} style={{
            padding: '0.65rem 1rem', fontSize: '0.8rem', fontWeight: on ? 600 : 500,
            background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: 'inherit', whiteSpace: 'nowrap',
            color: on ? (m?.c || 'var(--teal)') : 'var(--muted)',
            borderBottom: on ? `2px solid ${m?.c || 'var(--teal)'}` : '2px solid transparent',
            transition: 'color .15s,border-color .15s', marginBottom: '-1px',
          }}>
            {cat}
          </button>
        );
      })}
    </div>
  );
}
