// components/Hero.js
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '/styles/gahero.module.scss';
import Fus from '/public/images/fusee.gif';
import ordi from '/public/images/test11.svg';
import Image from 'next/image';

const Hero = () => {
  const { t } = useTranslation();
  const typedRef = useRef(null);

  useEffect(() => {
    const phrases = [
      'au digital.',
      'à un nouveau site internet.',
      'au référencement naturel.',
      'à Google Ads.',
      'au référencement local.',
      'aux réseaux sociaux.'
    ];
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      const typedText = currentPhrase.substring(0, currentCharIndex);

      if (typedRef.current) {
        typedRef.current.textContent = typedText;
      }

      if (!isDeleting && currentCharIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, 1500); // Pause avant de commencer à supprimer
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        setTimeout(type, 500); // Pause avant de commencer à taper la prochaine phrase
      } else {
        const delay = isDeleting ? 50 : 100;
        currentCharIndex += isDeleting ? -1 : 1;
        setTimeout(type, delay);
      }
    };

    type();
  }, []);

  const scrollDirectionRef = useRef(null);
const lastScrollY = useRef(0);

useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const deltaY = currentScrollY - lastScrollY.current;
    lastScrollY.current = currentScrollY;

    if (scrollDirectionRef.current) {
      const currentTransform = getComputedStyle(scrollDirectionRef.current).transform;
      let matrixValues = currentTransform.match(/matrix.*\((.+)\)/);
      let currentY = matrixValues ? parseFloat(matrixValues[1].split(', ')[5]) : 0;

      scrollDirectionRef.current.style.transform = `translateY(${currentY - deltaY}px)`;
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <div  className={styles.webHero}>
      <div  className={styles.webHerotx}>
        <h1>
          {t('gads_hero_t1', { defaultValue: 'Propulsez votre entreprise sur de nouveaux sommets grâce' })}
          <br />
          <span ref={typedRef}></span>
          <Image className={styles.fusee} src={Fus} alt="Croissance des clients" width={90} height={90} />
        </h1>
        
        <a ref={scrollDirectionRef} href="/nos-tarifs">Nos tarifs</a>
      </div>
      <Image ref={scrollDirectionRef}  className={styles.ordi} src={ordi} alt="Croissance des clients" width={500} height={500} />
    </div>
  );
};

export default Hero;
