import React from "react";
import "./bookCard.css";
import { Rate } from "antd";

const BookCard = ({ title, author, img, rating, voters, description }) => {
  return (
    <div className="book-card-container">
      <div className="book-img-container">
        <img src={img} width="140" height="220" alt="book-img" />
      </div>
      <div className="book-content-content">
        <div className="book-title">{title}</div>
        <div className="book-author">{`By ${author}`}</div>
        <div className="rating-container">
          <div className="book-rating">
            <Rate style={{ fontSize: 12 }} disabled value={rating} />
          </div>
          <div className="book-voters">{`${voters} Voters`}</div>
        </div>
        <div className="book-description">{description}</div>
      </div>
    </div>
  );
};

export default BookCard;
