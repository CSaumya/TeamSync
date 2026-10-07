import { axiosInstance } from "../../../../config/axiosInstance";

export let getAllEmployees = async ({
  page = 1,
  limit = 20,
  role = "",
  status = "active",
  department = "",
  search = "",
}) => {
  console.log("Api called, ref: getAllEmployees");
  
  try {
    let res = await axiosInstance.get(
      `/employee?page=${page}&limit=${limit}&search=${search}&role=${role}&department=${department}&status=${status}`
    );
    console.log('response ref: getAllEmployees =>',res)
    return res.data.data;
  } catch (error) {
    console.log("error in all employee api", error);
  }
};

export let createEmployee = async (data) => {
  try {
    let res = await axiosInstance.post("/employee/create", data);

    console.log("Create employee response:", res.data);

    return res.data;
  } catch (error) {
    console.log("Error in create employee API:", error);
    console.log("Status:", error.response?.status);
    console.log("Backend error:", error.response?.data);

    throw error;
  }
};

export let updateEmployee = async (empId, data) => {
  try {
    let res = await axiosInstance.patch(`/employee/update/${empId}`, data);
    console.log(res);
    return res;
  } catch (error) {
    console.log("Error in update employee api", error);
  }
};

export const getEmployeeById = async (empId) => {
  try {
    const res = await axiosInstance.get(`/employee/${empId}`);
    return res;
  } catch (error) {
    console.log("Error getting employee", error);
  }
};

export const deleteEmployee = async (empId) => {
  try {
    const res = await axiosInstance.delete(`/employee/delete/${empId}`);

    return res;
  } catch (error) {
    console.log("Error deleting employee:", error);
    throw error;
  }
};

// getAllEmployees(); //called inside the same file

export default getAllEmployees
