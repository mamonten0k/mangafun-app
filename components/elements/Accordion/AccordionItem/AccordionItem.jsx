import { useRef, useState } from 'react';
import Link from 'next/link';
import classes from './AccordionItem.module.scss';

const AccordionItem = ({ children, heading, icon, outerLink }) => {
  const [isActive, setIsActive] = useState(false);
  const faqRef = useRef(null);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <li className={`${classes.item}`}>
      {outerLink ? (
        <Link href={`${outerLink}`}>
          <div className={classes['item--visible']}>
            {icon && <img src={`./${icon}`} className='icon icon-custom' />}
            <span>{heading}</span>
          </div>
        </Link>
      ) : (
        <>
          <div className={classes['item--visible']} onClick={handleClick}>
            {icon && <img src={`./${icon}`} className='icon icon-custom' />}
            <span style={isActive ? { textDecoration: 'underline' } : {}}>
              {heading}
            </span>
          </div>
          <div
            ref={faqRef}
            className={`${classes['faq-wrapper']} ${
              isActive ? classes._active : ''
            }`}>
            <ul className={classes.faq}>{children}</ul>
          </div>
        </>
      )}
    </li>
  );
};

export { AccordionItem };
