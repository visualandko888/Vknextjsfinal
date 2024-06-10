import BlogArticlesList from '/src/components/Blog/BlogArticlesList';
import { useTranslation } from 'react-i18next';
import styles from '/styles/blogsection.module.scss';

export default function BlogSection({ categoryid }) {
  const { t } = useTranslation(); // Importation de la traduction
  return (
    <section className={styles.blog}>
      <h2>
        {t('blog_section_t1', { defaultValue: 'Nos dernières actualités' })}
      </h2>
      <p>
        {t('blog_section_t2', {
          defaultValue:
            'Découvrez nos dernières actualités à travers les articles de notre blog',
        })}
      </p>
      <BlogArticlesList categoryid={categoryid} />
    </section>
  );
}
