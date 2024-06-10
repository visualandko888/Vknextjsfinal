import { useState, useEffect } from 'react';
import '@assets/css/layout/header/header.scss';
import NavTop2 from './Header/NavTop2';
import NavLeft from './Header/NavLeft';
import NavMobile from './Header/NavMobile';
import NavTopMobile from './Header/NavTopMobile';
import SubServices from './Header/SubServices';
import NavBottomMobile from './Header/NavBottomMobile';

export default function Header() {
  // Affichage du menu mobile
  const [showNavMobile, setShowNavMobile] = useState(false);

  const handleClickShowNavMobile = (bool) => {
    setShowNavMobile(bool);
  };

  // Hover du menu top
  const [currentNavHover, setCurrentNavHover] = useState(0);
  const handleHoverNav = (index) => {
    setCurrentNavHover(index);
  };

  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
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
          <NavTop2
            handleHoverNav={handleHoverNav}
            currentNavHover={currentNavHover}
          />
          <SubServices
            currentNavHover={currentNavHover}
            setCurrentNavHover={setCurrentNavHover}
          />
          <NavLeft />
        </>
      ) : (
        <>
          <NavTopMobile
            setShowNavMobile={setShowNavMobile}
            handleClickShowNavMobile={handleClickShowNavMobile}
          />
          <NavMobile
            showNavMobile={showNavMobile}
            setShowNavMobile={setShowNavMobile}
          />
          <NavBottomMobile />
        </>
      )}
    </header>
  );
}
