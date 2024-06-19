import { useState } from 'react';
import styles from '../styles/GoogleAds.module.scss';
import Hero from '../src/components/GAds/Hero'; // Correction de l'importation
import Reviews from '../src/components/Home/Reviews';
import Faq from '../src/components/Home/Faq';
import Contact from '../src/components/Home/Contact';
// import HelmetMeta from '../src/components/Helmet/HelmetMeta';

export async function getStaticProps() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  try {
    const res = await fetch(`${baseUrl}/datas/forfaits.json`);
    const forfaits = await res.json();
    return {
      props: { forfaits },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { forfaits: [] },
    };
  }
}

const GoogleAds = ({ forfaits }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedForfait, setSelectedForfait] = useState(null);
  const [formData, setFormData] = useState({
    societe: '',
    email: '',
    telephone: '',
  });

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

  return (
    <main>
      {/* <HelmetMeta title={title} description={description} /> */}
      <Hero />
      <section className={styles.presentation}>
        <h2>À propos de notre service Google Ads</h2>
        <p>
          Chez <strong>Visual&Ko</strong>, nous sommes spécialisés dans la <strong>création</strong> et la <strong>gestion de campagnes Google Ads</strong> 
          efficaces qui maximisent votre <strong>retour sur investissement</strong>. Notre équipe d'experts utilise des <strong>stratégies avancées</strong> 
          pour cibler les bonnes audiences et obtenir les meilleurs résultats possibles pour votre entreprise.
        </p>
        <p>
          Nous offrons une <strong>gamme complète de services</strong>, y compris :
        </p>
        <ul className={styles.servicesList}>
          <li><strong>Recherche de mots-clés</strong> pour identifier les termes les plus pertinents pour votre secteur.</li>
          <li><strong>Création d'annonces</strong> attrayantes et persuasives pour capter l'attention de vos clients potentiels.</li>
          <li><strong>Optimisation des campagnes</strong> pour améliorer continuellement vos performances et réduire vos coûts.</li>
          <li><strong>Analyse des performances</strong> détaillée pour vous fournir des insights clairs et exploitables.</li>
        </ul>
        <p>
          Que vous soyez une <strong>petite entreprise</strong> ou une <strong>grande organisation</strong>, nous avons les outils et l'expertise pour vous aider 
          à atteindre vos <strong>objectifs publicitaires</strong>. Faites confiance à <strong>Visual&Ko</strong> pour transformer vos investissements publicitaires en succès mesurables.
        </p>
      </section>

      <div className={styles.container}>
        <h1>Nos Forfaits Google Ads</h1>
        <p>Découvrez nos différents forfaits pour la gestion de vos campagnes Google Ads.</p>
        <div className={styles.forfaits}>
          {forfaits.map((forfait) => (
            <div key={forfait.id} className={styles.forfait}>
              <h2>{forfait.titre}</h2>
              <p>{forfait.description}</p>
              <ul>
                {forfait.elements.map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
              <p><strong>{forfait.prix}</strong></p>
              <button onClick={() => { setSelectedForfait(forfait); setShowModal(true); }}>Acheter</button>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={() => setShowModal(false)}>&times;</span>
            <h2>Demande de Forfait: {selectedForfait.titre}</h2>
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
