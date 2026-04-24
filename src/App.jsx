import { useState, useEffect, useCallback } from 'react';
import Nav from './components/Nav.jsx';
import SearchOverlay from './components/SearchOverlay.jsx';
import HomePage from './pages/HomePage.jsx';
import ContentPage from './pages/ContentPage.jsx';
import SubscribePage from './pages/SubscribePage.jsx';

export default function App() {
  const [page, setPage] = useState('home');
  const [contentId, setContentId] = useState(null);
  const [homeCat, setHomeCat] = useState('Tümü');
  const [searchOpen, setSearchOpen] = useState(false);

  const onNav = useCallback((target, id, q, cat) => {
    setPage(target);
    setContentId(id || null);
    if (cat !== undefined) setHomeCat(cat);
    setSearchOpen(false);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fn = e => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setSearchOpen(v => !v); }
      if (e.key === 'Escape') setSearchOpen(false);
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, []);

  return (
    <>
      <Nav onNav={onNav} onSearch={() => setSearchOpen(true)} />
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} onNav={onNav} />}
      {page === 'home' && <HomePage initCat={homeCat} onNav={onNav} />}
      {page === 'content' && contentId && <ContentPage itemId={contentId} onNav={onNav} />}
      {page === 'subscribe' && <SubscribePage onNav={onNav} />}
    </>
  );
}
