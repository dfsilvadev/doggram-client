import useAuth from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

type PrivateRouteProps = {
  authorization: boolean;
  redirectTo: string;
};

const PrivateRoute = ({ authorization, redirectTo }: PrivateRouteProps) => {
  const { loading } = useAuth();

  if (loading) {
    return <p>carregando</p>;
  }
  return authorization ? <Outlet /> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
