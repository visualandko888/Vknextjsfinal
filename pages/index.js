import { useTranslation } from 'react-i18next';
import Hero from '../src/components/Home/Hero';
import HelmetMeta from '../src/components/Helmet/HelmetMeta';
import Bpi from '../src/components/Home/bpi';
import Team from '../src/components/Home/Team';
import Services from '../src/components/Home/Services'; // Utilisez le chemin relatif correct
import Partenaires from '../src/components/Home/Partenaires';
import Rea from '../src/components/Home/Rea';
import Reviews from '../src/components/Home/Reviews';
import Faq from '../src/components/Home/Faq';
import Contact from '../src/components/Home/Contact';
import BlogSection from '../src/components/Blog/BlogSection';



export default function Home() {
  console.log('Home page rendue');
  const { t } = useTranslation(); // Importation de la traduction
  const title = t('helmet_home_t1', {
    defaultValue:
      'Accueil | Visual & Ko - Votre partenaire de confiance pour la création de sites web et la génération de leads',
  });
  const description = t('helmet_home_t2', {
    defaultValue:
      'Découvrez Visual & Ko, votre partenaire de confiance pour la création de sites internet professionnels, la maintenance et la sécurité de votre site, le référencement naturel et la génération de leads qualifiés. Contactez-nous dès maintenant pour booster votre présence en ligne !',
  });

  return (
    <main>
      <HelmetMeta title={title} description={description} />
      <Hero />
      <Bpi />
      <Team />
      <Services />
      <Partenaires />
      <Rea />
      <Reviews />
      <Faq />
      <Contact />
      <BlogSection />
    </main>
  );
}

