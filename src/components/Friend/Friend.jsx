import React from "react";
import "./Friend.css";
import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
  const { email, id, name, phone } = friend;
  return (
    <div className="friend">
      <h3>Id: {id}</h3>
      <h3>{name}</h3>
      <h3>Email: {email}</h3>
      <h3>Phone: {phone}</h3>
      <Link to={`/friend/:${id}`}>Show me details</Link>
    </div>
  );
};

export default Friend;
