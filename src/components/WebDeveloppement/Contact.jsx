import ContactForm from '@components/Elements/ContactForm2';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation(); // Importation de la traduction

  return (
    <section id="contact" className="contact spec1">
      <h2>
        {t('webDeveloppement_contact_t1', {
          defaultValue: 'Prêt à donner vie à votre vision numérique ?',
        })}
      </h2>
      <h3>
        {t('webDeveloppement_contact_t2', {
          defaultValue:
            'Rejoignez-nous chez Visual&Ko, et ensemble, construisons un avenir digital exceptionnel.',
        })}
      </h3>
      <p>
        {t('webDeveloppement_contact_t3', {
          defaultValue:
            "Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment notre service de développement web peut vous ouvrir les portes du succès en ligne.",
        })}
      </p>

      <ContactForm />
    </section>
  );
}
