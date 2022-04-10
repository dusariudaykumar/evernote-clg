import axios from "axios";
import React, { useState } from "react";

import { NotesCard, NotesField, SideNav } from "../../Components";
import { useAuth } from "../../contexts";
import { useNotes } from "../../contexts/notes-context";
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
    try {
      const response = await axios.post(
        "/api/notes",
        { note },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );

      noteDispatch({
        type: "ADD_NOTE",
        payload: response.data.notes,
      });
      setNotes(initialNotes);
    } catch (error) {
      console.log(error.message);
    }
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
    console.log(editnotes);
    try {
      const resp = await axios.post(
        `/api/notes/${editnotes._id}`,
        { note: editnotes },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      noteDispatch({
        type: "UPDATE_NOTE",
        payload: resp.data.notes,
      });
      setNotes(initialNotes);
    } catch (error) {
      console.log(error.message);
    }
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
          <NotesCard key={item._id} notes={item} editHandler={editHandler} />
        ))}
      </div>
    </div>
  );
};

export { Homepage };
