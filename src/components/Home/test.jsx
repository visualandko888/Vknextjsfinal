import { useEffect, useRef } from 'react';
// import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import styles from '/styles/test.module.scss'; // Ensure this path is correct
// import Fus from 'path-to-your-image'; // Adjust the path to your image file
import icAppointement from '/public/images/ic-appointment.svg';
import icGoogleAds from '/public/images/ic-google-ads.svg';
import icWebUnivers from '/public/images/ic-web-univers.svg';
import icseo from '/public/images/ic-social-ads.svg';
// import Bpi from '/src/components/Home/bpi';

const Hero = () => {
//   const { t } = useTranslation();
  const typedRef = useRef(null);

  useEffect(() => {
    const phrases = [
      ' au digital.',
      ' à un nouveau site internet.',
      ' au référencement naturel.',
      ' à Google Ads.',
      ' au référencement local.',
      ' aux réseaux sociaux.'
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
        setTimeout(type, 1500); // Pause before starting to delete
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        setTimeout(type, 1000); // Pause before starting to type the next phrase
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
    <>
    <section className={styles.hero}>
      <div className={styles.context}>
        <div className={styles.webHerotx}>
          <h1>
            Propulsez votre entreprise sur de nouveaux sommets grâce
            <br />
            : 
            {/* <Image className={styles.fusee} src={Fus} alt="Croissance des clients" width={90} height={90} /> */}
            <span ref={typedRef}></span>
            
          </h1>
          
          <a ref={scrollDirectionRef} href="/nos-tarifs">Nos tarifs</a>
        </div>
      </div>

      <div className={styles.area}>
        <ul className={styles.circles}>
          <li> </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        
      </div>
      
      </section>
    </>
  );
};

export default Hero;
