import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  const location = useLocation();
  const hideNavbarRoutes = ["/signin", "/signup"];

  return (
    <div>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;