import Image from 'next/image';
import { Card, Comment, Tabs } from '../../elements';
import { Button } from '../../elements/Button/Button';
import styles from './TitlePage.module.scss';

const TitlePage = ({ title, chapters, titles }) => {
  console.log(titles);
  styles['column-md'] = [styles.column, styles['column-mid']].join(' ');
  styles['column-end'] = [styles.column, styles['column-last']].join(' ');

  return (
    <div className={styles.layout}>
      <div className={styles.column}>
        <Image
          layout='fixed'
          src={title.img}
          width={160}
          height={225}
          objectFit='cover'
        />
        <Button direction='right'>Start reading</Button>
        <ul className={styles.info}>
          <li>
            Type
            <br />
            <b>{title.type}</b>
          </li>
          <li>
            Release-date
            <br />
            <b>{title['release-date']}</b>
          </li>
          <li>
            Status
            <br />
            <b>{title.status}</b>
          </li>
          <li>
            Author
            <br />
            <b>{title.author}</b>
          </li>
          <li>
            Artist
            <br />
            <b>{title.artist}</b>
          </li>
          <li>
            Chapters
            <br />
            <b>{title.chapters}</b>
          </li>
        </ul>
      </div>
      <section className={styles['column-md']}>
        <div className={styles.name}>
          {title.name} <br />
          {title.subname}
        </div>
        <Tabs initialTab='Info' flow='vertical'>
          <div className={styles.items} label='Info'>
            INFO
          </div>
          <div className={styles.items} label='Chapters'>
            {chapters.map((chapter) => (
              <div key={chapter.id} className=''>
                {chapter.id}
              </div>
            ))}
          </div>
          <div className={styles.items} label='Comments'>
            {chapters.map((chapter) => (
              <Comment
                type='minimalistic'
                key={`comment-${chapter.id}`}
                title={title}
              />
            ))}
          </div>
        </Tabs>
      </section>
      <section className={styles['column-end']}>
        <h3>Similar</h3>
        <hr />
        {titles.map((title) => (
          <Card key={title.id} type='sm' title={title} />
        ))}
      </section>
      <div className='_ibg'>
        <img src={`${title.bg}`} alt='' />
      </div>
    </div>
  );
};

export { TitlePage };
