import { useState, useEffect } from 'react';
import '@assets/css/page/SEO/hero.scss';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation(); // Importation de la traduction
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="webHero">
      <h1>
        {t('seo_hero_t1', { defaultValue: 'Optimisez votre présence' })}
        <br />
        {' '}
        {t('seo_hero_t2', { defaultValue: 'en ligne avec le SEO' })}
      </h1>
      <p>
        {t('seo_hero_t3', {
          defaultValue:
            'Transformez votre vision en réalité numérique avec Visual&Ko',
        })}
      </p>
      <p>
        {t('seo_hero_t4', { defaultValue: 'Démarquez-vous' })}
        {' '}
        {windowSize < 500 ? <br /> : ' '}
        <span>{t('seo_hero_t5', { defaultValue: 'et Soyez Apprécié' })}</span>
      </p>
    </div>
  );
}
