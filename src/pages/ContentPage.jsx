import { useParams, useNavigate } from 'react-router-dom';
import { CONTENT, CAT } from '../data/content.js';
import { ILLUS } from '../components/illustrations/index.jsx';
import Badge from '../components/Badge.jsx';
import NewsletterBand from '../components/NewsletterBand.jsx';
import Footer from '../components/Footer.jsx';
import { formatBody } from '../utils.jsx';
import MiniSub from '../components/MiniSub.jsx';

export default function ContentPage() {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const item = CONTENT.find(c => c.id === articleId);

  if (!item) {
    return (
      <div style={{ paddingTop: '52px', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>Sayfa bulunamadı.</p>
          <button onClick={() => navigate('/')} style={{ background: 'var(--teal)', color: 'white', border: 'none', padding: '0.5rem 1.25rem', borderRadius: '7px', cursor: 'pointer', fontFamily: 'inherit' }}>
            Ana sayfaya dön
          </button>
        </div>
      </div>
    );
  }

  const m = CAT[item.category] || { c: 'var(--teal)', bg: 'var(--teal-l)' };
  const Illu = ILLUS[item.id];
  const related = CONTENT.filter(c => c.id !== item.id && c.category === item.category).slice(0, 4);

  return (
    <div style={{ paddingTop: '52px', minHeight: '100vh', background: 'var(--bg)' }}>
      {/* Article header */}
      <div style={{ background: 'white', borderBottom: '1px solid var(--border)', padding: '2rem 2rem 1.75rem' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 320px', gap: '3rem', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <button onClick={() => navigate('/')} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', gap: '4px',
                fontSize: '0.78rem', fontWeight: 500, color: 'var(--muted)',
                padding: 0, fontFamily: 'inherit', transition: 'color .12s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--ink)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M8 2L3 6l5 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Tüm konular
              </button>
              <span style={{ color: 'var(--border)' }}>·</span>
              <Badge label={item.category} />
              <span style={{ color: 'var(--border)' }}>·</span>
              <span style={{ fontSize: '0.72rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '3px' }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                {item.readMin} dakika okuma
              </span>
            </div>
            <h1 className="fr" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1.1, color: 'var(--ink)', marginBottom: '1rem' }}>
              {item.title}
            </h1>
            <div style={{ borderLeft: `3px solid ${m.c}`, paddingLeft: '1rem' }}>
              <p className="fr" style={{ fontSize: '1rem', fontWeight: 300, fontStyle: 'italic', color: 'var(--muted)', lineHeight: 1.6 }}>
                {item.summary}
              </p>
            </div>
          </div>
          <div style={{ height: '160px', borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--border)', background: '#0a0a12' }}>
            {Illu && <Illu />}
          </div>
        </div>
      </div>

      {/* Body + sidebar */}
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '2.5rem 2rem 4rem', display: 'grid', gridTemplateColumns: '1fr 280px', gap: '3rem', alignItems: 'start' }}>
        <div style={{ background: 'white', borderRadius: '12px', border: '1px solid var(--border)', padding: '2rem 2.25rem' }}>
          <div className="ab" style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'var(--ink)' }}>
            {formatBody(item.body)}
          </div>
          <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border2)', display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--dim)', marginRight: '0.25rem' }}>Etiketler:</span>
            {item.tags.map(t => (
              <span key={t} style={{ fontSize: '0.72rem', color: 'var(--muted)', border: '1px solid var(--border)', padding: '2px 8px', borderRadius: '20px' }}>#{t}</span>
            ))}
          </div>
        </div>

        <div style={{ position: 'sticky', top: '72px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {related.length > 0 && (
            <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden' }}>
              <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--muted)' }}>İlgili Konular</p>
                <span style={{ fontSize: '0.68rem', color: 'var(--dim)' }}>{item.category}</span>
              </div>
              {related.map((r, i) => {
                const RI = ILLUS[r.id];
                return (
                  <button key={r.id} onClick={() => navigate(`/${r.id}`)}
                    style={{
                      width: '100%', display: 'flex', alignItems: 'center', gap: '0.75rem',
                      padding: '0.7rem 1rem', background: 'none', border: 'none', cursor: 'pointer',
                      fontFamily: 'inherit', textAlign: 'left',
                      borderBottom: i < related.length - 1 ? '1px solid var(--border2)' : 'none',
                      transition: 'background .12s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--bg)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'none'}
                  >
                    <div style={{ width: '44px', height: '32px', borderRadius: '4px', overflow: 'hidden', flexShrink: 0, background: '#0a0a12' }}>
                      {RI && <RI />}
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--ink)', lineHeight: 1.3 }}>{r.title}</p>
                      <span style={{ fontSize: '0.68rem', color: 'var(--dim)' }}>{r.readMin} dk · {r.category}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          <div style={{ background: 'var(--ink2)', borderRadius: '10px', padding: '1.1rem' }}>
            <p style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '0.5rem' }}>Bülten</p>
            <p className="fr" style={{ fontSize: '0.9rem', fontWeight: 300, color: 'white', lineHeight: 1.35, marginBottom: '0.75rem' }}>
              Yeni konulardan haberdar ol
            </p>
            <MiniSub />
          </div>
        </div>
      </div>

      <NewsletterBand />
      <Footer />
    </div>
  );
}
