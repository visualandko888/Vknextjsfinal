import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import '/styles/headerheader.module.scss';
import NavLeft from '/src/components/Layout/Header/NavLeft';
import NavTop2 from '/src/components/Layout/Header/NavTop2';

const NavMobile = dynamic(() => import('/src/components/Layout/Header/NavMobile'), { ssr: false });
const NavTopMobile = dynamic(() => import('/src/components/Layout/Header/NavTopMobile'), { ssr: false });
const NavBottomMobile = dynamic(() => import('/src/components/Layout/Header/NavBottomMobile'), { ssr: false });

export default function Header() {
  const [showHeaderTopNavProgress, setShowHeaderTopNavProgress] = useState(false);
  const [handleHoverShowNavLeft, setHandleHoverShowNavLeft] = useState(false);

  const handleHoverLeftNav = (bool) => {
    if (!showHeaderTopNavProgress) {
      setShowHeaderTopNavProgress(true);
      setHandleHoverShowNavLeft(bool);
      setTimeout(() => {
        setShowHeaderTopNavProgress(false);
      }, 10); // Changed '10' to 10 as the delay should be in milliseconds
    }
  };

  const [showNavMobile, setShowNavMobile] = useState(false);

  const handleClickShowNavMobile = (bool) => {
    setShowNavMobile(bool);
  };

  const [currentNavHover, setCurrentNavHover] = useState(0);
  const handleHoverNav = (index) => {
    setCurrentNavHover(index);
  };

  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
      if (window.innerWidth > 900) {
        setShowNavMobile(false);
      }
    };

    handleResize(); // Set the initial window size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header>
      {windowSize > 1215 ? (
        <>
          <NavTop2
            handleHoverNav={handleHoverNav}
            currentNavHover={currentNavHover}
            handleHoverLeftNav={handleHoverLeftNav}
          />
          <NavLeft handleHoverLeftNav={handleHoverLeftNav} handleHoverShowNavLeft={handleHoverShowNavLeft} />
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
