import '@assets/css/page/webDeveloppement/section1.scss';
import card1 from '@assets/images/card-1.png';
import card2 from '@assets/images/card-2.png';
import card3 from '@assets/images/card-3.png';
import { useTranslation } from 'react-i18next';

export default function Section1() {
  const { t } = useTranslation(); // Importation de la traduction

  return (
    <section className="section1">
      <div className="left">
        <div className="cardContent">
          <img src={card1} alt="carte 1" />
          <img src={card2} alt="carte 2" />
          <img src={card3} alt="carte 3" />
        </div>
      </div>

      <div className="right1">
        <p>
          {t('webDeveloppement_section1_t1', {
            defaultValue:
              'Nous sommes fiers de vous présenter notre service de',
          })}
          {' '}
          <b>
            {t('webDeveloppement_section1_t2', {
              defaultValue: 'développement web',
            })}
          </b>
          {' '}
          {t('webDeveloppement_section1_t3', {
            defaultValue:
              'complet, conçu pour façonner vos aspirations numériques en une',
          })}
          {' '}
          <b>
            {t('webDeveloppement_section1_t4', {
              defaultValue: 'réalité immersive et fonctionnelle',
            })}
          </b>
          .
        </p>
      </div>
      <div className="right2">
        <p>
          {t('webDeveloppement_section1_t5', {
            defaultValue: 'Plongez dans une',
          })}
          {' '}
          <b>
            {t('webDeveloppement_section1_t6', { defaultValue: 'expérience' })}
          </b>
          {' '}
          {t('webDeveloppement_section1_t7', {
            defaultValue:
              'où la créativité, la convivialité et la sécurité fusionnent pour créer des sites web qui laissent une',
          })}
          {' '}
          <b>
            {t('webDeveloppement_section1_t8', {
              defaultValue: 'empreinte durable',
            })}
          </b>
          {' '}
          {t('webDeveloppement_section1_t9', {
            defaultValue: 'dans le paysage en ligne.',
          })}
        </p>
      </div>
    </section>
  );
}
