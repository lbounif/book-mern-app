import React, { useEffect } from "react";
import "./books.css";
import BookCard from "../BookCard";
import AddBook from "../AddBook";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const Books = ({ styles }) => {
  const dispatch = useDispatch();

  const { books } = useSelector((state) => state.book);
  const { title, author } = useSelector((state) => state.filter);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/books");
        console.log("response is: ", response)
        if (!response || response.status !== 200)
          return dispatch({ type: "SET_BOOKS", payload: [] });
        return dispatch({ type: "SET_BOOKS", payload: response.data.data });
      } catch (err) {
        console.log(err.message);
        dispatch({ type: "SET_BOOKS", payload: [] });
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div style={{ ...styles }}>
      <div className="add-book-container">
        <AddBook />
      </div>
      <div className="books-container">
        {!books || books.length === 0 ? (
          <div>No Data To Display</div>
        ) : (
          <>
            {books
              .filter(
                (elem) =>
                  elem.title.toLowerCase().indexOf(title.toLowerCase()) !== -1
              )
              .filter(
                (elem) =>
                  elem.author.toLowerCase().indexOf(author.toLowerCase()) !== -1
              )
              .map((book, index) => (
                <BookCard
                  key={index}
                  title={book.title}
                  author={book.author}
                  rating={book.rating}
                  voters={book.nbVoters}
                  description={book.description}
                  img={book.img}
                />
              ))}
          </>
        )}
      </div>
    </div>
  );
};
export default Books;
