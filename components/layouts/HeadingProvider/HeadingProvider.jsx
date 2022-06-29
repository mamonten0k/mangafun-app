const HeadingProvider = ({ children, type, heading, wrapperClasses }) => {
  const Heading = `${type}`;
  return (
    <div className={wrapperClasses}>
      <Heading>{heading}</Heading>
      {children}
    </div>
  );
};

export { HeadingProvider };
