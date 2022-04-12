import React, { useState } from "react";
import { useNotes } from "../../contexts/notes-context";
import { CirclePicker } from "react-color";
import "./NotesField.css";

const colorsList = [
  "#6F6921",
  "#20505C",
  "#414244",
  "#082c6c",
  "#532826",
  "#3C5720",
];
const NotesField = ({
  notes,
  setNotes,
  addNoteHandler,
  updatehandler,
  colorPalletHandler,
  colorPickHandler,
}) => {
  const {
    noteState: { editNote, isColorPalletVisible, noteColor },
  } = useNotes();

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
        style={{ background: noteColor }}
        className="notes-field-wrapper "
        onSubmit={
          !editNote
            ? (event) => addNoteHandler(event, notes)
            : (e) => updatehandler(e, notes)
        }>
        <div className="input-fields flex-col">
          {isExpanded && (
            <div className="title-container flex">
              <input
                type="text"
                name="notesTitle"
                className="notes-field-title"
                placeholder="Title"
                value={notes.notesTitle}
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
              value={notes.notesBody}
              onClick={expandHandler}
              onChange={changeHandler}
            />
          </div>
          {isExpanded && (
            <div className="flex notes-action">
              <button className="add-note-btn" type="submit">
                <span className="material-icons-outlined">
                  {!editNote ? "add" : "done"}
                </span>
              </button>

              <div className="notes-action-btn-wrapper flex">
                <span
                  className="material-icons"
                  onClick={() => colorPalletHandler()}>
                  palette
                </span>
                {isColorPalletVisible && (
                  <div>
                    <CirclePicker
                      className="color-palette"
                      colors={colorsList}
                      circleSpacing={1.3}
                      onChangeComplete={colorPickHandler}
                    />
                  </div>
                )}
                <span className="material-icons">label</span>
              </div>
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export { NotesField };
