import { useState, createContext } from "react";

import FormSection from "./components/FormSection";
import ListSection from "./components/ListSection";

import "./App.css";

interface IUserListContext {
  userList: IUser[];
  addUser: (user: IUser) => void;
}

export const userListContext = createContext<IUserListContext>({
  userList: [],
  addUser: () => {},
});

function App() {
  const [userList, setUserList] = useState<IUser[]>([]);

  const addUser = (newUser: IUser) => {
    setUserList((prevUserList) => [...prevUserList, newUser]);
  };

  return (
    <div className="container">
      <userListContext.Provider value={{ userList, addUser }}>
        <div className="row">
          <div className="col">
            <FormSection></FormSection>
          </div>
          <div className="col">
            <ListSection></ListSection>
          </div>
        </div>
      </userListContext.Provider>
    </div>
  );
}

export default App;
