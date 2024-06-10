import { useEffect, useState } from 'react';
import '@assets/css/page/SEO/section3.scss';
import bgsc3 from '@assets/images/bgs3-seo.png';
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
          <img src={bgsc3} alt="UI Design" />
        </div>
      )}
      <div className="text_container">
        <h2>
          {t('seo_section3_t1', {
            defaultValue: "Raisons Stratégiques derrière l'Optimisation",
          })}
          {windowSize > 1485 ? <br /> : ' '}
          {t('seo_section3_t2', { defaultValue: 'du' })}
          {' '}
          <span>
            {t('seo_section3_t3', { defaultValue: 'Référencement SEO' })}
          </span>
        </h2>
        <h3>
          {t('seo_section3_t4', {
            defaultValue: 'Vous démarquer dans les résultats de recherche',
          })}
        </h3>
        <p>
          {t('seo_section3_t5', {
            defaultValue:
              "L'optimisation du référencement SEO repose sur des raisons stratégiques essentielles qui façonnent",
          })}
          {' '}
          <strong>
            {t('seo_section3_t6', { defaultValue: 'la réussite en ligne' })}
          </strong>
          {' '}
          {t('seo_section3_t7', {
            defaultValue:
              "d'une entreprise. En propulsant la visibilité de votre site à de nouveaux sommets",
          })}
          {showMore || windowSize > 900 ? (
            <>
              {t('seo_section3_t8', {
                defaultValue:
                  'dans les résultats de recherche, le SEO génère un',
              })}
              {' '}
              <strong>
                {t('seo_section3_t9', {
                  defaultValue: 'flux de trafic qualifié',
                })}
              </strong>
              {t('seo_section3_t10', {
                defaultValue: ', ce qui favorise les conversions.',
              })}
            </>
          ) : (
            '..'
          )}
        </p>
        {showMore
          || (windowSize > 900 && (
            <p>
              {t('seo_section3_t11', {
                defaultValue:
                  'En gagnant en autorité dans votre domaine grâce à un classement élevé,',
              })}
              {' '}
              <strong>
                {t('seo_section3_t12', {
                  defaultValue: 'votre crédibilité se renforce',
                })}
              </strong>
              {' '}
              {t('seo_section3_t13', {
                defaultValue:
                  'aux yeux des utilisateurs. Le retour sur investissement substantiel du SEO, combiné à une compétitivité renforcée, offre une opportunité stratégique.',
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
            <span>
              {showMore
                ? t('seo_section3_t14', { defaultValue: 'Masquer' })
                : t('seo_section3_t15', { defaultValue: 'Lire la suite' })}
            </span>
            <img src={showMore ? moin : plus} alt="Lire la suite" />
          </div>
        )}
        <NavHashLink to="#contact">
          <button type="button">
            {t('seo_section3_t16', { defaultValue: 'Confiez-nous votre SEO' })}
          </button>
        </NavHashLink>
      </div>
    </section>
  );
}
