export const noteReducer = (state, action) => {
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
    case "MOVE_TO_TRASH":
      return {
        ...state,
        trash: [...state.trash, { ...action.payload }],
      };
    case "DELETE_NOTE":
      return {
        ...state,
        notes: action.payload,
      };
    case "ADD_ARCHIVE":
      return {
        ...state,
        notes: action.payload.notes,
        archive: action.payload.archives,
      };
    case "RESTORE_ARCHIVE":
      return {
        ...state,
        notes: action.payload.notes,
        archive: action.payload.archives,
      };
    case "ARCHIVE_DELETE":
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
    case "DELETE_FROM_TRASH":
      return {
        ...state,
        trash: action.payload,
      };
    case "ADD_LABELS":
      return {
        ...state,
        label: [...state.label, action.payload],
      };
    case "REMOVE_LABEL":
      return {
        ...state,
        label: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
