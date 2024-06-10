import { useState } from 'react';
import { instanceAxios } from '@helpers/axios';
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import logo from '@assets/images/logo-primary.svg';
import '@assets/css/layout/header/footer.scss';
import '@assets/css/page/home/newsletter.scss';
import emailController from '@services/formController/emailController';
import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone, faAt } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  const { t } = useTranslation(); // Importation de la traduction
  const [sendProgress, setSendProgress] = useState(0);
  const [fullname, setFullname] = useState('');
  const [mail, setMail] = useState('');
  const [sendNewsLettersMessage, setSendNewsLettersMessage] = useState('');

  // Fullname
  const handleChangeFullname = (e) => {
    const text = e.target.value;
    setFullname(text);
  };

  // Mail
  const handleChangeMail = (e) => {
    const text = e.target.value;
    setMail(text);
  };

  const handleSubmitForm = (e) => {
    setSendNewsLettersMessage('');
    e.preventDefault();

    if (fullname.length === 0) {
      setSendNewsLettersMessage('Tout les champs sont obligatoires');
    } else if (!emailController(mail)) {
      setSendNewsLettersMessage("L'adresse email est incorrect");
    } else {
      setSendProgress(1);
      instanceAxios()
        .post('post_newsletter.php', {
          fullname,
          mail,
        })
        .then((res) => {
          if (res.data.status === 'success') {
            setTimeout(() => {
              setSendNewsLettersMessage(res.data.message);
              setSendProgress(2);
            }, '1500');
          } else {
            setTimeout(() => {
              setSendNewsLettersMessage(res.data.message);
              setSendProgress(0);
            }, '1500');
          }
        })
        .catch(() => {});
    }
  };

  return (
    <footer className="footer-bottom">
      <div className="content">
        <section className="newsletter">
          <form method="post" onSubmit={handleSubmitForm} className="form">
            <h3>
              {t('layout_footer_t1', {
                defaultValue: 'Inscription à la newsletter',
              })}
              <span>
                {sendNewsLettersMessage
                  && sendProgress !== 2
                  && sendNewsLettersMessage}
              </span>
            </h3>
            {sendProgress === 0 && (
              <>
                <div className="group">
                  <label htmlFor="fullname">
                    {t('layout_footer_t2', { defaultValue: 'Nom complet' })}
                    :
                  </label>
                  <input
                    onChange={handleChangeFullname}
                    require
                    type="text"
                    id="fullname"
                    name="fullname"
                    value={fullname}
                  />
                </div>
                <div className="group">
                  <label htmlFor="mail">
                    {t('layout_footer_t2', { defaultValue: 'Adresse email' })}
                    :
                  </label>
                  <input
                    onChange={handleChangeMail}
                    require
                    type="mail"
                    id="mail"
                    name="mail"
                    value={mail}
                  />
                </div>
                <div className="group">
                  <button type="submit" className="btn primary">
                    {t('elements_inscription', { defaultValue: 'Inscription' })}
                  </button>
                </div>
              </>
            )}
            {sendProgress === 1 && (
              <div>
                {t('layout_footer_t4', {
                  defaultValue: 'Inscription en cours...',
                })}
              </div>
            )}
            {sendProgress === 2 && <div>{sendNewsLettersMessage}</div>}
          </form>
        </section>
        <div className="nav-card">
          <img alt="logo" src={logo} />
          <div className="group-content">
            <div className="group">
              <h3>
                {t('layout_navigation_navigation', {
                  defaultValue: 'Navigation',
                })}
              </h3>
              <ul>
                <li>
                  <NavHashLink to="/">
                    {t('layout_navigation_accueil', {
                      defaultValue: 'Accueil',
                    })}
                  </NavHashLink>
                </li>
                <li>
                  <NavHashLink to="/#services">
                    {t('layout_navigation_nos-services', {
                      defaultValue: 'Nos services',
                    })}
                  </NavHashLink>
                </li>
                <li>
                  <NavHashLink to="/#projects">
                    {t('layout_navigation_nos-projets', {
                      defaultValue: 'Nos projets',
                    })}
                  </NavHashLink>
                </li>
                <li>
                  <NavHashLink to="/#contact">
                    {t('elements_contact', { defaultValue: 'Contact' })}
                  </NavHashLink>
                </li>
              </ul>
            </div>
            <div className="group">
              <h3>
                {t('layout_navigation_nos-services', {
                  defaultValue: 'Nos services',
                })}
              </h3>
              <ul>
                <li>
                  <NavHashLink to="/google-ads">
                    {t('layout_navigation_google-ads', {
                      defaultValue: 'Google ADS',
                    })}
                  </NavHashLink>
                </li>
                <li>
                  <NavHashLink to="/developpement-web">
                    {t('layout_navigation_developpement-web', {
                      defaultValue: 'Développement WEB',
                    })}
                  </NavHashLink>
                </li>
                <li>
                  <NavHashLink to="/referencement-naturel">
                    {t('layout_navigation_referencement-naturel', {
                      defaultValue: 'Référencement Naturel',
                    })}
                  </NavHashLink>
                </li>
                <li>
                  <NavHashLink to="/referencement-payant">
                    {t('layout_navigation_referencement-payant', {
                      defaultValue: 'Référencement Payant',
                    })}
                  </NavHashLink>
                </li>
              </ul>
            </div>
            <div className="group">
              <h3>
                {t('elements_informations', { defaultValue: 'Informations' })}
              </h3>
              <ul>
                <li>
                  <NavHashLink to="/PrivacyPolicy">
                    {t('layout_navigation_mentions-legales', {
                      defaultValue: 'Mentions légales',
                    })}
                  </NavHashLink>
                </li>
              </ul>
            </div>
            <div className="group contacts">
              <h3>
                {t('layout_navigation_retrouvez-nous', {
                  defaultValue: 'Retrouvez-nous',
                })}
              </h3>
              <ul>
                <li>
                  <FontAwesomeIcon className="faIcon" icon={faHome} />
                  {' '}
                  3 rue
                  Keller, 75011 PARIS
                </li>
                <li>
                  <Link to="tel:+33767744343">
                    <FontAwesomeIcon className="faIcon" icon={faPhone} />
                    {' '}
                    07.67.74.43.43
                  </Link>
                </li>
                <li>
                  <Link to="mailto:contact@visualandko.com">
                    <FontAwesomeIcon className="faIcon" icon={faAt} />
                    {' '}
                    contact@visualandko.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
