import logo from '/public/images/logo.svg';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function SubServices({ currentNavHover, setCurrentNavHover }) {
  const handleBackClick = () => {
    setCurrentNavHover(0);
  };

  const { t } = useTranslation(); // Importation de la traduction

  return (
    <div className={`${currentNavHover === 1 ? 'show' : 'unshow'} subServices`}>
      <div
        role="button"
        onClick={handleBackClick}
        onKeyDown={handleBackClick}
        tabIndex={0}
        className="back"
      >
        {' '}
      </div>
      <div className="left">
        <h1>
          <img src={logo} alt="logo" />
        </h1>
        <h2>
          {t('layout_navigation_nos-services', {
            defaultValue: 'NOS SERVICES',
          }).toUpperCase()}
        </h2>

        <ul>
          <li>
            <Link href="/developpement-web">
              {t('layout_navigation_developpement-web', {
                defaultValue: 'Développement Web',
              })}
            </Link>
            <ul>
              <li>
                <Link href="/developpement-web#creation">
                  {t('layout_navigation_creation-de-site', {
                    defaultValue: 'Création de site',
                  })}
                </Link>
              </li>
              <li>
                <Link href="/developpement-web#uwui">
                  {t('layout_navigation_ux', {
                    defaultValue: 'UX / UI / Web Design',
                  })}
                </Link>
              </li>
              <li>
                <Link href="/developpement-web#maintenance">
                  {t('layout_navigation_maintenance-et-securite', {
                    defaultValue: 'Maintenance et sécurité',
                  })}
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/referencement-naturel">
              {t('layout_navigation_seo', {
                defaultValue: 'SEO - Référencement Naturel',
              })}
            </Link>
          </li>
          <li>
            <Link href="/referencement-payant">
              {t('layout_navigation_sea', {
                defaultValue: 'SEA - Référencement Payant',
              })}
            </Link>
          </li>
          <li>
            <Link href="google-ads">
              {t('layout_navigation_google-ads', {
                defaultValue: 'Google Ads',
              })}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
