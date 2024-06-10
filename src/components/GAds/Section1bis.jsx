import '@assets/css/page/gads/section1bis.scss';
import { useTranslation } from 'react-i18next';

export default function Section1bis() {
  const { t } = useTranslation(); // Importation de la traduction

  return (
    <section className="section1bis">
      <p>
        {t('gads_section1bis_t1', {
          defaultValue:
            'Lancez-vous dans une aventure où chaque décision est guidée par des données,',
        })}
        <br />
        {' '}
        {t('gads_section1bis_t2', {
          defaultValue:
            'chaque clic est une occasion et chaque impression peut devenir une conversion.',
        })}
      </p>
      <p className="subtext">
        {t('gads_section1bis_t3', {
          defaultValue:
            'Faites équipe avec Google Ads pour transformer votre présence en ligne en une force irrésistible.',
        })}
      </p>
    </section>
  );
}
