import EmployeeRow from "./EmployeeRow";

const EmployeeTable = ({ employees }) => {
  return (
    <div className="w-full overflow-x-auto custom-scrollbar">
      <table className="w-full min-w-[800px]">
        <thead>
          <tr className="text-left border-b border-[var(--color-border)]">
            <th className="px-4 sm:px-5 lg:px-6 py-4 sm:py-5 text-sm sm:text-base text-[var(--color-secondary)] whitespace-nowrap">
              Profile
            </th>

            <th className="px-4 sm:px-5 lg:px-6 py-4 sm:py-5 text-sm sm:text-base text-[var(--color-secondary)] whitespace-nowrap">
              Role
            </th>

            <th className="px-4 sm:px-5 lg:px-6 py-4 sm:py-5 text-sm sm:text-base text-[var(--color-secondary)] whitespace-nowrap">
              Department
            </th>

            <th className="px-4 sm:px-5 lg:px-6 py-4 sm:py-5 text-sm sm:text-base text-[var(--color-secondary)] whitespace-nowrap">
              Status
            </th>

            <th className="px-4 sm:px-5 lg:px-6 py-4 sm:py-5 text-sm sm:text-base text-[var(--color-secondary)] whitespace-nowrap">
              Joined Date
            </th>

            <th className="px-4 sm:px-5 lg:px-6 py-4 sm:py-5 text-sm sm:text-base text-[var(--color-secondary)] whitespace-nowrap">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <EmployeeRow
              key={employee._id}
              employee={employee}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;