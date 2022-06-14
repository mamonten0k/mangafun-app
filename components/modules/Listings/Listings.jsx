import { Card } from '../../elements';
import { Comment } from '../../elements';
import classes from './Listings.module.scss';

const Listings = ({ type, titles }) => {
  return (
    <div className={classes.layout}>
      {titles.map((title) =>
        type === 'Card' ? (
          <Card key={title.id} type={'sm'} title={title} />
        ) : (
          <Comment key={title.id} type={'sm'} title={title} />
        )
      )}
    </div>
  );
};

export { Listings };
