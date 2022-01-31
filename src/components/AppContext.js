import React, { createContext, useState } from "react";
export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [completed, setCompleted] = useState([]);
  const [id, setId] = useState({});

  function debug() {
    completed.forEach((element) => {
      console.log(element.name);
    });
  }

  function idTask(cod) {
    setId({ cod: cod });
  }

  return (
    <AppContext.Provider
      value={{ idTask, id, user, setUser, completed, setCompleted, debug }}
    >
      {children}
    </AppContext.Provider>
  );
};
