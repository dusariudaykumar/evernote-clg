import React, { useState } from "react";
import { toast } from "react-toastify";
import { NotesCard, NotesField } from "../../Components";
import { useAuth, useNotes } from "../../contexts";

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
  const [isExpanded, setIsExpanded] = useState(false);

  const editHandler = (noteedit) => {
    setNotes({
      ...notes,
      _id: noteedit._id,
      notesTitle: noteedit.notesTitle,
      notesBody: noteedit.notesBody,
      noteBgColor: noteedit.noteBgColor,
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
    toast.success("Created new note");
    setNotes(initialNotes);
    setIsExpanded(false);
  };

  const updatehandler = async (e, editnotes) => {
    e.preventDefault();
    const resp = await editNotesService(editnotes, encodedToken);
    noteDispatch({
      type: "UPDATE_NOTE",
      payload: resp.data.notes,
    });
    setNotes(initialNotes);
    setIsExpanded(false);
  };
  const deleteNoteHandler = async (notesId) => {
    const resp = await deleteNotesService(notesId, encodedToken);
    noteDispatch({
      type: "DELETE_NOTE",
      payload: resp.data.notes,
    });
  };
  const trashNoteHandler = async (note) => {
    noteDispatch({ type: "MOVE_TO_TRASH", payload: note });
    noteState.notes.find(
      (noteItem) => noteItem._id === note._id && deleteNoteHandler(noteItem._id)
    );
  };

  const addArchiveHandler = async (note) => {
    const response = await addArchiveService(note, encodedToken);
    noteDispatch({ type: "ADD_ARCHIVE", payload: response.data });
  };
  const colorPalletHandler = () => {
    noteDispatch({ type: "COLOR_PALLET_VISIBLE" });
  };
  const colorPickHandler = (color) => {
    noteDispatch({ type: "COLOR_PALLET_VISIBLE" });
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
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
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
            trashNoteHandler={trashNoteHandler}
            addArchiveHandler={addArchiveHandler}
          />
        ))}
      </div>
    </div>
  );
};

export { Homepage };
