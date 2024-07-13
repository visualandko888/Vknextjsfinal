import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import SeoIcon from '/public/images/card-seo-icone.svg';
import SeaIcon from '/public/images/card-sea-icone.svg';
import GoogleIcon from '/public/images/card-google-icone.png';
import WebsiteIcon from '/public/images/card-website-icone.svg';
import UxDesignIcon from '/public/images/card-uxdesign-icone.svg';
import SecurityIcon from '/public/images/card-security-icone.png';
import SpinningArrow from '/public/images/vector-spinning-arrow.png';
import ButtonForm from '/public/images/bouton-services-form.png';
import styles from '/styles/services.module.scss'; // Importer les styles comme un module
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ModalCard from '/src/components/Elements/ModalCard';
import arrow_right from '/public/images/arrow_right.png';

export default function Services() {
  const router = useRouter();
  const { t } = useTranslation();
  const [windowSize, setWindowSize] = useState(null); // (1) Initialiser à null pour indiquer qu'il n'a pas encore été défini
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
    },
    {
      title: 'Référencement naturel',
      subtitle: 'Seo',
      desc: 'Augmentez la visibilité de votre site en optimisant votre contenu',
      url: '/referencement-naturel',
      img: SeoIcon,
      id: 1,
    },
    {
      title: 'Google Ads',
      subtitle: 'Plateforme publicitaire',
      desc: 'Diffuser vos publicités pour passer en top position grâce à Google ads',
      url: '/google-ads',
      img: GoogleIcon,
      id: 3,
    },
    {
      title: 'Gestions de vos réseaux sociaux',
      subtitle: 'Gestions de vos réseaux sociaux',
      desc: 'Nous créons du contenu pour instagram et autres médias pour booster votre visibilité',
      url: '/gestion-des-reseaux',
      img: SeaIcon,
      id: 2,
    },
    {
      title: 'Maintenance sécurité',
      subtitle: 'Surveillance - Résolution',
      desc: "S'assurer que votre site soit toujours fonctionnel, sécurisé et à jour",
      url: '/developpement-web#maintenance',
      img: SecurityIcon,
      id: 6,
    },
    {
      title: 'Audit gratuit',
      subtitle: 'Analyse de votre projet',
      desc: "Nous analysons votre projet et proposons des recommandations",
      url: '/contactez-nous',
      img: SeoIcon,
      id: 1,
    },
    
  ];

  const handleClick = (type, index) => {
    setIsClick(type);
    if (index > 0) {
      setCurrentShow(serviceList[index - 1]);
      setCurrentType(index - 1 === 0 || index - 1 === 3 || index - 1 === 4 ? 1 : 2);
    }
  };

  useEffect(() => {
    // (2) Utiliser une fonction asynchrone pour définir la taille de la fenêtre après le montage du composant
    const updateWindowSize = () => {
      setWindowSize(window.innerWidth);
    };

    updateWindowSize(); // Initialiser lors du montage
    window.addEventListener('resize', updateWindowSize);

    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  const goTo = (url) => {
    router.push(url);
  };

  const serviceListBg = [
    styles.bgWhite,
    styles.bgBlue,
    styles.bgBlue,
    styles.bgWhite,
    `${styles.bgWhite} ${styles.imgcenter}`,
    `${styles.bgBlue} ${styles.imgcenter}`,
  ];

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
      let currentX = matrixValues ? parseFloat(matrixValues[1].split(', ')[4]) : 0;

      scrollDirectionRef.current.style.transform = `translateX(${currentX + deltaY}px)`;
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <section id="services" className={styles.services}>
      <div className={styles.rel}>
      <h2 ref={scrollDirectionRef} className={styles.h2scroll}>
  Notre passion
</h2>
      <h2 className={styles.servicesTitle}>
        {t('home_services_t1', { defaultValue: 'Nos services' })}
      </h2>
      
</div>

      <div className={styles.columns}>
      <div className={styles.servicesList}>
      {serviceList.map((e, index) => (
        <div
          role="button"
          tabIndex={0}
          onKeyDown={() => {
            handleClick(true, index + 1);
            if (windowSize > 768) {
              goTo(e.url);
            }
          }}
          onClick={() => {
            handleClick(true, index + 1);
            if (windowSize > 768) {
              goTo(e.url);
            }
          }}
          key={index}
          className={styles.card}
        >
          <div className={`${styles.flipCardInner} ${serviceListBg[index]}`}>
            <div className={styles.cardFront}>
              <Image className={styles.serviceImg} src={e.img} alt="serviceImg" />
              <div className={styles.serviceTitles}>
                <h3 className={styles.serviceTitle}>
                  {t(`home_services_card_title${index + 1}`, {
                    defaultValue: e.title,
                  })}
                </h3>
                <p className={styles.serviceSubtitle}>
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
              <p className={styles.serviceDesc}>
                {t(`home_services_card_desc${index + 1}`, {
                  defaultValue: e.desc,
                })}
              </p>
              {e.url && (
                <Link href={e.url} legacyBehavior>
                  <a className={styles.learnMore}>
                    {t('home_services_en-savoir-plus', 'En savoir plus')}
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
        <div className={styles.income}>
          <h3 className={styles.incomeTitle}>
            <span className={styles.firstLine}>
              {t('home_services_t2', { defaultValue: 'Comment nous générons' })}
            </span>
            <span className={styles.secondLine}>
              {t('home_services_t3', { defaultValue: 'des revenus pour nos clients ?' })}
            </span>
          </h3>
          <ul className={styles.activities}>
            <li className={styles.activity}>
              <span>
                {t('home_services_t4', {
                  defaultValue: 'Création de sites optimisés',
                })}
              </span>
            </li>
            <li className={styles.activity}>
              <span>
                {t('home_services_t5', {
                  defaultValue: 'Génération de traffic sur votre site',
                })}
              </span>
            </li>
            <li className={styles.activity}>
              <span>
                {t('home_services_t6', {
                  defaultValue:
                    'Création et gérance de campagnes publicitaires puissantes',
                })}
              </span>
            </li>
            <li className={styles.activity}>
              <span>
                {t('home_services_t7', {
                  defaultValue:
                    'Collecte, analyse et déploiement des données marketing',
                })}
              </span>
            </li>
            <li className={styles.activity}>
              <span>
                {t('home_services_t8', {
                  defaultValue:
                    'Amélioration du message de marque et la conversion',
                })}
              </span>
            </li>
          </ul>
          <ul className={styles.questions}>
            <li className={styles.question}>
              {t('home_services_t9', {
                defaultValue: "Envie d'améliorer vos performances ?",
              })}
            </li>
            <li className={`${styles.question} ${styles.specificQuestion}`}>
              {t('home_services_t10', {
                defaultValue: 'Une idée de projet web ?',
              })}
            </li>
            <li className={styles.question}>
              {t('home_services_t11', {
                defaultValue: "Besoin d'un conseil ?",
              })}
            </li>
          </ul>
          <div className={styles.arrowButton}>
            <Link href="/#contact" legacyBehavior>
              <a className={styles.arrowButtonLink}>
                <Image
                  src={SpinningArrow}
                  className={styles.spinningArrow}
                  alt="flèche"
                />
                <Image
                  src={ButtonForm}
                  className={styles.serviceToForm}
                  alt="bouton vers le formulaire"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
      {windowSize && windowSize <= 768 && (
        <ModalCard
          handleClick={handleClick}
          classes={`${styles.modalCard} type${currentType} ${isClick ? styles.modalShow : styles.modalUnshow}`}
        >
          <div className={styles.modalContent}>
            {currentShow.img && <Image className={styles.serviceImg} src={currentShow.img} alt="serviceImg" />}
            <h3 className={styles.modalTitle}>{currentShow.title}</h3>
            <h4 className={styles.modalSubtitle}>{currentShow.subtitle}</h4>
            <p className={styles.modalDesc}>{currentShow.desc}</p>
            {currentShow.url && (
              <Link href={currentShow.url} legacyBehavior>
                <a className={styles.modalLink}>
                 
                  {t('home_services_en-savoir-plus', 'En savoir plus')}
                </a>
              </Link>
            )}
          </div>
        </ModalCard>
      )}
    </section>
  );
}
