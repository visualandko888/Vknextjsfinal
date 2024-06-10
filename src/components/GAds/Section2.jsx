import { useEffect, useState } from 'react';
import '@assets/css/page/gads/section2.scss';
import bgsc2 from '@assets/images/bgs2-googleads.png';
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
        {windowSize > 1024 && <img src={bgsc2} alt="google-ads" />}
      </div>
      <div className="text_container">
        <h2>
          {t('gads_section2_t1', { defaultValue: 'Aligner la' })}
          {' '}
          <span>
            {t('gads_section2_t2', { defaultValue: 'Puissance de Google Ads' })}
          </span>
          {' '}
          {windowSize > 415 && windowSize < 600 ? <br /> : ' '}
          {t('gads_section2_t3', { defaultValue: 'avec' })}
          {windowSize > 700 ? <br /> : ' '}
          {t('gads_section2_t4', { defaultValue: 'un site web optimisé' })}
        </h2>
        <h3>
          {t('gads_section2_t5', {
            defaultValue: 'Catalysez vos conversions avec Google Ads',
          })}
        </h3>
        <p>
          {t('gads_section2_t6', {
            defaultValue:
              'Imaginez Google Ads comme un mégaphone géant pour votre entreprise, atteignant des',
          })}
          {' '}
          <span>
            {t('gads_section2_t7', {
              defaultValue: 'milliers de personnes potentiellement intéressées',
            })}
          </span>
          {' '}
          {t('gads_section2_t8', { defaultValue: 'par ce que vous offrez.' })}
          {' '}
          {showMore || windowSize > 900 ? (
            <>
              {t('gads_section2_t9', {
                defaultValue:
                  'Toutefois, pour que cette amplification soit optimale, votre site web doit être',
              })}
              {' '}
              <strong>
                {t('gads_section2_t10', {
                  defaultValue: 'prêt à accueillir et à convertir',
                })}
              </strong>
              {' '}
              {t('gads_section2_t11', { defaultValue: "ce flux d'audience." })}
            </>
          ) : (
            <>...</>
          )}
        </p>

        {showMore
          || (windowSize > 900 && (
            <p>
              {t('gads_section2_t12', {
                defaultValue:
                  "C'est là que notre service de développement web entre en jeu. Nous créons un site web conçu pour",
              })}
              {' '}
              <strong>
                {t('gads_section2_t13', {
                  defaultValue: "améliorer l'expérience utilisateur",
                })}
              </strong>
              {' '}
              {t('gads_section2_t14', { defaultValue: 'et' })}
              {' '}
              <strong>
                {t('gads_section2_t15', {
                  defaultValue: 'maximiser les conversions',
                })}
              </strong>
              {' '}
              {t('gads_section2_t16', {
                defaultValue: 'provenant de vos campagnes Google Ads.',
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
            {t('gads_section2_t17', { defaultValue: 'Demandez-nous conseil' })}
          </button>
        </NavHashLink>
      </div>
    </section>
  );
}
