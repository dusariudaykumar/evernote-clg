import React from "react";
import { useLocation } from "react-router-dom";
import { NotesCard } from "../../Components";
import { useAuth, useNotes } from "../../contexts/index";
import { deleteArchiveService, restoreArchiveService } from "../../services";
import "./ArchivePage.css";
const ArchivePage = () => {
  const location = useLocation();
  const {
    authState: { encodedToken },
  } = useAuth();
  const {
    noteState: { archive, trash },
    noteDispatch,
  } = useNotes();
  const unArchiveHandler = async (note) => {
    const response = await restoreArchiveService(note, encodedToken);
    noteDispatch({ type: "RESTORE_ARCHIVE", payload: response.data });
    console.log(response);
  };
  const archiveDeleteHandler = async (noteId) => {
    const response = await deleteArchiveService(noteId, encodedToken);
    noteDispatch({ type: "ARCHIVE_DELETE", payload: response.data.archives });
  };

  const archiveTrashHandler = (note) => {
    noteDispatch({ type: "MOVE_TO_TRASH", payload: note });
    archive.find(
      (noteItem) =>
        noteItem._id === note._id && archiveDeleteHandler(noteItem._id)
    );
  };

  return (
    <div className=" archive-wrapper ">
      {archive.length > 0 ? (
        archive.map((note) => (
          <NotesCard
            key={note._id}
            notes={note}
            unArchiveHandler={unArchiveHandler}
            archiveDeleteHandler={archiveDeleteHandler}
            archiveTrashHandler={archiveTrashHandler}
            path={location.pathname}
          />
        ))
      ) : (
        <h3 className="archive-text">You don't have any archived notes!</h3>
      )}
    </div>
  );
};

export { ArchivePage };
