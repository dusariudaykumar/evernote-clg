import { createContext, useContext, useEffect, useReducer } from "react";
import { noteReducer } from "../reducers/noteReducer";
import { getAllArchiveNotesService, getAllTrashNotes } from "../services";
import { getAllNotesSevice } from "../services/NotesServices/addNotesService";
import { useAuth } from "./auth-context";

const initialState = {
  notes: [],
  editNote: false,
  archive: [],
  trash: [],
  isColorPalletVisible: false,
  sortBy: "",
  serachQuery: "",
};
const NotesContext = createContext();
const NotesProvider = ({ children }) => {
  const {
    authState: { encodedToken },
  } = useAuth();
  const [noteState, noteDispatch] = useReducer(noteReducer, initialState);
  const getNotes = async () => {
    const { data } = await getAllNotesSevice(encodedToken);
    noteDispatch({ type: "ADD_NOTE", payload: data.notes });
  };
  const getTrashNotes = async () => {
    const data = await getAllTrashNotes(encodedToken);
    if (data.success) {
      noteDispatch({ type: "TRASH_NOTES", payload: data.trashNotes });
    }
  };
  const getAllArchiveNotes = async () => {
    const data = await getAllArchiveNotesService(encodedToken);
    console.log(data);
    if (data.success) {
      noteDispatch({ type: "ARCHIVE_NOTES", payload: data.archive });
    }
  };
  useEffect(() => {
    getNotes();
    getTrashNotes();
    getAllArchiveNotes();
  }, []);
  return (
    <NotesContext.Provider
      value={{
        noteState,
        noteDispatch,
        getNotes,
        getTrashNotes,
        getAllArchiveNotes,
      }}>
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);
export { NotesProvider, useNotes };
