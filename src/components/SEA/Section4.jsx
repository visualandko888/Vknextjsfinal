import { useEffect, useState } from 'react';
import '@assets/css/page/SEA/section4.scss';
import bgsc4 from '@assets/images/bgs4-sea.png';
import plus from '@assets/images/plus.png';
import moin from '@assets/images/moin.png';
import { useTranslation } from 'react-i18next';
import { NavHashLink } from 'react-router-hash-link';

export default function Section4() {
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
    <section className="section4">
      <div className="img_container">
        {windowSize > 1024 && <img src={bgsc4} alt="Analyse de performances" />}
      </div>
      <div className="text_container">
        <h2>
          {t('sea_section4_t1', { defaultValue: 'Analyse de performance et' })}
          {' '}
          <span>
            {t('sea_section4_t2', { defaultValue: 'Ajustements Continus' })}
          </span>
        </h2>
        <h3>
          {t('sea_section4_t3', {
            defaultValue: 'Nous faisons évoluer vos campagnes pour suivre les',
          })}
          {' '}
          <br />
          {' '}
          {t('sea_section4_t4', { defaultValue: 'tendances émergentes' })}
        </h3>
        <p>
          {t('sea_section4_t5', {
            defaultValue:
              "L'efficacité d'une campagne SEA se mesure à travers des",
          })}
          {' '}
          <strong>
            {t('sea_section4_t6', {
              defaultValue: 'indicateurs clés de performance',
            })}
          </strong>
          {' '}
          {t('sea_section4_t7', {
            defaultValue:
              '(KPIs) précis. Nous évaluons continuellement les données relatives aux taux de clics, coût par clic, et taux de conversion',
          })}
          {showMore || windowSize > 900 ? (
            <>
              {' '}
              {t('sea_section4_t8', { defaultValue: 'pour apporter des' })}
              {' '}
              <strong>
                {t('sea_section4_t9', {
                  defaultValue: 'ajustements stratégiques',
                })}
              </strong>
              {' '}
              {t('sea_section4_t10', { defaultValue: 'en temps réel.' })}
            </>
          ) : (
            '...'
          )}
        </p>
        {showMore
          || (windowSize > 900 && (
            <p>
              {t('sea_section4_t11', {
                defaultValue:
                  'Cette approche factuelle garantit non seulement une transparence totale, mais également une',
              })}
              {' '}
              <span>
                {t('sea_section4_t12', {
                  defaultValue: 'optimisation constante',
                })}
              </span>
              {' '}
              {t('sea_section4_t13', {
                defaultValue: 'du retour sur investissement.',
              })}
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
            {t('sea_section4_t14', { defaultValue: 'Ajustez votre stratégie' })}
          </button>
        </NavHashLink>
      </div>
      <div className="clear" />
    </section>
  );
}
