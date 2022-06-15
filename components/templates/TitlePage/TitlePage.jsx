import { Comment, Tabs } from '../../elements';
import styles from './TitlePage.module.scss';

function TitlePage({ title, chapters }) {
  return (
    <div className={styles.layout}>
      <div className={styles.column}>
        <img src={title.img} alt={`${title.name}  cover image`} />
        <button className='btn'>Start reading</button>
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
      <section className={`${styles.column} ${styles['column-right']}`}>
        <div className={styles.name}>
          {title.name} <br />
          {title.subname}
        </div>
        <Tabs initialTab={'Info'}>
          <div className={styles.items} label='Info'>
            INFO
          </div>
          <div className={styles.items} label='Chapters'>
            {chapters.map((chapter) => (
              <div className=''>{chapter.id}</div>
            ))}
          </div>
          <div className={styles.items} label='Comments'>
            {chapters.map((comment) => (
              <Comment
                type={'minimalistic'}
                key={`comment-${title.id}`}
                title={title}
              />
            ))}
          </div>
        </Tabs>
      </section>
      <div className='_ibg'>
        {/* Или с помощью next/image */}
        <img src={`${title.bg}`} alt='' />
      </div>
    </div>
  );
}

export { TitlePage };
