import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Head from 'next/head';
import BlogArticlesList from '/src/components/Blog/BlogArticlesList';
import Contact from '/src/components/Home/Contact';
import styles from '/styles/blogpage.module.scss';

export default function BlogId() {
  const router = useRouter();
  const { id } = router.query;
  const [blogDetails, setBlogDetails] = useState({});
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const title = 'Blog | Visual & Ko - Création, maintenance et sécurité de sites internet performants';
  const description = 'Visual & Ko vous propose des services web complets pour la création de sites internet professionnels, la maintenance et la sécurité de votre site existant. Nous sommes également spécialisés en référencement naturel pour améliorer votre visibilité en ligne. Contactez-nous dès maintenant !';

  useEffect(() => {
    if (id) {
      axios
        .get(`${API_URL}/get_blog_article.php?articleid=${id}&lang=fr`)
        .then((res) => {
          if (res.data.success && res.data.type === 'article') {
            setBlogDetails(res.data.results);
          } else {
            router.push('/404');
          }
        })
        .catch((err) => {
          if (err.response && err.response.status === 404) {
            router.push('/404');
          }
        });
    }
  }, [id]);

  return (
    <main>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <section className={styles.blogArticle}>
        <div className={styles.blogArticleHead}>
          <h2>{blogDetails.title}</h2>
          <p>{blogDetails.text_primary}</p>
          <img
            src={`${BACKEND_URL}/uploads/blogs/${blogDetails.img_primary}`}
            alt="principal"
          />
          <p>{blogDetails.text_secondary}</p>
        </div>
        <div className={styles.blogArticleSection}>
          <div className={styles.sectionBody}>
            <img
              src={`${BACKEND_URL}/uploads/blogs/${blogDetails.img_s1}`}
              alt="section 1"
            />
            <div className={styles.text}>
              <h3>{blogDetails.title_s1}</h3>
              <p>{blogDetails.text_s1}</p>
            </div>
          </div>
        </div>
        <div className={styles.blogArticleSection}>
          <div className={styles.sectionBody}>
            <img
              src={`${BACKEND_URL}/uploads/blogs/${blogDetails.img_s2}`}
              alt="section 2"
            />
            <div className={styles.text}>
              <h3>{blogDetails.title_s2}</h3>
              <p>{blogDetails.text_s2}</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.othersArticles}>
        <h2>Nos autres articles</h2>
        <BlogArticlesList />
      </section>
      <Contact />
    </main>
  );
}
