import logo from '@assets/images/logo_blue.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function NavTopMobile({ handleClickShowNavMobile }) {
  const navigate = useNavigate();

  return (
    <div className="navTop3">
      <img
        role="button"
        tabIndex={0}
        onKeyDown={() => navigate('/')}
        onClick={() => navigate('/')}
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
