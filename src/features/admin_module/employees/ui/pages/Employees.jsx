import useEmployee from "../../hooks/useEmployees";
import EmployeeHeader from "../components/employees/EmployeesHeader";
import EmployeeStats from "../components/employees/EmployeeStats";
import SearchFilterBar from "../components/employees/SearchFilterBar";
import EmployeeTable from "../components/employees/EmployeeTable";
import Pagination from "../components/employees/Pagination";

const Employee = () => {
  const {
    data,
    isPending,
    handlePageChange,
    isFetching,
    filters,
    handleSearchFilters,
  } = useEmployee();


  if (isPending) {
    return <h1>Loading..</h1>;
  }

  return (
    <div className="min-h-screen p-8">
      <div className="mx-auto">

        {/* HEADER */}
        <EmployeeHeader />

        {/* STATS */}
        <EmployeeStats employees={data?.employees} />

        {/* TABLE SECTION */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-[var(--color-border)]">

          <SearchFilterBar
            filters={filters}
            handleSearchFilters={handleSearchFilters}
          />

          {isFetching && (
            <h1>Loading next page data</h1>
          )}

          <EmployeeTable employees={data?.employees} />

          <Pagination
            pagination={data?.pagination}
            onPageChange={handlePageChange}
          />

        </div>
      </div>
    </div>
  );
};

export default Employee;