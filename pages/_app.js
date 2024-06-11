// pages/_app.js

import '/styles/hero.module.scss'; // Ajoutez vos importations CSS globales ici
import '/styles/base.module.scss'; // Ajoutez vos importations CSS globales ici
import '/styles/LeyFrames.module.scss'; // Ajoutez vos importations CSS globales ici
import '/styles/bpi.module.scss'; // Ajoutez vos importations CSS globales ici
import '/styles/team.module.scss'; // Ajoutez vos importations CSS globales ici
import '/styles/services.module.scss'; // Ajoutez vos importations CSS globales ici
import '/styles/modalCard.module.scss'; // Ajoutez vos importations CSS globales ici
import '/styles/Partenaires.module.scss'; // Ajoutez vos importations CSS globales ici
import '/styles/Rea.module.scss'; // Ajoutez vos importations CSS globales ici
import '/styles/reviews.module.scss'; // Ajoutez vos importations CSS globales ici
import '/styles/questions.module.scss'; // Ajoutez vos importations CSS globales ici
import '/styles/contact2.module.scss'; // Ajoutez vos importations CSS globales ici
import '/styles/blogsection.module.scss'; // Ajoutez vos importations CSS globales ici
import '/styles/globals.scss';
import '../config/i18n';
import Layout from '/src/components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
