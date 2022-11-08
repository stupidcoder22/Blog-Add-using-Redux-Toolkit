import { useDispatch } from "react-redux";
import { reactionAdd } from "./postSlice";

import React from "react";

const ReactionButtons = ({ post }) => {
  const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕",
  };
  const dispatch = useDispatch();
  console.log(post);
  return (
    <div>
      {Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
          <button
            key={name}
            type="button"
            className=""
            onClick={() =>
              dispatch(reactionAdd({ postid: post.id, reaction: name }))
            }
          >
            {emoji}
            {post.reactions[name]}
          </button>
        );
      })}
    </div>
  );
};

export default ReactionButtons;
