import { useState } from 'react';
import '@assets/css/layout/cookies.scss';
import { useTranslation } from 'react-i18next';

export default function Cookies() {
  const { t } = useTranslation(); // Importation de la traduction
  const [acceptCookies, setAcceptCookie] = useState(
    localStorage.getItem('cookiesAccepted') === 'true',
  );
  const handleClickAcceptCookies = () => {
    setAcceptCookie(true);
    localStorage.setItem('cookiesAccepted', 'true');
  };
  return (
    <div className={`cookies ${acceptCookies && 'accept'}`}>
      <p>
        {t('layout_cookies_t1', {
          defaultValue:
            'Nous utilisons des cookies pour améliorer votre expérience utilisateur. En continuant à utiliser notre site, vous acceptez notre utilisation des cookies.',
        })}
      </p>
      <button
        type="button"
        onClick={() => handleClickAcceptCookies()}
        className="btn primary"
      >
        {t('elements_accepter', { defaultValue: 'Accepter' })}
      </button>
    </div>
  );
}
