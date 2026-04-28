import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CONTENT } from '../data/content.js';
import { slugToLabel } from '../data/categories.js';
import HeaderBand from '../components/HeaderBand.jsx';
import CatStrip from '../components/CatStrip.jsx';
import BentoGrid from '../components/BentoGrid.jsx';
import NewsletterBand from '../components/NewsletterBand.jsx';
import Footer from '../components/Footer.jsx';

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const catSlug = searchParams.get('cat') || '';

  const setCat = (slug) => {
    if (!slug) {
      setSearchParams({});
    } else {
      setSearchParams({ cat: slug });
    }
  };

  const list = useMemo(() => {
    if (!catSlug) return CONTENT;
    const label = slugToLabel(catSlug);
    return label ? CONTENT.filter(c => c.category === label) : CONTENT;
  }, [catSlug]);

  return (
    <div>
      <HeaderBand />
      <CatStrip active={catSlug} setActive={setCat} />
      <div style={{ background: 'var(--bg)' }}>
        <BentoGrid items={list} />
      </div>
      <NewsletterBand />
      <Footer />
    </div>
  );
}
