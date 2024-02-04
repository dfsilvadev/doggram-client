import { useEffect, useState } from "react";

import useAppSelector from "./useAppSelector";

import { DataRegisterResponse } from "@/components/SignUpForm/types";

interface IUseAuthResponse {
  auth: DataRegisterResponse | null;
  loading: boolean;
}

const useAuth = (): IUseAuthResponse => {
  const [auth, setAuth] = useState<DataRegisterResponse | null>(null);
  const [loading, setLoading] = useState(true);

  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      setAuth(user);
    } else {
      setAuth(null);
    }

    setLoading(false);
  }, [user]);

  return { auth, loading };
};

export default useAuth;
