import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import SearchOverlay from './components/SearchOverlay.jsx';
import HomePage from './pages/HomePage.jsx';
import ContentPage from './pages/ContentPage.jsx';
import SubscribePage from './pages/SubscribePage.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);

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
      <ScrollToTop />
      <Nav onSearch={() => setSearchOpen(true)} />
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/subscribe" element={<SubscribePage />} />
        <Route path="/:articleId" element={<ContentPage />} />
      </Routes>
    </>
  );
}
