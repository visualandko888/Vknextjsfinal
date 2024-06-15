import styles from '/styles/modalCardrea.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function ModalCard({ children, handleClick, classes }) {
  return (
    <div className={`${styles.modalCardrea} ${classes}`}>
      <div className={styles.contentrea}>
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
