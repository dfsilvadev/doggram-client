import axiosService from "@/utils/common/services/axiosService";
import { ENDPOINTS } from "@/utils/common/constant/endpoints";

export type RegisterServiceData = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

const register = async ({
  name,
  email,
  password,
  confirm_password
}: RegisterServiceData) => {
  try {
    const { data } = await axiosService.post(ENDPOINTS.REGISTER, {
      name,
      email,
      password,
      confirm_password
    });

    if (data) {
      sessionStorage.setItem("user", JSON.stringify(data));

      return data;
    }

    return null;
  } catch (err) {
    console.error(err);
  }
};

const authService = {
  register
};

export default authService;
