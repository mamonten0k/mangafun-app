import styles from './Comment.module.scss';

const Comment = ({ type }) => {
  styles['layout-extended'] = [styles.layout, styles[`layout-${type}`]].join(
    ' '
  );
  styles['text-extended'] = [styles.text, styles[`text-${type}`]].join(' ');

  return (
    <div className={styles['layout-extended']}>
      <div className={styles.info}>
        <h3>Vagabond</h3>
        <div className={styles['text-extended']}>
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
