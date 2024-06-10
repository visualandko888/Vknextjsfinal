import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import facebook from '@assets/images/facebook-w.svg';
import instagram from '@assets/images/instagram-w.svg';
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
            {navArr.map((e) => (
              <li
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
                <NavHashLink to={e.href}>
                  {t(`layout_navigation_${e.translate_var}`, {
                    defaultValue: e.name,
                  })}
                </NavHashLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="bottom">
          <Link to="ttps://www.facebook.com/visulaandko">
            <img src={facebook} alt="facebook" />
          </Link>
          <Link to="ttps://www.instagram.com/visualandko/">
            <img src={instagram} alt="instagram" />
          </Link>
        </div>
      </div>
    </div>
  );
}
