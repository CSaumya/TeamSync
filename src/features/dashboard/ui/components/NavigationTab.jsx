import { NavLink } from "react-router";

const NavigationTab = ({ path, title, Icon }) => {
  return (
    <NavLink
      to={path}
      end={path === "/home"}
      className={({ isActive }) =>
        `group flex items-center gap-3 rounded-lg px-3 py-2.5
        text-sm font-medium transition-all duration-200
        ${
          isActive
            ? "bg-[#7957b8]/15 text-[#9f72f3] border-r-4"
            : "text-[var(--color-text-secondary)] hover:bg-[#7957b8]/10 hover:text-[var(--color-text)]"
        }`
      }
    >
      <Icon
        size={20}
        className="shrink-0 transition-transform duration-200 group-hover:scale-110"
      />

      <span>{title}</span>
    </NavLink>
  );
};

export default NavigationTab;