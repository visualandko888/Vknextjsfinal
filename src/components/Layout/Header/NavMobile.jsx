import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import facebook from '/public/images/facebook-w.svg';
import instagram from '/public/images/instagram-w.svg';
import { useTranslation } from 'react-i18next';

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
    <div className={`navMobile ${showNavMobile ? 'show' : 'unshow'}`}>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={() => setShowNavMobile(false)}
        onClick={() => setShowNavMobile(false)}
        className="back"
      >
        {' '}
      </div>
      <div className="right">
        <div className="top">
          <FontAwesomeIcon
            onClick={() => setShowNavMobile(false)}
            className="faIcon"
            icon={faTimes}
          />
        </div>
        <div className="middle">
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
                className={e.classes}
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
        <div className="bottom">
          <Link href="https://www.facebook.com/visulaandko" passHref legacyBehavior>
            <a>
              <img src={facebook} alt="facebook" />
            </a>
          </Link>
          <Link href="https://www.instagram.com/visualandko/" passHref legacyBehavior>
            <a>
              <img src={instagram} alt="instagram" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
