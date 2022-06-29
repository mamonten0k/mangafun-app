import Link from 'next/link';
import styles from './Chapter.module.scss';

const Chapter = ({ chapter }) => {
  return (
    <Link href={chapter.link}>
      <a className={styles.layout}>
        <span>{chapter.name}</span>
        <span>{chapter['release-date']}</span>
      </a>
    </Link>
  );
};

export { Chapter };
