import { useState } from "react";
import { toast } from "react-toastify";
import { NotesCard, NotesField } from "../../Components";
import { useAuth, useNotes } from "../../contexts";
import {
  addNotesService,
  addToArchiveNotesService,
  deleteNotesService,
  editNotesService,
} from "../../services";

import { searchNotes, SortByDateTime } from "../../Utils/index";
import "./Homepage.css";

const initialNotes = {
  title: "",
  body: "",
  bgcolor: "",
  editedAt: "",
};
const Homepage = () => {
  const {
    authState: { encodedToken },
  } = useAuth();
  const {
    noteState,
    noteDispatch,
    getNotes,
    getAllArchiveNotes,
    getTrashNotes,
  } = useNotes();
  const [notes, setNotes] = useState(initialNotes);
  const [isExpanded, setIsExpanded] = useState(false);
  const editHandler = (noteedit) => {
    setNotes({
      ...notes,
      _id: noteedit._id,
      title: noteedit.title,
      body: noteedit.body,
      bgcolor: noteedit.bgcolor,
    });
    noteDispatch({ type: "EDIT_NOTE" });
    setIsExpanded(true);
  };
  const addNoteHandler = async (event, note) => {
    event.preventDefault();
    const { data } = await addNotesService(note, encodedToken);
    if (data.success) {
      getNotes();
    }
    toast.success("Created new note");
    setNotes(initialNotes);
    setIsExpanded(false);
  };

  const updatehandler = async (e, editnotes) => {
    e.preventDefault();
    const { data } = await editNotesService(editnotes, encodedToken);
    if (data.success) {
      getNotes();
    }
    setNotes(initialNotes);
    setIsExpanded(false);
  };

  const trashNoteHandler = async (notesId) => {
    const data = await deleteNotesService(notesId, encodedToken);
    if (data.success) {
      getNotes();
      getTrashNotes();
    }
  };

  const addArchiveHandler = async (note) => {
    const data = await addToArchiveNotesService(note._id, encodedToken);
    if (data.success) {
      getNotes();
      getAllArchiveNotes();
    }
  };

  const colorPalletHandler = () => {
    noteDispatch({ type: "COLOR_PALLET_VISIBLE" });
  };
  const colorPickHandler = (color) => {
    noteDispatch({ type: "COLOR_PALLET_VISIBLE" });
    setNotes((prev) => ({
      ...prev,
      bgcolor: color.hex,
    }));
  };
  const sortedNotes = SortByDateTime(noteState.notes, noteState.sortBy);
  const searchedNotes = searchNotes(noteState.serachQuery, sortedNotes);

  return (
    <div className="home-page-wrapper">
      <NotesField
        setNotes={setNotes}
        notes={notes}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        addNoteHandler={addNoteHandler}
        updatehandler={updatehandler}
        colorPalletHandler={colorPalletHandler}
        colorPickHandler={colorPickHandler}
      />
      <article className=" notecard-container ">
        {noteState.serachQuery.length > 1 ? (
          searchedNotes.length !== 0 ? (
            searchedNotes.map((item) => (
              <NotesCard
                key={item._id}
                notes={item}
                editHandler={editHandler}
                trashNoteHandler={trashNoteHandler}
                addArchiveHandler={addArchiveHandler}
                path="home"
              />
            ))
          ) : (
            <div className="search-text">You don't have any notes!</div>
          )
        ) : (
          sortedNotes.map((item) => (
            <NotesCard
              key={item._id}
              notes={item}
              editHandler={editHandler}
              trashNoteHandler={trashNoteHandler}
              addArchiveHandler={addArchiveHandler}
              path="home"
            />
          ))
        )}
      </article>
    </div>
  );
};

export { Homepage };
