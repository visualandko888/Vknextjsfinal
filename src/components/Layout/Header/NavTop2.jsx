import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import logo from '/public/images/logo-blue.svg';
import france from '/public/images/country/france.png';
import royaumeUni from '/public/images/country/royaume-uni.png';
import leftIcoCalendar from '/public/images/left-ico-calendar.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faPhone, faChevronRight } from '@fortawesome/free-solid-svg-icons';
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
      name: (
        <>
          <Image alt="logo" src={logo} />
        </>
      ),
      url: '/',
      isButton: true,
    },
    {
      name: 'Nos projets',
      url: '#projects',
      translate_var: 'nos-projets',
      isButton: false,
    },
    {
      name: 'Tarifs',
      url: '/tarifs',
      isButton: false,
    },
  ];

  const [showCountry, setShowCountry] = useState(false);
  const [currentCountry, setCurrentCountry] = useState(0);
  const [showButtonRdv, setShowButtonRdv] = useState(false);
  const [showServicesSubMenu, setShowServicesSubMenu] = useState(false);
  const [showTarifsSubMenu, setShowTarifsSubMenu] = useState(false);

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
          {navTopElements.map((e, index) => (
            <li
              key={index}
              className={`${e.url === currentPage ? styles.active : ''} ${e.isButton ? styles.button : ''}`}
              onMouseEnter={() => {
                if (index === 1) setShowServicesSubMenu(true);
                if (index === 4) setShowTarifsSubMenu(false);
              }}
              onMouseLeave={() => {
                if (index === 1) setShowServicesSubMenu(false);
                if (index === 4) setShowTarifsSubMenu(false);
              }}
            >
              <Link href={e.url} legacyBehavior passHref>
                <a>
                  {t(`layout_navigation_${e.translate_var}`, {
                    defaultValue: e.name,
                  })}
                </a>
              </Link>
              {index === 1 && showServicesSubMenu && (
                <div
                  className={styles.subMenuContainer}
                  onMouseEnter={() => setShowServicesSubMenu(true)}
                  onMouseLeave={() => setShowServicesSubMenu(false)}
                >
                  <ul className={styles.subMenu}>
                    <div className={styles.subMenuc1}>
                      <h2>Création de Sites internet</h2>

                      <li>
                        <Link href="/tarif2" legacyBehavior passHref>
                          <a>
                            <FontAwesomeIcon className={styles.subMenuIcon} icon={faChevronRight} />
                            Création de site vitrine
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/tarif2" legacyBehavior passHref>
                          <a>
                            <FontAwesomeIcon className={styles.subMenuIcon} icon={faChevronRight} />
                            Création de site e-commerce
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/tarif2" legacyBehavior passHref>
                          <a>
                            <FontAwesomeIcon className={styles.subMenuIcon} icon={faChevronRight} />
                            Refonte de votre site
                          </a>
                        </Link>
                      </li>


                    </div>

                    <div className={styles.subMenuc1}>
                      <h2>Référencement naturel</h2>

                      <li>
                        <Link href="/tarif2" legacyBehavior passHref>
                          <a>
                            <FontAwesomeIcon className={styles.subMenuIcon} icon={faChevronRight} />
                            Référencement naturel
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/tarif2" legacyBehavior passHref>
                          <a>
                            <FontAwesomeIcon className={styles.subMenuIcon} icon={faChevronRight} />
                            Référencement naturel
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/tarif2" legacyBehavior passHref>
                          <a>
                            <FontAwesomeIcon className={styles.subMenuIcon} icon={faChevronRight} />
                            Référencement naturel
                          </a>
                        </Link>
                      </li>


                    </div>
                    <div className={styles.subMenuc1}>
                      <h2>Gestion google ADS</h2>

                      <li>
                        <Link href="/tarif2" legacyBehavior passHref>
                          <a>
                            <FontAwesomeIcon className={styles.subMenuIcon} icon={faChevronRight} />
                            Référencement naturel
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/tarif2" legacyBehavior passHref>
                          <a>
                            <FontAwesomeIcon className={styles.subMenuIcon} icon={faChevronRight} />
                            Référencement naturel
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/tarif2" legacyBehavior passHref>
                          <a>
                            <FontAwesomeIcon className={styles.subMenuIcon} icon={faChevronRight} />
                            Référencement naturel
                          </a>
                        </Link>
                      </li>


                    </div>
                    <div className={styles.subMenuc1}>
                      <h2>Maintenance et sécurité</h2>

                      <li>
                        <Link href="/tarif2" legacyBehavior passHref>
                          <a>
                            <FontAwesomeIcon className={styles.subMenuIcon} icon={faChevronRight} />
                            Référencement naturel
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/tarif2" legacyBehavior passHref>
                          <a>
                            <FontAwesomeIcon className={styles.subMenuIcon} icon={faChevronRight} />
                            Référencement naturel
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/tarif2" legacyBehavior passHref>
                          <a>
                            <FontAwesomeIcon className={styles.subMenuIcon} icon={faChevronRight} />
                            Référencement naturel
                          </a>
                        </Link>
                      </li>


                    </div>
                  </ul>
                </div>
              )}
              {index === 4 && showTarifsSubMenu && (
                <div
                  className={styles.subMenuContainer}
                  onMouseEnter={() => setShowTarifsSubMenu(true)}
                  onMouseLeave={() => setShowTarifsSubMenu(false)}
                >
                  <ul className={styles.subMenu}>
                  <div className={styles.subMenuc1}>
                      <h2>Création de Sites internet</h2>

                      <li>
                        <Link href="/tarif2" legacyBehavior passHref>
                          <a>
                            <FontAwesomeIcon className={styles.subMenuIcon} icon={faChevronRight} />
                            Création de site vitrine
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/tarif2" legacyBehavior passHref>
                          <a>
                            <FontAwesomeIcon className={styles.subMenuIcon} icon={faChevronRight} />
                            Création de site e-commerce
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/tarif2" legacyBehavior passHref>
                          <a>
                            <FontAwesomeIcon className={styles.subMenuIcon} icon={faChevronRight} />
                            Refonte de votre site
                          </a>
                        </Link>
                      </li>


                    </div>

                    <div className={styles.subMenuc1}>
                      <h2>Référencement naturel</h2>

                      <li>
                        <Link href="/tarif2" legacyBehavior passHref>
                          <a>
                            <FontAwesomeIcon className={styles.subMenuIcon} icon={faChevronRight} />
                            Référencement naturel
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/tarif2" legacyBehavior passHref>
                          <a>
                            <FontAwesomeIcon className={styles.subMenuIcon} icon={faChevronRight} />
                            Référencement naturel
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/tarif2" legacyBehavior passHref>
                          <a>
                            <FontAwesomeIcon className={styles.subMenuIcon} icon={faChevronRight} />
                            Référencement naturel
                          </a>
                        </Link>
                      </li>


                    </div>
                    <div className={styles.subMenuc1}>
                      <h2>Gestion google ADS</h2>

                      <li>
                        <Link href="/tarif2" legacyBehavior passHref>
                          <a>
                            <FontAwesomeIcon className={styles.subMenuIcon} icon={faChevronRight} />
                            Référencement naturel
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/tarif2" legacyBehavior passHref>
                          <a>
                            <FontAwesomeIcon className={styles.subMenuIcon} icon={faChevronRight} />
                            Référencement naturel
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/tarif2" legacyBehavior passHref>
                          <a>
                            <FontAwesomeIcon className={styles.subMenuIcon} icon={faChevronRight} />
                            Référencement naturel
                          </a>
                        </Link>
                      </li>


                    </div>
                    <div className={styles.subMenuc1}>
                      <h2>Maintenance et sécurité</h2>

                      <li>
                        <Link href="/tarif2" legacyBehavior passHref>
                          <a>
                            <FontAwesomeIcon className={styles.subMenuIcon} icon={faChevronRight} />
                            Référencement naturel
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/tarif2" legacyBehavior passHref>
                          <a>
                            <FontAwesomeIcon className={styles.subMenuIcon} icon={faChevronRight} />
                            Référencement naturel
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/tarif2" legacyBehavior passHref>
                          <a>
                            <FontAwesomeIcon className={styles.subMenuIcon} icon={faChevronRight} />
                            Référencement naturel
                          </a>
                        </Link>
                      </li>


                    </div>
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.right}>
        <ul>
          <li>
            <Link href="/contactez-nous" legacyBehavior passHref>
              <a className={styles.navTopbutton}>
                <FontAwesomeIcon className={styles.faIcontel} icon={faPhone} style={{ color: '#ffffff' }} />Contactez-nous
              </a>
            </Link>
          </li>
          <li>
            <Link href="/espace-client/login" legacyBehavior passHref>
              <a className={styles.login}>
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
