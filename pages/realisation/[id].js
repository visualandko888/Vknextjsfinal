import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Head from 'next/head';
import ProjectsSlider from '/src/components/Home/Rea';
import Contact from '/src/components/Home/Contact';
import styles from '/styles/realisation.module.scss';

export default function RealisationItem() {
  const router = useRouter();
  const { id } = router.query;
  const [realisationDetails, setRealisationDetails] = useState({});
  const [expertise, setExpertise] = useState([]);
  const [realisationSection, setRealisationSection] = useState([]);

  const title = 'Réalisations | Visual & Ko - Création, maintenance et sécurité de sites internet performants';
  const description = 'Visual & Ko vous propose des services web complets pour la création de sites internet professionnels, la maintenance et la sécurité de votre site existant. Nous sommes également spécialisés en référencement naturel pour améliorer votre visibilité en ligne. Contactez-nous dès maintenant !';

  useEffect(() => {
    if (id) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/get_realisation_sections.php?realisationId=${id}`)
        .then((res) => {
          if (res.data.success && res.data.type === 'item') {
            setRealisationSection(res.data.results);
          }
        })
        .catch((err) => {
          if (err.response && err.response.status === 404) {
            router.push('/404');
          }
        });

      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/get_realisation.php?realisationId=${id}`)
        .then((res) => {
          if (res.data.success && res.data.type === 'item') {
            setRealisationDetails(res.data.results);
            const expertiseList = res.data.results.expertise;
            setExpertise(expertiseList.split(';'));
          } else {
            router.push('/404');
          }
        })
        .catch((err) => {
          if (err.response && err.response.status === 404) {
            router.push('/404');
          }
        });
    }
  }, [id]);

  return (
    <main className={styles.main}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <section
        className={styles.heroRealisation}
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/realisations/${realisationDetails.hero_bg})`,
        }}
      >
        <div className={styles.content}>
          <div className={styles.head}>
            <h2>{realisationDetails.title}</h2>
            <h3>{realisationDetails.sub_title}</h3>
          </div>
        </div>
        <div
          className={styles.circle}
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/realisations/${realisationDetails.logo})`,
          }}
        />
      </section>
      <section className={styles.realPresentation}>
        <h3>Le projet</h3>
        <div className={styles.expertsList}>
          {expertise.map((e, index) => (
            <div key={index} className={styles.expertItem}>{e}</div>
          ))}
        </div>
        <p>{realisationDetails.description}</p>
      </section>
      {realisationSection.map((e, index) => (
        <section
          key={index}
          className={styles.overview2}
        >
          <img
            alt="overview"
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/realisations/${e.img}`}
          />
          <div>
            <div className={styles.overviewMobile}>
              <img
                alt="fake mobile"
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/realisations/${e.img_mobile}`}
              />
            </div>
          </div>
        </section>
      ))}
      <Contact />
      <ProjectsSlider />
    </main>
  );
}
