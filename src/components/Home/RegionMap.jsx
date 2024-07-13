import { useState } from 'react';
import styles from '/styles/RegionMap.module.scss';





  const regions = [
    { name: 'Bretagne', coords: '15,147,18,136,35,131,54,129,64,124,76,122,93,138,103,130,124,130,139,133,141,143,146,139,156,140,155,148,156,158,158,166,153,171,148,179,142,179,134,181,127,182,120,186,116,193,106,197,101,201,75,195,55,182,39,176,34,179,27,172,20,164' },
    { name: 'Pays de la Loire', coords: '99,203,114,229,137,258,155,262,163,256,172,256,171,243,165,228,171,221,195,214,204,193,223,175,228,160,212,149,205,141,193,148,185,137,169,143,156,138,159,167,156,171,152,178,142,179,128,181,120,185,117,194' },
    { name: 'Nouvelle Aquitaine', coords: '183,450,184,441,194,423,194,411,187,407,188,390,219,383,224,377,232,365,239,350,247,331,254,329,259,335,269,332,271,332,279,320,283,311,287,309,287,298,284,288,293,279,288,266,281,254,273,255,267,255,257,254,245,257,237,249,230,239,225,231,218,223,208,225,204,220,198,214,188,216,180,217,172,222,167,227,169,236,171,246,171,252,171,257,162,256,157,261,154,264,151,267,143,273,147,289,153,301,146,360,144,380,139,409,129,420,131,424,141,435' },
    { name: 'Occitanie', coords: '184,451,184,441,195,425,195,413,187,407,189,392,222,383,246,332,254,329,257,333,269,331,276,350,285,350,296,336,307,348,317,336,329,340,337,348,343,357,348,370,368,370,373,380,377,390,371,398,360,409,354,414,348,408,338,416,328,422,321,430,313,440,311,457,312,468,315,471,304,472,293,476,282,475,271,475,263,467,254,461,244,456,236,452,227,450,222,450,220,454,211,456,201,457,194,458' },
    { name: 'Provence-Alpes-Côte d’Azur', coords: '354,414,377,392,369,371,383,367,404,377,407,374,406,368,399,363,414,349,422,343,432,339,432,334,430,327,439,327,444,328,447,333,454,340,458,347,457,355,457,365,462,372,471,378,483,378,479,390,478,400,464,406,459,411,450,422,447,429,436,435,419,437,404,432,395,428,390,423,367,420' },
    { name: 'Normandie', coords: '140,133,134,109,127,96,122,74,142,74,146,87,161,92,180,94,198,94,206,90,198,89,201,78,221,65,236,62,248,56,260,71,260,86,260,99,257,109,252,118,241,126,228,130,230,139,229,147,228,157,218,153,207,142,196,147,187,137,172,143,158,138,151,140,143,142,137,132,134,122' },
    { name: 'Hauts de France', coords: '248,57,254,15,265,8,281,4,293,10,302,20,311,15,324,31,334,37,341,41,352,46,352,68,350,80,346,93,337,98,332,107,332,116,331,119,324,124,318,118,313,109,304,111,291,112,282,108,273,107,267,106,261,104,261,88,262,70' },
    { name: 'Ile de France', coords: '260,103,252,111,251,126,257,137,266,147,271,153,282,150,288,156,287,161,304,160,308,159,311,152,321,146,323,142,326,134,325,126,320,120,318,115,313,109,302,110,291,111' },
    { name: 'Centre-Val de loire', coords: '252,118,229,131,228,157,224,172,217,182,209,190,201,203,196,213,202,219,207,225,219,221,230,238,238,250,247,257,257,255,272,254,282,254,288,248,294,241,304,236,310,232,310,225,308,218,306,210,305,208,304,205,304,196,303,190,303,184,307,179,311,171,311,169,310,165,307,161,302,163,294,162,288,162,290,155,289,156,286,155,285,151,278,151,272,153,262,142,259,136,253,127' },
    { name: 'Auvergne-Rhône-Alpes', coords: '284,254,290,245,299,238,308,234,314,236,321,239,328,239,335,242,338,249,345,252,346,259,350,265,356,266,362,265,363,264,366,264,375,264,379,256,386,249,397,255,403,262,414,260,425,258,436,257,443,255,451,256,453,270,458,278,457,285,455,289,458,300,465,310,464,315,458,321,457,322,448,325,440,326,432,326,433,336,426,342,410,353,402,362,406,366,408,375,401,377,392,371,385,368,378,368,372,370,362,370,352,371,346,357,333,341,325,339,321,335,310,346,298,336,288,349,279,348,272,333,278,324,285,310,291,308,286,298,286,289,295,279' },
    { name: 'Réunion', coords: '4,444,48,489' },
    { name: 'Guyane', coords: '2,367,46,429' },
    { name: 'Martinique', coords: '3,297,47,358' },
    { name: 'Guadeloupe', coords: '1,231,51,282' },
    { name: 'Grand Est', coords: '324,156,328,159,343,180,361,179,369,181,381,189,390,200,401,199,416,188,434,183,449,191,459,209,473,211,479,206,480,197,480,177,484,157,497,137,504,126,483,118,470,116,454,113,440,103,432,96,419,97,404,91,394,83,378,75,377,62,377,56,366,69,352,68,351,82,349,90,347,101,332,103,330,119,327,129,321,134' },
    { name: 'Bourgogne-Franche-Comté', coords: '326,159,334,171,343,182,357,182,369,179,377,183,390,200,403,200,413,189,424,182,440,185,450,190,457,202,461,211,456,217,451,233,438,242,429,257,421,268,415,276,400,273,386,265,377,268,374,281,367,275,354,277,343,278,343,266,337,259,329,250,325,255,309,247,309,239,309,230,305,220,304,213,303,202,304,191,310,183,309,178,305,173,309,163,317,159' },
    { name: 'Corse', coords: '476,426,490,416,502,403,506,412,508,428,509,448,507,462,505,478,502,488,497,490,486,487,476,477,470,458,471,441' },
  ];

  const RegionMap = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState('');
  
    const handleRegionClick = (regionName) => {
      setSelectedRegion(regionName);
      setShowModal(true);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission
      setShowModal(false);
    };
  
    return (
      <>
        <section className={styles.financement}>
        <h2>Demande de Financement</h2>
        <p className={styles.introfinancement}>
           Vous pouvez bénéficier selon votre éligibitié de certains forfaits qu'on appel "les packs essentiels" sur 48 mois. Seul les entreprises ayant une bonne santé financière peuvent faire partie du programme. Choissisez votre région et remplissez le formulaire pour tester votre éligibilité."
        </p>
          <div className={styles.map}>
            <img useMap="#mapMap" id="map" src="/images/map.png" width="510" height="499" alt="" />
            <map name="mapMap">
              {regions.map((region, index) => (
                <area
                  key={index}
                  shape="poly"
                  coords={region.coords}
                  href="#"
                  alt={region.name}
                  title={region.name}
                  onClick={(e) => {
                    e.preventDefault();
                    handleRegionClick(region.name);
                  }}
                />
              ))}
            </map>
          </div>
        </section>
        {showModal && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <span className={styles.close} onClick={() => setShowModal(false)}>
                &times;
              </span>
              <h2>Demande de Financement pour la région : {selectedRegion}</h2>
              <h4>
                Merci de compléter vos informations, notre service reviendra vers vous pour tester votre éligibilité au programme de financement. (Votre entreprise doit respecter certains critères en terme de santé financière)
              </h4>
              <form className={styles.form} onSubmit={handleSubmit}>
                <label>
                  Nom de la Société:
                  <input type="text" name="societe" required />
                </label>
                <label>
                  Adresse Email:
                  <input type="email" name="email" required />
                </label>
                <label>
                  Numéro de Téléphone:
                  <input type="tel" name="telephone" required />
                </label>
                <button type="submit">Envoyer</button>
              </form>
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default RegionMap;

      