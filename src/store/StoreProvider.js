import { useReducer, createContext, useContext } from "react";
import { rootReducer } from "./reducer";
import { initialState } from "./constants";
import { create } from "@mui/material/styles/createTransitions";

const storeContext = createContext();
export function StoreProvider({ children }) {
  let [state, dispatch] = useReducer(rootReducer, initialState);
  return (
    <storeContext.Provider value={{ state, dispatch }}>
      {children}
    </storeContext.Provider>
  );
}
