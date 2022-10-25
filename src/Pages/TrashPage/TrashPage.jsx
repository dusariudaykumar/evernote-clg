import React from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { NotesCard } from "../../Components";
import { useAuth, useNotes } from "../../contexts";
import {
  addNotesService,
  deleteFromTrashService,
  restoreFromTrashService,
} from "../../services";
import "./TrashPage.css";

const TrashPage = () => {
  const {
    authState: { encodedToken },
  } = useAuth();
  const {
    noteState: { trash },
    noteDispatch,
    getTrashNotes,
    getNotes,
  } = useNotes();
  const deleteFromTrashhandler = async (notes) => {
    const data = await deleteFromTrashService(encodedToken, notes._id);
    if (data.success) {
      getTrashNotes();
    }
    toast.success("Deleted Note From Trash ");
  };
  const restoreFromTrash = async (notes) => {
    const data = await restoreFromTrashService(encodedToken, notes._id);
    if (data.success) {
      getTrashNotes();
      getNotes();
      toast.success("Successfully restored note ");
    }
  };
  const location = useLocation();
  console.log(trash);
  return (
    <div className="trash-wrapper">
      {trash.length > 0 ? (
        trash.map((note) => (
          <NotesCard
            className="trash-card"
            key={note._id}
            notes={note}
            path={location.pathname}
            deleteFromTrashhandler={deleteFromTrashhandler}
            restoreFromTrash={restoreFromTrash}
          />
        ))
      ) : (
        <p className="trash-text">Trash is empty!</p>
      )}
    </div>
  );
};

export { TrashPage };
