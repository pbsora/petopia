import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./components/theme-provider";

import Router from "./lib/Router";
import { Toaster } from "./components/ui/toaster";
import UserContextProvider from "./hooks/Context/UserContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      <UserContextProvider>
        <QueryClientProvider client={queryClient}>
          <Router />
          <Toaster />
        </QueryClientProvider>
      </UserContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
