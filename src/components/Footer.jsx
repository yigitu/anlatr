import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer style={{ background: 'var(--ink)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '2.5rem 2rem 2rem' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
          <div>
            <span className="fr" style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '-0.04em', color: 'white' }}>
              ANLA<span style={{ color: 'var(--teal)' }}>.</span>TR
            </span>
            <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)', marginTop: '0.5rem', lineHeight: 1.65, maxWidth: '210px' }}>
              Türkçe içerik platformu. Karmaşık konuları kısa ve net biçimde açıklar.
            </p>
          </div>
          {[
            { t: 'YAYIN',    l: [['Bu Hafta', '/'], ['Kategoriler', '/']] },
            { t: 'YASAL',    l: [['Gizlilik Politikası', null], ['Kullanım Şartları', null]] },
            { t: 'BAĞLANTI', l: [['İletişim', null], ['Twitter/X', null], ['RSS', null]] },
          ].map(col => (
            <div key={col.t}>
              <p style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.11em', color: 'rgba(255,255,255,0.2)', marginBottom: '0.75rem' }}>{col.t}</p>
              {col.l.map(([label, path]) => (
                <button key={label}
                  onClick={path ? () => navigate(path) : undefined}
                  style={{ display: 'block', background: 'none', border: 'none', cursor: path ? 'pointer' : 'default', fontFamily: 'inherit', fontSize: '0.78rem', color: 'rgba(255,255,255,0.38)', padding: '0.2rem 0', transition: 'color .12s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'white'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.38)'}
                >{label}</button>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.25rem', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.18)' }}>© 2025 anla.tr — Bütün hakları saklıdır.</span>
          <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.18)' }}>Türkçe · Teknik · Yazılım · Teknoloji</span>
        </div>
      </div>
    </footer>
  );
}
