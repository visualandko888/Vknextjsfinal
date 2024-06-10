import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPenToSquare,
  faPhone,
  faCalendarDay,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';
import { NavHashLink } from 'react-router-hash-link';

export default function NavBottomMobile() {
  const showCalendar = () => {
    // eslint-disable-next-line no-undef
    Calendly.initPopupWidget({ url: 'https://calendly.com/visualandko/30min' });
    return false;
  };
  return (
    <div className="navBottomMobile">
      <div className="icoList">
        <NavHashLink to="/#">
          <FontAwesomeIcon className="faIcon" icon={faHouse} />
        </NavHashLink>
        <NavHashLink to="/#contact">
          <FontAwesomeIcon className="faIcon" icon={faPenToSquare} />
        </NavHashLink>
        <NavHashLink to="tel:+33767744343">
          {' '}
          <FontAwesomeIcon className="faIcon" icon={faPhone} />
        </NavHashLink>
        <NavHashLink onClick={() => showCalendar()} to="#">
          <FontAwesomeIcon className="faIcon" icon={faCalendarDay} />
        </NavHashLink>
      </div>
    </div>
  );
}
