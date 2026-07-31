const Section = ({ id, className = "", containerClassName = "", children }) => {
  return (
    <section id={id} className={`py-20 px-6 transition-colors ${className}`}>
      <div className={`container mx-auto ${containerClassName}`}>{children}</div>
    </section>
  );
};

export default Section;
