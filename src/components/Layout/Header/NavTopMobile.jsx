import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import logo from '/public/images/logo-blue.svg';
import styles from '/styles/headerheader.module.scss';

// Nouveau composant pour gérer les icônes avec des paramètres par défaut
const MyFontAwesomeIcon = ({ icon, onClick, className, size = '1x', color = 'black' }) => (
  <FontAwesomeIcon icon={icon} onClick={onClick} className={className} size={size} color={color} />
);

export default function NavTopMobile({ handleClickShowNavMobile }) {
  const router = useRouter();

  return (
    <div className={styles.navTop3}>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={() => router.push('/')}
        onClick={() => router.push('/')}
      >
        <Image src={logo} alt="logo" />
      </div>
      <MyFontAwesomeIcon
        onClick={() => handleClickShowNavMobile(true)}
        className={styles.faIcon}
        icon={faBars}
      />
    </div>
  );
}
