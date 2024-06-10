import { useEffect, useState } from 'react';
import '@assets/css/page/SEO/section4.scss';
import bgsc4 from '@assets/images/bgs4-seo.png';
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
        {windowSize > 1024 && <img src={bgsc4} alt="maintenance et sécurité" />}
      </div>
      <div className="text_container">
        <h2>
          {t('seo_section4_t1', {
            defaultValue: "Les critères de reconnaissance d'une",
          })}
          {' '}
          <br />
          <span>
            {t('seo_section4_t2', { defaultValue: 'Agence SEO Performante' })}
          </span>
        </h2>
        <h3>
          {t('seo_section4_t3', {
            defaultValue:
              'Des critères clés répondant aux besoins de nos clients',
          })}
        </h3>
        <p>
          {t('seo_section4_t4', { defaultValue: 'Une expérience solide, une' })}
          {' '}
          <strong>
            {t('seo_section4_t5', {
              defaultValue: 'adaptation agile aux tendances',
            })}
          </strong>
          {t('seo_section4_t6', {
            defaultValue:
              ", ainsi qu'une personnalisation des stratégies sont des signes distinctifs. La transparence, la génération de",
          })}
          <strong>
            {' '}
            {t('seo_section4_t7', { defaultValue: 'trafic organique' })}
          </strong>
          {' '}
          {t('seo_section4_t8', { defaultValue: 'et' })}
          {showMore || windowSize > 900 ? (
            <>
              {t('seo_section4_t9', {
                defaultValue:
                  "l'amélioration du classement renforcent la reconnaissance d'une telle agence.",
              })}
            </>
          ) : (
            '...'
          )}
        </p>
        {showMore
          || (windowSize > 900 && (
            <p>
              {t('seo_section4_t1', {
                defaultValue:
                  'Une agence SEO performante se démarque par une expérience étendue et une connaissance approfondie du domaine. Elle façonne des',
              })}
              {' '}
              <strong>
                {t('seo_section4_t11', {
                  defaultValue: 'stratégies sur mesure',
                })}
              </strong>
              {t('seo_section4_t12', {
                defaultValue: ", s'adapte aux évolutions et maintient une",
              })}
              <strong>
                {' '}
                {t('seo_section4_t13', { defaultValue: 'transparence totale' })}
              </strong>
              {t('seo_section4_t14', {
                defaultValue:
                  ', tout en générant des résultats tangibles en matière de trafic et de visibilité en ligne.',
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
                ? t('seo_section4_t15', { defaultValue: 'Masquer' })
                : t('seo_section4_t16', { defaultValue: 'Lire la suite' })}
            </span>
            <img src={showMore ? moin : plus} alt="Lire la suite" />
          </div>
        )}
        <NavHashLink to="#contact">
          <button type="button">
            {t('seo_section4_t17', {
              defaultValue: 'Assurez votre tranquilité',
            })}
          </button>
        </NavHashLink>
      </div>
      <div className="clear" />
    </section>
  );
}
