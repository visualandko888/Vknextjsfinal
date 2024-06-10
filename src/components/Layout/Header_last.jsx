import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '@assets/images/logo.svg';
import logoDark from '@assets/images/logo-dark.svg';
import '@assets/css/layout/header/header2.scss';
import icPlusCircle from '@assets/images/ic-plus-circle.svg';
import icSocialAds from '@assets/images/ic-social-ads.svg';
import icWebUnivers from '@assets/images/ic-web-univers.svg';
import icLeads from '@assets/images/ic-leads.svg';

export default function Header({ setShowModal }) {
  const [showHeaderTopNav, setShowHeaderTopNav] = useState(false);
  const [showHeaderTopNavProgress, setShowHeaderTopNavProgress] = useState(false);
  const [handleHoverShowNavLeft, setHandleHoverShowNavLeft] = useState(false);
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);

  const handleHoverLeftNav = (bool) => {
    if (!showHeaderTopNavProgress) {
      setShowHeaderTopNavProgress(true);
      setHandleHoverShowNavLeft(bool);
      setTimeout(() => {
        setShowHeaderTopNavProgress(false);
      }, '10');
    }
  };

  useEffect(() => {
    setCurrentPage(location.pathname);
    window.scrollTo(0, 0);
    setShowHeaderTopNav(false);
  }, [location.pathname]);

  const navTopElements = [
    {
      name: 'Accueil',
      url: '/',
    },
    {
      name: 'Nos services',
      url: '/#services',
    },
    {
      name: 'Nos projets',
      url: '/#projects',
    },
    {
      name: 'Contact',
      modal: true,
      url: '#',
    },
  ];

  const navLeftElements = [
    {
      name: 'Social ADS',
      url: '/service-ads',
      icon: icSocialAds,
    },
    {
      name: 'Univers Web',
      url: '/web-univers',
      icon: icWebUnivers,
    },
    {
      name: 'Génération de leads',
      url: '/leads',
      icon: icLeads,
    },
    {
      name: 'Demander un devis',
      modal: true,
      url: '#',
      icon: icPlusCircle,
    },
  ];
  return (
    <header className="header-top">
      <div className="top-responsive">
        <Link to="/">
          <img alt="logo" src={logo} />
        </Link>
        <FontAwesomeIcon
          className="faIcon"
          onClick={() => setShowHeaderTopNav(true)}
          icon={faBars}
        />
      </div>
      <nav className={showHeaderTopNav ? 'show' : 'unshow'}>
        <div className="top">
          <div className="close">
            <div>
              <Link to="/">
                <img alt="logo" src={logoDark} />
              </Link>
              <h2>Navigation</h2>
            </div>
            <FontAwesomeIcon
              className="faIcon"
              onClick={() => setShowHeaderTopNav(false)}
              icon={faTimes}
            />
          </div>
          <ul>
            {navTopElements.map((e, index) => (
              <>
                {index === navTopElements.length / 2 ? (
                  <Link to="/">
                    <img alt="logo" src={logo} />
                  </Link>
                ) : (
                  false
                )}
                <li
                  role="button"
                  tabindex={0}
                  key={index}
                  className={e.url === currentPage ? 'active' : null}
                  onClick={
                    e.modal
                      ? () => {
                        setShowModal(true);
                        setShowHeaderTopNav(false);
                      }
                      : () => setShowHeaderTopNav(false)
                  }
                  onKeyDown={
                    e.modal
                      ? () => {
                        setShowModal(true);
                        setShowHeaderTopNav(false);
                      }
                      : () => setShowHeaderTopNav(false)
                  }
                >
                  <NavHashLink to={`${e.url}`}>{e.name}</NavHashLink>
                </li>
              </>
            ))}
          </ul>
        </div>
        <div
          onMouseLeave={() => handleHoverLeftNav(false)}
          className={`left ${handleHoverShowNavLeft ? 'show' : 'unshow'}`}
        >
          <ul>
            {navLeftElements.map((e, index) => (
              <li
                role="button"
                tabindex={0}
                key={index}
                onClick={e.modal ? () => setShowModal(true) : null}
                onKeyDown={e.modal ? () => setShowModal(true) : null}
                className={e.url === currentPage ? 'active' : null}
              >
                <Link key={index} to={`${e.url}`}>
                  <img
                    onMouseEnter={() => handleHoverLeftNav(true)}
                    className="faIcon"
                    alt={e.name}
                    src={e.icon}
                  />
                  {e.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`navBgDark ${handleHoverShowNavLeft ? 'show' : 'unshow'}`}
        />
      </nav>
    </header>
  );
}
