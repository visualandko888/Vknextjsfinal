import { instanceAxios } from '/helpers/axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import googleAds from '/public/images/contact-google-ads.svg';
import web from '/public/images/contact-web.svg';
import seo from '/public/images/contact-seo.svg';
import sea from '/public/images/contact-sea.svg';
import security from '/public/images/contact-security.svg';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import phoneImg from '/public/images/phone.svg';
import share from '/public/images/share.svg';
import Link from 'next/link';
import logoPrimary from '/public/images/logo.svg';
import flecheDroite from '/public/images/fleche.svg';
import { useRouter } from 'next/router';
import styles from '/styles/contact2.module.scss';

export default function ContactForm2() {
  const { t } = useTranslation(); // Importation de la traduction
  const router = useRouter();
  const servicesList = [
    {
      name: '<span>Développement</span> <br />Web',
      publicName: 'Site vitrine',
      img: web,
      selected: false,
    },
    {
      name: '<span>Développement</span> <br />Web',
      publicName: 'E.commerce',
      img: web,
      selected: false,
    },
    {
      name: 'Google<br /> Ads',
      publicName: 'Google ADS',
      img: googleAds,
      selected: false,
    },
    {
      name: 'SEO',
      publicName: 'Référencement naturel',
      img: seo,
      selected: false,
    },
    {
      name: 'SEA',
      publicName: 'Social ADS',
      img: sea,
      selected: false,
    },
    {
      name: '<span>Maintenance</span><br />Sécurité',
      publicName: 'Maintenance & Sécurité',
      img: security,
      selected: false,
    },
  ];

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [society, setSociety] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [description, setDescription] = useState('');
  const [pj, setPj] = useState(null);
  const [sendStep, setSendStep] = useState(0);

  const [currentLabel, setCurrentLabel] = useState('');

  const handleChange = (e) => {
    const fileName = e.target.value.split('\\').pop();
    setCurrentLabel(
      fileName.length > 15 ? `...${fileName.slice(-15)}` : fileName,
    );
    setPj(e.target.files[0]);
  };

  const handleChangeForm = (type, e) => {
    const { value } = e.target;
    if (type === 'firstname') {
      setFirstname(value);
    }
    if (type === 'lastname') {
      setLastname(value);
    }
    if (type === 'society') {
      setSociety(value);
    }
    if (type === 'mail') {
      setMail(value);
    }
    if (type === 'phone') {
      setPhone(value);
    }
    if (type === 'website') {
      setWebsite(value);
    }
    if (type === 'description') {
      setDescription(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSendStep(1);
    let services = '';
    for (let i = 0; i < servicesList.length; i++) {
      if (servicesList[i].selected) {
        services += ` | ${servicesList[i].publicName}`;
      }
    }
    const formData = new FormData();
    formData.append('services', `${services} |`);
    formData.append('pj', pj);
    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('society', society);
    formData.append('mail', mail);
    formData.append('phone', phone);
    formData.append('website', website);
    formData.append('description', description);

    instanceAxios()
      .post('post_contact.php', formData)
      .then(() => {
        router.push('/confirmation-de-devis-2');
        setSendStep(2);
      })
      .catch(() => {});
  };

  return (
    <>
      <div className={styles.content}>
        <div className={styles.left}>
          <img src={logoPrimary} alt="logo" />
          <p>
            {t('contact_form_t6', {
              defaultValue:
                'Décrivez nous votre projet afin que nous puissions répondre au mieux à votre demande et ce, dans les plus brefs délais',
            })}
          </p>
          <img src={flecheDroite} alt="fleche" />
        </div>
        <div className={styles.right}>
          {sendStep === 1 && (
            <div className={styles.sendStep}>
              <h3>
                {t('contact_form_t3', {
                  defaultValue: 'Envoi de votre message en cours...',
                })}
              </h3>
            </div>
          )}

          {sendStep === 2 && (
            <div className={styles.sendStep}>
              <h3>
                {t('contact_form_t4', {
                  defaultValue:
                    'Votre message a bien été envoyé. Notre équipe reviendra vers vous dans les plus brefs délais !',
                })}
              </h3>
            </div>
          )}
          {sendStep === 0 && (
            <form onSubmit={handleSubmit} method="post">
              <h3>
                {t('contact_form_t1', {
                  defaultValue: 'Vous désirez nous contacter pour :',
                })}
              </h3>
              <select name="service">
                <option value="0">Séléctionner un service</option>
                {servicesList.map((e, index) => (
                  <option value={index}>
                    {t(`contact_form_service_v2_${index + 1}`, {
                      defaultValue: e.publicName,
                    })}
                  </option>
                ))}
              </select>
              <div>
                <input
                  onChange={(e) => handleChangeForm('lastname', e)}
                  type="text"
                  name="lastname"
                  required
                  placeholder={t('contact_form_input1', {
                    defaultValue: 'Nom',
                  })}
                />
                <input
                  onChange={(e) => handleChangeForm('firstname', e)}
                  type="text"
                  name="firstname"
                  required
                  placeholder={t('contact_form_input2', {
                    defaultValue: 'Prénom',
                  })}
                />
              </div>
              <div>
                <input
                  onChange={(e) => handleChangeForm('mail', e)}
                  type="mail"
                  name="mail"
                  required
                  placeholder={t('contact_form_input4', {
                    defaultValue: 'Adresse Mail',
                  })}
                />
                <input
                  onChange={(e) => handleChangeForm('phone', e)}
                  type="number"
                  name="phone"
                  required
                  placeholder={t('contact_form_input6', {
                    defaultValue: 'Téléphone',
                  })}
                />
              </div>
              <div>
                <input
                  onChange={(e) => handleChangeForm('society', e)}
                  type="text"
                  name="society"
                  placeholder={t('contact_form_input3', {
                    defaultValue: 'Société',
                  })}
                />
                <input
                  onChange={(e) => handleChangeForm('website', e)}
                  type="text"
                  name="website"
                  placeholder={t('contact_form_input5', {
                    defaultValue: 'Site internet',
                  })}
                />
              </div>

              <textarea
                onChange={(e) => handleChangeForm('description', e)}
                name="description"
                placeholder={t('contact_form_input7', {
                  defaultValue:
                    'Un commentaire ou des questions sur votre projet ?',
                })}
              />
              <div>
                <label htmlFor="pj">
                  {currentLabel || (
                    <>
                      <FontAwesomeIcon className={styles.faIcon} icon={faPaperclip} />
                      {t('contact_form_input8', {
                        defaultValue: 'Pièce jointe',
                      })}
                    </>
                  )}
                </label>
                <input
                  onChange={(e) => handleChange(e)}
                  type="file"
                  id="pj"
                  name="pj"
                  accept=".jpg, .jpeg, .png, .doc, .docx, .pdf, .txt"
                />
                <button type="submit">
                  {t('contact_form_t2', {
                    defaultValue: 'Contactez notre équipe',
                  })}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      <div className={styles.bottom}>
        <p>
          {t('contact_form_t5', {
            defaultValue:
              'Pour toutes demandes vous pouvez joindre un de nos agents via :',
          })}
        </p>
        <div className={styles.contactInfos}>
          <div>
            <img src={phoneImg} alt="téléphone" />
            <span>
              <Link href="tel:+33767744343">07 67 74 43 43</Link>
            </span>
          </div>
          <div>
            <img src={share} alt="téléphone" />
            <span>
              <Link href="mailto:contact@visualandko.com">
                contact@visualandko.com
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
