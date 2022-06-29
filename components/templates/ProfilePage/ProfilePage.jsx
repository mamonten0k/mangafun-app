import Image from 'next/image';
import { Breadcrumb, Card, Comment, Tabs } from '../../elements';
import { v4 as uuidv4 } from 'uuid';
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
          priority
          style={{ borderRadius: '.4rem' }}
        />
      </div>
      <Tabs initialTab='Titles' flow='vertical'>
        <div className={styles.items} label='Titles'>
          {titles.map((title) => (
            <Card key={uuidv4()} id={title.id} type='md' title={title} />
          ))}
        </div>
        <div className={styles.items} label='Comments'>
          {titles.map((title) => (
            <Comment key={uuidv4()} title={title} type='default' />
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
