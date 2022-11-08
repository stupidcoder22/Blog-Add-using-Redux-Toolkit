import React from "react";
import { useSelector } from "react-redux";
import { getallUser } from "../Users/UsersSlice";

const PostAuthor = ({ userId }) => {
  const users = useSelector(getallUser);
  const author = users[userId]?.name;
  return <span>by {author ? author : "Unknown author"}</span>;
};

export default PostAuthor;
  