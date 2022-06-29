import styles from './Accordion.module.scss';

const Accordion = ({ children }) => {
  return <ul className={styles.layout}>{children}</ul>;
};

export { Accordion };
