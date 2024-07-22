import Image from 'next/image';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '/styles/Forfaitsweb.module.scss';
import Fus from '/public/images/fusee.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

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
  const [expandedForfaits, setExpandedForfaits] = useState({});
  const [expandedMaintenance, setExpandedMaintenance] = useState({});

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

  const toggleExpandForfait = (id) => {
    setExpandedForfaits((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const toggleExpandMaintenance = (id) => {
    setExpandedMaintenance((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <main className={styles.main}>
      <div className={`${styles.container} ${styles.appear}`}>
        <h1>Nos Forfaits Création de Site Internet</h1>
        <p>Découvrez nos différents forfaits pour la création de votre site internet.</p>
        <div className={styles.forfaits}>
          {forfaits.map((forfait) => (
            <div key={forfait.id} className={styles.forfait}>
              <h2>{forfait.titre}<span className={styles.price}>{forfait.prix}</span></h2>
              <button className={styles.forfaitsbt} onClick={() => { setSelectedForfait(forfait); setShowModal(true); }}>Choisir cette offre</button>
              <p>{forfait.description}</p>
              <ul className={expandedForfaits[forfait.id] ? styles.expanded : styles.collapsed}>
                {forfait.elements.map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
              <button className={styles.forfaitsbtvp} onClick={() => toggleExpandForfait(forfait.id)}>
                {expandedForfaits[forfait.id] ? (
                  <>
                    <FontAwesomeIcon icon={faMinus} /> Voir moins
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faPlus} /> Voir plus
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
        <section className={styles.strdv}>
          <h2>Vous ne trouvez pas ce que vous cherchez ou avez des questions ?</h2>
          <a className={styles.button53}>Prenez RDV gratuitement avec l'un de nos experts</a>
        </section>
      </div>
      <div id="maintenance" className={`${styles.container} ${styles.appear}`}>
        <h1>Nos Forfaits Maintenance et sécurité</h1>
        <p>Découvrez nos différents forfaits pour la maintenance, mises à jour et sécurité de votre site.</p>
        <div className={styles.forfaits}>
          {maintenance.map((maintenancePackage) => (
            <div key={maintenancePackage.id} className={styles.forfait}>
              <h2>{maintenancePackage.titre}<span className={styles.price}>{maintenancePackage.prix}</span> </h2>
              <button className={styles.forfaitsbt} onClick={() => { setSelectedForfait(maintenancePackage); setShowModal(true); }}>Choisir cette offre</button>
              <p>{maintenancePackage.description}</p>
              <ul className={expandedMaintenance[maintenancePackage.id] ? styles.expanded : styles.collapsed}>
                {maintenancePackage.elements.map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
              <button className={styles.forfaitsbtvp} onClick={() => toggleExpandMaintenance(maintenancePackage.id)}>
                {expandedMaintenance[maintenancePackage.id] ? (
                  <>
                    <FontAwesomeIcon icon={faMinus} /> Voir moins
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faPlus} /> Voir plus
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
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
    </main>
  );
};

export default CreationSite;
