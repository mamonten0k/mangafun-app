import Image from 'next/image';
import { Card, Comment, Tabs } from '../../elements';
import styles from './ProfilePage.module.scss';

const ProfilePage = ({ titles }) => {
  return (
    <div className={`${styles.layout}`}>
      <div className={styles.header}>
        <Image
          layout='fixed'
          src='/User-logo.png'
          width={120}
          height={120}
          alt='User profile image'
          objectFit='cover'
          style={{ borderRadius: '.4rem' }}
        />
        <div className={styles.breadcrumbs}>Main page / Profile</div>
      </div>
      <Tabs initialTab={'Titles'}>
        <div className={styles.items} label='Titles'>
          {titles.map((title) => (
            <Card
              key={`title-${title.id}`}
              id={title.id}
              type={'md'}
              title={title}
            />
          ))}
        </div>
        <div className={styles.items} label='Comments'>
          {titles.map((title) => (
            <Comment
              key={`comment-${title.id}`}
              title={title}
              type={'default'}
            />
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export { ProfilePage };

{
  /* <Head>
        <title>Mangafun app</title>
      <meta
          name='description'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head> */
}
