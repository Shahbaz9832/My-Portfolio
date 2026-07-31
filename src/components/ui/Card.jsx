const Card = ({ className = "", children }) => {
  return (
    <div
      className={`bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
