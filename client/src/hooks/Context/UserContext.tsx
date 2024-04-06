import { AuthContext } from "@/utils/Types & Interfaces";
import { createContext, useState } from "react";

export const UserContext = createContext<AuthContext | undefined>(undefined);

export default function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUserData] = useState({ userId: "", username: "", email: "" });

  return (
    <UserContext.Provider
      value={{
        user: user,
        setUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
