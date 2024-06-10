import Image from 'next/image';
import { useRouter } from 'next/router';
import icAppointement from '/public/images/ic-appointment.svg';
import icGoogleAds from '/public/images/ic-google-ads.svg';
import icWebUnivers from '/public/images/ic-web-univers.svg';
import { useTranslation } from 'react-i18next';
import styles from '/styles/bpi.module.scss'; // Mettez à jour ce chemin
import Link from 'next/link';

export default function Bpi() {
  const { t } = useTranslation(); // Importation de la traduction
  const router = useRouter();

  const goto = (url) => {
    router.push(url);
  };

  const showCalendar = () => {
    // eslint-disable-next-line no-undef
    Calendly.initPopupWidget({ url: 'https://calendly.com/visualandko/30min' });
    return false;
  };

  return (
    <div className={styles.infoNavSection}>
      <div
        tabIndex="0"
        role="button"
        onKeyDown={() => goto('/google-ads')}
        onClick={() => goto('/google-ads')}
        className={styles.boxPj}
      >
        <Link href="/google-ads" passHref>
          <div className={styles.backJ}>
            <Image src={icGoogleAds} className={styles.faIcon} alt="google ads" />
            <span>{t('home_bpi_t1', { defaultValue: 'Google' })}</span>
            <span>{t('home_bpi_t2', { defaultValue: 'ADS' })}</span>
          </div>
        </Link>
      </div>

      <div
        tabIndex="0"
        role="button"
        onKeyDown={() => goto('/developpement-web')}
        onClick={() => goto('/developpement-web')}
        className={styles.boxPj}
      >
        <Link href="/developpement-web" passHref>
          <div className={styles.backJ}>
            <Image src={icWebUnivers} className={styles.faIcon} alt="webUnivers" />
            <span>{t('home_bpi_t3', { defaultValue: 'Développement' })}</span>
            <span>{t('home_bpi_t4', { defaultValue: 'WEB' })}</span>
          </div>
        </Link>
      </div>

      <div
        tabIndex="0"
        role="button"
        onKeyDown={() => goto('/developpement-web#maintenance')}
        onClick={() => goto('/developpement-web#maintenance')}
        className={styles.boxPj}
      >
        <Link href="/developpement-web#maintenance" passHref>
          <div className={styles.backJ}>
            <Image src={icWebUnivers} className={styles.faIcon} alt="maintenance" />
            <span>{t('home_bpi_t5', { defaultValue: 'Maintenance' })}</span>
            <span>{t('home_bpi_t6', { defaultValue: 'Sécurité' })}</span>
          </div>
        </Link>
      </div>

      <div
        role="button"
        tabIndex={0}
        onKeyDown={() => showCalendar()}
        onClick={() => showCalendar()}
        className={`${styles.boxPj} ${styles.colored}`}
      >
        <Link href="/#" passHref>
          <div className={styles.backJ}>
            <Image src={icAppointement} className={styles.faIcon} alt="appointment" />
            <span>{t('home_bpi_t7', { defaultValue: 'Prendre' })}</span>
            <span>{t('home_bpi_t8', { defaultValue: 'RDV' })}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
