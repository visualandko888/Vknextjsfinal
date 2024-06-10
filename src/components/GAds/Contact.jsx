import ContactForm from '@components/Elements/ContactForm2';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation(); // Importation de la traduction

  return (
    <section id="contact" className="contact spec1">
      <h2>
        {t('gads_contact_t1', {
          defaultValue: "Besoin d'une Stratégie Gagnante ?",
        })}
      </h2>
      <h3>
        {t('gads_contact_t2', {
          defaultValue:
            'Êtes-vous déterminé à obtenir des résultats tangibles grâce à Google Ads ?',
        })}
      </h3>
      <p>
        {t('gads_contact_t3', {
          defaultValue:
            "Contactez-nous dès aujourd'hui pour discuter de la façon dont nous pouvons élaborer une stratégie publicitaire gagnante qui mettra en lumière votre marque et augmentera vos conversions.",
        })}
      </p>
      <ContactForm />
    </section>
  );
}
