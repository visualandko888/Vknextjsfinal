import { useEffect, useState } from 'react';
import '@assets/css/page/webDeveloppement/section3.scss';
import bgsc3 from '@assets/images/bgs3.png';
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
    <section id="uxui" className="section3">
      {windowSize > 1024 && (
        <div className="img_container">
          <img src={bgsc3} alt="UI Design" />
        </div>
      )}
      <div className="text_container">
        <h2>
          {t('webDeveloppement_section3_t1', {
            defaultValue: "UX/UI/Web Design: L'équilibre parfait entre",
          })}
          <br />
          <span>
            {t('webDeveloppement_section3_t2', {
              defaultValue: 'Esthétique et Utilité',
            })}
          </span>
        </h2>
        <h3>
          {t('webDeveloppement_section3_t3', {
            defaultValue:
              "L'utilisateur est au coeur de tout ce que nous faisons.",
          })}
        </h3>
        <p>
          {t('webDeveloppement_section3_t4', {
            defaultValue: 'Notre approche',
          })}
          {' '}
          <strong>
            {t('webDeveloppement_section3_t5', {
              defaultValue: "centrée sur l'utilisateur",
            })}
          </strong>
          {' '}
          {t('webDeveloppement_section3_t6', {
            defaultValue:
              "(UX) et notre design d'interface utilisateur (UI) soigneusement élaboré se rejoignent pour",
          })}
          {' '}
          <span>
            {t('webDeveloppement_section3_t7', {
              defaultValue: 'créer une expérience web',
            })}
          </span>
          {' '}
          {t('webDeveloppement_section3_t8', { defaultValue: 'raffinée.' })}
          {' '}
          {showMore || windowSize > 900 ? (
            <>
              {t('webDeveloppement_section3_t9', {
                defaultValue:
                  'Chaque élément visuel est soigneusement pensé pour',
              })}
              {' '}
              <strong>
                {t('webDeveloppement_section3_t10', {
                  defaultValue: 'guider les visiteurs',
                })}
              </strong>
              {' '}
              {t('webDeveloppement_section3_t11', {
                defaultValue: 'à travers votre histoire, tout en',
              })}
              {' '}
              <strong>
                {t('webDeveloppement_section3_t12', {
                  defaultValue: 'maximisant la conversion',
                })}
              </strong>
              {' '}
              {t('webDeveloppement_section3_t13', {
                defaultValue: 'et en renforçant votre image de marque.',
              })}
            </>
          ) : (
            '..'
          )}
        </p>
        {showMore
          || (windowSize > 900 && (
            <p>
              {t('webDeveloppement_section3_t14', {
                defaultValue:
                  "Nous fusionnons l'art et la science pour créer une",
              })}
              {' '}
              <strong>
                {t('webDeveloppement_section3_t15', {
                  defaultValue: 'synergie harmonieuse',
                })}
              </strong>
              {' '}
              {t('webDeveloppement_section3_t16', {
                defaultValue: 'entre le design et la fonctionnalité.',
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
            {t('webDeveloppement_section3_t17', {
              defaultValue: 'Confiez-nous votre design',
            })}
          </button>
        </NavHashLink>
      </div>
    </section>
  );
}
