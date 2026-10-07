import {
  Users,
  UserCheck,
  ClipboardList,
  CalendarCheck,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  MoreHorizontal,
  UserPlus,
  CheckCircle2,
  FileText,
  Clock,
} from "lucide-react";

import { useEffect, useState } from "react";
import { getAllEmployees } from "../../../admin_module/employees/apis/employeeApi";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const activities = [
  {
    title: "Rahul Sharma joined the team",
    time: "10 min ago",
    icon: UserPlus,
  },
  {
    title: "Task completed by Priya",
    time: "35 min ago",
    icon: CheckCircle2,
  },
  {
    title: "New document uploaded",
    time: "1 hour ago",
    icon: FileText,
  },
  {
    title: "Attendance marked",
    time: "2 hours ago",
    icon: Clock,
  },
];

const Dashboard = () => {
    const navigate = useNavigate();

  const { employee } = useSelector((state) => state.auth);

  const [employees, setEmployees] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchEmployees = async () => {
    try {
      const data = await getAllEmployees({
        page: 1,
        limit: 100,
        role: "",
        status: "",
        department: "",
        search: "",
      });

      console.log("Dashboard employees:", data);

      setEmployees(data?.employees);
    } catch (error) {
      console.error("Failed to fetch employees:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchEmployees(); //removed || []
}, []);

const totalEmployees = employees.length;

console.log(employees)
//issue: employees function was called inside it's own file, causing the employee to return undefined
const activeEmployees = employees.filter(
  (emp) => emp?.status?.toLowerCase() === "active"
).length;

const inactiveEmployees = employees.filter(
  (emp) => emp.status?.toLowerCase() === "inactive"
).length;

const departmentCounts = employees.reduce((acc, employee) => {
  const department = employee.department || "Common";

  acc[department] = (acc[department] || 0) + 1;

  return acc;
}, {});

const departments = Object.entries(departmentCounts).map(
  ([name, count]) => ({
    name,
    count,
  })
);

const recentEmployees = [...employees]
  .sort(
    (a, b) =>
      new Date(b.createdAt || 0) -
      new Date(a.createdAt || 0)
  )
  .slice(0, 5);

  const stats = [
  {
    title: "Total Employees",
    value: totalEmployees,
    icon: Users,
  },
  {
    title: "Active Employees",
    value: activeEmployees,
    icon: UserCheck,
  },
  {
    title: "Inactive Employees",
    value: inactiveEmployees,
    icon: ClipboardList,
  },
  {
    title: "Departments",
    value: departments.length,
    icon: CalendarCheck,
  },
];

return (
    <div className="min-h-screen bg-[var(--color-bg)] p-4 sm:p-6 lg:p-8">

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="mb-1 text-sm font-medium text-[var(--color-secondary)]">
              Wednesday, August 26
            </p>

            <h1 className="text-2xl font-bold tracking-tight text-[var(--color-text)] sm:text-3xl">
              Good evening,   {employee?.name
                ?.split(" ")
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </h1>

            <p className="mt-2 text-sm text-[var(--color-secondary)]">
              Here's what's happening with your workspace today.
            </p>
          </div>

          <button
            onClick={() => navigate("/home/employee/add-employee")}
           className="flex w-fit items-center gap-2 rounded-xl bg-[var(--color-primary)] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-hover)]">
            <UserPlus size={17} />
            Add Employee
          </button>

        </div>


        {/* STATS */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition hover:-translate-y-0.5 hover:border-[var(--color-primary)]/40"
              >

                <div className="flex items-start justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-primary)]/10">
                    <Icon
                      size={21}
                      className="text-[var(--color-primary)]"
                    />
                  </div>

                  <button className="text-[var(--color-secondary)] hover:text-[var(--color-text)]">
                    <MoreHorizontal size={19} />
                  </button>

                </div>

                <p className="mt-5 text-sm text-[var(--color-secondary)]">
                  {stat.title}
                </p>

                <div className="mt-1 flex items-end justify-between">

                  <h2 className="text-2xl font-bold text-[var(--color-text)]">
                    {stat.value}
                  </h2>

                  <div
                    className={`flex items-center gap-1 text-xs font-semibold ${
                      stat.positive
                        ? "text-emerald-400"
                        : "text-[var(--color-tertiary)]"
                    }`}
                  >
                    {stat.positive ? (
                      <TrendingUp size={14} />
                    ) : (
                      <TrendingDown size={14} />
                    )}

                    {stat.change}
                  </div>

                </div>

              </div>
            );
          })}

        </div>


        {/* CHART + DEPARTMENTS */}
        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1.7fr_1fr]">

          {/* WORKFORCE CHART */}
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-6">

            <div className="flex items-start justify-between">

              <div>
                <h2 className="font-semibold text-[var(--color-text)]">
                  Workforce Overview
                </h2>

                <p className="mt-1 text-xs text-[var(--color-secondary)]">
                  Employee growth over the last 6 months
                </p>
              </div>

              <button className="flex items-center gap-1 rounded-lg border border-[var(--color-border)] px-3 py-1.5 text-xs text-[var(--color-secondary)]">
                6 Months
              </button>

            </div>

            {/* Fake chart area - replace with Recharts later */}
            <div className="mt-8 flex h-56 items-end gap-3 sm:gap-6">

              {[42, 55, 48, 68, 74, 86, 78, 95, 88, 105, 112, 128].map(
                (height, index) => (
                  <div
                    key={index}
                    className="group flex h-full flex-1 items-end"
                  >
                    <div
                      style={{ height: `${height / 1.4}%` }}
                      className="w-full rounded-t-lg bg-[var(--color-primary)]/60 transition-all group-hover:bg-[var(--color-primary)]"
                    />
                  </div>
                )
              )}

            </div>

            <div className="mt-3 flex justify-between text-[10px] text-[var(--color-secondary)] sm:text-xs">
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
            </div>

          </div>


          {/* DEPARTMENTS */}
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-6">

            <div className="flex items-center justify-between">

              <div>
                <h2 className="font-semibold text-[var(--color-text)]">
                  Departments
                </h2>

                <p className="mt-1 text-xs text-[var(--color-secondary)]">
                  Employee distribution
                </p>
              </div>

              <button className="text-[var(--color-primary)]">
                <ArrowUpRight size={18} />
              </button>

            </div>

            <div className="mt-6 space-y-5">

              {departments.map((department) => {

                const percentage =
  totalEmployees > 0
    ? (department.count / totalEmployees) * 100
    : 0;

                return (
                  <div key={department.name}>

                    <div className="mb-2 flex justify-between text-sm">

                      <span className="text-[var(--color-text-secondary)]">
                        {department.name}
                      </span>

                      <span className="font-medium text-[var(--color-text)]">
                        {department.count}
                      </span>

                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-[var(--color-border)]">

                      <div
                        style={{ width: `${percentage}%` }}
                        className="h-full rounded-full bg-[var(--color-primary)]"
                      />

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>


        {/* BOTTOM SECTION */}
        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1.7fr_1fr]">

          {/* RECENT EMPLOYEES */}
          <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">

            <div className="flex items-center justify-between border-b border-[var(--color-border)] p-5 sm:p-6">

              <div>
                <h2 className="font-semibold text-[var(--color-text)]">
                  Recent Employees
                </h2>

                <p className="mt-1 text-xs text-[var(--color-secondary)]">
                  Recently added team members
                </p>
              </div>

              <button className="text-sm font-medium text-[var(--color-primary)] hover:underline">
                View all
              </button>

            </div>


            <div className="divide-y divide-[var(--color-border)]">

              {recentEmployees.map((employee) => (

                <div
                  key={employee._id}
                  className="flex items-center gap-3 p-4 transition hover:bg-[var(--color-card)] sm:p-5"
                >

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/15 font-semibold text-[var(--color-primary)]">
                    {employee.name.charAt(0)}
                  </div>

                  <div className="min-w-0 flex-1">

                    <p className="truncate text-sm font-semibold text-[var(--color-text)]">
                      {employee.name}
                    </p>

                    <p className="mt-0.5 truncate text-xs text-[var(--color-secondary)]">
                      {employee.role} · {employee.department}
                    </p>

                  </div>

                  <span className="hidden rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-400 sm:block">
                    {employee.status}
                  </span>

                  <button className="text-[var(--color-secondary)] hover:text-[var(--color-text)]">
                    <MoreHorizontal size={18} />
                  </button>

                </div>

              ))}

            </div>

          </div>


          {/* ACTIVITY */}
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-6">

            <div className="mb-6">

              <h2 className="font-semibold text-[var(--color-text)]">
                Recent Activity
              </h2>

              <p className="mt-1 text-xs text-[var(--color-secondary)]">
                Latest workspace activity
              </p>

            </div>

            <div className="space-y-6">

              {activities.map((activity, index) => {

                const Icon = activity.icon;

                return (
                  <div
                    key={index}
                    className="flex gap-3"
                  >

                    <div className="relative">

                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-primary)]/10">
                        <Icon
                          size={16}
                          className="text-[var(--color-primary)]"
                        />
                      </div>

                      {index !== activities.length - 1 && (
                        <div className="absolute left-1/2 top-9 h-7 w-px -translate-x-1/2 bg-[var(--color-border)]" />
                      )}

                    </div>

                    <div className="min-w-0">

                      <p className="text-sm leading-5 text-[var(--color-text)]">
                        {activity.title}
                      </p>

                      <p className="mt-1 text-xs text-[var(--color-secondary)]">
                        {activity.time}
                      </p>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;