import API from "@/utils/api";

export const authLoader = async () => {
  const { data } = await API.get("/auth/current");
  return data;
};
