import { Route, Routes } from "react-router-dom";

import { HomePage, SignInPage, SignUpPage } from "@/pages";

import { ENDPOINT } from "@/utils/common/constant/endpoints";

const DefaultRoutes = () => {
  return (
    <Routes>
      <Route path={ENDPOINT.HOME} element={<HomePage />} />
      <Route path={ENDPOINT.SIGNIN} element={<SignInPage />} />
      <Route path={ENDPOINT.SIGNUP} element={<SignUpPage />} />
      <Route path={ENDPOINT.PROFILE.HOME}>
        <Route index element={<p>Profile</p>} />
        <Route path={ENDPOINT.PROFILE.EDIT} element={<p>Profile / Edit</p>} />
      </Route>
    </Routes>
  );
};

export default DefaultRoutes;
