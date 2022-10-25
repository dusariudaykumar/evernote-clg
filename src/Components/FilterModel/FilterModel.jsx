import { ClickAwayListener } from "@mui/material";
import { useNotes } from "../../contexts";
import "./FilterModel.css";
const FilterModel = ({ setShowFilterModel }) => {
  const {
    noteState: { sortBy },
    noteDispatch,
  } = useNotes();

  return (
    <ClickAwayListener onClickAway={() => setShowFilterModel(false)}>
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
      </div>
    </ClickAwayListener>
  );
};

export { FilterModel };
