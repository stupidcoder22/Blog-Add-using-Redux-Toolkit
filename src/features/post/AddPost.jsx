import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postSlice";
import { getallUser } from "../Users/UsersSlice";

const AddPost = () => {
  const [data, setdata] = useState({
    title: "",
    author: "",
    content: "",
  });

  const allUser = useSelector(getallUser);

  const dispatch = useDispatch();
  function changeinput(e) {
    setdata({ ...data, [e.target.name]: e.target.value });
  }

  function onSubmit() {
    if (data.title && data.content) {
      dispatch(postAdded(data.title, data.content, data.author));
      setdata({
        title: "",
        content: "",
        author: "",
      });
    }
  }

  return (
    <div className="ml-7 mt-7">
      <h2 className="text-5xl mb-4">Add a New Post</h2>
      <form className="space-y-3">
        <div className="title flex flex-col">
          <label className=" text-2xl">Post Title:</label>
          <input
            type="text"
            name="title"
            value={data.title}
            className="border-2"
            onChange={changeinput}
          />
        </div>
        <div className="author flex flex-col">
          <label htmlFor="" className="text-2xl">
            Author:
          </label>
          <select
            name="author"
            value={data.author}
            onChange={changeinput}
            className="border-2"
          >
            <option value=""></option>
            {allUser.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="content flex flex-col">
          <label className=" text-2xl" htmlFor="">
            Content
          </label>
          <textarea
            name="content"
            value={data.content}
            id=""
            className="border-2"
            onChange={changeinput}
          ></textarea>
        </div>
        <button
          type="button"
          className="text-xl border-2 rounded-md w-full mt-5 p-2 bg-gray-700"
          onClick={onSubmit}
        >
          Save Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
