import Image from 'next/image';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/GoogleAds.module.scss';
import Hero from '../src/components/GAds/Hero';
import Reviews from '../src/components/Home/Reviews';
import Faq from '../src/components/Home/Faq';
import Contact from '../src/components/Home/Contact';
import Rea from '../src/components/Home/Rea';
import Fus from '/public/images/fusee.gif';

const CreationSite = () => {
  const [forfaits, setForfaits] = useState([]);
  const [maintenance, setMaintenance] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedForfait, setSelectedForfait] = useState(null);
  const [formData, setFormData] = useState({
    societe: '',
    email: '',
    telephone: '',
  });

  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    axios.get('/datas/forfaitsweb.json')
      .then((res) => {
        setForfaits(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    axios.get('/datas/forfaitsmaintenance.json')
      .then((res) => {
        setMaintenance(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(`.${styles.appear}`);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const currentScrollPos = window.pageYOffset;
        if (entry.isIntersecting && currentScrollPos > prevScrollPos) {
          entry.target.classList.add(styles.active);
        }
        setPrevScrollPos(currentScrollPos);
      });
    }, { threshold: 0.1 });

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, [prevScrollPos]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        forfait: selectedForfait.titre,
      }),
    });

    if (response.ok) {
      alert(`Demande envoyée pour le forfait: ${selectedForfait.titre}`);
    } else {
      alert('Une erreur est survenue. Veuillez réessayer.');
    }

    setShowModal(false);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollFraction = scrollPosition / maxScroll;

    const startColor = [87, 158, 176];
    const endColor = [147, 163, 201]; // Change this to your desired end color

    const newColor = startColor.map((start, index) => {
      const end = endColor[index];
      return Math.round(start + (end - start) * scrollFraction);
    });

    const newGradient = `linear-gradient(90deg, rgba(${newColor.join(',')},1) 0%, rgba(${newColor.join(',')},0.7) 30%, rgba(${newColor.join(',')},1) 100%)`;

    document.documentElement.style.setProperty('--gradient-start', `rgba(${newColor.join(',')}, 1)`);
    document.documentElement.style.setProperty('--gradient-middle', `rgba(${newColor.join(',')}, 0.7)`);
    document.documentElement.style.setProperty('--gradient-end', `rgba(${newColor.join(',')}, 1)`);
  };

  // window.addEventListener('scroll', handleScroll);

  return (
    <main className={styles.main}>
      <Hero />
      <div className={`${styles.container} ${styles.appear}`}>
        <h1>Nos Forfaits Création de Site Internet</h1>
        <p>Découvrez nos différents forfaits pour la création de votre site internet.</p>
        <div className={styles.forfaits}>
          {forfaits.map((forfait) => (
            <div key={forfait.id} className={styles.forfait}>
              <h2>{forfait.titre} {forfait.prix}</h2>
              <p>{forfait.description}</p>
              <ul>
                {forfait.elements.map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
              <button onClick={() => { setSelectedForfait(forfait); setShowModal(true); }}>Choisir ce forfait</button>
            </div>
          ))}
        </div>
      </div>
      <div id="maintenance" className={`${styles.container} ${styles.appear}`}>
        <h1>Nos Forfaits Maintenance et sécurité</h1>
        <p>Découvrez nos différents forfaits pour la maintenance, mises à jour et sécurité de votre site.</p>
        <div className={styles.forfaits}>
          {maintenance.map((maintenancePackage) => (
            <div key={maintenancePackage.id} className={styles.forfait}>
              <h2>{maintenancePackage.titre} {maintenancePackage.prix}</h2>
              <p>{maintenancePackage.description}</p>
              <ul>
                {maintenancePackage.elements.map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
              <button onClick={() => { setSelectedForfait(maintenancePackage); setShowModal(true); }}>Choisir ce forfait</button>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.section}>
        <h1>Propulsez votre entreprise grâce à un site web professionnel</h1>
      </div>
      <section className={styles.pres}> 
        <section className={`${styles.presentation} ${styles.appear}`}>
          <h2>Pourquoi Investir dans un Site Web ?</h2>
          <div className={styles.image}>
              <Image src="/images/website_creation.gif" alt="Création de site web" width={200} height={200}/>
            </div>
          <div className={`${styles.section} ${styles.appear}`}>
            <div className={styles.text}>
              <h3>Attirer de Nouveaux Clients et Augmenter Vos Ventes</h3>
              <p>Un site web professionnel est essentiel pour attirer de nouveaux clients et augmenter vos ventes en ligne. Il vous permet de générer des leads, de convertir des prospects en clients, et d’améliorer votre visibilité sur le web.</p>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.text}>
              <h3>Obtenir de Nouveaux Prospects Rapidement</h3>
              <p>Avec un site web optimisé, vous pouvez recevoir des demandes de contact et des prospects intéressés par vos services en très peu de temps. Pour les sites de vente en ligne, un site bien conçu peut générer des ventes rapidement.</p>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.text}>
              <h3>Visibilité Immédiate sur les Moteurs de Recherche</h3>
              <p>Un site web optimisé SEO permet à vos pages d’apparaître en haut des résultats de recherche, ce qui vous permet de toucher un large public qualifié instantanément.</p>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.text}>
              <h3>Ciblage Précis et Pertinent</h3>
              <p>Avec un site web bien structuré, vous pouvez cibler vos contenus selon divers critères : mots-clés, localisation, données démographiques, intérêts et comportements d’achat. Cela vous aide à atteindre les personnes les plus susceptibles d’être intéressées par vos produits ou services.</p>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.text}>
              <h3>Flexibilité et Personnalisation</h3>
              <p>Un site web professionnel vous offre la flexibilité de présenter vos produits et services de manière unique. Vous pouvez personnaliser chaque aspect du site pour répondre aux besoins spécifiques de votre entreprise.</p>
            </div>
          </div>
        </section>
        <section className={`${styles.presentation} ${styles.appear}`}>
          <h2>L'Expertise d'une Agence de Création de Site Web</h2>
          <div className={styles.image}>
              <Image src="/images/website_creation_expert.gif" alt="Expertise en création de site web" width={200} height={200}/>
            </div>
          <div className={styles.section}>
            <div className={styles.text}>
              <h3>Maximiser Votre Retour sur Investissement (ROI)</h3>
              <p>L'expertise d'une agence de création de site web est essentielle pour optimiser votre ROI. Elle maîtrise les outils nécessaires pour créer des sites efficaces et attirer un trafic qualifié sur votre site.</p>
              </div>
          </div>
          <div className={styles.section}>
            <div className={styles.text}>
              <h3>Gain de Temps et Efficacité</h3>
              <p>La création d'un site web est un processus complexe nécessitant une attention minutieuse. Confier la gestion de votre projet à une agence spécialisée vous permet de vous concentrer sur votre cœur de métier, tout en bénéficiant d'une expertise avancée.</p>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.text}>
              <h3>Outils Avancés et Analyses Approfondies</h3>
              <p>Les agences de création de site web utilisent des outils avancés pour analyser et optimiser vos sites en continu, assurant ainsi un rendement maximal.</p>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.text}>
              <h3>Expérience et Optimisation Financière</h3>
              <p>L'expérience d'une agence permet d'optimiser chaque euro dépensé, vous conseillant sur l'augmentation ou la réduction de votre budget en fonction des besoins et des tendances de votre secteur.</p>
            </div>
          </div>
        </section>
        <section className={`${styles.presentation} ${styles.appear}`}>
          <h2>Comment Travaille une Agence de Création de Site Web ?</h2>
          <div className={styles.image}>
              <Image src="/images/website_creation_process.gif" alt="Processus de création de site web" width={200} height={200}/>
            </div>
          <div className={styles.section}>
            <div className={styles.text}>
              <h3>Cadrage et Stratégie</h3>
              <p>Un expert en création de site web analyse votre marché, vos objectifs et votre public cible pour établir une stratégie sur mesure, axée sur des mots-clés et segments d’audience pertinents afin d’optimiser votre ROI.</p>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.text}>
              <h3>Mise en Place et Création du Site</h3>
              <p>La conception d’un site percutant, en phase avec votre marque, et l’intégration de fonctionnalités clés sont des éléments essentiels pour augmenter la visibilité et l’interaction avec vos utilisateurs.</p>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.text}>
              <h3>Analyse et Optimisation</h3>
              <p>Après le lancement, l'agence surveille les performances du site, effectue des ajustements, teste de nouvelles stratégies et optimise les contenus et les fonctionnalités pour maximiser les résultats.</p>
            </div>
          </div>
        </section>
      </section>
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={() => setShowModal(false)}>&times;</span>
            <h2>Demande de Forfait : {selectedForfait.titre}</h2>
            <h4>Merci de compléter vos informations, notre service commercial prendra un rendez-vous avec vous pour confirmer vos informations et démarrer votre projet de création de site internet !</h4>
            <form className={styles.form} onSubmit={handleSubmit}>
              <label>
                Nom de la Société:
                <input type="text" name="societe" value={formData.societe} onChange={handleInputChange} required />
              </label>
              <label>
                Adresse Email:
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
              </label>
              <label>
                Numéro de Téléphone:
                <input type="tel" name="telephone" value={formData.telephone} onChange={handleInputChange} required />
              </label>
              <button type="submit">Envoyer</button>
            </form>
          </div>
        </div>
      )}
      <Rea />
      <Reviews />
      <Faq />
      <Contact />
    </main>
  );
};

export default CreationSite;
