import {
  CheckCircle2,
  Clock3,
  ListTodo,
  Plus,
} from "lucide-react";

const Tasks = () => {
  const stats = [
    {
      title: "Total Tasks",
      value: 24,
      icon: ListTodo,
    },
    {
      title: "Completed",
      value: 12,
      icon: CheckCircle2,
    },
    {
      title: "In Progress",
      value: 8,
      icon: Clock3,
    },
    {
      title: "Pending",
      value: 4,
      icon: Clock3,
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg)] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[var(--color-text)] sm:text-3xl">
              Tasks
            </h1>

            <p className="mt-2 text-sm text-[var(--color-secondary)]">
              Manage and track your team's tasks.
            </p>
          </div>

          <button className="flex w-fit items-center gap-2 rounded-xl bg-[var(--color-primary)] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-hover)]">
            <Plus size={17} />
            Add Task
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-primary)]/10">
                  <Icon
                    size={21}
                    className="text-[var(--color-primary)]"
                  />
                </div>

                <p className="mt-5 text-sm text-[var(--color-secondary)]">
                  {stat.title}
                </p>

                <h2 className="mt-1 text-2xl font-bold text-[var(--color-text)]">
                  {stat.value}
                </h2>
              </div>
            );
          })}
        </div>

        {/* Filters */}
        <div className="mt-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 sm:p-5">
          <div className="flex flex-col gap-3 md:flex-row">

            <input
              type="text"
              placeholder="Search tasks..."
              className="flex-1 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2.5 text-sm text-[var(--color-text)] outline-none placeholder:text-[var(--color-secondary)] focus:border-[var(--color-primary)]"
            />

            <select className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2.5 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-primary)]">
              <option value="">All Status</option>
              <option value="pending">Pending</option>
              <option value="progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>

            <select className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2.5 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-primary)]">
              <option value="">All Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>

          </div>
        </div>

        {/* Task Table */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">

              <thead className="border-b border-[var(--color-border)]">
                <tr className="text-left text-xs text-[var(--color-secondary)]">
                  <th className="px-5 py-4 font-medium">
                    Task
                  </th>

                  <th className="px-5 py-4 font-medium">
                    Assigned To
                  </th>

                  <th className="px-5 py-4 font-medium">
                    Priority
                  </th>

                  <th className="px-5 py-4 font-medium">
                    Due Date
                  </th>

                  <th className="px-5 py-4 font-medium">
                    Status
                  </th>

                  <th className="px-5 py-4 font-medium">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[var(--color-border)]">

                <tr className="text-sm">
                  <td className="px-5 py-5">
                    <p className="font-medium text-[var(--color-text)]">
                      Build dashboard
                    </p>

                    <p className="mt-1 text-xs text-[var(--color-secondary)]">
                      Admin Dashboard
                    </p>
                  </td>

                  <td className="px-5 py-5 text-[var(--color-text-secondary)]">
                    Saumya
                  </td>

                  <td className="px-5 py-5">
                    <span className="rounded-full bg-red-400/10 px-2.5 py-1 text-xs font-medium text-red-400">
                      High
                    </span>
                  </td>

                  <td className="px-5 py-5 text-[var(--color-text-secondary)]">
                    Aug 28, 2026
                  </td>

                  <td className="px-5 py-5">
                    <span className="rounded-full bg-[var(--color-primary)]/10 px-2.5 py-1 text-xs font-medium text-[var(--color-primary)]">
                      In Progress
                    </span>
                  </td>

                  <td className="px-5 py-5">
                    <button className="text-sm font-medium text-[var(--color-primary)] hover:underline">
                      View
                    </button>
                  </td>
                </tr>

              </tbody>

            </table>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Tasks;