import classes from './Comment.module.scss';

const Comment = ({ type }) => {
  return (
    <div className={`${classes.layout} ${classes[`layout-${type}`]}`}>
      <div className={classes.info}>
        <h3>Vagabond</h3>
        <div className={`${classes.text} ${classes[`text-${type}`]}`}>
          HAHAHAHAHAHAAHHAHAHAHAHAHAAHHAHAHAHAHAHAAHHAHAHAHAHAHAAHHAHAHAHAHAHAAHHAHAHAHAHAHAAHHAHAHAHAHAHAAHHAHAHAHAHAHAAHHAHAHAHAHAHAAHHAHAHAHAHAHAAHHAHAHAHAHAHAAHHAHAHAHAHAHAAHHAHAHAHAHAHAAHHAHAHAHAHAHAAHHAHAHAHAHAHAAHHAHAHAHAHAHAAH
        </div>
      </div>
      {type === 'extended' && (
        <div>
          <b>Posted on</b>
          <br />
          19.05.2022
        </div>
      )}
    </div>
  );
};

export { Comment };
