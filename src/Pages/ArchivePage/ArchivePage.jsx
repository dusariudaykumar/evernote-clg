import React from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { NotesCard } from "../../Components";
import { useAuth, useNotes } from "../../contexts/index";
import { deleteFromArchiveService, unArchiveService } from "../../services";
import "./ArchivePage.css";
const ArchivePage = () => {
  const location = useLocation();
  const {
    authState: { encodedToken },
  } = useAuth();
  const {
    noteState: { archive },
    noteDispatch,
    getTrashNotes,
    getAllArchiveNotes,
    getNotes,
  } = useNotes();
  const unArchiveHandler = async (note) => {
    const data = await unArchiveService(note._id, encodedToken);
    if (data.succes) {
      getAllArchiveNotes();
      getNotes();
    }
    toast.success(data.message);
  };
  const archiveTrashHandler = async (note) => {
    const data = await deleteFromArchiveService(note._id, encodedToken);
    console.log(data);
    if (data.succes) {
      getTrashNotes();
      getAllArchiveNotes();
    }
    toast.success(data.message);
  };

  return (
    <div className=" archive-wrapper ">
      {archive.length > 0 ? (
        archive.map((note) => (
          <NotesCard
            key={note._id}
            notes={note}
            unArchiveHandler={unArchiveHandler}
            // archiveDeleteHandler={archiveDeleteHandler}
            archiveTrashHandler={archiveTrashHandler}
            path={location.pathname}
          />
        ))
      ) : (
        <p className="archive-text">You don't have any archived notes!</p>
      )}
    </div>
  );
};

export { ArchivePage };
