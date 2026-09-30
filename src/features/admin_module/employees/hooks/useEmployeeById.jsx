import { useQuery } from "@tanstack/react-query";
import { getEmployeeById } from "../apis/employeeApi";

const useEmployeeById = (id) => {
  return useQuery({
    queryKey: ["employee", id],
    queryFn: () => getEmployeeById(id),
    enabled: !!id,
  });
};

export default useEmployeeById;