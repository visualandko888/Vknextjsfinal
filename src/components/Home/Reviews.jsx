import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import styles from '/styles/reviews.module.scss';
import reviewList from '/public/datas/reviews.json';

export default function Reviews() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsToShow = 4; // Number of reviews to show at once

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviewList.result.reviews.length - reviewsToShow : prevIndex - reviewsToShow));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= reviewList.result.reviews.length - reviewsToShow ? 0 : prevIndex + reviewsToShow));
  };

  return (
    <section className={styles.reviews}>
      <h2>{t('home_reviews_t1', { defaultValue: 'Ils nous ont écrit' })}</h2>
      <p>{t('home_reviews_t2', { defaultValue: 'Découvrez nos derniers avis Google' })}</p>
      <div className={styles.reviewsRating}>
        <FontAwesomeIcon className={`faIcon ${styles.active}`} icon={faStar} />
        <FontAwesomeIcon className={`faIcon ${styles.active}`} icon={faStar} />
        <FontAwesomeIcon className={`faIcon ${styles.active}`} icon={faStar} />
        <FontAwesomeIcon className={`faIcon ${styles.active}`} icon={faStar} />
        <FontAwesomeIcon className={`faIcon ${styles.active}`} icon={faStar} />
        ({reviewList.result.reviews.length} avis)
      </div>
      <div className={styles.carousel}>
        <button className={styles.prev} onClick={handlePrevClick}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className={styles.reviewContent}>
          {reviewList.result.reviews.slice(currentIndex, currentIndex + reviewsToShow).map((review, index) => (
            <div key={index} className={styles.reviewsCard}>
              <div className={styles.reviewsBody}>
                <div className={styles.reviewslogo}>
                  <Image scr="{profile_photo_url}"></Image>
                </div>
                <p className={`${review.text.length > 350 ? styles.min : ''}`}>
                  “{review.text}”
                </p>
              </div>
              <div className={styles.reviewsBottom}>
                <div className={styles.reviewsRate}>
                  {Array(review.rating).fill().map((_, idx) => (
                    <FontAwesomeIcon key={idx} icon={faStar} />
                  ))}
                </div>
                <div className={styles.reviewsAuthor}>
                  {review.author_name.length > 18
                    ? `${review.author_name.substring(0, 18)}...`
                    : review.author_name}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className={styles.next} onClick={handleNextClick}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
}
