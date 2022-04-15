import { useState } from "react";
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
  const { notesTitle, notesBody, _id, noteBgColor } = notes;

  const [showIcons, setShowIcons] = useState(false);
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
        </div>

        {showIcons && (
          <div className="card-btns flex">
            {path !== "/trash" ? (
              <>
                <span
                  className="material-icons-outlined"
                  onClick={() => editHandler({ ...notes, _id: _id })}>
                  edit
                </span>

                <span className="material-icons">label</span>
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
        )}
      </div>
    </div>
  );
};

export { NotesCard };
