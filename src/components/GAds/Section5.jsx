import { useRef, useState, useEffect } from 'react';
import '@assets/css/page/gads/section5.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

export default function Section5() {
  const { t } = useTranslation(); // Importation de la traduction

  const [dotTop, setDotTop] = useState('0');
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const elementRef = useRef(null);
  const elementRefP1 = useRef(null);
  const elementRefP2 = useRef(null);
  const elementRefT2 = useRef(null);
  const elementRefD1 = useRef(null);

  const checkPosition = () => {
    const element = elementRef.current;
    const elementP1 = elementRefP1.current;
    const elementP2 = elementRefP2.current;
    const elementT2 = elementRefT2.current;
    const elementD1 = elementRefD1.current;

    const rect = element.getBoundingClientRect();
    const rectP1 = elementP1.getBoundingClientRect();
    const rectP2 = elementP2.getBoundingClientRect();
    const rectT2 = elementT2.getBoundingClientRect();

    const sTop = rect.top;
    const p1Top = rectP1.top - sTop;
    const p1Height = elementP1.clientHeight;
    const p2Top = rectP2.top - sTop;
    const p2Height = elementP2.clientHeight;
    const t2Top = rectT2.top - sTop;
    const d1Height = elementD1.clientHeight;

    const posP1_1 = p1Top + p1Height;
    const posP1 = posP1_1 + (p2Top - posP1_1) / 2 - d1Height / 2;

    const posP2_1 = p2Top + p2Height;
    const posP2 = posP2_1 + (t2Top - posP2_1) / 2 - d1Height / 2;

    if (element) {
      const elementTop = rect.top;
      if (elementTop > 150) {
        setDotTop('0px');
      } else if (elementTop > -250) {
        setDotTop(`${posP1}px`);
      } else {
        setDotTop(`${posP2}px`);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkPosition);
    return () => {
      window.removeEventListener('scroll', checkPosition);
    };
  }, [windowSize]);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
      // console.log(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section ref={elementRef} className="section5">
      <div ref={elementRefD1} style={{ top: dotTop }} className="dot" />
      <div className="trait" />
      <p ref={elementRefP1}>
        {t('gads_section5_t1', {
          defaultValue: 'Notre service de marketing digital combine',
        })}
        {' '}
        <b>{t('gads_section5_t2', { defaultValue: 'innovation,' })}</b>
        {' '}
        <span className="font">
          {t('gads_section5_t3', { defaultValue: 'esthétique' })}
        </span>
        {' '}
        {t('gads_section5_t4', { defaultValue: 'et' })}
        {' '}
        <b>{t('gads_section5_t5', { defaultValue: 'fonctionnalité' })}</b>
        {' '}
        {t('gads_section5_t6', {
          defaultValue:
            'pour propulser votre entreprise en ligne. Que vous souhaitiez établir une présence ou transformer votre stratégie,',
        })}
        {' '}
        <span class="blue">
          {t('gads_section5_t7', {
            defaultValue: 'nous réalisons vos ambitions',
          })}
        </span>
        .
      </p>
      <p ref={elementRefP2}>
        {t('gads_section5_t8', {
          defaultValue:
            'Avec Google Ads via notre service, adoptez une approche stratégique de la publicité en ligne. Des annonces ciblées et des campagnes optimisées',
        })}
        {' '}
        <span className="blue">
          {t('gads_section5_t9', {
            defaultValue: 'augmentent visibilité et conversions',
          })}
        </span>
        {t('gads_section5_t10', {
          defaultValue:
            '. Notre équipe qualifiée est là pour briller dans le paysage numérique,',
        })}
        <span className="bulle">
          {t('gads_section5_t11', {
            defaultValue: 'créant une présence durable.',
          })}
        </span>
      </p>
      <div ref={elementRefT2} className="trait2" />
      <FontAwesomeIcon className="faIcon" icon={faChevronDown} />
    </section>
  );
}
