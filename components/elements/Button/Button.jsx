import styles from './Button.module.scss';

const Button = ({
  type = 'button',
  children,
  direction,
  width,
  usage,
  handleClick,
}) => {
  const BtnTag = `${type}`;
  const className =
    usage === 'withIcon'
      ? styles.blank
      : [styles.default, styles[`direction-${direction}`]].join(' ');

  return (
    <BtnTag
      className={className}
      style={width ? { width: `${width}` } : {}}
      onClick={handleClick}>
      {children}
    </BtnTag>
  );
};

export { Button };
