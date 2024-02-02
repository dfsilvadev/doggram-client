import { Route, Routes } from "react-router-dom";

import { HomePage, SignInPage, SignUpPage } from "@/pages";

import useAuth from "@/hooks/useAuth";

import { ROUTES } from "@/utils/common/constant/routes";
import PrivateRoute from "./private";

const DefaultRoutes = () => {
  const { auth } = useAuth();

  return (
    <Routes>
      <Route
        element={
          <PrivateRoute authorization={!!auth} redirectTo={ROUTES.SIGNIN} />
        }
      >
        <Route path={ROUTES.HOME} index element={<HomePage />} />
      </Route>

      <Route
        element={
          <PrivateRoute authorization={!auth} redirectTo={ROUTES.HOME} />
        }
      >
        <Route path={ROUTES.SIGNIN} element={<SignInPage />} />
      </Route>

      <Route
        element={
          <PrivateRoute authorization={!auth} redirectTo={ROUTES.HOME} />
        }
      >
        <Route path={ROUTES.SIGNUP} index element={<SignUpPage />} />
      </Route>

      <Route
        path={ROUTES.PROFILE.HOME}
        element={
          <PrivateRoute authorization={!auth} redirectTo={ROUTES.HOME} />
        }
      >
        <Route index element={<p>Profile</p>} />
        <Route path={ROUTES.PROFILE.EDIT} element={<p>Profile / Edit</p>} />
      </Route>
    </Routes>
  );
};

export default DefaultRoutes;
