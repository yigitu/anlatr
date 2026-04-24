import { CAT } from '../data/content.js';

export default function Badge({ label, sm }) {
  const m = CAT[label] || { c: 'var(--muted)', bg: '#f0eeea' };
  return (
    <span style={{
      display: 'inline-block',
      fontSize: sm ? '0.6rem' : '0.65rem',
      fontWeight: 700,
      letterSpacing: '0.07em',
      textTransform: 'uppercase',
      color: m.c,
      background: m.bg,
      padding: sm ? '2px 7px' : '3px 9px',
      borderRadius: '4px',
    }}>
      {label}
    </span>
  );
}
