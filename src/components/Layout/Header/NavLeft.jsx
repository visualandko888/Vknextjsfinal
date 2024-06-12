// components/Sidebar.js

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import leftIcoDevWeb from '/public/images/left-ico-dev-web.svg';
import leftIcoGoogleAds from '/public/images/left-ico-google-ads.svg';
import icSocialAds from '/public/images/ic-social-ads.svg';
import leftIcoCalendar from '/public/images/left-ico-calendar.svg';
import icPlusCircle from '/public/images/ic-plus-circle.svg';
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
      // sublist: [
      //   {
      //     name: 'Création de site Internet',
      //     translate_var: 'web-site',
      //     url: '#',
      //   },
      //   {
      //     name: 'UX/UI/Web Design',
      //     translate_var: 'web-design',
      //     url: '#uxui',
      //   },
      //   {
      //     name: 'Maintenance sécurité',
      //     translate_var: 'maintenance-securite',
      //     url: '#maintenance',
      //   },
      // ],
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
        {navItems.map((item, index) => (
          <li key={index} className={styles.navItem}>
            <Link href={item.url} legacyBehavior passHref>
              <a className={styles.navLink}>
                <Image src={item.icon} alt={item.name} className={styles.icon} width={24} height={24} />
                <span className={styles.navText}>{item.name}</span>
              </a>
            </Link>
            {item.sublist && (
              <ul className={styles.sublist}>
                {item.sublist.map((subItem, subIndex) => (
                  <li key={subIndex} className={styles.subNavItem}>
                    <Link href={subItem.url} legacyBehavior passHref>
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
