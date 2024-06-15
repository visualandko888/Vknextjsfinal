import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import facebook from '/public/images/facebook-w.svg';
import instagram from '/public/images/instagram-w.svg';
import { useTranslation } from 'react-i18next';
import styles from '/styles/navmobile.module.scss';

export default function NavMobile({ showNavMobile, setShowNavMobile }) {
  const { t } = useTranslation(); // Importation de la traduction
  const navArr = [
    {
      name: "L'Agence",
      href: '/',
      classes: '',
      translate_var: 'accueil',
    },
    {
      name: 'Nos Services',
      href: '/#services',
      classes: '',
      translate_var: 'nos-services',
    },
    {
      name: 'Nos Projets',
      href: '/#projects',
      classes: '',
      translate_var: 'nos-projets',
    },
    {
      name: 'Demander un devis',
      href: '/#contacts',
      classes: 'small',
      translate_var: 'demander-un-devis',
    },
    {
      name: 'Prendre rendez-vous',
      href: '#',
      classes: 'small',
      isCalendar: true,
      translate_var: 'prendre-rendez-vous',
    },
  ];

  const showCalendar = () => {
    // eslint-disable-next-line no-undef
    Calendly.initPopupWidget({ url: 'https://calendly.com/visualandko/30min' });
    return false;
  };

  return (
    <div className={`${styles.navMobile} ${showNavMobile ? styles.show : styles.unshow}`}>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={() => setShowNavMobile(false)}
        onClick={() => setShowNavMobile(false)}
        className={styles.back}
      >
        {' '}
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          <FontAwesomeIcon
            onClick={() => setShowNavMobile(false)}
            className={styles.faIcon}
            icon={faTimes}
          />
        </div>
        <div className={styles.center}>
          <ul>
            {navArr.map((e, index) => (
              <li
                key={index}
                role="button"
                tabIndex={0}
                onKeyDown={() => {
                  setShowNavMobile(false);
                  if (e.isCalendar) {
                    showCalendar();
                  }
                }}
                onClick={() => {
                  setShowNavMobile(false);
                  if (e.isCalendar) {
                    showCalendar();
                  }
                }}
                className={styles[e.classes]}
              >
                <Link href={e.href} passHref legacyBehavior>
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
        <div className={styles.bottom}>
          <Link href="https://www.facebook.com/visulaandko" passHref legacyBehavior>
            <a>
              <Image src={facebook} alt="facebook" width={30} height={30} />
            </a>
          </Link>
          <Link href="https://www.instagram.com/visualandko/" passHref legacyBehavior>
            <a>
              <Image src={instagram} alt="instagram" width={30} height={30} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
