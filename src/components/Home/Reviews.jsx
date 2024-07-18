import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { useSwipeable } from 'react-swipeable';
import styles from '/styles/reviews.module.scss';
import reviewList from '/public/datas/reviews.json';

export default function Reviews() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviewsToShow, setReviewsToShow] = useState(4); // Default number of reviews to show at once
  const [animation, setAnimation] = useState(styles.slideIn); // State to manage animation class

  const updateReviewsToShow = () => {
    if (window.innerWidth <= 480) {
      setReviewsToShow(1);
    } else if (window.innerWidth <= 768) {
      setReviewsToShow(2);
    } else if (window.innerWidth <= 1200) {
      setReviewsToShow(3);
    } else {
      setReviewsToShow(4);
    }
  };

  useEffect(() => {
    updateReviewsToShow();
    window.addEventListener('resize', updateReviewsToShow);
    return () => window.removeEventListener('resize', updateReviewsToShow);
  }, []);

  const handlePrevClick = () => {
    setAnimation('');
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? reviewList.result.reviews.length - reviewsToShow : prevIndex - reviewsToShow
      );
      setAnimation(styles.slideIn);
    }, 0);
  };

  const handleNextClick = () => {
    setAnimation('');
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= reviewList.result.reviews.length - reviewsToShow ? 0 : prevIndex + reviewsToShow
      );
      setAnimation(styles.slideIn);
    }, 0);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNextClick(),
    onSwipedRight: () => handlePrevClick(),
  });

  return (
    
      
        <section className={styles.reviews} {...handlers}>
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
      <section className={styles.basecarousel}>
      <div className={styles.carousel}>
        <div className={styles.reviewContent}>
          {reviewList.result.reviews.slice(currentIndex, currentIndex + reviewsToShow).map((review, index) => (
            <div key={index} className={`${styles.reviewsCard} ${animation}`}>
              <div className={styles.reviewsBody}>
                <div className={styles.reviewsLogo}>
                  <Image
                    src={review.profile_photo_url}
                    alt="Profile"
                    width={60}
                    height={60}
                    className={styles.profileImage}
                  />
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
        <div className={styles.carouselButtons}>
          <button className={styles.carouselButton} onClick={handlePrevClick}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className={styles.carouselButton} onClick={handleNextClick}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
      </section>
      </section>
    
        
      
    
  );
}
