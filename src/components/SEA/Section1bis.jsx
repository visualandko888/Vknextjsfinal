import '@assets/css/page/SEA/section1bis.scss';
import { useTranslation } from 'react-i18next';

export default function Section1bis() {
  const { t } = useTranslation(); // Importation de la traduction

  return (
    <section className="section1bis">
      <p>
        {t('sea_section1bis_t1', {
          defaultValue:
            'Rejoignez-nous pour embrasser le pouvoir des annonces en ligne ciblées et entrez dans une nouvelle ère de croissance pour votre entreprise.',
        })}
      </p>
    </section>
  );
}
