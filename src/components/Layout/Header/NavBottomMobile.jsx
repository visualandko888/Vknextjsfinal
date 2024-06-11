import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPenToSquare,
  faPhone,
  faCalendarDay,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function NavBottomMobile() {
  const showCalendar = () => {
    // eslint-disable-next-line no-undef
    Calendly.initPopupWidget({ url: 'https://calendly.com/visualandko/30min' });
    return false;
  };

  return (
    <div className="navBottomMobile">
      <div className="icoList">
        <Link href="/#">
          <FontAwesomeIcon className="faIcon" icon={faHouse} />
        </Link>
        <Link href="/#contact">
          <FontAwesomeIcon className="faIcon" icon={faPenToSquare} />
        </Link>
        <Link href="tel:+33767744343">
          <FontAwesomeIcon className="faIcon" icon={faPhone} />
        </Link>
        <Link href="#" onClick={showCalendar}>
          <FontAwesomeIcon className="faIcon" icon={faCalendarDay} />
        </Link>
      </div>
    </div>
  );
}
