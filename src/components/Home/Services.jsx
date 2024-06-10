import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '/styles/services.module.scss';
import SeoIcon from '/public/images/card-seo-icone.svg';
import SeaIcon from '/public/images/card-sea-icone.svg';
import GoogleIcon from '/public/images/card-google-icone.png';
import WebsiteIcon from '/public/images/card-website-icone.svg';
import UxDesignIcon from '/public/images/card-uxdesign-icone.svg';
import SecurityIcon from '/public/images/card-security-icone.png';
import SpinningArrow from '/public/images/vector-spinning-arrow.png';
import ButtonForm from '/public/images/bouton-services-form.png';
import arrow_right from '/public/images/arrow_right.png';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ModalCard from '/src/components/Elements/ModalCard';

export default function Services() {
  const router = useRouter();
  const { t } = useTranslation(); // Importation de la traduction
  const [windowSize, setWindowSize] = useState(null);
  const [isClick, setIsClick] = useState(false);
  const [currentShow, setCurrentShow] = useState({});
  const [currentType, setCurrentType] = useState(1);

  const serviceList = [
    {
      title: 'Développement Web',
      subtitle: 'Création de sites',
      desc: 'Création unique et sur-mesure de sites vitrine et de e-commerce responsives',
      url: '/developpement-web#creation',
      img: WebsiteIcon,
      id: 4,
      width: 50, // ajustez la largeur selon vos besoins
      height: 50, // ajustez la hauteur selon vos besoins
    },
    {
      title: 'UX/UI/Web Design',
      subtitle: 'Amélioration interfaces',
      desc: 'Se distinguer avec des interfaces attrayantes, performantes et fonctionnelles',
      url: '/developpement-web#uxui',
      img: UxDesignIcon,
      id: 5,
      width: 50,
      height: 50,
    },
    {
      title: 'Google Ads',
      subtitle: 'Plateforme publicitaire',
      desc: 'Diffuser vos publicités sur le réseau Display de Google et autres sites associés',
      url: '/google-ads',
      img: GoogleIcon,
      id: 3,
      width: 50,
      height: 50,
    },
    {
      title: 'SEA',
      subtitle: 'Référencement payant',
      desc: 'Augmentez rapidement la notoriété et visibilité de votre marque',
      url: '/referencement-payant',
      img: SeaIcon,
      id: 2,
      width: 50,
      height: 50,
    },
    {
      title: 'SEO',
      subtitle: 'Référencement naturel',
      desc: 'Augmentez la visibilité de votre site en optimisant votre contenu',
      url: '/referencement-naturel',
      img: SeoIcon,
      id: 1,
      width: 50,
      height: 50,
    },
    {
      title: 'Maintenance sécurité',
      subtitle: 'Surveillance - Résolution',
      desc: "S'assurer que votre site soit toujours fonctionnel, sécurisé et à jour",
      url: '/developpement-web#maintenance',
      img: SecurityIcon,
      id: 6,
      width: 50,
      height: 50,
    },
  ];

  const handleClick = (type, index) => {
    setIsClick(type);
    if (index >= 0) {
      setCurrentShow(serviceList[index]);
      setCurrentType([0, 3, 4].includes(index) ? 1 : 2);
    }
  };

  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth);
    handleResize(); // set the initial value
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goTo = (url) => {
    router.push(url);
  };

  const serviceListBg = [
    'bg-white',
    'bg-blue',
    'bg-blue',
    'bg-white',
    'bg-white imgcenter',
    'bg-blue imgcenter',
  ];

  if (windowSize === null) {
    // Render a loader or nothing until windowSize is available
    return null;
  }

  return (
    <section id="services" className={styles.services}>
      <h2>
        {t('home_services_t1', { defaultValue: 'Nos offres et services' })}
      </h2>

      <div className={styles.columns}>
        <div className={styles.servicesList}>
          {serviceList.map((e, index) => (
            <div
              role="button"
              tabIndex={0}
              onKeyDown={() => {
                handleClick(true, index);
                if (windowSize > 768) {
                  goTo(e.url);
                }
              }}
              onClick={() => {
                handleClick(true, index);
                if (windowSize > 768) {
                  goTo(e.url);
                }
              }}
              key={index}
              className={styles.card}
            >
              <div className={`${styles.flipCardInner} ${styles[serviceListBg[index]]}`}>
                <div className={styles.cardFront}>
                  <Image className={styles.serviceImg} src={e.img} alt="serviceImg" width={e.width} height={e.height} />
                  <div className={styles.serviceTitles}>
                    <h3>
                      {t(`home_services_card_title${index + 1}`, {
                        defaultValue: e.title,
                      })}
                    </h3>
                    <p>
                      {windowSize > 768 && (
                        <>
                          {t(`home_services_card_subtitle${index + 1}`, {
                            defaultValue: e.subtitle,
                          })}
                        </>
                      )}
                    </p>
                  </div>
                </div>
                <div className={styles.cardBack}>
                  <p>
                    {t(`home_services_card_desc${index + 1}`, {
                      defaultValue: e.desc,
                    })}
                  </p>
                  <span>
                    <Image src={arrow_right} alt="fleche" width={24} height={24} />
                    {' '}
                    {t('home_services_en-savoir-plus', 'En savoir plus')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.income}>
          <h3>
            <span className={styles.firstLine}>
              {t('home_services_t2', { defaultValue: 'Comment nous générons' })}
            </span>
            <span className={styles.secondLine}>
              {t('home_services_t3', { defaultValue: 'des revenus' })}
            </span>
          </h3>
          <ul className={styles.activities}>
            <li>
              <span>
                {t('home_services_t4', {
                  defaultValue: 'Création de sites optimisés',
                })}
              </span>
            </li>
            <li>
              <span>
                {t('home_services_t5', {
                  defaultValue: 'Génération de traffic sur votre site',
                })}
              </span>
            </li>
            <li>
              <span>
                {t('home_services_t6', {
                  defaultValue:
                    'Création et gérance de campagnes publicitaires puissantes',
                })}
              </span>
            </li>
            <li>
              <span>
                {t('home_services_t7', {
                  defaultValue:
                    'Collecte, analyse et déploiement des données marketing',
                })}
              </span>
            </li>
            <li>
              <span>
                {t('home_services_t8', {
                  defaultValue:
                    'Amélioration du message de marque et la conversion',
                })}
              </span>
            </li>
          </ul>
          <ul className={styles.questions}>
            <li>
              {t('home_services_t9', {
                defaultValue: "Envie d'améliorer vos performances ?",
              })}
            </li>
            <li className={styles.specificQuestion}>
              {t('home_services_t10', {
                defaultValue: 'Une idée de projet web ?',
              })}
            </li>
            <li>
              {t('home_services_t11', {
                defaultValue: "Besoin d'un conseil ?",
              })}
            </li>
          </ul>
          <div className={styles.arrowButton}>
            <Link href="/#contact" legacyBehavior>
              <a>
                <Image
                  src={SpinningArrow}
                  className={styles.spinningArrow}
                  alt="flèche"
                  width={24}
                  height={24}
                />
                <Image
                  src={ButtonForm}
                  className={styles.serviceToForm}
                  alt="bouton vers le formulaire"
                  width={24}
                  height={24}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
      {windowSize <= 768 && (
        <ModalCard
          handleClick={handleClick}
          classes={`${styles.type}${currentType} ${isClick ? styles.show : styles.unshow}`}
        >
          <Image className={styles.serviceImg} src={currentShow.img} alt="serviceImg" width={currentShow.width} height={currentShow.height} />
          <h3>{currentShow.title}</h3>
          <h4>{currentShow.subtitle}</h4>
          <p>{currentShow.desc}</p>
          <Link href={currentShow.url} legacyBehavior>
            <a>
              <Image src={arrow_right} alt="fleche" width={24} height={24} />
              {' '}
              {t('home_services_en-savoir-plus', 'En savoir plus')}
            </a>
          </Link>
        </ModalCard>
      )}
    </section>
  );
}
