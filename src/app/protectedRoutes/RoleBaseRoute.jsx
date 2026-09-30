import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const RoleBaseRoute = ({ allowedRoles }) => {
  const { employee } = useSelector((store) => store.auth);

  console.log("Employee:", employee);
  console.log("Employee role:", employee?.role);
  console.log("Allowed roles:", allowedRoles);

  if (!employee) {
    return <Navigate to="/" replace />;
  }

  const userRole = employee.role?.toLowerCase();

  const hasAccess = allowedRoles.some(
    (role) => role.toLowerCase() === userRole
  );

  console.log("Has access:", hasAccess);

  if (!hasAccess) {
    return <Navigate to="/unauthorised" replace />;
  }

  return <Outlet />;
};

export default RoleBaseRoute;