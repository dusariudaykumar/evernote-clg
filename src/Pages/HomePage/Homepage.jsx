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
    console.log(note);
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
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(noteState.notes);
  return (
    <div className="home-page-wrapper">
      <NotesField
        setNotes={setNotes}
        notes={notes}
        addNoteHandler={addNoteHandler}
      />
      <div className=" notecard-container ">
        {noteState.notes.map((item) => (
          <NotesCard key={item._id} notes={item} />
        ))}
      </div>
    </div>
  );
};

export { Homepage };
