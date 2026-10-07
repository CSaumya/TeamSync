import { useState } from "react";
import { Outlet } from "react-router";
import AsideNav from "../../features/dashboard/ui/components/AsideNav";
import TopNavbar from "../../features/dashboard/ui/components/TopNavbar";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full">

      {/* Sidebar */}
      <AsideNav
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <TopNavbar
          onMenuClick={() => setIsSidebarOpen(true)}
        />

        <main className="min-w-0 flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>

    </div>
  );
};

export default DashboardLayout;