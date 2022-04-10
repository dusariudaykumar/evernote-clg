import { useState } from "react";
import "./NotesCard.css";
const NotesCard = ({ notes, editHandler }) => {
  const { notesTitle, notesBody, _id } = notes;
  const [showIcons, setShowIcons] = useState(false);
  return (
    <div
      className="card-outer-container "
      onMouseEnter={() => setShowIcons(true)}
      onMouseLeave={() => setShowIcons(false)}>
      <div className="card-inner-container flex-col">
        <div className="card-title">
          <h3>{notesTitle}</h3>
        </div>
        <div className="card-body">
          <p className="card-description">{notesBody}</p>
        </div>
        {showIcons && (
          <div className="card-btns flex">
            <span
              className="material-icons-outlined"
              onClick={() => editHandler({ ...notes, _id: _id })}>
              edit
            </span>
            <span className="material-icons">palette</span>
            <span className="material-icons">label</span>
            <span className="material-icons">delete</span>
            <span className="material-icons">archive</span>
          </div>
        )}
      </div>
    </div>
  );
};

export { NotesCard };
