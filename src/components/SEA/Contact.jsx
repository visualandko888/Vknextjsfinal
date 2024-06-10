import ContactForm from '@components/Elements/ContactForm2';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation(); // Importation de la traduction

  return (
    <section id="contact" className="contact spec1">
      <h2>
        {t('sea_contact_t1', {
          defaultValue: "À la recherche d'un itinéraire vers le succès ?",
        })}
      </h2>
      <h3>
        {t('sea_contact_t2', {
          defaultValue: 'Concrétisez vos objectifs grâce au SEA',
        })}
      </h3>
      <p>
        {t('sea_contact_t3', {
          defaultValue:
            "N'hésitez pas à nous contacter dès maintenant pour entamer une conversation sur la création d'une stratégie publicitaire efficace, qui lluminera votre marque et stimulera vos conversions.",
        })}
      </p>
      <ContactForm />
    </section>
  );
}
