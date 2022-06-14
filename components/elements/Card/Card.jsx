import Image from 'next/image';
import classes from './Card.module.scss';

const Card = ({ type, title }) => {
  return (
    <div className={classes.layout}>
      <div className={`${classes.img} ${classes[`img--${type}`]}`}>
        <Image
          layout='fill'
          src={`${title.path}`}
          objectFit='cover'
          className={classes['img-rounded']}
        />
      </div>
      <div className={`${classes.info} ${classes[`info--${type}`]}`}>
        <h3 className='title'>{title.name || 'John Doe'}</h3>
        <p className={classes.text}>
          {type === 'lg' ? title.description : title.team}
        </p>
      </div>
    </div>
  );
};

export { Card };
