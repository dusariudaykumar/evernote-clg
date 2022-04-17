import { useState } from "react";
import { DateTime } from "../../Utils/DateTime";
import { LabelModel } from "../index";
import "./NotesCard.css";

const NotesCard = ({
  notes,
  editHandler,
  trashNoteHandler,
  addArchiveHandler,
  path,
  deleteFromTrashhandler,
  unArchiveHandler,
  restoreFromTrash,
  archiveTrashHandler,
}) => {
  const { notesTitle, notesBody, _id, noteBgColor, label, editedAt } = notes;
  const fromNoteFeild = false;
  const [showIcons, setShowIcons] = useState(false);
  const date = DateTime(editedAt);
  const [showLabelModel, setShowLabelModel] = useState(false);
  return (
    <div
      style={{ background: noteBgColor }}
      className="card-outer-container "
      onMouseEnter={() => setShowIcons(true)}
      onMouseLeave={() => setShowIcons(false)}>
      <div className="card-inner-container flex-col">
        <div className="card-title">
          <h3>{notesTitle}</h3>
        </div>
        <div className="card-body">
          <p className="card-description">{notesBody}</p>
          {label && (
            <div className="chip-container">
              <span className="chip">{label}</span>
            </div>
          )}
        </div>

        <div className="note-footer">
          <p className="card-date">{date}</p>
          <div
            className="card-btns flex "
            style={{ visibility: showIcons ? "visible" : "hidden" }}>
            {path !== "/trash" ? (
              <>
                <span
                  className="material-icons-outlined"
                  onClick={() => editHandler({ ...notes, _id: _id })}>
                  edit
                </span>
                <span className="label-icon">
                  <span
                    className="material-icons"
                    onClick={() => setShowLabelModel((prev) => !prev)}>
                    label
                  </span>
                  {showLabelModel && (
                    <LabelModel
                      notes={notes}
                      fromNoteFeild={fromNoteFeild}
                      setShowLabelModel={setShowLabelModel}
                    />
                  )}
                </span>
                {path !== "/archive" ? (
                  <span
                    className="material-icons"
                    onClick={() => addArchiveHandler(notes)}>
                    archive
                  </span>
                ) : (
                  <span
                    className="material-icons"
                    onClick={() => unArchiveHandler(notes)}>
                    unarchive
                  </span>
                )}
                <span
                  className="material-icons"
                  onClick={
                    path !== "/archive"
                      ? () => trashNoteHandler(notes)
                      : () => archiveTrashHandler(notes)
                  }>
                  delete
                </span>
              </>
            ) : (
              <>
                <span
                  className="material-icons"
                  onClick={() => restoreFromTrash(notes)}>
                  restore_from_trash
                </span>
                <span
                  className="material-icons"
                  onClick={() => deleteFromTrashhandler(notes)}>
                  delete
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { NotesCard };
