import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from '/styles/blogArticlesList.module.scss';

export default function BlogArticlesList({ categoryid }) {
  const [articlesList, setArticlesList] = useState([]);
  const router = useRouter();

  const handleClickNavigate = (id) => {
    router.push(`/blog/${id}`);
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/get_blog_article.php`, {
            params: {
              categoryid: categoryid > 0 ? categoryid : undefined,
              // lang: 'fr', // Vous pouvez remplacer 'fr' par la langue souhaitée ou par une variable dynamique
            },
            // headers: {
            //   'If-None-Match': '*', // Exemple d'en-tête, adaptez en fonction des exigences du serveur
            //   'Accept': 'application/json',
            //   'DNT': '1',
            //   'User-Agent': navigator.userAgent,
            // }
          }
        );
        if (response.data.success && response.data.type === 'list') {
          setArticlesList(response.data.results);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des articles:", error);
      }
    };

    fetchArticles();
  }, [categoryid]);

  return (
    <div className={styles.articlesList}>
      {articlesList.slice(0, 4).map((e, index) => (
        <div
          key={index}
          role="button"
          tabIndex={0}
          onClick={() => handleClickNavigate(e.id)}
          onKeyDown={() => handleClickNavigate(e.id)}
          className={`${styles.card} ${styles[`article${index + 1}`]}`}
        >
          <img
            alt={`blog ${index}`}
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/blogs/${e.img_primary}`}
          />
          <h3>{e.title}</h3>
        </div>
      ))}
    </div>
  );
}
