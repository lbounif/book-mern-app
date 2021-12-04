import React from "react";
import "./filters.css";
import { Input } from "antd";
import { useDispatch } from "react-redux";

const Filters = ({ styles }) => {
  const dispatch = useDispatch();
  return (
    <div style={{ ...styles }} className="filters-container">
      <div className="filters-header">Filters</div>
      <div className="filters">
        <Input
          style={{ height: 50, marginBottom: 35 }}
          placeholder="Search by Title"
          onChange={(event) => {
            dispatch({ type: "UPDATE_TITLE", payload: event.target.value });
          }}
        />
        <Input
          style={{ height: 50, marginBottom: 35 }}
          placeholder="Search by Author"
          onChange={(event) => {
            dispatch({ type: "UPDATE_AUTHOR", payload: event.target.value });
          }}
        />
      </div>
    </div>
  );
};
export default Filters;
