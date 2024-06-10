import ContactForm from '@components/Elements/ContactForm2';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation(); // Importation de la traduction
  return (
    <section id="contact" className="contact spec1">
      <h2>
        {t('seo_contact_t1', {
          defaultValue: 'Prêt à donner vie à vos idées ? ',
        })}
      </h2>
      <h3>
        {t('seo_contact_t2', {
          defaultValue:
            'Adoptez une présence en ligne captivante grâce à des stratégies SEO ciblées.',
        })}
      </h3>
      <p>
        {t('seo_contact_t3', {
          defaultValue:
            "Contactez-nous dès aujourd'hui pour discuter d'une stratégie publicitaire qui illuminera votre marque et stimulera vos conversions.",
        })}
      </p>

      <ContactForm />
    </section>
  );
}
