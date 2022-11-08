import React from "react";
import AddPost from "./features/post/AddPost";
import PostList from "./features/post/PostList";

const App = () => {
  return (
    <main>
      <AddPost />
      <PostList />
    </main>
  );
};

export default App;
