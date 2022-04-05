import React from "react";
import { NotesCard } from "../NotesCard/NotesCard";
import "./NotesField.css";
const NotesField = () => {
  return (
    <>
      <form className="notes-field-wrapper ">
        <div className="input-fields flex-col">
          <div className="title-container flex">
            <input
              type="text"
              name="title"
              id=""
              className="notes-field-title"
              placeholder="Title"
            />
            <span class="material-icons-outlined">push_pin</span>
          </div>
          <div className="notes-body-container">
            <textarea className="notes-body" placeholder="Notes....." />
          </div>
          <div className="flex notes-action">
            <button className="add-note-btn" type="submit">
              Add Note
            </button>
            <div className="notes-action-btn-wrapper">
              <span className="material-icons">palette</span>
              <span className="material-icons">label</span>
              <span className="material-icons">delete</span>
              <span className="material-icons">archive</span>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export { NotesField };
