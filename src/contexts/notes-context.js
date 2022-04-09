import { createContext, useContext, useReducer } from "react";
import { noteReducer } from "../reducers/noteReducer";

const initialState = {
  notes: [],
};
const NotesContext = createContext();
const NotesProvider = ({ children }) => {
  const [noteState, noteDispatch] = useReducer(noteReducer, initialState);

  return (
    <NotesContext.Provider value={{ noteState, noteDispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);
export { NotesProvider, useNotes };
