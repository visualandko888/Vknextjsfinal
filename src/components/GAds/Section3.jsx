import { useEffect, useState } from 'react';
import '@assets/css/page/gads/section3.scss';
import bgsc3 from '@assets/images/bgs3-googleads.png';
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
          <img src={bgsc3} alt="landing page" />
        </div>
      )}
      <div className="text_container">
        <h2>
          {t('gads_section3_t1', {
            defaultValue:
              'Pour des conversions qui résonnent, l’harmonie entre',
          })}
          <br />
          <span>
            {t('gads_section3_t2', {
              defaultValue: 'Vos Annonces et Vos Landing Pages',
            })}
          </span>
        </h2>
        <h3>
          {t('gads_section3_t3', {
            defaultValue:
              'Clics ciblés, expérience unifiée, conversions assurées',
          })}
        </h3>
        <p>
          {t('gads_section3_t4', {
            defaultValue:
              "L'art de Google Ads réside dans l'alignement parfait entre vos annonces et les pages de destination (landing pages). Nos développeurs web créent des landing pages qui",
          })}
          {' '}
          <strong>
            {t('gads_section3_t5', {
              defaultValue: 'poursuivent la promesse de vos annonces',
            })}
          </strong>
          {t('gads_section3_t6', {
            defaultValue:
              ', fournissant une expérience fluide et pertinente à vos visiteurs. Cela conduit à une',
          })}
          {showMore || windowSize > 900 ? (
            <>
              {' '}
              <strong>
                {t('gads_section3_t7', {
                  defaultValue: 'meilleure expérience utilisateur',
                })}
              </strong>
              {t('gads_section3_t8', {
                defaultValue: ', un score de qualité plus élevé et des',
              })}
              {' '}
              <span>
                {t('gads_section3_t9', {
                  defaultValue: 'coûts publicitaires réduits.',
                })}
              </span>
            </>
          ) : (
            '..'
          )}
        </p>
        {showMore
          || (windowSize > 900 && (
            <p>
              {t('gads_section3_t10', { defaultValue: 'Lorsque' })}
              {' '}
              <strong>
                {t('gads_section3_t11', { defaultValue: 'chaque clic compte' })}
              </strong>
              {t('gads_section3_t12', {
                defaultValue:
                  ", l'harmonie entre les annonces et les landing pages est la clé de la réussite.",
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
            {t('gads_section3_t13', {
              defaultValue: 'Confiez-nous votre landing page',
            })}
          </button>
        </NavHashLink>
      </div>
    </section>
  );
}
