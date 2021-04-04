const Section = ({ title, children }) => {
  return (
    <>
      <h1 className="title">{title}</h1>
      {children}
    </>
  );
};

export default Section;
