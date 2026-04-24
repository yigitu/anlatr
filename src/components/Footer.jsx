export default function Footer({ onNav }) {
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
            { t: 'YAYIN',   l: ['Bu Hafta', 'Arşiv', 'Kategoriler', 'Bülten'] },
            { t: 'YASAL',   l: ['Gizlilik Politikası', 'Kullanım Şartları'] },
            { t: 'BAĞLANTI',l: ['İletişim', 'Twitter/X', 'RSS'] },
          ].map(col => (
            <div key={col.t}>
              <p style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.11em', color: 'rgba(255,255,255,0.2)', marginBottom: '0.75rem' }}>{col.t}</p>
              {col.l.map(l => (
                <button key={l} style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.78rem', color: 'rgba(255,255,255,0.38)', padding: '0.2rem 0', transition: 'color .12s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'white'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.38)'}
                >{l}</button>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.25rem', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.18)' }}>© 2025 anla.tr — Bütün hakları saklıdır.</span>
          <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.18)' }}>Türkçe · Teknik · Ekonomi · Teknoloji</span>
        </div>
      </div>
    </footer>
  );
}
