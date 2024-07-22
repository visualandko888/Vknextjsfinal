import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../src/components/Home/Hero2';
import HelmetMeta from '../src/components/Helmet/HelmetMeta';
// import Bpi from '../src/components/Home/bpi';
import Team from '../src/components/Home/Team';
import Services from '../src/components/Home/Services';
import Partenaires from '../src/components/Home/Partenaires';
import Rea from '../src/components/Home/Rea';
import Reviews from '../src/components/Home/Reviews';
import Faq from '../src/components/Home/Faq';
import Contact from '../src/components/Home/Contact';
import BlogSection from '../src/components/Blog/BlogSection';
import styles from '../styles/animation.module.scss'; // Importation du module SCSS
import RegionMap from '../src/components/Home/RegionMap';
import Test from '../src/components/Home/test';
import LoadingSpinner from '../src/components/Home/LoadingSpinner'; // Importation du composant de chargement

export default function Home() {
  console.log('Home page rendue');
  const { t } = useTranslation(); // Importation de la traduction

  const sectionsRef = useRef([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const options = {
      threshold: 0.1
    };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles['animate-fadeIn']);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    sectionsRef.current.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollFraction = scrollPosition / maxScroll;

      const startColor = [87, 158, 176];
      const endColor = [148,187,197]; // Change this to your desired end color

      const newColor = startColor.map((start, index) => {
        const end = endColor[index];
        return Math.round(start + (end - start) * scrollFraction);
      });

      const newGradient = `linear-gradient(90deg, rgba(${newColor.join(',')},1) 0%, rgba(${newColor.join(',')},0.7) 30%, rgba(${newColor.join(',')},1) 100%)`;

      document.documentElement.style.setProperty('--gradient-start', `rgba(${newColor.join(',')}, 1)`);
      document.documentElement.style.setProperty('--gradient-middle', `rgba(${newColor.join(',')}, 0.7)`);
      document.documentElement.style.setProperty('--gradient-end', `rgba(${newColor.join(',')}, 1)`);
    };

    window.addEventListener('scroll', handleScroll);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simuler un temps de chargement de 2 secondes

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const title = t('helmet_home_t1', {
    defaultValue:
      'Accueil | Visual & Ko - Votre partenaire de confiance pour la création de sites web et la génération de leads',
  });
  const description = t('helmet_home_t2', {
    defaultValue:
      'Découvrez Visual & Ko, votre partenaire de confiance pour la création de sites internet professionnels, la maintenance et la sécurité de votre site, le référencement naturel et la génération de leads qualifiés. Contactez-nous dès maintenant pour booster votre présence en ligne !',
  });

  return (
    <main className={styles.test}>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <>
          <HelmetMeta title={title} description={description} />
          <div ref={el => sectionsRef.current[0] = el}><Test /></div>
          {/* <div ref={el => sectionsRef.current[1] = el}><Bpi /></div> */}
          <div ref={el => sectionsRef.current[1] = el}><Team /></div>
          <div ref={el => sectionsRef.current[2] = el}><Services /></div>
          <div ref={el => sectionsRef.current[3] = el}><Rea /></div>
          <div ref={el => sectionsRef.current[4] = el}><RegionMap /></div>
          <div ref={el => sectionsRef.current[5] = el}><Reviews /></div>
          <div ref={el => sectionsRef.current[6] = el}><Faq /></div>
          <div ref={el => sectionsRef.current[7] = el}><Contact /></div>
          <div ref={el => sectionsRef.current[8] = el}><Partenaires /></div>
          <div ref={el => sectionsRef.current[9] = el}><BlogSection /></div>
        </>
      )}
    </main>
  );
}
