import { useState } from 'react';
import styles from '/styles/faq.module.scss';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Pourquoi développer votre site Internet avec l’agence Visual & Ko ?",
      answer: "Nous pratiquons une transparence des prix pour que chaque client puisse connaître à l’avance ce qui sera inclus dans son forfait. Nous connaissons à l’avance le coût de la création de la maquette Figma jusqu’à la mise en ligne du site, ce qui nous permet de proposer des forfaits stricts. Un chargé de clientèle est dédié à votre projet et vous n’aurez qu’un seul interlocuteur du début à la fin.",
      link: "/developper-site-internet"
    },
    {
      question: "Sur quelles technologies repose notre développement Web ?",
      answer: "Notre expertise couvre la création de sites Internet et d'applications Web, des vitrines simples aux solutions robustes, en adoptant les technologies les plus modernes. Nous débutons avec HTML5, CSS3 et JavaScript. Nous continuons avec des frameworks et bibliothèques avancés tels que React, Next.js et Node.js. Pour la gestion des bases de données, nous utilisons MySQL et MongoDB. Nous intégrons également des technologies modernes comme TypeScript, GraphQL et Docker. Pour des projets moins complexes, nous pouvons également utiliser des CMS comme WordPress et Joomla.",
      link: "/developper-site-internet"
    },
    {
      question: "Pourquoi nous proposons directement d’acheter votre nom de domaine et héberger votre site sur nos serveurs ?",
      answer: "Il est plus logique pour nous, pour des questions de maintenance et de sécurité, d'héberger tous les sites au même endroit et de garantir une optimisation sur le long terme. Même avec ces forfaits, vous restez 100% propriétaire de votre site. Grâce à nos sauvegardes automatiques, vous pouvez migrer votre site vers un autre serveur personnel si besoin. Cependant, il est possible d’héberger votre site et d’acheter votre nom de domaine par vous-même. Dans ce cas, nous gérons directement le développement de votre site sur votre serveur.",
      link: "/nom-de-domaine-hebergement"
    },
    {
      question: "En quoi consiste notre service gestion Google Ads ?",
      answer: "Nous créons votre compte Google Ads et vous bénéficiez de 400 euros offerts par Google. Nous analysons les mots-clés importants de votre industrie et vos concurrents pour calculer le coût par clic et la dépense moyenne mensuelle. Chaque mois, nous fournissons des rapports et optimisons vos campagnes pour exclure les mauvaises régions et mots-clés non pertinents, assurant ainsi une rentabilité maximale de chaque euro investi.",
      link: "/gestion-google-ads"
    },
    {
      question: "En quoi consiste notre forfait mensuel référencement naturel ?",
      answer: "Dans chaque forfait de site Internet, nous installons les méta-titres et méta-descriptions sur chaque page et fournissons le sitemap à la console de recherche Google pour indexer vos pages. Notre forfait mensuel de référencement naturel consiste à générer des articles de 500 mots sur votre site pour créer des mots-clés organiques et améliorer votre référencement. De plus, nous ajoutons des backlinks de domaines externes pointant vers votre site pour augmenter votre nombre total de domaines référents, essentiel pour Google.",
      link: "/referencement-naturel"
    },
    {
      question: "En quoi consiste notre forfait maintenance et sécurité ?",
      answer: "Certains sites sont sujets à des attaques par des robots, notamment les sites e-commerce et WordPress. Nous mettons à jour tous vos plugins chaque mois pour éviter des problèmes de sécurité et des redirections frauduleuses. Nous vérifions continuellement l’optimisation de votre site et installons des mises en cache CDN pour maintenir les normes de performance de Google, contribuant ainsi positivement à votre référencement naturel.",
      link: "/maintenance-securite"
    },
    {
      question: "Qui est l’agence Visual & Ko ?",
      answer: "Visual & Ko est une agence composée de plusieurs experts dans leur domaine, garantissant des projets performants et conformes aux standards modernes. Nous avons déjà développé une centaine de projets et nos avis clients parlent d’eux-mêmes. Pour un devis personnalisé, contactez-nous à contact@visualko.com ou au 07 67 74 43 43.",
      link: "/agence-visual-ko"
    }
  ];

  return (
    <section className={styles.faqcontainertitle}>
      <h2>Foire aux questions</h2>
      <p>Tout comprendre sur nos forfaits et nos offres</p>
      <div className={styles.faqcontainer}>
        {faqData.map((item, index) => (
          <div key={index} className={styles.faqitem}>
            <button onClick={() => toggle(index)} className={styles.faqquestion}>
              {item.question}
              <span className={openIndex === index ? styles.open : ''}>{openIndex === index ? '-' : '+'}</span>
            </button>
            <div className={`${styles.faqanswer} ${openIndex === index ? styles.open : ''}`}>
              {item.answer} <a href={item.link}>En savoir plus</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
