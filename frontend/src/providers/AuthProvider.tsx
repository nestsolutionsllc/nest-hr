import { getCookie } from "cookies-next";
import { createContext, useContext, FC } from "react";
import { useEffect, useState } from "react";
import SigninPage from "../pages/login";

interface AuthContextInterface {
  user?: string;
  setUser: (user)=> user;
}

const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
);

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState("");
  console.log(user)
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {user && children}
      {!user && <SigninPage/>}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextInterface => useContext(AuthContext);
