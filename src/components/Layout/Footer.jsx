import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import logo from '/public/images/logo.svg';
import styles from '/styles/headerfooter.module.scss';
import stylesNewsletter from '/styles/newsletter.module.scss';
import emailController from '/src/services/formController/emailController';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone, faAt } from '@fortawesome/free-solid-svg-icons';

const instanceAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/',
});

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
      instanceAxios
        .post('post_newsletter.php', {
          fullname,
          mail,
        })
        .then((res) => {
          if (res.data.status === 'success') {
            setTimeout(() => {
              setSendNewsLettersMessage(res.data.message);
              setSendProgress(2);
            }, 1500);
          } else {
            setTimeout(() => {
              setSendNewsLettersMessage(res.data.message);
              setSendProgress(0);
            }, 1500);
          }
        })
        .catch(() => {});
    }
  };

  return (
    <footer className={styles['footer-bottom']}>
      <div className={styles.content}>
        <section className={stylesNewsletter.newsletter}>
          <form method="post" onSubmit={handleSubmitForm} className={stylesNewsletter.form}>
            <h3>
              {t('layout_footer_t1', {
                defaultValue: 'Inscription à la newsletter',
              })}
              <span>
                {sendNewsLettersMessage && sendProgress !== 2 && sendNewsLettersMessage}
              </span>
            </h3>
            {sendProgress === 0 && (
              <>
                <div className={stylesNewsletter.group}>
                  <label htmlFor="fullname">
                    {t('layout_footer_t2', { defaultValue: 'Nom complet' })}
                    :
                  </label>
                  <input
                    onChange={handleChangeFullname}
                    required
                    type="text"
                    id="fullname"
                    name="fullname"
                    value={fullname}
                  />
                </div>
                <div className={stylesNewsletter.group}>
                  <label htmlFor="mail">
                    {t('layout_footer_t2', { defaultValue: 'Adresse email' })}
                    :
                  </label>
                  <input
                    onChange={handleChangeMail}
                    required
                    type="email"
                    id="mail"
                    name="mail"
                    value={mail}
                  />
                </div>
                <div className={stylesNewsletter.group}>
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
        <div className={styles['nav-card']}>
          <Image alt="logo" src={logo} />
          <div className={styles['group-content']}>
            <div className={styles.group}>
              <h3>
                {t('layout_navigation_navigation', {
                  defaultValue: 'Navigation',
                })}
              </h3>
              <ul>
                <li>
                  <Link href="/" legacyBehavior>
                    <a>
                      {t('layout_navigation_accueil', {
                        defaultValue: 'Accueil',
                      })}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/#services" legacyBehavior>
                    <a>
                      {t('layout_navigation_nos-services', {
                        defaultValue: 'Nos services',
                      })}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/#projects" legacyBehavior>
                    <a>
                      {t('layout_navigation_nos-projets', {
                        defaultValue: 'Nos projets',
                      })}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" legacyBehavior>
                    <a>
                      {t('elements_contact', { defaultValue: 'Contact' })}
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.group}>
              <h3>
                {t('layout_navigation_nos-services', {
                  defaultValue: 'Nos services',
                })}
              </h3>
              <ul>
                <li>
                  <Link href="/google-ads" legacyBehavior>
                    <a>
                      {t('layout_navigation_google-ads', {
                        defaultValue: 'Google ADS',
                      })}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/developpement-web" legacyBehavior>
                    <a>
                      {t('layout_navigation_developpement-web', {
                        defaultValue: 'Développement WEB',
                      })}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/referencement-naturel" legacyBehavior>
                    <a>
                      {t('layout_navigation_referencement-naturel', {
                        defaultValue: 'Référencement Naturel',
                      })}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/referencement-payant" legacyBehavior>
                    <a>
                      {t('layout_navigation_referencement-payant', {
                        defaultValue: 'Référencement Payant',
                      })}
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.group}>
              <h3>
                {t('elements_informations', { defaultValue: 'Informations' })}
              </h3>
              <ul>
                <li>
                  <Link href="/PrivacyPolicy" legacyBehavior>
                    <a>
                      {t('layout_navigation_mentions-legales', {
                        defaultValue: 'Mentions légales',
                      })}
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={`${styles.group} ${styles.contacts}`}>
              <h3>
                {t('layout_navigation_retrouvez-nous', {
                  defaultValue: 'Retrouvez-nous',
                })}
              </h3>
              <ul>
                <li>
                  <FontAwesomeIcon className={styles.faIcon} icon={faHome} />
                  {' '}
                  3 rue Keller, 75011 PARIS
                </li>
                <li>
                  <Link href="tel:+33767744343" legacyBehavior>
                    <a>
                      <FontAwesomeIcon className={styles.faIcon} icon={faPhone} />
                      {' '}
                      07.67.74.43.43
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="mailto:contact@visualandko.com" legacyBehavior>
                    <a>
                      <FontAwesomeIcon className={styles.faIcon} icon={faAt} />
                      {' '}
                      contact@visualandko.com
                    </a>
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

