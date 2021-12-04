const initialState = {
  title: "",
  author: "",
};

const filtreReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_TITLE":
      return { ...state, title: action.payload };
    case "UPDATE_AUTHOR":
      return { ...state, author: action.payload };
    default:
      return state;
  }
};

export default filtreReducer;
