import { useState } from "react";
import { DateTime } from "../../Utils/DateTime";
import parse from "html-react-parser";
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
  const { title, body, _id, bgcolor, updatedAt } = notes;
  const [showIcons, setShowIcons] = useState(false);
  const date = DateTime(updatedAt);
  return (
    <div
      style={{ background: bgcolor }}
      className="card-outer-container "
      onMouseEnter={() => setShowIcons(true)}
      onMouseLeave={() => setShowIcons(false)}>
      <div className="card-inner-container flex-col">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <article className="card-description">{parse(body)}</article>
        </div>

        <div className="note-footer">
          <p className="card-date">{date}</p>
          <div
            className="card-btns flex "
            style={{ visibility: showIcons ? "visible" : "hidden" }}>
            {path !== "/trash" ? (
              <>
                {path === "home" && (
                  <span
                    className="material-icons-outlined"
                    onClick={() => editHandler({ ...notes, _id: _id })}>
                    edit
                  </span>
                )}
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
                      ? () => trashNoteHandler(notes._id)
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
