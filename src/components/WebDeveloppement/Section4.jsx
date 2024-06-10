import { useEffect, useState } from 'react';
import '@assets/css/page/webDeveloppement/section4.scss';
import bgsc4 from '@assets/images/bgs4.png';
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
    <section id="maintenance" className="section4">
      <div className="img_container">
        {windowSize > 1024 && <img src={bgsc4} alt="maintenance et sécurité" />}
      </div>
      <div className="text_container">
        <h2>
          {t('webDeveloppement_section4_t1', {
            defaultValue: 'Maintenance et sécurité: Votre site, toujours au',
          })}
          {' '}
          <br />
          <span>
            {t('webDeveloppement_section4_t2', {
              defaultValue: 'Sommet de sa Forme',
            })}
          </span>
        </h2>
        <h3>
          {t('webDeveloppement_section4_t3', {
            defaultValue: 'Nous veillons à ce que votre site reste à la pointe',
          })}
        </h3>
        <p>
          {t('webDeveloppement_section4_t4', {
            defaultValue:
              'Le monde numérique évolue constamment. Notre équipe de maintenance dédiée assure une',
          })}
          {' '}
          <strong>
            {t('webDeveloppement_section4_t5', {
              defaultValue: 'surveillance proactive',
            })}
          </strong>
          {showMore || windowSize > 900 ? (
            <>
              {t('webDeveloppement_section4_t6', {
                defaultValue: ', des mises à jour régulières et une',
              })}
              {' '}
              <span>
                {t('webDeveloppement_section4_t7', {
                  defaultValue: 'optimisation continue',
                })}
              </span>
              {' '}
              {t('webDeveloppement_section4_t8', {
                defaultValue: 'pour garantir des',
              })}
              {' '}
              <strong>
                {t('webDeveloppement_section4_t9', {
                  defaultValue: 'performances inégalées',
                })}
              </strong>
              .
            </>
          ) : (
            '...'
          )}
        </p>
        {showMore
          || (windowSize > 900 && (
            <p>
              {t('webDeveloppement_section4_t10', {
                defaultValue:
                  'La sécurité est une priorité absolue, et nous mettons en place des mesures de',
              })}
              {' '}
              <strong>
                {t('webDeveloppement_section4_t11', {
                  defaultValue: 'protection robustes',
                })}
              </strong>
              {' '}
              {t('webDeveloppement_section4_t12', {
                defaultValue:
                  'pour prévenir les menaces potentielles et garantir la',
              })}
              {' '}
              <strong>
                {t('webDeveloppement_section4_t13', {
                  defaultValue: 'confidentialité des données',
                })}
              </strong>
              {' '}
              {t('webDeveloppement_section4_t14', {
                defaultValue: 'de vos utilisateurs.',
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
            {t('webDeveloppement_section4_t15', {
              defaultValue: 'Assurez votre tranquilité',
            })}
          </button>
        </NavHashLink>
      </div>
      <div className="clear" />
    </section>
  );
}
