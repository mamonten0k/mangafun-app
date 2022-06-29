import Link from 'next/link';
import styles from './Breadcrumb.module.scss';

const Breadcrumb = ({ path }) => {
  const breadcrumbs = [];
  breadcrumbs.push(
    <Link href={`/`}>
      <a>Main</a>
    </Link>
  );
  path.slice(1).forEach((url) =>
    breadcrumbs.push(
      <Link href={`/${url}`}>
        <a>{url.charAt(0).toUpperCase() + url.slice(1)}</a>
      </Link>
    )
  );
  return breadcrumbs;
};

export { Breadcrumb };
