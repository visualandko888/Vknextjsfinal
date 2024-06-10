import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
// import i18n from 'i18next';
// import { instanceAxios } from '/helpers/axios'; // Assurez-vous que ce chemin est correct
import styles from '/styles/questions.module.scss'; // Assurez-vous que le chemin est correct

export default function Faq() {
  const { t } = useTranslation(); // Importation de la traduction
  const [fakeFaq, setFakeFaq] = useState([]);
  
  // useEffect(() => {
  //   instanceAxios
  //     .get(`get_faq.php?lang=${i18n.language}`)
  //     .then((res) => {
  //       if (res.data.success) {
  //         setFakeFaq(res.data.results);
  //       }
  //     })
  //     .catch(() => {});
  // }, [i18n.language]);

  const showCard = (index) => {
    const updateFaq = { ...fakeFaq[index], show: !fakeFaq[index].show };
    const newFaq = [
      ...fakeFaq.slice(0, index),
      updateFaq,
      ...fakeFaq.slice(index + 1),
    ];
    setFakeFaq(newFaq);
  };

  return (
    <section className={styles.faq}>
      <div className={styles.content}>
        <h2>
          {t('home_faq_t1', { defaultValue: 'FAQ - Questions fréquentes' })}
        </h2>
        <div className={styles.faqList}>
          {fakeFaq.map((e, index) => (
            <div key={index} className={styles.group}>
              <div
                type="button"
                role="button"
                tabIndex={0}
                onKeyDown={() => showCard(index)}
                onClick={() => showCard(index)}
                className={styles.item}
              >
                <h3>{e.title}</h3>
                <FontAwesomeIcon
                  className={styles.faIcon}
                  icon={e.show ? faMinusCircle : faPlusCircle}
                />
              </div>
              <div
                className={`${styles.card} ${e.show ? styles.open : ''}`}
                dangerouslySetInnerHTML={{ __html: e.text }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
