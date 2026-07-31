const Tag = ({ className = "", children }) => {
  return (
    <span
      className={`bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full font-medium ${className}`}
    >
      {children}
    </span>
  );
};

export default Tag;
