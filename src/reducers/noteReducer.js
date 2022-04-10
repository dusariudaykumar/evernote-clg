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

    default:
      return {
        ...state,
      };
  }
};
