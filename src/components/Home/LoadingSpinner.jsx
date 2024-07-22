import React from 'react';
import styles from '/styles/LoadingSpinner.module.scss';

const LoadingSpinner = () => {
  return (
    <section className={styles.bgspinner} >
    <div className={styles.spinner}>
      <div className={styles.doubleBounce1}></div>
      <div className={styles.doubleBounce2}></div>
    </div>
    </section>
  );
};

export default LoadingSpinner;
