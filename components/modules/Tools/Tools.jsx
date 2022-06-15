import classes from './Tools.module.scss';

const Tools = ({ placeholder }) => {
  return (
    <div className={classes.tools}>
      <input
        type='text'
        className={classes.input}
        placeholder={placeholder}
      />
      <img
        src='./Present-as-list.svg'
        alt='Represent contents as list'
        className='icon'
      />
      <img
        src='./Present-as-bars.svg'
        alt='Represent contents as bars'
        className='icon'
      />
    </div>
  );
};

export { Tools };
