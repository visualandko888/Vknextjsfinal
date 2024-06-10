import '@assets/css/page/SEA/section1.scss';
import card1 from '@assets/images/card-1-sea.png';
import card2 from '@assets/images/card-2-sea.png';
import card3 from '@assets/images/card-3-sea.png';
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
          {t('sea_section1_t1', {
            defaultValue: 'Nos spécialistes du SEA vous guident vers des',
          })}
          {' '}
          <b>
            {t('sea_section1_t2', { defaultValue: 'campagnes percutantes' })}
          </b>
          {' '}
          {t('sea_section1_t3', {
            defaultValue:
              'qui génèrent des résultats réels. Grâce à des stratégies basées sur les données et une',
          })}
          {' '}
          <b>
            {t('sea_section1_t4', {
              defaultValue: 'expertise pointue des plateformes publicitaires',
            })}
          </b>
          {t('sea_section1_t5', {
            defaultValue:
              ', nous vous aidons à toucher votre audience de manière stratégique et rentable.',
          })}
        </p>
      </div>
      <div className="right2">
        <p>
          {t('sea_section1_t6', {
            defaultValue: 'Découvrez comment notre expérience en SEA peut',
          })}
          {' '}
          <b>
            {t('sea_section1_t7', {
              defaultValue: 'transformer votre visibilité en ligne',
            })}
          </b>
          {t('sea_section1_t8', {
            defaultValue:
              '. Que vous soyez novice ou que vous cherchiez à optimiser vos campagnes actuelles, nous avons les solutions pour vous.',
          })}
        </p>
      </div>
    </section>
  );
}
