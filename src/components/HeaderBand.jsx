import { useNavigate } from 'react-router-dom';
import { FEATURED } from '../data/content.js';
import { ILLUS } from './illustrations/index.jsx';

export default function HeaderBand() {
  const navigate = useNavigate();
  const Illu = ILLUS[FEATURED.id];
  return (
    <div style={{ paddingTop: '52px', background: 'var(--ink2)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      <div style={{
        maxWidth: '1240px', margin: '0 auto', padding: '2rem 2rem 1.75rem',
        display: 'flex', alignItems: 'flex-end', gap: '3rem',
      }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.4rem' }}>
            <h1 className="fr" style={{ fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 300, letterSpacing: '-0.04em', color: 'white', lineHeight: 1 }}>
              anla.tr
            </h1>
            <span className="fr" style={{ fontSize: 'clamp(1.4rem,2.2vw,2rem)', fontWeight: 200, fontStyle: 'italic', color: 'var(--teal)', letterSpacing: '-0.02em', lineHeight: 1 }}>
              anlatır.
            </span>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.01em' }}>
            Karmaşık konuları kısa, net ve anlaşılır biçimde açıklayan Türkçe içerik platformu.
          </p>
        </div>

        <button
          onClick={() => navigate(`/${FEATURED.id}`)}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.85rem',
            padding: '0.75rem 1rem',
            background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '10px', cursor: 'pointer', fontFamily: 'inherit',
            textAlign: 'left', flexShrink: 0, maxWidth: '340px',
            transition: 'background .15s,border-color .15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(13,148,136,0.12)'; e.currentTarget.style.borderColor = 'rgba(13,148,136,0.3)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
        >
          <div style={{ width: '56px', height: '40px', borderRadius: '5px', overflow: 'hidden', flexShrink: 0 }}>
            {Illu && <Illu />}
          </div>
          <div>
            <p style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '2px' }}>
              HAFTANIN KONUSU
            </p>
            <p style={{ fontSize: '0.82rem', fontWeight: 600, color: 'white', lineHeight: 1.25 }}>
              {FEATURED.title}
            </p>
            <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', marginTop: '2px' }}>
              {FEATURED.readMin} dk okuma
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}
