import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import leftIcoDevWeb from '/public/images/left-ico-dev-web.svg';
import leftIcoGoogleAds from '/public/images/left-ico-google-ads.svg';
import icSocialAds from '/public/images/ic-social-ads.svg';
import leftIcoCalendar from '/public/images/left-ico-calendar.svg';
import icPlusCircle from '/public/images/ic-plus-circle.svg';
import hamb from '/public/images/hamb.svg';
import styles from '/styles/navLeft.module.scss';

const Sidebar = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const navItems = [
    {
      name: 'Développement WEB',
      url: '/developpement-web',
      icon: leftIcoDevWeb,
      translate_var: 'developpement-web',
    },
    {
      name: 'Google Ads',
      url: '/google-ads',
      icon: leftIcoGoogleAds,
      translate_var: 'google-ads',
    },
    {
      name: 'Référencement Naturel',
      url: '/referencement-naturel',
      icon: icSocialAds,
      translate_var: 'referencement-naturel',
    },
    {
      name: 'Prendre rendez-vous',
      url: '#',
      icon: leftIcoCalendar,
      translate_var: 'prendre-rendez-vous',
      isCalendar: true,
    },
    {
      name: 'Demander un devis',
      modal: true,
      url: '/#contact',
      icon: icPlusCircle,
      translate_var: 'demander-un-devis',
    },
  ];

  if (!isClient) {
    return null;
  }

  return (
    <div className={styles.sidebar}>
      <ul className={styles.navList}>
      <div className={styles.menunavleft}><Image src={hamb}  className={styles.iconmenu} width={30} height={30} /></div>
        {navItems.map((item, index) => (
          <li key={index} className={styles.navItem}>
            {item.url ? (
              <Link href={item.url} legacyBehavior>
                <a className={styles.navLink}>
                  <Image src={item.icon} alt={item.name} className={styles.icon} width={24} height={24} />
                  <span className={styles.navText}>{item.name}</span>
                </a>
              </Link>
            ) : (
              <a className={styles.navLink}>
                <Image src={item.icon} alt={item.name} className={styles.icon} width={24} height={24} />
                <span className={styles.navText}>{item.name}</span>
              </a>
            )}
            {item.sublist && (
              <ul className={styles.sublist}>
                {item.sublist.map((subItem, subIndex) => (
                  <li key={subIndex} className={styles.subNavItem}>
                    <Link href={subItem.url} legacyBehavior>
                      <a className={styles.subNavLink}>{subItem.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
