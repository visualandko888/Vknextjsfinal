import { useEffect, useRef } from 'react';
import Tarifsweb from '../src/components/Forfaits/Forfaitsweb';
import Tarifsref from '../src/components/Forfaits/Forfaitref';
import Tarifsads from '../src/components/Forfaits/Forfaitsads';
import Tarifsrs from '../src/components/Forfaits/Forfaitsrs';
import Reviews from '../src/components/Home/Reviews';
import Faq from '../src/components/Home/Faq';
import Contact from '../src/components/Home/Contact';
import Rea from '../src/components/Home/Rea';
import styles from '/styles/forfaitsweb.module.scss';

const CreationSite = () => {
  const sectionsRef = useRef([]);
  const lastScrollY = useRef(0);  // Définition de lastScrollY comme une référence

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, options);

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <main>
      <div ref={(el) => sectionsRef.current[0] = el} className={styles.hidden}>
        <Tarifsweb />
      </div>
      <div ref={(el) => sectionsRef.current[1] = el} className={styles.hidden}>
        <Tarifsref />
      </div>
      <div ref={(el) => sectionsRef.current[2] = el} className={styles.hidden}>
        <Tarifsads />
      </div>
      <div ref={(el) => sectionsRef.current[3] = el} className={styles.hidden}>
        <Tarifsrs />
      </div>
      <div ref={(el) => sectionsRef.current[4] = el} className={styles.hidden}>
        <Rea />
      </div>
      <div ref={(el) => sectionsRef.current[5] = el} className={styles.hidden}>
        <Reviews />
      </div>
      <div ref={(el) => sectionsRef.current[6] = el} className={styles.hidden}>
        <Faq />
      </div>
      <div ref={(el) => sectionsRef.current[7] = el} className={styles.hidden}>
        <Contact />
      </div>
    </main>
  );
};

export default CreationSite;
