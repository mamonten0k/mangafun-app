import { useState } from 'react';
import classes from './Carousel.module.scss';

// ToDo Correctly show items in carousel, make a scroll calc funcion to prevent overscroll
const Carousel = ({ children }) => {
  const [slideScoped, setSlideScoped] = useState(0);

  const handleScoped = (evt) => {
    console.log(evt.target.key);
    setSlideScoped(evt.target.key);
  };

  return (
    <div className={classes.layout}>
      <div className={classes['slides-outer']}>
        <div
          className={classes['slides-scope']}
          style={{
            transform: `translateX(-${(slideScoped - 1) * 421.3}px)`,
          }}>
          {children}
        </div>
      </div>
      <div className={classes.controls}>
        {children.map((child) => (
          <span
            key={`${child.key}-cl`}
            className={classes.control}
            onClick={handleScoped}></span>
        ))}
      </div>
    </div>
  );
};

export { Carousel };
