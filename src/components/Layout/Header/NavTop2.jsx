import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import logo from '/public/images/logo_blue.svg';
import france from '/public/images/country/france.png';
import royaumeUni from '/public/images/country/royaume-uni.png';
import leftIcoCalendar from '/public/images/left-ico-calendar.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';


export default function NavTop2({ handleHoverNav }) {
  const { i18n, t } = useTranslation();
  const navTopElements = [
    {
      name: "L'agence",
      url: '/',
      translate_var: 'accueil',
      isButton: false,
    },
    {
      name: 'Nos services',
      url: '/#services',
      translate_var: 'nos-services',
      isButton: false,
    },
    {
      name: 'Nos projets',
      url: '/#projects',
      translate_var: 'nos-projets',
      isButton: false,
    },
    {
      name: 'Demander un devis',
      url: '/#contact',
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

  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(router.pathname);

  useEffect(() => {
    setCurrentPage(router.pathname);
    window.scrollTo(0, 0);
  }, [router.pathname]);

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
    <div>
      <div>
        <ul>
          <li>
            <Link href="/">
              <Image alt="logo" src={logo} />
            </Link>
          </li>
          {navTopElements.map((e, index) => (
            <li
              role="button"
              tabIndex={0}
              onClick={() => handleHoverNav(index)}
              onKeyDown={() => handleHoverNav(index)}
              key={index}
              className={e.url === currentPage ? 'active' : e.isButton ? 'button' : ''}
            >
              <Link href={e.url}>
                {t(`layout_navigation_${e.translate_var}`, {
                  defaultValue: e.name,
                })}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          <li
            role="button"
            tabIndex={0}
            onKeyDown={() => showCalendar()}
            onClick={() => showCalendar()}
            className="topCalendar"
          >
            <Link href="/#">
              <FontAwesomeIcon icon={faCalendarDay} />
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
        >
          <Image
            alt={`drapeau ${countryList[currentCountry].name}`}
            src={countryList[currentCountry].img}
          />
          {showCountry && (
            <div>
              {countryList.map((e, index) => (
                <Image
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
        className={showButtonRdv ? 'show' : 'unshow'}
        role="button"
        tabIndex={0}
        onKeyDown={() => showCalendar()}
        onClick={() => showCalendar()}
      >
        <Image src={leftIcoCalendar} alt="calendar" />
        Prendre
        <br />
        RDV
      </div>
    </div>
  );
}
