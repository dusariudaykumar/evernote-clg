export const noteReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: action.payload,
      };
  }
};
