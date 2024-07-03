import Image from 'next/image';
import { useRouter } from 'next/router';
import icAppointement from '/public/images/ic-appointment.svg';
import icGoogleAds from '/public/images/ic-google-ads.svg';
import icWebUnivers from '/public/images/ic-web-univers.svg';
import chevron from "/public/images/chevron.png";
import { useTranslation } from 'react-i18next';
import styles from '/styles/bpi2.module.scss';


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

  return (
    <div className={styles.infoNavSection}>
      <div
        tabIndex="0"
        role="button"
        onKeyDown={() => goto('/developpement-web')}
        onClick={() => goto('/developpement-web')}
        className={styles.boxPj}
        style={{ '--chevron-url': `url(${chevronUrl})` }}
      >
        <div className={styles.backJ}>
          <Image src={icWebUnivers} className={styles.faIcon} alt="webUnivers" />
          <span>{t('home_bpi_t3', { defaultValue: 'Développement' })}</span>
          <span>{t('home_bpi_t4', { defaultValue: 'WEB' })}</span>
        </div>
      </div>

      <div
        tabIndex="0"
        role="button"
        onKeyDown={() => goto('/referencement')}
        onClick={() => goto('/referencement')}
        className={styles.boxPj}
        style={{ '--chevron-url': `url(${chevronUrl})` }}
      >
      <div className={styles.backJ}>
          <Image src={icWebUnivers} className={styles.faIcon} alt="maintenance" />
          <span>{t('home_bpi_t5', { defaultValue: 'Référencement' })}</span>
          <span>{t('home_bpi_t6', { defaultValue: 'naturel' })}</span>
        </div>
        
      </div>

      <div
        tabIndex="0"
        role="button"
        onKeyDown={() => goto('/google-ads')}
        onClick={() => goto('/google-ads')}
        className={styles.boxPj}
        style={{ '--chevron-url': `url(${chevronUrl})` }}
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
        onKeyDown={() => showCalendar()}
        onClick={() => showCalendar()}
        className={`${styles.boxPj} ${styles.colored}`}
        style={{ '--chevron-url': `url(${chevronUrl})` }}
      >
        <div className={styles.backJ}>
          <Image src={icAppointement} className={styles.faIcon} alt="appointment" />
          <span>{t('home_bpi_t7', { defaultValue: 'Prendre' })}</span>
          <span>{t('home_bpi_t8', { defaultValue: 'RDV' })}</span>
        </div>
      </div>
    </div>
  );
}
