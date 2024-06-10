import { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import webUnivers from '@assets/lottie/webUnivers.json';
import webSite2 from '@assets/lottie/website2.json';
import webSite from '@assets/lottie/webSite.json';
import prospect from '@assets/lottie/prospect.json';
import social_avance from '@assets/lottie/social_avance.json';
import social_essentiel from '@assets/lottie/social_essentiel.json';
import social_premium from '@assets/lottie/social_premium.json';
import leads_energie from '@assets/lottie/leads_energie.json';
import leads_assurance from '@assets/lottie/leads_assurance.json';
import leads_finance from '@assets/lottie/leads_finance.json';
import leads_education from '@assets/lottie/leads_education.json';
import leads_immobilier from '@assets/lottie/leads_immobilier.json';
import socialNetworks from '@assets/lottie/socialNetworks.json';
import crm from '@assets/lottie/crm.json';
import maintenance from '@assets/lottie/maintenance.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';

export default function SubNavTop({ setCurrentNavHover }) {
  const { t } = useTranslation(); // Importation de la traduction
  const serviceListNav = [
    {
      name: 'Univers Web',
      img: webSite,
      url: 'web-univers',
      translate_var: 'univers-web',
      sub: [
        {
          name: 'Développement WEB',
          img: webSite2,
          url: 'web-univers#item1',
          translate_var: 'developpement-web',
        },
        {
          name: 'Référencement',
          img: webUnivers,
          w: 'w1',
          url: 'web-univers#item3',
          translate_var: 'referencement',
        },
        {
          name: 'Maintenance & Sécurité',
          img: maintenance,
          w: 'w2',
          url: 'web-univers#item5',
          translate_var: 'maintenance-&-securite',
        },
        {
          name: 'CRM',
          img: crm,
          w: 'w3',
          url: 'web-univers#item7',
          translate_var: 'crm',
        },
      ],
    },
    {
      name: 'Social ADS',
      img: socialNetworks,
      url: 'service-ads',
      translate_var: 'social-ads',
      sub: [
        {
          name: 'Package "Essentiel"',
          url: 'service-ads#tarifs',
          img: social_essentiel,
          translate_var: 'package-essentiel',
        },
        {
          name: 'Package "Avancé"',
          url: 'service-ads#tarifs',
          img: social_avance,
          translate_var: 'package-avance',
        },
        {
          name: 'Package "Premium"',
          url: 'service-ads#tarifs',
          img: social_premium,
          translate_var: 'package-premium',
        },
      ],
    },
    {
      name: 'Génération de LEADS',
      img: prospect,
      url: 'leads',
      translate_var: 'generation-de-leads',
      sub: [
        {
          name: 'Énergies renouvelables',
          url: 'leads#industries',
          img: leads_energie,
          translate_var: 'energies-renouvelables',
        },
        {
          name: 'Finance',
          url: 'leads#industries',
          img: leads_finance,
          translate_var: 'finance',
        },
        {
          name: 'Assurance',
          url: 'leads#industries',
          img: leads_assurance,
          translate_var: 'assurance',
        },
        {
          name: 'Immobilier',
          url: 'leads#industries',
          img: leads_immobilier,
          translate_var: 'immobilier',
        },
        {
          name: 'Éducation',
          url: 'leads#industries',
          img: leads_education,
          translate_var: 'education',
        },
      ],
    },
  ];
  const [currentSubNavHover, setCurrentSubNavHover] = useState(0);
  const [currentSubNav2Hover, setCurrentNav2Hover] = useState(0);
  const handleHoverSubNav = (index) => {
    setCurrentSubNavHover(index);
    setCurrentNav2Hover(0);
  };
  const handleHoverSubNav2 = (index) => {
    setCurrentNav2Hover(index);
  };
  return (
    <div onMouseLeave={() => setCurrentNavHover(0)} className="subnavtop">
      <ul>
        {serviceListNav.map((e, index) => (
          <li
            className={`${currentSubNavHover === index && 'active'}`}
            onMouseEnter={() => handleHoverSubNav(index)}
          >
            <Link to={e.url}>
              {currentSubNavHover === index && (
                <FontAwesomeIcon className="faIcon" icon={faArrowRight} />
              )}
              {t(`layout_navigation_${e.translate_var}`, {
                defaultValue: e.name,
              })}
            </Link>
          </li>
        ))}
      </ul>
      <ul>
        {serviceListNav[currentSubNavHover].sub.map((e, index) => (
          <li
            className={`${currentSubNav2Hover === index && 'active'}`}
            onMouseEnter={() => handleHoverSubNav2(index)}
          >
            <NavHashLink to={e.url}>
              {currentSubNav2Hover === index && (
                <FontAwesomeIcon className="faIcon" icon={faArrowRight} />
              )}
              {t(`layout_navigation_${e.translate_var}`, {
                defaultValue: e.name,
              })}
            </NavHashLink>
          </li>
        ))}
      </ul>
      <ul>
        <Player
          className={`lottie ${
            serviceListNav[currentSubNavHover].w
            && serviceListNav[currentSubNavHover].w
          } ${
            serviceListNav[currentSubNavHover].sub[currentSubNav2Hover].w
            && serviceListNav[currentSubNavHover].sub[currentSubNav2Hover].w
          }`}
          autoplay
          loop
          src={serviceListNav[currentSubNavHover].sub[currentSubNav2Hover].img}
        />
      </ul>
    </div>
  );
}
