import { createContext, useEffect, useState } from "react";

export interface UserInfo {
  name: string;
  age: number;
  isMarried: boolean;
}

interface UserContextType {
  users: UserInfo[] | null;
  addUser: (user: UserInfo) => void;
  updateUser: (id: string) => void;
  deleteUser: (id: string) => void;
}

const contextInitialValues: UserContextType = {
  users: null,
  addUser: () => {},
  updateUser: () => {},
  deleteUser: () => {},
};

export const UserContext = createContext<UserContextType>(contextInitialValues);

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [users, setUsers] = useState<UserInfo[] | null>(null);

  useEffect(() => {
    setUsers([{ name: "maysara", age: 22, isMarried: false }]);
  }, []);

  const addUser = (user: UserInfo) => {
    setUsers(prev => (prev ? [...prev, user] : [user]));
  };

  const updateUser = (id: string) => {};
  const deleteUser = (id: string) => {};

  return (
    <UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};
