import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import logo from '/public/images/logo-blue.svg';
import styles from '/styles/headerheader.module.scss';

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
      <FontAwesomeIcon
        onClick={() => handleClickShowNavMobile(true)}
        className={styles.faIcon}
        icon={faBars}
      />
    </div>
  );
}
