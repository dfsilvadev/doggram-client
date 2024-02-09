import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

import useAuth from "@/hooks/useAuth";

import storage from "@/utils/common/storage";

type PrivateRouteProps = {
  redirectTo: string;
  children: ReactElement;
};

const PrivateRoute = ({ redirectTo, children }: PrivateRouteProps) => {
  const { loading } = useAuth();
  const { "petsgram.userToken": token } = storage.get() as {
    "petsgram.userToken": string;
  };

  if (loading) {
    return <p>carregando</p>;
  }
  return token ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
