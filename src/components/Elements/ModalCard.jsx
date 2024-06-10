import styles from '../../../styles/modalCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function ModalCard({ children, handleClick, classes }) {
  return (
    <div className={`${styles.modalCard} ${classes}`}>
      <div className={styles.content}>
        <FontAwesomeIcon
          role="button"
          tabIndex={0}
          onKeyDown={() => handleClick(false, 0)}
          onClick={() => handleClick(false, 0)}
          className={styles.faIcon}
          icon={faTimes}
        />
        {children}
      </div>
    </div>
  );
}
