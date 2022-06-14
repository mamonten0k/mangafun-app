import styles from './SettingsPage.module.scss';

const SettingsPage = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.categories}>
        <button>Profile Settings</button>
        <button>Confidetiality Settings</button>
      </div>
      <div className={styles['settings-profile']}>
        <div className={styles.avatar}>
          <h3>Profile photo</h3>
          <div className={styles['profile-photo']}></div>
          <div className={styles['profile-photo']}></div>
        </div>
        <div className={styles['user-data']}>
          <div className={styles['user-input']}>
            <h3>Profile name</h3>
            <input type='text' />
          </div>
          <div className={styles['user-input']}>
            <h3>Profile name</h3>
            <input type='text' />
          </div>
          <div className={styles['user-input']}>
            <h3>Profile name</h3>
            <input type='text' />
          </div>
          <div className={styles['user-input']}>
            <h3>Profile name</h3>
            <input type='text' />
          </div>
        </div>
        <button className='btn btn-default'>Save</button>
      </div>
    </div>
  );
};

export { SettingsPage };
