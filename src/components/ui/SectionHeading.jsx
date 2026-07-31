const SectionHeading = ({
  title,
  subtitle,
  className = "",
  titleClassName = "text-slate-900 dark:text-white",
  subtitleClassName = "max-w-2xl text-slate-600 dark:text-slate-400",
}) => {
  return (
    <div className={`text-center mb-14 ${className}`}>
      <h2 className={`text-4xl font-bold ${titleClassName}`}>{title}</h2>

      {subtitle && (
        <p className={`mt-4 mx-auto ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
