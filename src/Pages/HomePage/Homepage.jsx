import React, { useState } from "react";
import { NotesCard, NotesField } from "../../Components";
import { useAuth } from "../../contexts";
import { useNotes } from "../../contexts/notes-context";
import {
  addNotesService,
  deleteNotesService,
  editNotesService,
} from "../../services";
import "./Homepage.css";
const initialNotes = {
  notesTitle: "",
  notesBody: "",
};
const Homepage = () => {
  const {
    authState: { encodedToken },
  } = useAuth();
  const { noteState, noteDispatch } = useNotes();
  const [notes, setNotes] = useState(initialNotes);

  const addNoteHandler = async (event, note) => {
    event.preventDefault();
    const response = await addNotesService(note, encodedToken);
    noteDispatch({
      type: "ADD_NOTE",
      payload: response.data.notes,
    });
    setNotes(initialNotes);
  };
  const editHandler = (noteedit) => {
    setNotes({
      ...notes,
      _id: noteedit._id,
      notesTitle: noteedit.notesTitle,
      notesBody: noteedit.notesBody,
    });
    noteDispatch({ type: "EDIT_NOTE" });
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
    console.log(resp);
    noteDispatch({
      type: "DELETE_NOTE",
      payload: resp.data.notes,
    });
  };
  return (
    <div className="home-page-wrapper">
      <NotesField
        setNotes={setNotes}
        notes={notes}
        addNoteHandler={addNoteHandler}
        updatehandler={updatehandler}
      />
      <div className=" notecard-container ">
        {noteState.notes.map((item) => (
          <NotesCard
            key={item._id}
            notes={item}
            editHandler={editHandler}
            deleteNoteHandler={deleteNoteHandler}
          />
        ))}
      </div>
    </div>
  );
};

export { Homepage };
