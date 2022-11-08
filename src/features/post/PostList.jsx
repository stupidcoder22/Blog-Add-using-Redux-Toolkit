import React from "react";
import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import { selectAllpost } from "./postSlice";
import ReactionButtons from "./ReactionButtons";
import TimeAgo from "./TimeAgo";

const PostList = () => {
  const post = useSelector(selectAllpost);

  const changepost = post.slice().sort((a, b) => b.date.localeCompare(a.date));
  // console.log(changepost);
  return (
    <div className="ml-7 mt-7">
      <h2 className="text-5xl mb-4">Posts</h2>
      {changepost.map((item) => {
        return (
          <div key={item.id} className="border-2 mb-3 rounded-md p-6">
            <p className="text-4xl mb-2">{item.title}</p>
            <p className="text-lg">{item.content.substring(0, 100)}</p>{" "}
            <PostAuthor userId={item.userId} />
            <TimeAgo timestamp={item.date} />
            <ReactionButtons post={item} />
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
