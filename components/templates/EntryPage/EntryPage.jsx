import { Card, Carousel } from '../../elements';
import { Section } from '../../modules';
import styles from './EntryPage.module.scss';

function EntryPage({ titles }) {
  return (
    <>
      <Section sectionName='Popular'>
        <Carousel titles={titles}>
          {titles.map((title) => (
            <Card key={title.id} type='lg' title={title} />
          ))}
        </Carousel>
      </Section>
      <Section sectionName='Recent Updates'>
        {/* Убрать wrapper в listings ** А может и нет */}
        <div className={styles['cards-wrapper']}>
          {titles.map((title) => (
            <Card key={title.id} type='sm' title={title} />
          ))}
        </div>
      </Section>
    </>
  );
}

export { EntryPage };
