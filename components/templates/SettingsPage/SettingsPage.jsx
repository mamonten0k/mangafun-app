import { Tabs } from '../../elements';
import { Button } from '../../elements/Button/Button';
import styles from './SettingsPage.module.scss';

/**
 * Tabs
 *    Tabs
 *    /TabsVertival TabsVertical.module.scss TabsVertival.jsx
 *    /TabsHorizontal TabsHorizontal.module.scss TabsHorizontal.jsx
 */

const SettingsPage = () => {
  return (
    <Tabs initialTab={'Profile Settings'} flow={'horizontal'}>
      <div className={styles['settings-profile']} label='Profile Settings'>
        <div className={styles.avatar}>
          <h3>Profile photo</h3>
          <div className={styles['profile-photo']}></div>
          <div className={styles['profile-photo']}></div>
        </div>
        <div className={styles['user-data']}>
          {/* //Сделать компонент инпут, в который если что будет вводится Заголовок */}
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
        <Button direction={'left'} width={'10rem'}>
          Save
        </Button>
      </div>
      <div
        className={styles['settings-profile']}
        label='Confidentiality Settings'>
        ASADDWA
      </div>
    </Tabs>
  );
};

export { SettingsPage };
