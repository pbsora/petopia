import { AuthContext } from "@/utils/Types & Interfaces";
import { createContext } from "react";

export const UserContext = createContext<AuthContext | undefined>(undefined);
