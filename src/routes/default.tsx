import { Route, Routes } from "react-router-dom";

import { HomePage, SignInPage, SignUpPage } from "@/pages";

import { ROUTES } from "@/utils/common/constant/routes";

const DefaultRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.SIGNIN} element={<SignInPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
      <Route path={ROUTES.PROFILE.HOME}>
        <Route index element={<p>Profile</p>} />
        <Route path={ROUTES.PROFILE.EDIT} element={<p>Profile / Edit</p>} />
      </Route>
    </Routes>
  );
};

export default DefaultRoutes;
