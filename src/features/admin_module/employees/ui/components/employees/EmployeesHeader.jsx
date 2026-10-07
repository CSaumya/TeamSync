import { Download, UserPlus, Users } from "lucide-react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const EmployeeHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="relative mb-8 overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-6 sm:px-7 sm:py-8 lg:px-8">

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        {/* LEFT CONTENT */}
        <div className="min-w-0">

          {/* Small label */}
          <div className="mb-3 flex items-center gap-2">

            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-primary)]/10">
              <Users
                size={16}
                className="text-[var(--color-primary)]"
              />
            </div>

            <span className="text-sm font-medium text-[var(--color-primary)]">
              Team Management
            </span>

          </div>

          {/* Heading */}
          <h1 className="font-basic text-3xl font-bold tracking-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl">
            Employee Directory
          </h1>

          {/* Description */}
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--color-secondary)] sm:text-base lg:text-base">
            Manage your organization's workforce, roles, departments,
            and employee information.
          </p>

        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">

          {/* Export */}
          <Button
            variant="secondary"
            icon={<Download size={18} />}
          >
            Export
          </Button>

          {/* Add Employee */}
          <Button
            handleClick={() => navigate("/home/employee/add-employee")}
            icon={<UserPlus size={18} />}
          >
            Add Employee
          </Button>

        </div>

      </div>
    </div>
  );
};

export default EmployeeHeader;