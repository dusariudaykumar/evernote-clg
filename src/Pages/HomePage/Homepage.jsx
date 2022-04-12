import React, { useState } from "react";
import { NotesCard, NotesField } from "../../Components";
import { useAuth } from "../../contexts";
import { useNotes } from "../../contexts/notes-context";
import {
  addArchiveService,
  addNotesService,
  deleteNotesService,
  editNotesService,
} from "../../services";
import "./Homepage.css";

const initialNotes = {
  notesTitle: "",
  notesBody: "",
  noteBgColor: "",
};
const Homepage = () => {
  const {
    authState: { encodedToken },
  } = useAuth();
  const { noteState, noteDispatch } = useNotes();

  const [notes, setNotes] = useState(initialNotes);
  console.log(notes);
  const editHandler = (noteedit) => {
    setNotes({
      ...notes,
      _id: noteedit._id,
      notesTitle: noteedit.notesTitle,
      notesBody: noteedit.notesBody,
    });
    noteDispatch({ type: "EDIT_NOTE" });
  };
  const addNoteHandler = async (event, note) => {
    event.preventDefault();
    const response = await addNotesService(note, encodedToken);
    noteDispatch({
      type: "ADD_NOTE",
      payload: response.data.notes,
    });
    setNotes(initialNotes);
  };

  const updatehandler = async (e, editnotes) => {
    e.preventDefault();
    const resp = await editNotesService(editnotes, encodedToken);
    noteDispatch({
      type: "UPDATE_NOTE",
      payload: resp.data.notes,
    });
    setNotes(initialNotes);
  };
  const deleteNoteHandler = async (notesId) => {
    const resp = await deleteNotesService(notesId, encodedToken);
    noteDispatch({
      type: "DELETE_NOTE",
      payload: resp.data.notes,
    });
  };
  const addArchiveHandler = async (note) => {
    const response = await addArchiveService(note, encodedToken);
    noteDispatch({ type: "ADD_ARCHIVE", payload: response.data });
  };
  const colorPalletHandler = () => {
    noteDispatch({ type: "COLOR_PALLET_VISIBLE" });
  };
  const colorPickHandler = (color) => {
    noteDispatch({ type: "PICK_COLOR", payload: color });
    setNotes((prev) => ({
      ...prev,
      noteBgColor: color.hex,
    }));
  };

  return (
    <div className="home-page-wrapper">
      <NotesField
        setNotes={setNotes}
        notes={notes}
        addNoteHandler={addNoteHandler}
        updatehandler={updatehandler}
        colorPalletHandler={colorPalletHandler}
        colorPickHandler={colorPickHandler}
      />
      <div className=" notecard-container ">
        {noteState.notes.map((item) => (
          <NotesCard
            key={item._id}
            notes={item}
            editHandler={editHandler}
            deleteNoteHandler={deleteNoteHandler}
            addArchiveHandler={addArchiveHandler}
          />
        ))}
      </div>
    </div>
  );
};

export { Homepage };
