import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

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
      <div className="cookie-banner">
        <p>{t('cookie_message', { defaultValue: 'We use cookies to improve your experience.' })}</p>
        <button type="button" onClick={handleClickAcceptCookies}>
          {t('cookie_accept_button', { defaultValue: 'Accept' })}
        </button>
      </div>
    )
  );
}
