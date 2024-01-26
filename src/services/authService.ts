import axiosService from "@/utils/common/services/axiosService";

import { ENDPOINTS } from "@/utils/common/constant/endpoints";

import {
  DataRegisterResponse,
  DataToRegisterUser,
  ErrorResponse
} from "@/components/SignUpForm/types";

const register = async ({
  name,
  email,
  password,
  confirm_password
}: DataToRegisterUser) => {
  try {
    const response = await axiosService.post<
      DataRegisterResponse | ErrorResponse
    >(ENDPOINTS.REGISTER, {
      name,
      email,
      password,
      confirm_password
    });

    if (response) {
      sessionStorage.setItem("user", JSON.stringify(response));
    }

    return response;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return err.response?.data?.errors || err.response?.data?.error;
  }
};

const authService = {
  register
};

export default authService;
