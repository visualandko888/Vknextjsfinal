import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@assets/images/logo_blue.svg';
import { useTranslation } from 'react-i18next';
import france from '@assets/images/country/france.png';
import royaumeUni from '@assets/images/country/royaume-uni.png';
import { NavHashLink } from 'react-router-hash-link';
import leftIcoCalendar from '@assets/images/left-ico-calendar.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';

export default function NavTop2({ handleHoverNav }) {
  const { i18n } = useTranslation();
  const { t } = useTranslation(); // Importation de la traduction
  const navTopElements = [
    {
      name: "L'agence",
      url: '/',
      translate_var: 'accueil',
      isButton: false,
    },
    {
      name: 'Nos services',
      url: '/home#services',
      translate_var: 'nos-services',
      isButton: false,
    },
    {
      name: 'Nos projets',
      url: '/home#projects',
      translate_var: 'nos-projets',
      isButton: false,
    },
    {
      name: 'Demander un devis',
      url: '/home#contact',
      translate_var: 'demander-un-devis',
      isButton: true,
    },
  ];

  const [showCountry, setShowCountry] = useState(false);
  const [currentCountry, setCurrentCountry] = useState(0);
  const [showButtonRdv, setShowButtonRdv] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowButtonRdv(true);
    }, 3000);
  }, []);
  const countryList = [
    {
      name: 'France',
      tag: 'fr',
      img: france,
    },
    {
      name: 'English',
      tag: 'en',
      img: royaumeUni,
    },
  ];

  const handleHoverCountry = () => {
    setShowCountry(!showCountry);
  };

  const handleClickCountry = () => {
    setShowCountry(!showCountry);
  };

  const handleClickChangeCountry = (index) => {
    setCurrentCountry(index);
    i18n.changeLanguage(countryList[index].tag);
  };

  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);

  useEffect(() => {
    setCurrentPage(location.pathname);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (currentPage === '/') {
      window.scrollTo(0, 0);
    }
  }, [currentPage]);
  const showCalendar = () => {
    // eslint-disable-next-line no-undef
    Calendly.initPopupWidget({ url: 'https://calendly.com/visualandko/30min' });
    return false;
  };
  return (
    <div className="navTop2">
      <div className="left">
        <ul>
          <Link to="/">
            <img alt="logo" src={logo} />
          </Link>
          {navTopElements.map((e, index) => (
            <li
              role="button"
              tabIndex={0}
              onClick={() => handleHoverNav(index)}
              onKeyDown={() => handleHoverNav(index)}
              key={index}
              className={`${e.url === currentPage ? 'active' : null} ${
                e.isButton ? 'button' : ''
              }`}
            >
              <NavHashLink to={e.url}>
                {t(`layout_navigation_${e.translate_var}`, {
                  defaultValue: e.name,
                })}
              </NavHashLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="right">
        <ul>
          {/* <li>
            <Link to="https://www.facebook.com/visulaandko">
              <img alt="facebook logo" src={facebooksvg} />
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/visualandko/">
              <img alt="instagram logo" src={instagramsvg} />
            </Link>
          </li> */}
          <li
            role="button"
            tabIndex={0}
            onKeyDown={() => showCalendar()}
            onClick={() => showCalendar()}
            className="topCalendar"
          >
            <Link to="/#">
              <FontAwesomeIcon className="faIcon" icon={faCalendarDay} />
              <span>
                {t('layout_navigation_prendre-rendez-vous', {
                  defaultValue: 'Prendre rendez-vous',
                })}
              </span>
            </Link>
          </li>
        </ul>
        <div
          role="button"
          tabIndex={0}
          onClick={() => handleClickCountry()}
          onKeyDown={() => handleClickCountry()}
          onMouseEnter={() => handleHoverCountry()}
          onMouseLeave={() => handleHoverCountry()}
          className="country"
        >
          <img
            alt={`drapeau ${countryList[currentCountry].name}`}
            src={countryList[currentCountry].img}
          />
          {showCountry && (
            <div className="subCountry">
              {countryList.map((e, index) => (
                <img
                  role="button"
                  tabIndex={0}
                  onClick={() => handleClickChangeCountry(index)}
                  onKeyDown={() => handleClickChangeCountry(index)}
                  alt={`drapeau ${e.name}`}
                  src={e.img}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <div
        className={` fixed ${showButtonRdv ? 'show' : 'unshow'}`}
        role="button"
        tabIndex={0}
        onKeyDown={() => showCalendar()}
        onClick={() => showCalendar()}
      >
        <img src={leftIcoCalendar} alt="calendar" />
        Prendre
        <br />
        RDV
      </div>
    </div>
  );
}
