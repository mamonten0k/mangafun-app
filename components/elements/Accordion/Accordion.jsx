import { AccordionItem } from './AccordionItem/AccordionItem';
import styles from './Accordion.module.scss';

const Accordion = ({ children, withIcons }) => {
  return (
    <ul className={styles.layout}>
      {children.map((item) => (
        <AccordionItem
          key={item.props.label}
          heading={item.props.label}
          outerLink={item.props.label.toLowerCase()}
          icon={withIcons && `${item.props.label.split(' ').join('')}.svg`}>
          {item.props.children}
        </AccordionItem>
      ))}
    </ul>
  );
};

export { Accordion };
