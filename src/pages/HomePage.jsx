import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CONTENT } from '../data/content.js';
import HeaderBand from '../components/HeaderBand.jsx';
import CatStrip from '../components/CatStrip.jsx';
import BentoGrid from '../components/BentoGrid.jsx';
import NewsletterBand from '../components/NewsletterBand.jsx';
import Footer from '../components/Footer.jsx';

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const cat = searchParams.get('cat') || 'Tümü';

  const setCat = (newCat) => {
    if (newCat === 'Tümü') {
      setSearchParams({});
    } else {
      setSearchParams({ cat: newCat });
    }
  };

  const list = useMemo(() =>
    cat === 'Tümü' ? CONTENT : CONTENT.filter(c => c.category === cat),
    [cat]
  );

  return (
    <div>
      <HeaderBand />
      <CatStrip active={cat} setActive={setCat} />
      <div style={{ background: 'var(--bg)' }}>
        <BentoGrid items={list} />
      </div>
      <NewsletterBand />
      <Footer />
    </div>
  );
}
