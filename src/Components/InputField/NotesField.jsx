import React, { useState } from "react";
import "./NotesField.css";
const NotesField = ({ notes, setNotes, addNoteHandler }) => {
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setNotes((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const [isExpanded, setIsExpanded] = useState(false);
  const expandHandler = () => {
    setIsExpanded(true);
  };
  return (
    <>
      <form
        className="notes-field-wrapper "
        onSubmit={(event) => addNoteHandler(event, notes)}>
        <div className="input-fields flex-col">
          {isExpanded && (
            <div className="title-container flex">
              <input
                type="text"
                name="notesTitle"
                className="notes-field-title"
                placeholder="Title"
                onChange={changeHandler}
              />
              <span className="material-icons-outlined">push_pin</span>
            </div>
          )}
          <div className="notes-body-container">
            <textarea
              className="notes-body"
              name="notesBody"
              placeholder="Notes....."
              rows={isExpanded ? 3 : 1}
              onClick={expandHandler}
              onChange={changeHandler}
            />
          </div>
          {isExpanded && (
            <div className="flex notes-action">
              <button className="add-note-btn" type="submit">
                <span className="material-icons-outlined">add</span>
              </button>
              <div className="notes-action-btn-wrapper">
                <span className="material-icons">palette</span>
                <span className="material-icons">label</span>
                <span className="material-icons">delete</span>
                <span className="material-icons">archive</span>
              </div>
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export { NotesField };
