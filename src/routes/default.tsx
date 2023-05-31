import { Route, Routes } from "react-router-dom";

import { endpoint } from "@/utils/common/constant/endpoints";

const DefaultRoutes = () => {
  return (
    <Routes>
      <Route path={endpoint.HOME} element={<p>Home</p>} />
      <Route path={endpoint.SIGNIN} element={<p>Sign in</p>} />
      <Route path={endpoint.SIGNUP} element={<p>Sign up</p>} />
      <Route path={endpoint.PROFILE.HOME}>
        <Route index element={<p>Profile</p>} />
        <Route path={endpoint.PROFILE.EDIT} element={<p>Profile / Edit</p>} />
      </Route>
    </Routes>
  );
};

export default DefaultRoutes;
