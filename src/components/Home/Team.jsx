import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import styles from '/styles/team.module.scss'; // Assurez-vous que ce chemin est correct
import Nicolas from '/public/images/nicolas.png';
import Chandara from '/public/images/chandara.png';
import Prasath from '/public/images/prasath.png';
import Julien from '/public/images/julien.png';
import Elie from '/public/images/elie.png';

export default function Team() {
  const { t } = useTranslation(); // Importation de la traduction

  const [windowSize, setWindowSize] = useState(null); // (1) Initialiser à null pour indiquer qu'il n'a pas encore été défini
  const [teamMembers, setTeamMembers] = useState([]);
  const [screenType, setScreenType] = useState(0);
  const [classList, setClassList] = useState([]);

  useEffect(() => {
    // (2) Utiliser une fonction asynchrone pour définir la taille de la fenêtre après le montage du composant
    const updateWindowSize = () => {
      setWindowSize(window.innerWidth);
    };

    updateWindowSize(); // Initialiser lors du montage
    window.addEventListener('resize', updateWindowSize);

    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setClassList((prevArr) => {
        const lastArr = [...prevArr];
        lastArr.unshift(lastArr.pop());
        return lastArr;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (
      (windowSize < 900 && screenType !== 2) ||
      (windowSize >= 900 && screenType !== 1) ||
      screenType === 0
    ) {
      setScreenType(windowSize < 900 ? 2 : 1);

      const fakeArrMemberArr = [
        { fullName: 'Prasath', img: Prasath },
        { fullName: 'Nicolas', img: Nicolas },
        { fullName: 'Julien', img: Julien },
        { fullName: 'Élie', img: Elie },
        { fullName: 'Chandara', img: Chandara },
      ];

      const fakeArrMember = windowSize < 900
        ? [...fakeArrMemberArr, ...fakeArrMemberArr]
        : fakeArrMemberArr;

      setTeamMembers(fakeArrMember);

      const preArr = [];
      for (let i = 0; i < fakeArrMember.length; i++) {
        preArr.push(`item${i}`);
      }
      setClassList(preArr);
    }
  }, [windowSize, screenType]);

  const showCalendar = () => {
    // eslint-disable-next-line no-undef
    Calendly.initPopupWidget({ url: 'https://calendly.com/visualandko/30min' });
    return false;
  };

  return (
    <section id="team" className={styles.team}>
      <h2 className={styles.teamTitle}>{t('home_team_t1', { defaultValue: 'Notre équipe qualifiée' })}</h2>
      <div className={styles.teamPictures}>
        {teamMembers.map((e, index) => (
          <Image
            key={index}
            src={e.img}
            className={`${styles.picture} ${windowSize < 900 ? styles[classList[index]] : ''}`}
            alt={e.fullName}
            width={300}
            height={300}
          />
        ))}
      </div>

      <div className={styles.aboutUs}>
        <p className={styles.description1}>
          {t('home_team_t2', { defaultValue: "Visual & Ko est constituée d'une" })}{' '}
          <span className={styles.span1}>
            {t('home_team_t3', { defaultValue: 'équipe de plusieurs développeurs expérimentés' })}
          </span>{' '}
          {t('home_team_t4', { defaultValue: "et d'" })}
          <span className={styles.span2}>{t('home_team_t5', { defaultValue: 'experts en marketing' })}</span>.
        </p>

        <p className={styles.description2}>
          {windowSize >= 900 && (
            <>
              {t('home_team_t6', { defaultValue: 'Les projets sur lesquels nous travaillons sont' })}{' '}
              <strong>{t('home_team_t7', { defaultValue: 'complexes et ambitieux.' })}</strong>
            </>
          )}
          {t('home_team_t8', { defaultValue: 'Nous utilisons les technologies' })}{' '}
          <strong>{t('home_team_t9', { defaultValue: 'les plus modernes' })}</strong>{' '}
          {t('home_team_t10', { defaultValue: 'pour répondre aux besoins actuels de nos clients.' })}
        </p>

        <p className={styles.description3}>
          {t('home_team_t11', { defaultValue: "Notre engagement envers l'excellence nous pousse à nous dépasser constamment et à chercher" })}{' '}
          <br />
          <span className={styles.span3}>
            {' '}
            {t('home_team_t12', { defaultValue: 'les solutions les plus innovantes' })}
          </span>{' '}
          {t('home_team_t13', { defaultValue: 'pour offrir à nos clients les' })}
          <strong>{t('home_team_t14', { defaultValue: 'meilleurs résultats' })}</strong>{' '}
          {t('home_team_t15', { defaultValue: 'possibles.' })}
        </p>
      </div>

      <button className={styles.teamButton} onClick={showCalendar} type="button">
        {t('home_team_t16', { defaultValue: 'Prenez rdv avec nos experts' })}
      </button>
    </section>
  );
}
