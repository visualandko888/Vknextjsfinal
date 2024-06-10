import { useState } from 'react';
import '@assets/css/page/gads/section1.scss';
import card1 from '@assets/images/card-1-gads.png';
import card2 from '@assets/images/card-2-gads.png';
import card3 from '@assets/images/card-3-gads.png';
import { useTranslation } from 'react-i18next';

export default function Section1() {
  const { t } = useTranslation(); // Importation de la traduction
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const strategiesData = [
    {
      title: t('gads_section1_t6', {
        defaultValue: 'Taux de Conversion Élevés',
      }),
      content: t('gads_section1_t7', {
        defaultValue:
          "Explorez des taux de conversion qui surpassent les normes de l'industrie, transformant chaque clic en opportunité précieuse.",
      }),
    },
    {
      title: t('gads_section1_t8', { defaultValue: 'Visibilité Instantanée' }),
      content: t('gads_section1_t9', {
        defaultValue:
          "Voyez votre marque briller au sommet des résultats de recherche, captant l'attention instantanée de votre audience.",
      }),
    },
    {
      title: t('gads_section1_t10', { defaultValue: 'Contrôle du budget' }),
      content: t('gads_section1_t11', {
        defaultValue:
          'Gérez votre investissement avec précision, définissant des limites qui garantissent un retour sur investissement optimal.',
      }),
    },
    {
      title: t('gads_section1_t12', { defaultValue: 'ROI Élevé' }),
      content: t('gads_section1_t13', {
        defaultValue:
          'Faites croître votre entreprise avec un retour sur investissement exceptionnel, transformant chaque dollar dépensé en opportunité de croissance.',
      }),
    },
    {
      title: t('gads_section1_t14', { defaultValue: 'Ciblage Précis' }),
      content: t('gads_section1_t15', {
        defaultValue:
          'Atteignez exactement les audiences qui comptent, établissant des connexions significatives avec ceux qui sont le plus susceptibles de se convertir.',
      }),
    },
    {
      title: t('gads_section1_t16', { defaultValue: 'Flexibilité' }),
      content: t('gads_section1_t17', {
        defaultValue:
          "Adaptez-vous à l'évolution du marché avec aisance, ajustant votre stratégie en temps réel pour répondre aux opportunités émergentes.",
      }),
    },
    {
      title: t('gads_section1_t18', { defaultValue: 'Mesurabilité' }),
      content: t('gads_section1_t19', {
        defaultValue:
          'Analysez chaque campagne avec une clarté cristalline, évaluant les performances et affinant votre approche pour des résultats encore meilleurs.',
      }),
    },
  ];

  return (
    <section className="section1">
      <div className="left">
        <div className="cardContent">
          <img src={card1} alt="carte 1" />
          <img src={card2} alt="carte 2" />
          <img src={card3} alt="carte 3" />
        </div>
      </div>

      <div className="right1">
        <p>
          {t('gads_section1_t1', {
            defaultValue: 'Avec une satisfaction égale, nous dévoilons les',
          })}
          {' '}
          <strong>
            {t('gads_section1_t2', {
              defaultValue: 'performances exceptionnelles',
            })}
          </strong>
          {' '}
          {t('gads_section1_t3', {
            defaultValue:
              'de Google Ads, une solution qui transforme le potentiel de votre présence en ligne, concrétisant vos aspirations numériques en',
          })}
          {' '}
          <strong>
            {t('gads_section1_t4', { defaultValue: 'réalité immersive.' })}
          </strong>
        </p>
        <p className="italic">
          {t('gads_section1_t5', {
            defaultValue:
              "Les avantages d'utiliser Google Ads dans vos stratégies de marketing en ligne :",
          })}
        </p>
      </div>
      <div className="right2">
        <div className="strategies">
          {strategiesData.map((strategy, index) => (
            <div
              key={index}
              className={`strategy ${activeIndex === index ? 'active' : ''}`}
              role="button"
              tabIndex={0}
              onKeyDown={() => toggleAccordion(index)}
              onClick={() => toggleAccordion(index)}
            >
              {strategy.title}
              <p className={activeIndex === index ? 'open' : ''}>
                {strategy.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
