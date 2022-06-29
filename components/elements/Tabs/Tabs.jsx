import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { slugify } from '../../../utils/slugify';
import styles from './Tabs.module.scss';

const Tabs = ({ children, initialTab, withBg }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const router = useRouter();
  // не то
  const config = {
    layout: [styles.layout, withBg && styles['layout-bg']]
      .filter((item) => item)
      .join(' '),
  };

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(slugify(newActiveTab));
  };

  useEffect(() => {
    if (initialTab) {
      setActiveTab(slugify(initialTab));
    }
  }, []);

  useEffect(() => {
    router.push(`${router.pathname}?tab=${slugify(activeTab)}`, undefined, {
      shallow: true,
    });
  }, [activeTab]);

  return (
    <div className={config.layout}>
      <ul className={styles.tabs}>
        {children.map((tab) => (
          <li
            className={`${styles.tab} ${
              slugify(tab.props.label) == activeTab ? styles['tab-active'] : ''
            }`}
            key={tab.props.label}>
            <a href='#' onClick={(e) => handleClick(e, tab.props.label)}>
              {tab.props.label}
            </a>
          </li>
        ))}
      </ul>
      {children.map((item) => {
        if (slugify(item.props.label) == activeTab) return <>{item}</>;
      })}
    </div>
  );
};

export { Tabs };
