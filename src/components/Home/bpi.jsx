import Image from 'next/image';
import { useRouter } from 'next/router';
import icAppointement from '/public/images/ic-appointment.svg';
import icGoogleAds from '/public/images/ic-google-ads.svg';
import icWebUnivers from '/public/images/ic-web-univers.svg';
import icseo from '/public/images/ic-social-ads.svg';
import chevron from "/public/images/chevron.png";
import { useTranslation } from 'react-i18next';
import styles from '/styles/bpi2.module.scss';
import { useEffect, useRef, useState } from 'react';

export default function Bpi() {
  const { t } = useTranslation(); // Importation de la traduction
  const router = useRouter();

  const goto = (url) => {
    router.push(url);
  };

  const showCalendar = () => {
    if (typeof Calendly !== 'undefined') {
      Calendly.initPopupWidget({ url: 'https://calendly.com/visualandko/30min' });
    }
    return false;
  };

  const chevronUrl = chevron.src;

  const sectionsRef = useRef([]);
  const [scrollDirection, setScrollDirection] = useState('down');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
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
        } else if (!entry.isIntersecting && scrollDirection === 'up') {
          entry.target.classList.remove(styles.visible);
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
  }, [scrollDirection]);

  return (
    <section className={styles.NavSectionbpi}>
      <div className={styles.infoNavSection}>
        <div
          tabIndex="0"
          role="button"
          onKeyDown={() => goto('/developpement-web')}
          onClick={() => goto('/developpement-web')}
          className={`${styles.boxPj} ${styles.hidden}`}
          style={{ '--chevron-url': `url(${chevronUrl})` }}
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <div className={styles.backJ}>
            <Image src={icWebUnivers} className={styles.faIcon} alt="webUnivers" />
            <span>{t('home_bpi_t3', { defaultValue: 'Création de Site' })}</span>
            <span>{t('home_bpi_t4', { defaultValue: 'internet' })}</span>
          </div>
        </div>

        <div
          tabIndex="0"
          role="button"
          onKeyDown={() => goto('/referencement')}
          onClick={() => goto('/referencement')}
          className={`${styles.boxPj} ${styles.hidden}`}
          style={{ '--chevron-url': `url(${chevronUrl})` }}
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <div className={styles.backJ}>
            <Image src={icseo} className={styles.faIcon} alt="maintenance" />
            <span>{t('home_bpi_t5', { defaultValue: 'Référencement' })}</span>
            <span>{t('home_bpi_t6', { defaultValue: 'naturel' })}</span>
          </div>
        </div>

        <div
          tabIndex="0"
          role="button"
          onKeyDown={() => goto('/google-ads')}
          onClick={() => goto('/google-ads')}
          className={`${styles.boxPj} ${styles.hidden}`}
          style={{ '--chevron-url': `url(${chevronUrl})` }}
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <div className={styles.backJ}>
            <Image src={icGoogleAds} className={styles.faIcon} alt="google ads" />
            <span>{t('home_bpi_t1', { defaultValue: 'Google' })}</span>
            <span>{t('home_bpi_t2', { defaultValue: 'ADS' })}</span>
          </div>
        </div>

        <div
          role="button"
          tabIndex={0}
          onKeyDown={() => goto('/contact')}
          onClick={() => goto('/contact')}
          className={`${styles.boxPj} ${styles.colored} ${styles.hidden}`}
          style={{ '--chevron-url': `url(${chevronUrl})` }}
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <div className={styles.backJ}>
            <Image src={icAppointement} className={styles.faIcon} alt="audit" />
            <span>{t('home_bpi_t7', { defaultValue: 'Audit' })}</span>
            <span>{t('home_bpi_t8', { defaultValue: 'gratuit' })}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
