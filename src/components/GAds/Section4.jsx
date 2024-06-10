import { useEffect, useState } from 'react';
import '@assets/css/page/gads/section4.scss';
import bgsc4 from '@assets/images/bgs4-googleads.png';
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
        {windowSize > 1024 && <img src={bgsc4} alt="paysage numérique" />}
      </div>
      <div className="text_container">
        <h2>
          <span>
            {t('gads_section4_t1', { defaultValue: 'Évoluez avec le Paysage' })}
          </span>
          {t('gads_section4_t2', { defaultValue: 'Numérique en Mutation' })}
        </h2>
        <h3>
          {t('gads_section4_t3', {
            defaultValue: 'Le monde du marketing numérique évolue constamment',
          })}
        </h3>
        <p>
          {t('gads_section4_t4', {
            defaultValue: 'Les tendances changent, les',
          })}
          {' '}
          <strong>
            {t('gads_section4_t5', {
              defaultValue: 'comportements des utilisateurs évoluent',
            })}
          </strong>
          {t('gads_section4_t6', {
            defaultValue:
              ', et Google met à jour ses algorithmes. Notre équipe de développement web veille',
          })}
          {showMore || windowSize > 900 ? (
            <>
              {t('gads_section4_t7', {
                defaultValue:
                  'à ce que votre site reste à jour avec les dernières normes et meilleures pratiques, offrant une expérience optimale pour vos visiteurs et une',
              })}
              {' '}
              <strong>
                {t('gads_section4_t8', { defaultValue: 'performance accrue' })}
              </strong>
              {' '}
              {t('gads_section4_t9', {
                defaultValue: 'pour vos campagnes Google Ads.',
              })}
            </>
          ) : (
            '...'
          )}
        </p>
        {showMore
          || (windowSize > 900 && (
            <p>
              {t('gads_section4_t10', {
                defaultValue: "Notre service de développement web offre l'",
              })}
              <strong>
                {t('gads_section4_t11', {
                  defaultValue: 'infrastructure solide',
                })}
              </strong>
              {' '}
              {t('gads_section4_t12', {
                defaultValue:
                  'nécessaire pour exploiter pleinement la puissance de Google Ads.',
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
            {t('gads_section4_t13', {
              defaultValue: 'Restez à jour des tendances',
            })}
          </button>
        </NavHashLink>
      </div>
      <div className="clear" />
    </section>
  );
}
