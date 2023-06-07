import { createContext, useContext } from "react";

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
    const x = "hello";
    return <AppContext.Provider value={{ x }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};
