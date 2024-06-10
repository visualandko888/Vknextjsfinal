import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import styles from '/styles/reviews.module.scss';
import imgQuote from '/public/images/dubbleQuotes.png';
import reviewList from '/public/datas/reviews.json';

export default function Reviews() {
  const { t } = useTranslation(); // Importation de la traduction

  const [windowSize, setWindowSize] = useState(0);
  const [numberReviewShow, setNumberReviewShow] = useState(0);
  const [ratingTotal, setRatingTotal] = useState(0);
  const [reviewsList, setReviewsList] = useState([]);
  const [classList, setClassList] = useState([]);
  const [countReview, setCountReview] = useState(0);

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    if (numberReviewShow > 0) {
      const reviewsArr = reviewList.result.reviews;
      setCountReview(reviewsArr.length);
      reviewsArr.sort((a, b) => b.time - a.time);

      let totalRate = 0;
      for (let i = 0; i < reviewsArr.length; i++) {
        totalRate += reviewsArr[i].rating;
      }

      totalRate /= reviewsArr.length;
      setRatingTotal(Math.round(totalRate));

      const prepArr = [];

      for (let i = 0; i < reviewsArr.length; i += numberReviewShow) {
        const sousTableau = reviewsArr.slice(i, i + numberReviewShow);
        prepArr.push(sousTableau);
      }

      const prepArrClass = [];
      for (let i = 0; i < prepArr.length; i++) {
        prepArrClass.push(i === 0 ? styles.show : styles.unshow);
      }

      setClassList(prepArrClass);
      setReviewsList(prepArr);
    }
  }, [numberReviewShow]);

  useEffect(() => {
    if (windowSize < 1050) {
      if (numberReviewShow !== 1) {
        setNumberReviewShow(1);
      }
    } else if (windowSize < 1600) {
      if (numberReviewShow !== 2) {
        setNumberReviewShow(2);
      }
    } else if (numberReviewShow !== 3) {
      setNumberReviewShow(3);
    }
  }, [windowSize]);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timerID = setInterval(() => {
      setClassList((prevArr) => {
        const newArr = [...prevArr];
        newArr.unshift(newArr[newArr.length - 1]);
        newArr.pop();
        return newArr;
      });
    }, 10000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <section className={styles.reviews}>
      <h2>{t('home_reviews_t1', { defaultValue: 'Ils nous ont écrit' })}</h2>
      <p>{t('home_reviews_t2', { defaultValue: 'Découvrez nos derniers avis Google' })}</p>
      <div className={styles.reviewsRating}>
        <FontAwesomeIcon className={`faIcon ${ratingTotal >= 1 ? styles.active : ''}`} icon={faStar} />
        <FontAwesomeIcon className={`faIcon ${ratingTotal >= 2 ? styles.active : ''}`} icon={faStar} />
        <FontAwesomeIcon className={`faIcon ${ratingTotal >= 3 ? styles.active : ''}`} icon={faStar} />
        <FontAwesomeIcon className={`faIcon ${ratingTotal >= 4 ? styles.active : ''}`} icon={faStar} />
        <FontAwesomeIcon className={`faIcon ${ratingTotal === 5 ? styles.active : ''}`} icon={faStar} />
        ({countReview} avis)
      </div>
      <div className={styles.reviewContent}>
        {reviewsList.map((elem, index) => (
          <div key={index} className={`${styles.reviewsList} ${classList[index]}`}>
            {elem.map((e, i) => (
              <div key={i} className={styles.reviewsCard}>
                <div className={styles.reviewsBody}>
                  <div className={styles.reviewsCircle}>
                    <Image src={imgQuote} alt="guillemets" />
                  </div>
                  <p className={`${e.text.length > 350 ? styles.min : ''}`}>
                    “{e.text}”
                  </p>
                </div>

                <div className={styles.reviewsBottom}>
                  <div className={styles.reviewsRate}>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <span>—</span>
                  <div className={styles.reviewsAuthor}>
                    {e.author_name.length > 18
                      ? `${e.author_name.substring(0, 18)}...`
                      : e.author_name}
                  </div>
                </div>

                <div className={styles.reviewsCache1} />
                <div className={styles.reviewsCache2} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
