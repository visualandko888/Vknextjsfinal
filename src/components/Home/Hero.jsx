import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';
import styles from '/styles/hero.module.scss'; // Assurez-vous que ce chemin est correct


export default function Hero() {
  const { t } = useTranslation(); // Importation de la traduction

  const textCircleArr = [
    'WEB',
    'Google Ads',
    'SEO',
    'SEA',
    'Maintenance',
    'Sécurité',
  ];
  const [frame, setFrame] = useState(0);
  const [textCirclePos, setTextCirclePos] = useState(0);
  const [textCircle1, setTextCircle1] = useState(textCircleArr[0]);
  const [textCircle2, setTextCircle2] = useState(textCircleArr[1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextCirclePos((prevPos) => (prevPos === textCircleArr.length - 1 ? 0 : prevPos + 1));
      setFrame((prevFrame) => (prevFrame === 1 ? 0 : 1));
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [textCirclePos]);

  useEffect(() => {
    if (textCirclePos % 2 === 0) {
      setTextCircle1(textCircleArr[textCirclePos]);
    } else {
      setTextCircle2(textCircleArr[textCirclePos]);
    }
  }, [textCirclePos]);

  return (
    <div className={`${styles.hero} ${styles['frame' + frame]}`}>
      <div className={styles.left}>
        <div className={`${styles.circle} ${styles['circle-1']}`}>
          <p className={textCircle1.length > 10 ? styles.small : ''}>
            {textCircle1}
          </p>
        </div>
        <div className={`${styles.circle} ${styles['circle-2']}`}>
          <p className={textCircle2.length > 10 ? styles.small : ''}>
            {textCircle2}
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.content}>
          <h1>
            {t('home_hero_t1', {
              defaultValue: 'Votre Agence à',
            })}
            <br />
            {t('home_hero_t2', {
              defaultValue: 'Paris',
            })}{' '}
            <span>
              {t('home_hero_t3', {
                defaultValue: 'experte en',
              })}
            </span>
          </h1>
          <h2>
            {t('home_hero_t4', {
              defaultValue: 'MARKETING DIGITAL',
            })}
          </h2>
          <div>
            <span>
              {t('home_hero_t5', {
                defaultValue: "Besoin d'un conseil ?",
              })}
            </span>
            <span>
              {t('home_hero_t6', {
                defaultValue: 'Vous avez une idée de projet web ?',
              })}
            </span>
          </div>

          <Link href="/#contact" passHref>
            <button type="button">
              {t('home_hero_t7', {
                defaultValue: 'Contactez-nous !',
              })}
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.fixButton}>
        <div className={styles.left}>
          <ul>
            <li>
              <Link href="https://www.facebook.com/visulaandko" passHref>
                <Image alt="facebook logo" src="public/images/facebook.svg" width={24} height={24} />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/visualandko/" passHref>
                <Image alt="instagram logo" src="public/images/instagram.svg" width={24} height={24} />
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/company/19092513/admin/feed/posts/?feedType=following" passHref>
                <Image alt="linkedin logo" src="public/images/linkedin.svg" width={24} height={24} />
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.right} />
      </div>
    </div>
  );
}
