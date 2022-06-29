import { useState } from 'react';
import { Card, Carousel } from '../../elements';
import { ModalAuth, ModalRegister, Section } from '../../modules';
import styles from './EntryPage.module.scss';

function EntryPage({ titles }) {
  const [isOpen, setIsOpen] = useState(false);

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
