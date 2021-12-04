/*const BOOKS = [
  {
    title: "Alone on thte way",
    author: "David Roberts",
    rating: 4,
    voters: "1,867,756",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam   ",
    img: "/assets/book1.jpg",
  },
  {
    title: "Alone on thte way",
    author: "David Roberts",
    rating: 4,
    voters: "1,867,756",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam   ",
    img: "/assets/book1.jpg",
  },
  {
    title: "Alone on thte way",
    author: "David Roberts",
    rating: 4,
    voters: "1,867,756",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam   ",
    img: "/assets/book1.jpg",
  },
];*/
const initialState = {
  books: [], //
  visible: false,
  error: "",
  newBook: {
    title: "",
    author: "",
    description: "",
    rating: 0,
  },
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BOOKS":
      return { ...state, books: action.payload };
    case "ADD_NEW_BOOK":
      return { ...state, books: [...state.books, action.payload] };
    case "UPDATE_VISIBLE":
      return { ...state, visible: action.payload };
    case "UPDATE_NEW_BOOK":
      return { ...state, newBook: action.payload };
    case "UPDATE_ERR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default bookReducer;
