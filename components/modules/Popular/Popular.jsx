import { Carousel } from '../../elements';
import classes from './Popular.module.scss';

//ToDo Fix Props Drilling Problem
const Popular = ({ titles }) => {
  return (
    <section className={`container ${classes['container-layout']}`}>
      <h2 className={classes.title}>Popular</h2>
      <Carousel titles={titles} />
    </section>
  );
};

export { Popular };
