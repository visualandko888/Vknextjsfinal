import Image from 'next/image';
import ContactForm2 from '/src/components/Elements/ContactForm2'; // Assurez-vous que le chemin est correct
import { useTranslation } from 'react-i18next';
import logoPrimary from '/public/images/logo-primary.svg';
import styles from '/styles/contact2.module.scss';

export default function Contact() {
  const { t } = useTranslation(); // Importation de la traduction
  return (
    <section id="contact" className={styles.contact}>
      <h2>
        {t('home_contact_t1', { defaultValue: 'Contacter' })}
        {' '}
        <Image alt="logo" src={logoPrimary} />
      </h2>
      <p>
        {t('home_contact_t2', { defaultValue: 'Demandez un devis' })}
        {' '}
        <span>{t('home_contact_t3', { defaultValue: 'gratuitement' })}</span>
      </p>
      <p>
        {t('home_contact_t4', {
          defaultValue:
            'Parlez-nous de votre projet via ce formulaire, notre équipe d’experts reviendra vers vous en moins de 24h',
        })}
      </p>

      <ContactForm2 />
    </section>
  );
}

