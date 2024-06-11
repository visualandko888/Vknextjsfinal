import { useState, useEffect } from 'react';
import '/styles/headerheader.module.scss';
import NavTop2 from '/src/components/Layout/Header/NavTop2';
import NavLeft from '/src/components/Layout/Header/NavLeft';
import NavMobile from '/src/components/Layout/Header/NavMobile';
import NavTopMobile from '/src/components/Layout/Header/NavTopMobile';
import SubServices from '/src/components/Layout/Header/SubServices';
import NavBottomMobile from '/src/components/Layout/Header/NavBottomMobile';

export default function Header() {
  // Affichage du menu mobile
  const [showNavMobile, setShowNavMobile] = useState(false);
  const [windowSize, setWindowSize] = useState(0);

  const handleClickShowNavMobile = (bool) => {
    setShowNavMobile(bool);
  };

  // Hover du menu top
  const [currentNavHover, setCurrentNavHover] = useState(0);
  const handleHoverNav = (index) => {
    setCurrentNavHover(index);
  };

  useEffect(() => {
    // Code exécuté uniquement côté client
    setWindowSize(window.innerWidth);

    function handleResize() {
      setWindowSize(window.innerWidth);
      if (window.innerWidth > 900) {
        setShowNavMobile(false);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header>
      {windowSize > 1215 ? (
        <>
          <NavTop2 handleHoverNav={handleHoverNav} currentNavHover={currentNavHover} />
          <SubServices currentNavHover={currentNavHover} setCurrentNavHover={setCurrentNavHover} />
          <NavLeft />
        </>
      ) : (
        <>
          <NavTopMobile
            setShowNavMobile={setShowNavMobile}
            handleClickShowNavMobile={handleClickShowNavMobile}
          />
          <NavMobile showNavMobile={showNavMobile} setShowNavMobile={setShowNavMobile} />
          <NavBottomMobile />
        </>
      )}
    </header>
  );
}
