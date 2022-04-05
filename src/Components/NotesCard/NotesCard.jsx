import "./NotesCard.css";
const NotesCard = () => {
  return (
    <div className="note-card">
      <div className="notecard_wrapper flex-col ">
        <div className="notecard-header flex">
          <h2>title</h2>
          <span class="material-icons-outlined">push_pin</span>
        </div>
        <div className="notecard-body">
          <p>Body...</p>
        </div>
        <div className="notecard-icons flex">
          <span class="material-icons-outlined">edit</span>
          <span className="material-icons">palette</span>
          <span className="material-icons">label</span>
          <span className="material-icons">delete</span>
          <span className="material-icons">archive</span>
        </div>
      </div>
    </div>
  );
};

export { NotesCard };
