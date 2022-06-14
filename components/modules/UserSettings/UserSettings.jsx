import classes from './UserSettings.module.scss';

const UserSettings = () => {
  return (
    <div className={`container ${classes['container-layout']}`}>
      <div className={classes.categories}>
        <button>Profile Settings</button>
        <button>Confidetiality Settings</button>
      </div>
      <div className={classes['settings-profile']}>
        <div className={classes.avatar}>
          <h3>Profile photo</h3>
          <div className={classes['profile-photo']}></div>
          <div className={classes['profile-photo']}></div>
        </div>
        <div className={classes['user-data']}>
          <div className={classes['user-input']}>
            <h3>Profile name</h3>
            <input type='text' />
          </div>
          <div className={classes['user-input']}>
            <h3>Profile name</h3>
            <input type='text' />
          </div>
          <div className={classes['user-input']}>
            <h3>Profile name</h3>
            <input type='text' />
          </div>
          <div className={classes['user-input']}>
            <h3>Profile name</h3>
            <input type='text' />
          </div>
        </div>
        <button className='btn btn-default'>Save</button>
      </div>
    </div>
  );
};

export { UserSettings };
