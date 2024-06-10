import { useEffect, useState } from 'react';
import '@assets/css/page/SEA/section2.scss';
import bgsc2 from '@assets/images/bgs2-sea.png';
import plus from '@assets/images/plus.png';
import moin from '@assets/images/moin.png';
import { useTranslation } from 'react-i18next';
import { NavHashLink } from 'react-router-hash-link';

export default function Section2() {
  const { t } = useTranslation(); // Importation de la traduction

  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [showMore, setShowMore] = useState(false);
  const handleClickShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="section2">
      <div className="img_container">
        {windowSize > 1024 && (
          <img src={bgsc2} alt="optimisation de la publicité" />
        )}
      </div>
      <div className="text_container">
        <h2>
          <span>
            {t('sea_section2_t1', {
              defaultValue: 'Optimisation de la Publicité',
            })}
          </span>
          {' '}
          {t('sea_section2_t2', { defaultValue: 'sur moteurs' })}
          {windowSize > 1485 ? <br /> : ' '}
          {t('sea_section2_t3', { defaultValue: 'de recherche' })}
        </h2>
        <h3>
          {t('sea_section2_t4', {
            defaultValue:
              'Votre succès en Ligne grâce à notre propulsion publicitaire',
          })}
        </h3>
        <p>
          {t('sea_section2_t5', {
            defaultValue:
              "L'efficacité du Search Engine Advertising (SEA) s'avère particulièrement pertinente pour les entreprises cherchant à obtenir un",
          })}
          {' '}
          <strong>
            {t('sea_section2_t6', {
              defaultValue: 'retour sur investissement',
            })}
          </strong>
          {' '}
          {t('sea_section2_t7', { defaultValue: 'rapide.' })}
          {!showMore || (windowSize <= 900 && <>...</>)}
        </p>

        {showMore
          || (windowSize > 900 && (
            <p>
              {t('sea_section2_t8', {
                defaultValue:
                  'À travers des campagnes publicitaires rigoureusement structurées sur des plateformes telles que Google Ads, nous ciblons les utilisateurs qui sont en phase active de recherche, augmentant ainsi',
              })}
              {' '}
              <strong>
                {t('sea_section2_t9', {
                  defaultValue: 'les probabilités de conversion',
                })}
              </strong>
              .
            </p>
          ))}

        {windowSize < 1024 && (
          <div
            role="button"
            tabIndex={0}
            onKeyDown={() => handleClickShowMore()}
            onClick={() => handleClickShowMore()}
            className="show_more"
          >
            <span>{showMore ? 'Masquer' : 'Lire la suite'}</span>
            <img src={showMore ? moin : plus} alt="Lire la suite" />
          </div>
        )}
        <NavHashLink to="#contact">
          <button type="button">
            {t('sea_section2_t10', { defaultValue: 'Demandez-nous conseil' })}
          </button>
        </NavHashLink>
      </div>
    </section>
  );
}
