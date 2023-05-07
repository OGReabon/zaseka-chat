import { ReactNode, createContext, useContext } from "react";

const user = {
  id: null,
  name: "",
  role: "",
  icon: "",
};

const userContext = createContext(user);

export const useUser = () => useContext(userContext);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const setName = (name: string) => {
    user.name = name;
  };

  const setRole = (role: string) => {
    user.role = role;
  };

  return <userContext.Provider value={user}>{children}</userContext.Provider>;
};
