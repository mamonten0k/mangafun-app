import { AccordionItem } from '../AccordionItem/AccordionItem';
import classes from './Accordion.module.scss';

const Accordion = ({ children, withIcons }) => {
  children.forEach((item) => console.dir(item));
  return (
    <ul className={classes.layout}>
      {children.map((item) => (
        <AccordionItem
          key={item.props.label}
          heading={item.props.label}
          icon={
            withIcons && `${item.props.label.split(' ').join('')}.svg`
          }>
          {item.props.children}
        </AccordionItem>
      ))}
    </ul>
  );
};

export { Accordion };
