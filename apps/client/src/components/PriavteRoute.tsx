import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

type PrivateRouteProps = {
  component: ReactNode;
};

export const PrivateRoute = ({ component }: PrivateRouteProps) => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  if (!token) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return <>{component}</>;
};