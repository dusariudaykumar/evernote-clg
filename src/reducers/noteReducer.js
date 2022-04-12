export const noteReducer = (state, action) => {
  console.log(state, action);
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
        notes: action.payload,
        editNote: false,
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
        noteColor: action.payload.hex,
        isColorPalletVisible: !state.isColorPalletVisible,
      };
    default:
      return {
        ...state,
      };
  }
};
