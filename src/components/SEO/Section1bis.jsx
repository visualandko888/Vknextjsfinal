import '@assets/css/page/SEO/section1bis.scss';
import { useTranslation } from 'react-i18next';

export default function Section1bis() {
  const { t } = useTranslation(); // Importation de la traduction
  return (
    <section className="section1bis">
      <p>
        {t('seo_section1bis_t1', {
          defaultValue:
            "Plongez dans l'univers fascinant du SEO et découvrez comment notre expérience peut métamorphoser votre présence en ligne.",
        })}
      </p>
    </section>
  );
}
