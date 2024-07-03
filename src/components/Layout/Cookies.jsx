import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '/styles/cookies.module.scss';  // Change to the correct path if necessary


export default function Cookies() {
  const { t } = useTranslation(); // Importation de la traduction
  const [acceptCookies, setAcceptCookie] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAcceptCookie(localStorage.getItem('cookiesAccepted') === 'true');
    }
  }, []);

  const handleClickAcceptCookies = () => {
    setAcceptCookie(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookiesAccepted', 'true');
    }
  };

  return (
    !acceptCookies && (
      <div className={styles.cookiebanner}>
        <p>{t('cookie_message', { defaultValue: 'Nous utilisions les cookies pour une meilleur expèrience de nos utilisateurs.' })}</p>
        <button type="button" onClick={handleClickAcceptCookies}>
          {t('cookie_accept_button', { defaultValue: 'Accepter' })}
        </button>
      </div>
    )
  );
}
