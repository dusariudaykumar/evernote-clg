import { useAuth, useNotes } from "../../contexts";
import { editNotesService } from "../../services";

import "./LabelModel.css";
const LabelModel = ({ setNotes, notes, fromNoteFeild, setShowLabelModel }) => {
  const {
    authState: { encodedToken },
  } = useAuth();
  const {
    noteState: { label },
    noteDispatch,
  } = useNotes();
  const changeLabelHandler = async (e) => {
    if (fromNoteFeild) {
      setNotes((prev) => ({ ...prev, label: e.target.value }));
    } else {
      const resp = await editNotesService(
        { ...notes, label: e.target.value },
        encodedToken
      );
      noteDispatch({
        type: "UPDATE_NOTE",
        payload: resp.data.notes,
      });
      setShowLabelModel(false);
    }
  };

  return (
    <div className="label-model-container">
      <label htmlFor="none" className="label-radio none-label">
        <input
          type="radio"
          value=""
          id="none"
          name="label"
          onChange={(e) => changeLabelHandler(e)}
        />
        None
      </label>
      {label.map((item) => (
        <span key={item}>
          <label htmlFor={item} className="label-radio">
            <input
              type="radio"
              value={item}
              id={item}
              name="label"
              checked={item === notes.label}
              onChange={(e) => changeLabelHandler(e)}
            />
            {item}
          </label>
        </span>
      ))}
    </div>
  );
};

export { LabelModel };
