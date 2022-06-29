import { Input, Tabs } from '../../elements';
import { Button } from '../../elements/Button/Button';
import { HeadingProvider } from '../../layouts';
import styles from './SettingsPage.module.scss';

const SettingsPage = () => {
  return (
    <Tabs initialTab='Profile Settings'>
      <div className={styles['settings-profile']} label='Profile Settings'>
        <HeadingProvider
          classes={styles.avatar}
          type='h3'
          heading='Profile photo'>
          <div className={styles['profile-photo']}></div>
          <div className={styles['profile-photo']}></div>
        </HeadingProvider>
        <div className={styles['user-data']}>
          <HeadingProvider type='h3' heading='Profile name'>
            <Input placeholder='Type your nickname' />
          </HeadingProvider>
          <HeadingProvider type='h3' heading='Profile name'>
            <Input placeholder='Type your nickname' />
          </HeadingProvider>
          <HeadingProvider type='h3' heading='Profile name'>
            <Input placeholder='Type your nickname' />
          </HeadingProvider>
          <HeadingProvider type='h3' heading='Profile name'>
            <Input placeholder='Type your nickname' />
          </HeadingProvider>
        </div>
        <Button direction='left' width='10rem'>
          Save
        </Button>
      </div>
      <div label='Confidentiality Settings'>ASADDWA</div>
    </Tabs>
  );
};

export { SettingsPage };
