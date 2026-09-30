import { Sparkles, X } from "lucide-react";
import NavigationTab from "./NavigationTab";
import { useSelector } from "react-redux";
import {
  adminNavigation,
  employeeNavigation,
} from "../../../../app/constants/navigations";

const AsideNav = ({ isOpen, setIsOpen }) => {
  const { employee } = useSelector((store) => store.auth);

  const navigations =
    employee?.role === "admin"
      ? adminNavigation
      : employeeNavigation;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50
          h-screen w-64 shrink-0
          border-r-2 border-[var(--color-border)]
          bg-[var(--color-surface)]
          p-4

          transition-transform duration-300 ease-in-out

          lg:sticky lg:z-30 lg:translate-x-0

          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >

        {/* Header */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">

            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7957b8] to-[#c6a9fa] shadow-md shadow-[#7957b8]/20">
              <Sparkles
                size={16}
                strokeWidth={2.2}
                className="text-[#17121d]"
              />
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-tight text-[var(--color-text)]">
                TeamSync
              </h1>

              <p className="text-xs text-[var(--color-text-secondary)]">
                Enterprise Workspace
              </p>
            </div>

          </div>

          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="text-[var(--color-text-secondary)] lg:hidden"
          >
            <X size={20} />
          </button>

        </div>

        {/* Navigation */}
        <div className="mt-8 flex flex-col gap-2">
          {navigations.map((route, index) => (
            <NavigationTab
              key={index}
              path={route.path}
              Icon={route.icon}
              title={route.title}
              onClick={() => setIsOpen(false)}
            />
          ))}
        </div>

      </aside>
    </>
  );
};

export default AsideNav;