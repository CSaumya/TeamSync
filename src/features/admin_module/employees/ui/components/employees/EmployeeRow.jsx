import EmployeeActions from "./EmployeeActions";
import StatusBadge from "./StatusBadge";

const EmployeeRow = ({ employee }) => {

  return (
    <tr className="border-b border-[var(--color-border)]">

      {/* PROFILE */}
      <td className="px-6 py-6">
        <div className="flex items-center gap-4">
          <img
            src={
              employee.avatar ||
              "https://ui-avatars.com/api/?name=" + employee.name
            }
            alt={employee.name}
            className="h-14 w-14 rounded-full object-cover"
          />

          <div>
            <h3 className="text-lg font-semibold text-[var(--color-primary)]">
              {employee.name}
            </h3>

            <p className="text-[var(--color-secondary)]">
              {employee.email}
            </p>
          </div>
        </div>
      </td>

      {/* ROLE */}
      <td className="px-6">
        <span className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
          {employee.role}
        </span>
      </td>

      {/* DEPARTMENT */}
      <td className="px-6 capitalize text-[var(--color-primary)]">
        {employee.department}
      </td>

      {/* STATUS */}
      <td className="px-6">
        <StatusBadge status={employee.status} />
      </td>

      {/* DATE */}
      <td className="px-6 text-[var(--color-secondary)]">
        {new Date(employee.createdAt).toDateString()}
      </td>

      {/* ACTIONS */}
      <td className="px-6">
        <EmployeeActions
          employee={employee}
        />
      </td>
    </tr>
  );
};

export default EmployeeRow;