import { Search, Bell, Menu, Moon, Sun } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../../shared/state/themeSlice";

const TopNavbar = ({ onMenuClick }) => {
  const dispatch = useDispatch();

  const mode = useSelector((store) => store.theme.mode);

    const { employee } = useSelector((state) => state.auth);

    console.log(employee?.name.charAt(0));

  const handleThemeChange = () => {
    dispatch(toggleTheme());
    console.log('theme btn clicked')
  };

  return (
    <header className="sticky top-0 z-30 flex w-full justify-between items-center gap-2 border-b border-[var(--color-border)] bg-[var(--color-bg)]/95 p-3 backdrop-blur-sm sm:gap-3 sm:p-4">

      {/* Hamburger */}
      <button
        type="button"
        onClick={onMenuClick}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[var(--color-text-secondary)] transition hover:bg-[var(--color-surface)] hover:text-[var(--color-text)] lg:hidden"
      >
        <Menu size={20} />
      </button>

      {/* Search */}
      <div className="min-w-0 flex-1 lg:max-w-[600px]">
        <div className="flex w-full items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2">

          <Search
            size={16}
            className="shrink-0 text-[var(--color-text-secondary)]"
          />

          <input
            type="text"
            placeholder="Search workspace..."
            className="min-w-0 flex-1 bg-transparent text-xs text-[var(--color-text)] outline-none placeholder:text-[var(--color-text-secondary)] sm:text-sm"
          />

        </div>
      </div>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-2">

        {/* Bell */}
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--color-text-secondary)] transition hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]"
        >
          <Bell size={18} />
        </button>

        {/* Profile */}
        <button
          type="button"
          className="flex h-7 w-7 text-lg items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-primary)] text-[var(--color-text)] transition hover:opacity-80"
        >
          {employee?.name?.charAt(0)?.toUpperCase()}
        </button>

        {/* Theme */}
        <button
          type="button"
          onClick={handleThemeChange}
          className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] transition hover:opacity-80"
        >
          {mode === "dark" ? (
            <Moon size={18} />
          ) : (
            <Sun size={18} />
          )}
        </button>

      </div>

    </header>
  );
};

export default TopNavbar;