import { Route, Routes } from "react-router-dom";

import { HomePage, SignInPage, SignUpPage } from "@/pages";

import { ROUTES } from "@/utils/common/constant/routes";
import PrivateRoute from "./private";

const DefaultRoutes = () => {
  return (
    <Routes>
      <Route
        path={ROUTES.HOME}
        element={
          <PrivateRoute redirectTo={ROUTES.SIGNIN}>
            <HomePage />
          </PrivateRoute>
        }
      />
      <Route path={ROUTES.SIGNIN} element={<SignInPage />} />
      <Route path={ROUTES.SIGNUP} index element={<SignUpPage />} />

      <Route path={ROUTES.PROFILE.HOME}>
        <Route
          index
          element={
            <PrivateRoute redirectTo={ROUTES.SIGNIN}>
              <p>Profile</p>
            </PrivateRoute>
          }
        />
        <Route
          path={ROUTES.PROFILE.EDIT}
          element={
            <PrivateRoute redirectTo={ROUTES.SIGNIN}>
              <p>Profile / edit</p>
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default DefaultRoutes;
