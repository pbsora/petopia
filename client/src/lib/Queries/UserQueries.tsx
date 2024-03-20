import { UserLogin, UserRegister } from "@/utils/Types & Interfaces";
import API from "@/utils/api";
import { useMutation } from "@tanstack/react-query";

export const useRegister = (user: UserRegister) => {
  return useMutation({
    mutationKey: ["register"],
    mutationFn: async () => {
      const { data } = await API.post("/auth/register", {
        username: user.username,
        email: user.email,
        password: user.password,
      });
      return data;
    },
  });
};

export const useLogin = (user: UserLogin) => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: async () => {
      const { data } = await API.post("/auth/login", {
        username: user.username,
        password: user.password,
      });
      return data;
    },
  });
};
