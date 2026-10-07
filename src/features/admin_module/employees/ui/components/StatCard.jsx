const StatCard = ({
  title,
  value,
  icon,
  badge,
}) => {
  return (
    <div className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl p-4 sm:p-5 lg:p-6">
      
      {/* Top section */}
      <div className="flex items-center justify-between gap-3">
        
        <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 shrink-0 rounded-2xl bg-[var(--color-primary-hover)] text-[var(--color-text-bg)] flex items-center justify-center text-xl sm:text-2xl">
          {icon}
        </div>

        <span className="text-xs sm:text-sm font-semibold text-[var(--color-primary)] truncate">
          {badge}
        </span>

      </div>

      {/* Content */}
      <div className="mt-4 sm:mt-5 lg:mt-6">
        
        <p className="text-sm sm:text-base text-[var(--color-secondary)] truncate">
          {title}
        </p>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-1 sm:mt-2 text-[var(--color-primary)]">
          {value}
        </h1>

      </div>
    </div>
  );
};

export default StatCard;