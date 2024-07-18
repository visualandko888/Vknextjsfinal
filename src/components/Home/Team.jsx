// components/Team.js
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import styles from '/styles/team.module.scss'; // Ensure this path is correct
import Nicolas from '/public/images/nicolas.png';
import Chandara from '/public/images/chandara.png';
import Prasath from '/public/images/prasath.png';
import Julien from '/public/images/julien.png';
import Elie from '/public/images/elie.png';
import CounterSection from '/src/components/Home/compteur';
import logo from '/public/images/logo-blue.svg';

export default function Team() {
  const { t } = useTranslation(); // Importing translations

  const [windowSize, setWindowSize] = useState(null); // Initialize to null to indicate it hasn't been set yet
  const [teamMembers, setTeamMembers] = useState([]);
  const sectionsRef = useRef([]);
  const [scrollDirection, setScrollDirection] = useState('down');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize(window.innerWidth);
    };

    updateWindowSize(); // Initialize on mount
    window.addEventListener('resize', updateWindowSize);

    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  useEffect(() => {
    const fakeArrMemberArr = [
      { fullName: 'Julien', img: Julien },
      { fullName: 'Élie', img: Elie },
      { fullName: 'Chandara', img: Chandara },
      { fullName: 'Nicolas', img: Nicolas },
      { fullName: 'Prasath', img: Prasath },
    ];

    setTeamMembers(fakeArrMemberArr);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        } else if (!entry.isIntersecting && scrollDirection === 'up') {
          entry.target.classList.remove(styles.visible);
        }
      });
    }, options);

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [scrollDirection]);

  const showCalendar = () => {
    // eslint-disable-next-line no-undef
    Calendly.initPopupWidget({ url: 'https://calendly.com/visualandko/30min' });
    return false;
  };

  const scrollDirectionRef = useRef(null);


useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const deltaY = currentScrollY - lastScrollY.current;
    lastScrollY.current = currentScrollY;

    if (scrollDirectionRef.current) {
      const currentTransform = getComputedStyle(scrollDirectionRef.current).transform;
      let matrixValues = currentTransform.match(/matrix.*\((.+)\)/);
      let currentX = matrixValues ? parseFloat(matrixValues[1].split(', ')[4]) : 0;

      scrollDirectionRef.current.style.transform = `translateX(${currentX - deltaY}px)`;
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <section id="team" className={styles.team}>
      <div className={styles.rel} >
        <h2 ref={scrollDirectionRef} className={styles.h2scroll}>
        Qui sommes nous ? 
        </h2>
      </div>
      <section className={styles.teamflex}>
      <div className={`${styles.rel} ${styles.hidden}`} ref={(el) => (sectionsRef.current[0] = el)}>
      <Image src={logo} className={styles.logo} />
      <h2 className={styles.teamTitle2}>{t('home_team_t1', { defaultValue: 'Une équipe de passionnés' })}</h2>        <div className={styles.teamPictures}>
          {teamMembers.map((e, index) => (
            <div key={index} className={styles.pictureWrapper}>
              <Image src={e.img} className={styles.picture} alt={e.fullName} width={300} height={300} />
              <div className={styles.pictureCaption}>{e.fullName}</div>
            </div>
          ))}
        </div>
        <div className={`${styles.aboutUs} ${styles.hidden}`} ref={(el) => (sectionsRef.current[1] = el)}>
        <h2 className={styles.teamTitle2}>{t('home_team_t1', { defaultValue: 'Pourquoi travailler avec nous ?' })}</h2>
        <div className={styles.description1}>
        
          <p>
            
                Visual & Ko est constituée d'une équipe de<span className={styles.strong} > plusieurs développeurs expérimentés</span> et d'experts en Marketing. Découvrez comment notre <span className={styles.strong} >expertise en marketing digital</span> peut propulser votre entreprise vers de nouveaux sommets grâce à des stratégies personnalisées et qui ont fait leurs preuves.
            
          </p>
          <h2 className={styles.teamTitle2}>{t('home_team_t1', { defaultValue: 'Quelques chiffres clés' })}</h2>
          <CounterSection />
          <button className={styles.teamButton} onClick={showCalendar} type="button">
            {t('home_team_t16', { defaultValue: 'Prenez rdv avec nos experts' })}
          </button>
        </div>
        
        
      </div>
      </div>

      
      </section>
    </section>
  );
}
