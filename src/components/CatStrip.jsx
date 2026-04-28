import { CATEGORIES } from '../data/categories.js';

export default function CatStrip({ active, setActive }) {
  return (
    <div style={{
      position: 'sticky', top: '52px', zIndex: 100,
      background: 'var(--white)', borderBottom: '1px solid var(--border)',
      padding: '0 2rem', display: 'flex', gap: '0', overflowX: 'auto',
    }}>
      {[null, ...CATEGORIES].map(cat => {
        const isAll = cat === null;
        const slug = isAll ? '' : cat.slug;
        const label = isAll ? 'Tümü' : cat.label;
        const color = isAll ? 'var(--teal)' : cat.color;
        const on = active === slug;
        return (
          <button key={slug} onClick={() => setActive(slug)} style={{
            padding: '0.65rem 1rem', fontSize: '0.8rem', fontWeight: on ? 600 : 500,
            background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: 'inherit', whiteSpace: 'nowrap',
            color: on ? color : 'var(--muted)',
            borderBottom: on ? `2px solid ${color}` : '2px solid transparent',
            transition: 'color .15s,border-color .15s', marginBottom: '-1px',
          }}>
            {label}
          </button>
        );
      })}
    </div>
  );
}
