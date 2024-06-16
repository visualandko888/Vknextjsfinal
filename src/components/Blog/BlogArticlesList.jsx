
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import instanceAxios from '/helpers/axios';
import { useTranslation } from 'react-i18next';
import '/styles/blogArticlesList.module.scss';


export default function BlogArticlesList({ categoryid }) {
  const { i18n } = useTranslation();
  const [articlesList, setArticlesList] = useState([]);
  const router = useRouter();

  const handleClickNavigate = (id) => {
    router.push(`/blog/${id}`);
  };

  useEffect(() => {
    instanceAxios()
      .get(
        `get_blog_article.php?${
          categoryid > 0 ? `categoryid=${categoryid}` : ''
        }&lang=${i18n.language}`,
      )
      .then((res) => {
        if (res.data.success && res.data.type === 'list') {
          setArticlesList(res.data.results);
        }
      })
      .catch(() => {});
  }, [i18n.language]);

  return (
    <div className="articlesList">
      {articlesList.slice(0, 4).map((e, index) => (
        <div
          key={index}
          role="button"
          tabIndex={0}
          onClick={() => handleClickNavigate(e.id)}
          onKeyDown={() => handleClickNavigate(e.id)}
          read_duration={`${e.read_duration} min`}
          className={`card article${index + 1}`}
        >
          <img
            alt={`blog ${index}`}
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/blogs/${
              e.img_primary
            }`}
          />
          <h3>{e.title}</h3>
        </div>
      ))}
    </div>
  );
}
