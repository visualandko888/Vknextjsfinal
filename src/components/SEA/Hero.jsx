import { useState, useEffect } from 'react';
import '@assets/css/page/SEA/hero.scss';
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
        {t('sea_hero_t1', { defaultValue: "Maîtrisez l'Art du SEA pour" })}
        {' '}
        <br />
        {t('sea_hero_t2', { defaultValue: 'un succès assuré' })}
      </h1>
      <p>
        {t('sea_hero_t3', {
          defaultValue:
            'Visual&Ko, votre solution pour des clics payants qui rapportent gros',
        })}
      </p>
      <p>
        {t('sea_hero_t4', { defaultValue: 'Votre voyage vers' })}
        {windowSize < 900 ? <br /> : ' '}
        {t('sea_hero_t5', { defaultValue: "l'" })}
        {' '}
        <span>
          {t('sea_hero_t6', { defaultValue: 'Amélioration en ligne' })}
        </span>
      </p>
    </div>
  );
}
