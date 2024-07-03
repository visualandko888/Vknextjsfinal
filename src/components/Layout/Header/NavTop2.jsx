import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import logo from '/public/images/logo.svg';
import france from '/public/images/country/france.png';
import royaumeUni from '/public/images/country/royaume-uni.png';
import leftIcoCalendar from '/public/images/left-ico-calendar.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';



import { faPhone } from '@fortawesome/free-solid-svg-icons';
import styles from '/styles/navTop.module.scss';

export default function NavTop2({ handleHoverNav, handleHoverLeftNav }) {
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
      name: 'Tarifs',
      url: '/tarifs',
      // translate_var: 'demander-un-devis',
      isButton: false,
    },
    {
      name: (
        <>
          <FontAwesomeIcon className={styles.faIcontel2} icon={faPen} />
          <span className={styles.auditText}>Audit gratuit</span>
        </>
      ),
      url: '/contact',
      // translate_var: 'Audit',
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
    <div className={styles.navTop2}>
      <div className={styles.left}>
        <ul>
          <Link href="/" passHref legacyBehavior>
            <a>
              <Image alt="logo" src={logo} />
            </a>
          </Link>
          {navTopElements.map((e, index) => (
            <li
              role="button"
              tabIndex={0}
              onClick={() => index === 1 && handleHoverLeftNav(true)}
              onKeyDown={() => handleHoverNav(index)}
              key={index}
              className={`${e.url === currentPage ? styles.active : ''} ${
                e.isButton ? styles.button : ''
              }`}
            >
              <Link href={e.url} passHref legacyBehavior>
                <a>
                  {t(`layout_navigation_${e.translate_var}`, {
                    defaultValue: e.name,
                  })}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.right}>
        <ul>
          <li>
            <Link   href="/contactez-nous" passHref legacyBehavior>
              <a className={styles.navTopbutton}>
              <FontAwesomeIcon className={styles.faIcontel} icon={faPhone} style={{color: "#ffffff",}} />Contactez-nous
              </a>
            </Link>
          </li>
          <li>
            <Link href="/espace-client/login" passHref legacyBehavior>
              <a>
                <FontAwesomeIcon className={styles.faIcon} icon={faUserCircle} />
              </a>
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
          className={styles.country}
        >
          {/* <Image
            alt={`drapeau ${countryList[currentCountry].name}`}
            src={countryList[currentCountry].img}
          /> */}
          {/* {showCountry && (
            <div className={styles.subCountry}>
              {countryList.map((e, index) => (
                <div
                  key={index}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleClickChangeCountry(index)}
                  onKeyDown={() => handleClickChangeCountry(index)}
                >
                  <Image alt={`drapeau ${e.name}`} src={e.img} />
                </div>
              ))}
            </div>
          )} */}
        </div>
      </div>
      <div
        className={`${styles.fixed} ${showButtonRdv ? styles.show : styles.unshow}`}
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
