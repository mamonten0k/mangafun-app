import { Card } from '../../elements';
import classes from './Updates.module.scss';

const Updates = ({ titles }) => {
  return (
    <section className={`container ${classes.layout}`}>
      <h2 className={classes.title}>Updates</h2>
      <div className={classes['cards-wrapper']}>
        {titles.map((title) => (
          <Card id={title.id} type='sm' title={title} />
        ))}
      </div>
    </section>
  );
};

export { Updates };
