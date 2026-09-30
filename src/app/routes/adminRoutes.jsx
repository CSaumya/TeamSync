import Employees from "../../features/admin_module/employees/ui/pages/Employees";
import Departments from "../../features/admin_module/departments/ui/pages/Department";
import Documents from "../../features/admin_module/documents/ui/pages/Documents";
import Tasks from "../../features/admin_module/tasks/ui/pages/Tasks";
import AddEmployee from '../../features/admin_module/employees/ui/pages/AddEmployee'

const adminRoutes = [
  {
    path: "/home/employee",
    element: <Employees />,
  },
  {
    path : 'employee/add-employee',
    element : <AddEmployee />
  },
  {
    path : 'employee/add-employee/:id',
    element : <AddEmployee />
  },
  {
    path: "/home/department",
    element: <Departments />,
  },
  {
    path: "/home/document",
    element: <Documents />,
  },
  {
    path: "/home/task",
    element: <Tasks />,
  },
];

export default adminRoutes;