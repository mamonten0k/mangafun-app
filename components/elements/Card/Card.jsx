import Image from 'next/image';
import { HeadingProvider } from '../../layouts/';
import styles from './Card.module.scss';

const Card = ({ type, title }) => {
  const config = {
    imgStyles: [styles.img, styles[`img--${type}`]].join(' '),
    sectionStyles: [styles.info, styles[`info--${type}`]].join(' '),
  };

  return (
    <div className={styles.layout}>
      <div className={config.imgStyles}>
        <Image
          layout='fill'
          src={title.path}
          objectFit='cover'
          className={styles['img-rounded']}
        />
      </div>
      <HeadingProvider
        type='h3'
        heading={title.name}
        wrapperClasses={config.sectionStyles}>
        <p className={styles.text}>
          {type === 'lg' ? title.description : title.team}
        </p>
      </HeadingProvider>
    </div>
  );
};

export { Card };
