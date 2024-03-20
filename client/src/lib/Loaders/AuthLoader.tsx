import API from "@/utils/api";

export const authLoader = async () => {
  if (localStorage.getItem("token")) {
    const { data } = await API.get("/auth/current", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    console.log(data);
    return data;
  } else {
    return null;
  }
};
