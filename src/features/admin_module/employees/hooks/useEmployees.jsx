import { useQuery } from "@tanstack/react-query";
import  getAllEmployees  from "../apis/employeeApi";
import { useState } from "react";

let useEmployee = () => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    search: "",
    role: "",
    department: "",
    status: "",
  });


  let { data, isPending, isFetching } = useQuery({
    queryKey: ["employees", page, filters],
    queryFn: () =>
      getAllEmployees({
        page,
        limit: 20,
        role: filters.role,
        status: filters.status,
        department: filters.department,
        search: filters.search,
      }),
    staleTime: 100000,
    keepPreviousData: true,
    placeholderData: (prev) => prev,
  });

  const handlePageChange = (newPage) => {
    if (newPage < 1) return;

    if (newPage > data?.pagination?.totalPages) return;

    setPage(newPage);
  };

 const handleSearchFilters = (name, value) => {
  setPage(1);

  setFilters((prev) => ({
    ...prev,
    [name]: value,
  }));
};
  
  return {
    isPending,
    data,
    isFetching,
    handlePageChange,
    filters,
    handleSearchFilters,
  };
};

export default useEmployee