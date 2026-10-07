import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ pagination, onPageChange }) => {
  const { page, totalPages, total, limit } = pagination;

  const start = total === 0 ? 0 : (page - 1) * limit + 1;
  const end = Math.min(page * limit, total);

  return (
    <div className="flex flex-col items-center justify-between gap-4 px-4 sm:px-6 py-4 sm:py-5 border-t border-[var(--color-border)] bg-[var(--color-surface)]">

      {/* LEFT */}
      <div className="text-xs sm:text-sm text-[var(--color-secondary)] text-center sm:text-left">
        Showing{" "}
        <span className="font-semibold text-[var(--color-primary)]">
          {start}
        </span>{" "}
        to{" "}
        <span className="font-semibold text-[var(--color-primary)]">
          {end}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-[var(--color-primary)]">
          {total}
        </span>{" "}
        employees
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-1.5 sm:gap-2">

        {/* PREV */}
        <button
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
          className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center border transition-all
            ${
              page === 1
                ? "opacity-40 cursor-not-allowed border-[var(--color-border)]"
                : "border-[var(--color-border)] hover:bg-[var(--color-primary-hover)]"
            }`}
        >
          <ChevronLeft size={18} />
        </button>

        {/* PAGE NUMBERS */}
        <div className="hidden sm:flex items-center gap-2">
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;

            return (
              <button
                key={pageNumber}
                onClick={() => onPageChange(pageNumber)}
                className={`w-11 h-11 sm:w-8 sm:h-8 rounded-xl font-medium transition-all
                  ${
                    page === pageNumber
                      ? "bg-[var(--color-primary)] text-white"
                      : "border border-[var(--color-border)] hover:bg-[var(--color-primary-hover)] text-[var(--color-primary)]"
                  }`}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>

        {/* CURRENT PAGE - MOBILE */}
        <div className="flex sm:hidden items-center justify-center min-w-9 h-9 px-3 rounded-xl bg-[var(--color-primary)] text-white text-sm font-medium">
          {page}
        </div>

        {/* NEXT */}
        <button
          disabled={page === totalPages}
          onClick={() => onPageChange(page + 1)}
          className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center border transition-all
            ${
              page === totalPages
                ? "opacity-40 cursor-not-allowed border-[var(--color-border)]"
                : "border-[var(--color-border)] hover:bg-[var(--color-primary-hover)]"
            }`}
        >
          <ChevronRight size={18} />
        </button>

      </div>
    </div>
  );
};

export default Pagination;