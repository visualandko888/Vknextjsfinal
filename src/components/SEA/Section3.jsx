import { useEffect, useState } from 'react';
import '@assets/css/page/SEA/section3.scss';
import bgsc3 from '@assets/images/bgs3-sea.png';
import plus from '@assets/images/plus.png';
import moin from '@assets/images/moin.png';
import { useTranslation } from 'react-i18next';
import { NavHashLink } from 'react-router-hash-link';

export default function Section3() {
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
    <section className="section3">
      {windowSize > 1024 && (
        <div className="img_container">
          <img src={bgsc3} alt="Ciblage précis" />
        </div>
      )}
      <div className="text_container">
        <h2>
          <span>
            {t('sea_section3_t1', { defaultValue: 'Ciblage Précis' })}
          </span>
          {' '}
          {t('sea_section3_t2', {
            defaultValue: 'pour une maximisation du retour sur',
          })}
          <br />
          {t('sea_section3_t3', { defaultValue: 'investissement' })}
        </h2>
        <h3>
          {t('sea_section3_t4', {
            defaultValue:
              'Redéfinir la manière dont vous interagissez avec votre audience en ligne',
          })}
        </h3>
        <p>
          {t('sea_section3_t5', {
            defaultValue: "Le succès d'une campagne SEA repose sur une",
          })}
          {' '}
          <strong>
            {t('sea_section3_t6', { defaultValue: 'analyse poussée' })}
          </strong>
          {' '}
          {t('sea_section3_t7', {
            defaultValue:
              'du marché et du comportement utilisateur. En utilisant des mécanismes de ciblage avancés tels que le',
          })}
          {' '}
          <span>
            {t('sea_section3_t8', {
              defaultValue:
                'ciblage par mot-clé, géolocalisation et segmentation démographique',
            })}
          </span>
          {showMore || windowSize > 900 ? (
            <>
              {t('sea_section3_t9', {
                defaultValue:
                  ', nos stratégies assurent que votre budget publicitaire est investi de manière optimale.',
              })}
            </>
          ) : (
            '..'
          )}
        </p>
        {showMore
          || (windowSize > 900 && (
            <p>
              {t('sea_section3_t10', {
                defaultValue:
                  'Nos experts en SEA ajustent en permanence vos campagnes pour',
              })}
              {' '}
              <strong>
                {t('sea_section3_t11', {
                  defaultValue: 'maximiser votre visibilité',
                })}
              </strong>
              {t('sea_section3_t12', {
                defaultValue:
                  ', tout en optimisant les enchères et les mots-clés pour vous offrir un',
              })}
              {' '}
              <strong>
                {t('sea_section3_t13', {
                  defaultValue: 'avantage concurrentiel',
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
            {t('sea_section3_t14', { defaultValue: 'Ciblez votre audience' })}
          </button>
        </NavHashLink>
      </div>
    </section>
  );
}
