import '@assets/css/page/SEO/section1.scss';
import card1 from '@assets/images/card-1-seo.png';
import card2 from '@assets/images/card-2-seo.png';
import card3 from '@assets/images/card-3-seo.png';
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
          {t('seo_section1_t1', {
            defaultValue:
              'Découvrez le pouvoir du référencement naturel (SEO) avec nous. Nos experts en SEO vous aident à atteindre des résultats concrets grâce à des',
          })}
          {' '}
          {t('seo_section1_t2', {
            defaultValue: 'stratégies basées sur les données',
          })}
          <b />
          {' '}
          {t('seo_section1_t3', {
            defaultValue:
              'et une connaissance pointue des moteurs de recherche.',
          })}
        </p>
      </div>
      <div className="right2">
        <p>
          <b>
            {t('seo_section1_t4', { defaultValue: 'Révélez le potentiel' })}
          </b>
          {' '}
          {t('seo_section1_t5', {
            defaultValue:
              "de votre présence en ligne grâce à notre expertise en SEO, que vous soyez novice ou en quête d'optimisation.",
          })}
        </p>
      </div>
    </section>
  );
}
