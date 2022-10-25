import { useNotes } from "../../contexts/notes-context";
import { CirclePicker } from "react-color";
import "./NotesField.css";
import { useEffect, useState } from "react";
import { LabelModel } from "../index";
import { useOnClickOutside } from "../../Utils/onClickOutside";
import ReactTextareaAutosize from "react-textarea-autosize";
import InputModal from "./InputModal";
import RichTextEditor from "./RichTextEditor";
import { ClickAwayListener } from "@mui/material";

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
  setIsExpanded,
  isExpanded,
  setNotes,
  addNoteHandler,
  updatehandler,
  colorPalletHandler,
  colorPickHandler,
}) => {
  //bgcolor, title, body
  console.log(notes, "nn");
  const { bgcolor, title, body } = notes;
  const {
    noteState: { editNote, isColorPalletVisible },
    noteDispatch,
  } = useNotes();
  const [showLabelModel, setShowLabelModel] = useState(false);
  const [open, setOpen] = useState(false);
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setNotes((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const fromNoteFeild = true;
  const expandHandler = () => {
    setIsExpanded(true);
  };
  const handleNoteBodyChange = (value) => {
    setNotes((prevNote) => ({ ...prevNote, body: value }));
  };

  return (
    <ClickAwayListener onClickAway={() => setIsExpanded(false)}>
      <div className="input-feild-outter-wrapper">
        <form
          style={{ background: bgcolor }}
          className="notes-field-wrapper "
          onSubmit={
            !editNote
              ? (event) => addNoteHandler(event, notes)
              : (e) => updatehandler(e, notes)
          }>
          {!isExpanded && (
            <input
              autoComplete="off"
              type="text"
              name="title"
              className="notes-field-title"
              placeholder="Click here to create notes"
              onClick={expandHandler}
            />
          )}
          {isExpanded && (
            <div className="input-fields flex-col">
              <div className="title-container flex">
                <input
                  autoComplete="off"
                  type="text"
                  name="title"
                  className="notes-field-title"
                  placeholder="Title"
                  value={title}
                  onChange={changeHandler}
                  required
                />
                <span className="material-icons-outlined">push_pin</span>
              </div>
              <div className="notes-body-container">
                <RichTextEditor
                  handleNoteBodyChange={handleNoteBodyChange}
                  body={body}
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
                      <CirclePicker
                        className="color-palette"
                        colors={colorsList}
                        circleSpacing={1}
                        onChangeComplete={colorPickHandler}
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </form>
      </div>
    </ClickAwayListener>
  );
};

export { NotesField };
