import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import styles from '/styles/Rea.module.scss';
import chevron from '/public/images/chevron.png';
import arrow_right from '/public/images/arrow_right.png';
import ModalCard from '/src/components/Elements/ModalCard';

export default function RealisationsSlider() {
  const { t } = useTranslation(); // Importation de la traduction

  const [myArray, setMyArray] = useState([]);
  const [classArr, setClassArr] = useState([]);
  const [isHover, setIsHover] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [currentShow, setCurrentShow] = useState({});

  const handleHover = (type) => {
    setIsHover(type);
  };
  const handleClick = (type, index) => {
    setIsClick(type);
    if (index > 0) {
      setCurrentShow(myArray[index]);
    }
  };

  const changeSlide = (type) => {
    setTimeout(() => {
      setClassArr((prevArray) => {
        const newArray = [...prevArray];

        if (type === 1) {
          newArray.unshift(prevArray[prevArray.length - 1]);
          newArray.pop();
        } else {
          newArray.push(prevArray[0]);
          newArray.shift();
        }
        return newArray;
      });
    }, 0);
  };

  // Détection de swipe sur smartphone
  const touchStartX = useRef(null);

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartX.current - touchEndX;

    if (deltaX > 50) {
      changeSlide(1);
    } else if (deltaX < -50) {
      changeSlide(2);
    }
  }

  useEffect(() => {
    let interval = null;

    if (!isHover) {
      interval = setInterval(() => {
        changeSlide(1);
      }, 300000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isHover, classArr]);

  useEffect(() => {
    axios
      .get('/data/realisations.json')
      .then((res) => {
        setMyArray(res.data);

        const prepArr = [];
        for (let i = 0; i < res.data.length; i++) {
          prepArr.push(`card${i + 1}`);
        }
        setClassArr(prepArr);
      })
      .catch(() => {});
  }, []);

  const [windowSize, setWindowSize] = useState(0);
  useEffect(() => {
    setWindowSize(window.innerWidth);

    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="projects" className={styles.realisationSlider}>
      <h2>{t('home_projectSlider_t1', { defaultValue: 'Nos réalisations' })}</h2>
      <p>{t('home_projectSlider_t2', { defaultValue: 'Voici quelques-unes de nos missions' })}</p>
      <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} className={styles.slider}>
        <div
          role="button"
          tabIndex={0}
          onKeyDown={() => changeSlide(2)}
          onClick={() => changeSlide(2)}
          className={styles.left}
        >
          <Image src={chevron} alt="chevron" />
        </div>
        <div id="realisationSliderList" className={styles.content}>
          {myArray.map((e, index) => (
            <div
              key={index}
              role="button"
              tabIndex={0}
              onKeyDown={() => handleClick(true, index)}
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
              onClick={() => handleClick(true, index)}
              className={`${styles.card} ${classArr[index]}`}
            >
              <div className={styles.cardInner}>
                <div className={styles.recto}>
                  <Image alt={`Réalisation ${index + 1}`} src={e.imgFront} />
                </div>
                <div className={styles.verso}>
                  <Image alt={`Réalisation ${index + 1}`} src={e.imgBack} />
                  <div className={styles.text}>
                    <h2>{e.title}</h2>
                    {e.task.map((elem, i) => (
                      <p key={i}>{elem}</p>
                    ))}
                    <Link href={`/realisation/${e.id}`}>
                      <span>
                        <Image src={arrow_right} alt="fleche" />
                        En savoir plus
                      </span>
                    </Link>
                  </div>
                </div>
                <div className={styles.resp} />
              </div>
            </div>
          ))}

          {windowSize <= 900 && (
            <ModalCard handleClick={handleClick} classes={`type1 ${isClick ? 'show' : 'unshow'}`}>
              <Image alt="réalisation" src={currentShow.imgBack} />
              <Link onClick={() => handleClick(false, 0)} href={`/realisation/${currentShow.id}`}>
                <h2>
                  <Image src={arrow_right} alt="fleche" />
                  Voir la réalisation
                </h2>
              </Link>
              <div className={styles.task}>
                {currentShow.task && currentShow.task.map((e, index) => <p key={index}>{e}</p>)}
              </div>
            </ModalCard>
          )}
        </div>
        <div
          role="button"
          tabIndex={0}
          onKeyDown={() => changeSlide(1)}
          onClick={() => changeSlide(1)}
          className={styles.right}
        >
          <Image src={chevron} alt="chevron" />
        </div>
      </div>
    </section>
  );
}
