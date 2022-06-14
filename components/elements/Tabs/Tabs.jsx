import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { slugify } from '../../../utils/slugify';
import classes from './Tabs.module.scss';

//Partly copypasted from https://github.com/selfteachme/0025-react-tabbed-component
const Tabs = ({ children, initialTab }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const router = useRouter();

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
    router.push(
      `${router.pathname}?tab=${slugify(activeTab)}`,
      undefined,
      {
        shallow: true,
      }
    );
  }, [activeTab]);

  return (
    <div className={classes.layout}>
      <ul className={classes.tabs}>
        {children.map((tab) => {
          const label = tab.props.label;
          return (
            <li
              className={`${classes.tab} ${
                slugify(label) == activeTab
                  ? classes['tab-active']
                  : ''
              }`}
              key={label}>
              <a href='#' onClick={(e) => handleClick(e, label)}>
                {label}
              </a>
            </li>
          );
        })}
      </ul>
      {children.map((item) => {
        if (slugify(item.props.label) == activeTab)
          return <>{item}</>;
      })}
    </div>
  );
};

export { Tabs };
