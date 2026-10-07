import Attendance from "../../features/employee_module/attendance/ui/pages/Attendance";
import MyTasks from "../../features/employee_module/my_tasks/ui/pages/MyTasks";
import Profile from "../../features/employee_module/profile/ui/pages/Profile";

const employeeRoutes = 

[
  {
    path: "/home/attendance",
    element: <Attendance />,
  },
  {
    path: "/home/myTask",
    element: <MyTasks />,
  },
  {
    path: "/home/profile",
    element: <Profile />,
  },
];

export default employeeRoutes;