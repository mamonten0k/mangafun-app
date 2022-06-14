import { useState } from 'react';
import { Card } from '../';
import classes from './Carousel.module.scss';

// ToDo Correctly show cards in carousel, make a scroll calc funcion to prevent overscroll
const Carousel = ({ titles }) => {
  const [slideScoped, setSlideScoped] = useState(0);

  const handleScoped = (evt) => {
    setSlideScoped(evt.target.id);
  };

  return (
    <div className={classes.layout}>
      <div className={classes['slides-outer']}>
        <div
          className={classes['slides-scope']}
          style={{
            transform: `translateX(-${(slideScoped - 1) * 421.3}px)`,
          }}>
          {titles.map((title) => (
            <Card id={title.id} type='lg' title={title} />
          ))}
        </div>
      </div>
      <div className={classes.controls}>
        {titles.map((title) => (
          <span
            key={title.id}
            className={classes.control}
            onClick={handleScoped}></span>
        ))}
      </div>
    </div>
  );
};

export { Carousel };
