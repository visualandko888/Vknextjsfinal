// components/CounterSection.js
import { useEffect, useState, useRef } from 'react';
import styles from '/styles/CounterSection.module.scss';

const CounterSection = () => {
  const [startCount, setStartCount] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const top = ref.current.getBoundingClientRect().top;
        if (top >= 0 && top <= window.innerHeight) {
          setStartCount(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.column}>
        <div className={styles.counter}>{startCount ? <CountUp end={100} suffix="%" /> : '0%'}</div>
        <div className={styles.label}>de clients satisfaits</div>
      </div>
      <div className={styles.column}>
      <div className={styles.counter}>{startCount ? <CountUp end={100} suffix="+" />  : + '0'}</div>
      <div className={styles.label}>de clients en gestion mensuel</div>
      </div>
      <div className={styles.column}>
        <div className={styles.counter}>{startCount ? <CountUp end={100} suffix="%" /> : '0%'}</div>
        <div className={styles.label}>de transparence des prix</div>
      </div>
    </div>
  );
};

const CountUp = ({ end, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // Duration of animation in milliseconds
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <div>
      {prefix}{count}{suffix}
    </div>
  );
};

export default CounterSection;
