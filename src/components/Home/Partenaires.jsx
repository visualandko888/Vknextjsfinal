import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '/styles/Partenaires.module.scss';
import ads from '/public/images/ads.png';
import sc from '/public/images/sc.png';
import tg from '/public/images/tg.png';
import gb from '/public/images/gb.png';
import cg from '/public/images/cg.png';
import ia from '/public/images/ia.png';
import plesk from '/public/images/plesk.png';
import git from '/public/images/git.png';
import us from '/public/images/us.png';

export default function Partenaires() {
  const [partenaireFinalList, setParenaireFinalList] = useState([]);
  const elementRef = useRef(null);
  const [marginLeftPrestataire, setMarginLeftPrestataire] = useState(0);

  const partenaireArr = [
    { src: ads, alt: 'google ads' },
    { src: sc, alt: 'search console' },
    { src: tg, alt: 'tag manager' },
    { src: ia, alt: 'instagram ads' },
    { src: plesk, alt: 'plesk' },
    { src: git, alt: 'github' },
    { src: us, alt: 'ubersuggest' },
    { src: gb, alt: 'google my business' },
    { src: cg, alt: 'cg' },
  ];

  useEffect(() => {
    const prepArr = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < partenaireArr.length; j++) {
        const prepItem = {
          id: i + 1,
          src: partenaireArr[j].src,
          alt: partenaireArr[j].alt,
        };
        prepArr.push(prepItem);
      }
    }
    setParenaireFinalList(prepArr);
  }, []);

  useEffect(() => {
    const checkPosition = () => {
      const element = elementRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementBottom = rect.bottom;
        const windowHeight = window.innerHeight;
        setMarginLeftPrestataire(elementBottom - windowHeight);
      }
    };

    window.addEventListener('scroll', checkPosition);
    return () => {
      window.removeEventListener('scroll', checkPosition);
    };
  }, []);

  return (
    <div className={styles.partenaires}>
      <div
        style={{
          marginLeft: marginLeftPrestataire,
        }}
        ref={elementRef}
        className={styles.nosOutils}
      >
        {partenaireFinalList.map((e, index) => (
          <Image key={index} src={e.src} alt={e.alt} width={100} height={100} />
        ))}
      </div>
    </div>
  );
}
