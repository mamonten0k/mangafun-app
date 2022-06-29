import { createPortal } from 'react-dom';
import styles from './Overlay.module.scss';

const Overlay = ({ handleClick }) => {
  return createPortal(
    <div className={styles.overlay} onClick={handleClick}></div>,
    document.body
  );
};

export { Overlay };
