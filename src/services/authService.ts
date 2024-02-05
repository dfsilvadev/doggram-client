import axiosService from "@/utils/common/services/axiosService";

import { ENDPOINTS } from "@/utils/common/constant/endpoints";

import {
  DataRegisterResponse,
  ErrorResponse
} from "@/components/SignUpForm/types";

import { LoginFormData } from "@/components/SignInForm";
import { RegisterFormData } from "@/components/SignUpForm";

const register = async ({
  name,
  email,
  password,
  confirm_password
}: RegisterFormData) => {
  try {
    const { data } = await axiosService.post<
      DataRegisterResponse | ErrorResponse
    >(ENDPOINTS.REGISTER, {
      name,
      email,
      password,
      confirm_password
    });

    if (data) {
      sessionStorage.setItem("user", JSON.stringify(data));
    }

    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return err.response?.data?.errors || err.response?.data?.error;
  }
};

const login = async ({ email, password }: LoginFormData) => {
  try {
    const { data } = await axiosService.post<
      DataRegisterResponse | ErrorResponse
    >(ENDPOINTS.LOGIN, {
      email,
      password
    });

    if (data) {
      sessionStorage.setItem("user", JSON.stringify(data));
    }

    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return err.response?.data?.errors || err.response?.data?.error;
  }
};
const logout = () => {
  sessionStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login
};

export default authService;
