import { Link } from 'react-router-dom';
import { useState } from 'react';
import facebook from '@assets/images/facebook.png';
import instagram from '@assets/images/instagram.png';
import france from '@assets/images/country/france.png';
import royaumeUni from '@assets/images/country/royaume-uni.png';
import { useTranslation } from 'react-i18next';

export default function NavTop1({ setShowModal }) {
  const [showCountry, setShowCountry] = useState(false);
  const [currentCountry, setCurrentCountry] = useState(0);
  const { i18n } = useTranslation();
  const { t } = useTranslation(); // Importation de la traduction

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
  return (
    <div className="navTop1">
      <ul>
        <li>
          <Link to="https://www.facebook.com/visulaandko">
            <img alt="facebook logo" src={facebook} />
          </Link>
        </li>
        <li>
          <Link to="https://www.instagram.com/visualandko/">
            <img alt="instagram logo" src={instagram} />
          </Link>
        </li>
        <li
          role="button"
          tabIndex={0}
          onClick={() => setShowModal(true)}
          onKeyDown={() => setShowModal(true)}
        >
          <Link to="/#">
            {t('layout_navigation_prendre-rendez-vous', {
              defaultValue: 'Prendre rendez-vous',
            })}
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
  );
}
