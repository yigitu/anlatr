import { useState, useEffect, useMemo } from 'react';
import { CONTENT } from '../data/content.js';
import HeaderBand from '../components/HeaderBand.jsx';
import CatStrip from '../components/CatStrip.jsx';
import BentoGrid from '../components/BentoGrid.jsx';
import NewsletterBand from '../components/NewsletterBand.jsx';
import Footer from '../components/Footer.jsx';

export default function HomePage({ initCat, onNav }) {
  const [cat, setCat] = useState(initCat || 'Tümü');
  useEffect(() => setCat(initCat || 'Tümü'), [initCat]);
  const list = useMemo(() => cat === 'Tümü' ? CONTENT : CONTENT.filter(c => c.category === cat), [cat]);

  return (
    <div>
      <HeaderBand onNav={onNav} />
      <CatStrip active={cat} setActive={setCat} />
      <div style={{ background: 'var(--bg)' }}>
        <BentoGrid items={list} onNav={onNav} />
      </div>
      <NewsletterBand />
      <Footer onNav={onNav} />
    </div>
  );
}
