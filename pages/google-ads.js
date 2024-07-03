import Image from 'next/image';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Fus from '/public/images//fusee.gif';
import styles from '../styles/GoogleAds.module.scss';
import Hero from '../src/components/GAds/Hero';
import Reviews from '../src/components/Home/Reviews';
import Faq from '../src/components/Home/Faq';
import Contact from '../src/components/Home/Contact';


const GoogleAds = () => {
  const [forfaits, setForfaits] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedForfait, setSelectedForfait] = useState(null);
  const [formData, setFormData] = useState({
    societe: '',
    email: '',
    telephone: '',
  });

  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    axios.get('/datas/forfaitsga.json')
      .then((res) => {
        setForfaits(res.data);
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
      const endColor = [147,163,201]; // Change this to your desired end color

      const newColor = startColor.map((start, index) => {
        const end = endColor[index];
        return Math.round(start + (end - start) * scrollFraction);
      });

      const newGradient = `linear-gradient(90deg, rgba(${newColor.join(',')},1) 0%, rgba(${newColor.join(',')},0.7) 30%, rgba(${newColor.join(',')},1) 100%)`;

      document.documentElement.style.setProperty('--gradient-start', `rgba(${newColor.join(',')}, 1)`);
      document.documentElement.style.setProperty('--gradient-middle', `rgba(${newColor.join(',')}, 0.7)`);
      document.documentElement.style.setProperty('--gradient-end', `rgba(${newColor.join(',')}, 1)`);
    };

    window.addEventListener('scroll', handleScroll);
  
  
    

  return (
    <main className={styles.mainga}>
    <Hero />
    <div className={`${styles.container} ${styles.appear}`}> 
        <h1>Nos Forfaits Google Ads <Image className={styles.fusee2} src={Fus} alt="Croissance des clients" width={90} height={90}/></h1>
        <p>Découvrez nos différents forfaits pour la gestion de vos campagnes Google Ads.</p>
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
              
              <button onClick={() => { setSelectedForfait(forfait); setShowModal(true); }}>Lancer ma compagne</button>
            </div>
          ))}
        </div>
      </div>
    <div className={styles.section}>
    <h1>Propulser votre entreprise grâce à Google ads</h1>
    </div>
    <section className={styles.pres}> 
      {/* <HelmetMeta title={title} description={description} /> */}
      <section className={`${styles.presentation} ${styles.appear}`}>
        <h2>Pourquoi Investir dans Google Ads ?</h2>
        <div className={styles.image}>
            <Image  src="/images/adsgif.gif" alt="Croissance des clients" width={200} height={200}/>
          </div>
        <div className={`${styles.section} ${styles.appear}`}>
          <div className={styles.text}>
            <h3>Attirer de Nouveaux Clients et Booster Vos Ventes</h3>
            <p>Les Google Ads sont un outil incontournable pour attirer de nouveaux clients et augmenter vos ventes en ligne. Ils permettent de générer des leads, de convertir des prospects en clients, et d’améliorer votre visibilité sur le web.</p>
            
          </div>
          {/* <div className={styles.image}>
            <Image  src="/images/adsgif.gif" alt="Croissance des clients" width={500} height={500}/>
          </div> */}
        </div>
        <div className={styles.section}>
          <div className={styles.text}>
            <h3>Obtenir de Nouveaux Prospects Rapidement</h3>
            <p>Avec Google Ads, vous pouvez recevoir des appels et des formulaires de prospects intéressés par vos services en très peu de temps. Pour les sites de vente en ligne, Google Ads peut générer des ventes en moins de 24 heures.</p>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.text}>
            <h3>Visibilité Immédiate sur les Moteurs de Recherche</h3>
            <p>Lorsque vous lancez une campagne Google Ads, vos annonces apparaissent en haut des résultats de recherche Google, ce qui vous permet de toucher un large public qualifié instantanément.</p>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.text}>
            <h3>Ciblage Précis et Pertinent</h3>
            <p>Google Ads vous offre la possibilité de cibler vos annonces selon divers critères : mots-clés, localisation, données démographiques, intérêts et comportements d’achat. Cela vous aide à atteindre les personnes les plus susceptibles d’être intéressées par vos produits ou services.</p>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.text}>
            <h3>Flexibilité Budgétaire</h3>
            <p>Avec Google Ads, vous contrôlez entièrement votre budget. Vous pouvez définir un budget quotidien ou mensuel et ne payez que lorsque quelqu’un clique sur votre annonce. Cela permet d’ajuster vos dépenses en fonction de vos besoins et objectifs.</p>
          </div>
        </div>
      </section>
      <section className={`${styles.presentation} ${styles.appear}`}>
        <h2>L'Expertise d'une Agence Google Ads </h2>
        <div className={styles.image}>
            <Image  src="/images/adsgif3.gif" alt="Croissance des clients" width={200} height={200}/>
          </div>
        <div className={styles.section}>
          <div className={styles.text}>
            <h3>Maximiser Votre Retour sur Investissement (ROI)</h3>
            <p>L'expertise d'une agence Google Ads est essentielle pour optimiser votre ROI. Elle maîtrise les outils nécessaires pour créer des campagnes efficaces et attirer un trafic qualifié sur votre site.</p>
            </div>
            {/* <div className={styles.image}>
            <Image  src="/images/adsgif3.gif" alt="Croissance des clients" width={500} height={500}/>
          </div> */}
        </div>
        <div className={styles.section}>
          <div className={styles.text}>
            <h3>Gain de Temps et Efficacité</h3>
            <p>Google Ads est un outil complexe nécessitant une configuration minutieuse. Confier la gestion de vos campagnes à une agence spécialisée vous permet de vous concentrer sur votre cœur de métier, tout en bénéficiant d'une expertise avancée.</p>
          </div>
          
        </div>
        <div className={styles.section}>
          <div className={styles.text}>
            <h3>Outils Avancés et Analyses Approfondies</h3>
            <p>Les agences Google Ads utilisent des outils avancés comme SEMrush, SEISO et Catchr pour analyser et optimiser vos campagnes en continu, assurant ainsi un rendement maximal.</p>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.text}>
            <h3>Expérience et Optimisation Financière</h3>
            <p>L'expérience d'une agence permet d'optimiser chaque euro dépensé, vous conseillant sur l'augmentation ou la réduction de votre budget en fonction des saisonnalités et des tendances de votre secteur.</p>
          </div>
        </div>
      </section>
      <section className={`${styles.presentation} ${styles.appear}`}>
        <h2>Comment Travaille une Agence Google Ads ? </h2>
        <div className={styles.image}>
            <Image  src="/images/adsgif2.gif" alt="Croissance des clients" width={200} height={200}/>
          </div>
        <div className={styles.section}>
          <div className={styles.text}>
            <h3>Cadrage et Stratégie</h3>
            <p>Un expert Google Ads analyse votre marché, vos objectifs et votre public cible pour établir une stratégie sur mesure, axée sur des mots-clés et segments d’audience pertinents afin d’optimiser votre ROI.</p>
          
          </div>
          {/* <div className={styles.image}>
            <Image  src="/images/adsgif2.gif" alt="Croissance des clients" width={500} height={500}/>
          </div> */}

        </div>
        <div className={styles.section}>
          <div className={styles.text}>
            <h3>Mise en Place et Création des Annonces</h3>
            <p>La rédaction d’annonces percutantes, en phase avec votre marque, et l’intégration d’extensions d’annonces sont des éléments clés pour augmenter la visibilité et le taux de clics.</p>
          </div>
          
        </div>
        <div className={styles.section}>
          <div className={styles.text}>
            <h3>Analyse et Optimisation</h3>
            <p>Après le lancement, l'agence surveille les performances des annonces, effectue des ajustements, teste de nouvelles stratégies et optimise les mots-clés et les extensions d’annonces pour maximiser les résultats.</p>
          </div>
        </div>
      </section>
      </section>

      

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={() => setShowModal(false)}>&times;</span>
            <h2>Demande de Forfait : {selectedForfait.titre}</h2>
            <h4>Merci de compléter vos informations, notre service commercial prendra un rendez-vous avec vous pour confirmer vos informations et démarrer votre campagne google ads !</h4>
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
      
      <Reviews />
      <Faq />
      <Contact />
    
    </main>
  );
};

export default GoogleAds;
