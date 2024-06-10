import { useEffect, useState } from 'react';
import '@assets/css/page/webDeveloppement/section2.scss';
import bgsc2 from '@assets/images/bgs2.svg';
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
    <section id="creation" className="section2">
      <div className="img_container">
        {windowSize > 1024 && <img src={bgsc2} alt="création de site" />}
      </div>
      <div className="text_container">
        <h2>
          {t('webDeveloppement_section2_t1', {
            defaultValue: "Création de Site Personnalisée: L'Art de",
          })}
          <br />
          <span>
            {t('webDeveloppement_section2_t2', {
              defaultValue: "l'Expression Digitale",
            })}
          </span>
        </h2>
        <h3>
          {t('webDeveloppement_section2_t3', {
            defaultValue:
              'Chaque entreprise est unique, et votre site web devrait refléter cela.',
          })}
        </h3>
        <p>
          {t('webDeveloppement_section2_t4', {
            defaultValue:
              'Notre équipe de développeurs web chevronnés se consacre à traduire votre vision en une',
          })}
          {' '}
          <span>
            {t('webDeveloppement_section2_t5', {
              defaultValue: 'plateforme en ligne captivante',
            })}
          </span>
          {t('webDeveloppement_section2_t6', {
            defaultValue:
              ". Qu'il s'agisse d'un site vitrine élégant ou d'un e-commerce sophistiqué,",
          })}
          {' '}
          {showMore || windowSize > 900 ? (
            <>
              {t('webDeveloppement_section2_t7', {
                defaultValue: 'nous concevons des',
              })}
              {' '}
              <strong>
                {t('webDeveloppement_section2_t8', {
                  defaultValue: 'interfaces intuitives',
                })}
              </strong>
              {' '}
              {t('webDeveloppement_section2_t9', {
                defaultValue:
                  'qui engagent vos visiteurs dès la première interaction.',
              })}
            </>
          ) : (
            <>...</>
          )}
        </p>

        {showMore
          || (windowSize > 900 && (
            <p>
              {t('webDeveloppement_section2_t10', {
                defaultValue:
                  'Notre expertise en matière de développement garantit une',
              })}
              {' '}
              <strong>
                {t('webDeveloppement_section2_t11', {
                  defaultValue: 'performance optimale',
                })}
              </strong>
              {t('webDeveloppement_section2_t12', {
                defaultValue: ', une navigation fluide et une',
              })}
              {' '}
              <strong>
                {t('webDeveloppement_section2_t13', {
                  defaultValue: 'compatibilité avec tous les appareils',
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
            {t('webDeveloppement_section2_t14', {
              defaultValue: 'Demandez-nous conseil',
            })}
          </button>
        </NavHashLink>
      </div>
    </section>
  );
}
