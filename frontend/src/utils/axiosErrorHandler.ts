import { isAxiosError } from "axios";

const axiosErrorHandler = (error: unknown) => {
  if (isAxiosError(error)) {
    return (
      error.response?.data?.message ||  
      error.message ||
      "Something went wrong"
    );
  } else {
    return "An unexpected error";
  }
};

export default axiosErrorHandler;
