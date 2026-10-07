import { useEffect } from "react";
import { useSelector } from "react-redux";
import AppRoutes from "./app/routes/AppRoutes";

const App = () => {
  const mode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(mode);
  }, [mode]);

  return <AppRoutes />;
};

export default App;