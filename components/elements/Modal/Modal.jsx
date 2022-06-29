import { useEffect } from 'react';
import { ReactPortal } from '../../../utils/createPortal';
import styles from './Modal.module.scss';

const Modal = ({ children, isOpen, handleClose }) => {
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === 'Escape' ? handleClose() : null);
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <ReactPortal>
      <div className={styles.base}>
        <button onClick={handleClose} className='close-btn'>
          Close
        </button>
        <div>{children}</div>
      </div>
    </ReactPortal>
  );
};

export { Modal };
