import logo from '/public/images/logo_blue.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

export default function NavTopMobile({ handleClickShowNavMobile }) {
  const router = useRouter();

  return (
    <div className="navTop3">
      <img
        role="button"
        tabIndex={0}
        onKeyDown={() => router.push('/')}
        onClick={() => router.push('/')}
        src={logo}
        alt="logo"
      />
      <FontAwesomeIcon
        onClick={() => handleClickShowNavMobile(true)}
        className="faIcon"
        icon={faBars}
      />
    </div>
  );
}

