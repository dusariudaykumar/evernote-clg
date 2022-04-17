import { useNotes } from "../../contexts";
import "./FilterModel.css";
const FilterModel = () => {
  const {
    noteState: { label, sortBy },
    noteDispatch,
  } = useNotes();

  return (
    <div className="filter-wrapper">
      <div className="filter-title"> Sort By Date</div>
      <div className="date-filter flex-col">
        <label htmlFor="newest-first">
          <input
            type="radio"
            name="date"
            id="newest-first"
            value="newest_first"
            checked={sortBy === "NEWEST_FIRST"}
            onChange={(e) =>
              noteDispatch({
                type: "SORT_BY_DATE",
                payload: e.target.value,
              })
            }
          />
          Newest first
        </label>
        <label htmlFor="oldest-first">
          <input
            type="radio"
            name="date"
            id="oldest-first"
            value="oldest_first"
            checked={sortBy === "OLDEST_FIRST"}
            onChange={(e) =>
              noteDispatch({
                type: "SORT_BY_DATE",
                payload: e.target.value,
              })
            }
          />
          Oldest first
        </label>
      </div>
      <div className="filter-title">Filter By Label</div>
      <button
        className="filter-clear-btn"
        onClick={() => noteDispatch({ type: "CLEAR_FILTER" })}>
        clear
      </button>
      <div className="label-filter flex-col">
        {label.map((item) => (
          <label htmlFor={item} key={item}>
            <input
              type="radio"
              name="label"
              id={item}
              value={item}
              onChange={(e) =>
                noteDispatch({
                  type: "FILTER_BY_LABEL",
                  payload: e.target.value,
                })
              }
            />
            {item}
          </label>
        ))}
      </div>
    </div>
  );
};

export { FilterModel };
