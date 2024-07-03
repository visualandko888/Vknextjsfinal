// components/Hero.js
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '/styles/gahero.module.scss';
import Fus from '/public/images//fusee.gif';
import Image from 'next/image';


const Hero = () => {
  const { t } = useTranslation(); // Importation de la traduction
  const [windowSize, setWindowSize] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize(window.innerWidth);
      function handleResize() {
        setWindowSize(window.innerWidth);
      }

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className={styles.webHero}>
      <h1>
        {t('gads_hero_t1', { defaultValue: 'Explosez votre croissance grâce' })}
        <br />
        {t('gads_hero_t2', { defaultValue: 'au Marketing digital' })}
        <Image className={styles.fusee} src={Fus} alt="Croissance des clients" width={90} height={90}/>
      </h1>
      <p>
        {t('gads_hero_t3', {
          defaultValue: "Visual & Ko, votre guide incontournable dans l'art complexe",
        })}
        <br />
        {t('gads_hero_t4', { defaultValue: 'de la publicité en ligne' })}
      </p>
      <p>
        {t('gads_hero_t5', { defaultValue: 'Votre' })}{' '}
        <span>{t('gads_hero_t6', { defaultValue: 'Réussite Numérique' })}</span>
        {windowSize < 900 ? <br /> : ' '}
        {t('gads_hero_t7', { defaultValue: 'Commence Ici' })}
      </p>
    </div>
  );
};

export default Hero;
