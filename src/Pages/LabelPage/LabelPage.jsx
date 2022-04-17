import { useState } from "react";
import { toast } from "react-toastify";
import { useNotes } from "../../contexts";

import "./LabelPage.css";
const LabelPage = () => {
  const {
    noteDispatch,
    noteState: { label },
  } = useNotes();
  const [labelValue, setLabelValue] = useState("");

  const addLabelHandler = () => {
    if (labelValue !== "" && !label.includes(labelValue)) {
      noteDispatch({ type: "ADD_LABELS", payload: labelValue });
      setLabelValue("");
    }
    setLabelValue("");
  };
  const deleteTableHandler = (labelName) => {
    const data = label.filter((item) => item !== labelName);
    noteDispatch({ type: "REMOVE_LABEL", payload: data });
  };
  return (
    <>
      <div className="label-container">
        <div className="label-wrapper">
          <label htmlFor="label-input" className="label-text">
            Add Label
          </label>
          <span className="label-input-container">
            <input
              type="text"
              id="label-input"
              className="label-input-feild"
              placeholder="New Label"
              value={labelValue}
              onChange={(e) => setLabelValue(e.target.value)}
            />
            <button className="add-label-btn" onClick={addLabelHandler}>
              <span className="material-icons-outlined">done</span>
            </button>
          </span>
        </div>
        <div className="labels-box">
          {label.map((item) => {
            return (
              <div className="label-items-conatiner " key={item}>
                <span className="label-item-icons flex">
                  <span className="material-icons">label</span>
                  <span className="label-item-text">{item}</span>
                </span>
                <div
                  className="material-icons label-delete-icon"
                  onClick={() => deleteTableHandler(item)}>
                  delete
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export { LabelPage };
