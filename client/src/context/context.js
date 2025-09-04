import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

// Helper: load user from localStorage safely
function loadUserFromStorage() {
  try {
    const raw = localStorage.getItem("user");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

// Initial state of the context
const INITIAL_STATE = {
  user: loadUserFromStorage(),
  isFetching: false,
  error: false,
};

// Create global context
export const Context = createContext(INITIAL_STATE);

// Context provider to wrap the app
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  // Sync user state with localStorage
  useEffect(() => {
    if (state.user) {
      localStorage.setItem("user", JSON.stringify(state.user));
    } else {
      localStorage.removeItem("user");
    }
  }, [state.user]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
        isAdmin: !!state.user?.isAdmin,
      }}
    >
      {children}
    </Context.Provider>
  );
};
