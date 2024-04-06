import { UserLogin, UserRegister } from "@/utils/Types & Interfaces";
import API from "@/utils/api";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useRegister = () => {
  return useMutation({
    mutationKey: ["register"],
    mutationFn: async (user: UserRegister) => {
      const { data } = await API.post("/auth/register", user);
      return data;
    },
  });
};

export const useLogin = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: async (user: UserLogin) => {
      const { data } = await API.post("/auth/login", {
        username: user.username,
        password: user.password,
      });
      return data;
    },
  });
};

export const useAuthenticated = () => {
  return useQuery({
    queryKey: ["authenticated"],
    queryFn: async () => {
      const { data } = await API.get("/auth/isauthenticated");
      return data;
    },
    retry: false,
  });
};

export const useIsAdmin = () => {
  return useQuery({
    queryKey: ["isAdmin"],
    queryFn: async () => {
      const { data } = await API.get("/auth/isadmin");
      return data;
    },
  });
};

export const useLogout = () => {
  return useMutation({
    mutationKey: ["logout"],
    mutationFn: async () => {
      const { data } = await API.post("/auth/logout");
      return data;
    },
  });
};
