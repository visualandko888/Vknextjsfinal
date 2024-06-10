import { useEffect, useState } from 'react';
import '@assets/css/page/SEO/section2.scss';
import bgsc2 from '@assets/images/bgs2-seo.png';
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
        {windowSize > 1024 && <img src={bgsc2} alt="création de site" />}
      </div>
      <div className="text_container">
        <h2>
          {t('seo_section2_t1', {
            defaultValue: 'Amélioration du référencement naturel :',
          })}
          <br />
          {t('seo_section2_t2', { defaultValue: 'illuminez' })}
          {' '}
          <span>
            {t('seo_section2_t3', { defaultValue: 'Votre Présence en Ligne' })}
          </span>
        </h2>
        <h3>
          {t('seo_section2_t4', {
            defaultValue:
              'Attirer une audience qualifiée grâce à nos solutions SEO sur mesure.',
          })}
        </h3>
        <p>
          {t('seo_section2_t5', {
            defaultValue:
              "Optimiser votre référencement naturel, c'est comme peaufiner un argumentaire percutant pour",
          })}
          {' '}
          <strong>
            {t('seo_section2_t6', {
              defaultValue: "captiver l'attention de tous.",
            })}
          </strong>
          {' '}
          {t('seo_section2_t7', {
            defaultValue: 'Le SEO agit comme un filtre puissant,',
          })}
          {' '}
          {showMore || windowSize > 900 ? (
            <>
              <span>
                {t('seo_section2_t8', {
                  defaultValue: 'amplifiant la visibilité',
                })}
              </span>
              {' '}
              {t('seo_section2_t9', {
                defaultValue:
                  'de votre site web sur des moteurs de recherche tels que Google.',
              })}
            </>
          ) : (
            <>...</>
          )}
        </p>

        {showMore
          || (windowSize > 900 && (
            <p>
              {t('seo_section2_t10', {
                defaultValue: 'Nous opérons des ajustements en coulisses -',
              })}
              {' '}
              <strong>
                {t('seo_section2_t11', {
                  defaultValue: 'sélection minutieuse de mots-clés pertinents',
                })}
              </strong>
              {t('seo_section2_t12', {
                defaultValue:
                  ", réorganisation astucieuse de la structure de votre site – afin que les moteurs de recherche le décodent aisément. Ainsi, lorsque quelqu'un recherche ce que vous proposez,",
              })}
              {' '}
              <strong>
                {t('seo_section2_t13', { defaultValue: 'votre site émerge' })}
              </strong>
              {' '}
              {t('seo_section2_t14', {
                defaultValue: 'tel un phare parmi les résultats.',
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
                ? t('seo_section2_t15', { defaultValue: 'Masquer' })
                : t('seo_section2_t16', { defaultValue: 'Lire la suite' })}
            </span>
            <img src={showMore ? moin : plus} alt="Lire la suite" />
          </div>
        )}
        <NavHashLink to="#contact">
          <button type="button">
            {t('seo_section2_t17', { defaultValue: 'Demandez-nous conseil' })}
          </button>
        </NavHashLink>
      </div>
    </section>
  );
}
