import styles from './Section.module.scss';

function Section({ children, sectionName }) {
  return (
    <section className={`${styles.layout}`}>
      <h2 className={styles.title}>{sectionName}</h2>
      {children}
    </section>
  );
}

export { Section };
