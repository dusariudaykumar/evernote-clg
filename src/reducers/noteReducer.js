export const noteReducer = (state, action) => {
  console.log(action, "action1");
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: action.payload,
        editNote: false,
      };
    case "EDIT_NOTE":
      return {
        ...state,
        editNote: true,
      };
    case "UPDATE_NOTE":
      return {
        ...state,
        notes: [...action.payload],
        editNote: false,
      };
    case "TRASH_NOTES":
      return {
        ...state,
        trash: action.payload,
      };
    case "ARCHIVE_NOTES":
      return {
        ...state,
        archive: action.payload,
      };
    case "COLOR_PALLET_VISIBLE":
      return {
        ...state,
        isColorPalletVisible: !state.isColorPalletVisible,
      };
    case "PICK_COLOR":
      return {
        ...state,
        isNoteColor: !state.isNoteColor,
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy:
          action.payload === "newest_first"
            ? "NEWEST_FIRST"
            : action.payload === "oldest_first"
            ? "OLDEST_FIRST"
            : "",
      };
    case "SEARCH_QUERY": {
      return {
        ...state,
        serachQuery: action.payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
