import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import icPlusCircle from '@assets/images/ic-plus-circle.svg';
import icSocialAds from '@assets/images/ic-social-ads.svg';
import { useTranslation } from 'react-i18next';
import leftIcoDevWeb from '@assets/images/left-ico-dev-web.svg';
import leftIcoGoogleAds from '@assets/images/left-ico-google-ads.svg';
import leftIcoCalendar from '@assets/images/left-ico-calendar.svg';

export default function NavLeft() {
  const { t } = useTranslation(); // Importation de la traduction
  const navLeftElements = [
    {
      name: 'Développement WEB',
      url: '/developpement-web',
      icon: leftIcoDevWeb,
      translate_var: 'developpement-web',
    },
    {
      name: 'Google Ads',
      url: '/google-ads',
      icon: leftIcoGoogleAds,
      translate_var: 'google-ads',
    },
    {
      name: 'Référencement Naturel',
      url: '/referencement-naturel',
      icon: icSocialAds,
      translate_var: 'referencement-naturel',
    },
    {
      name: 'Prendre rendez-vous',
      url: '#',
      icon: leftIcoCalendar,
      translate_var: 'prendre-rendez-vous',
      isCalendar: true,
    },
    {
      name: 'Demander un devis',
      modal: true,
      url: '/#contact',
      icon: icPlusCircle,
      translate_var: 'demander-un-devis',
    },
  ];

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
  }, [location.pathname]);

  const showCalendar = () => {
    // eslint-disable-next-line no-undef
    Calendly.initPopupWidget({ url: 'https://calendly.com/visualandko/30min' });
    return false;
  };
  return (
    <div
      onMouseLeave={() => handleHoverLeftNav(false)}
      className={`navLeft ${handleHoverShowNavLeft ? 'show' : 'unshow'}`}
    >
      <ul>
        {navLeftElements.map((e, index) => (
          <li
            role="button"
            tabIndex={0}
            key={index}
            onClick={e.isCalendar ? () => showCalendar(true) : null}
            onKeyDown={e.isCalendar ? () => showCalendar(true) : null}
            className={e.url === currentPage ? 'active' : null}
          >
            <NavHashLink key={index} to={`${e.url}`}>
              <img
                onMouseEnter={() => handleHoverLeftNav(true)}
                className={`faIcon br${index}`}
                alt={e.name}
                src={e.icon}
              />
              {t(`layout_navigation_${e.translate_var}`, {
                defaultValue: e.name,
              })}
            </NavHashLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
