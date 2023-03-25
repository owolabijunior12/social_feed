import React, { useState } from "react";
import "./CreatePostForm.css";

function CreatePostForm({ postData, setPostData }) {
  var [user, setUser] = useState("");
  var [body, setBody] = useState("");

  const createPost = (e) => {
    e.preventDefault();

    console.log(postData);

    const newPost = {
      user: user,
      body: body,
      timestamp: new Date().toISOString(),
    };

    setUser("");
    setBody("");

    setPostData([...postData, newPost]);
  };

  return (
    <div>
      <form className="CreatePostForm" action="">
        <input
          className="CreatePostForm__user"
          type="text"
          value={user}
          name="user"
          onChange={(e) => setUser(e.target.value)}
        />
        <textarea
          className="CreatePostForm__body"
          name="body"
          id=""
          cols="30"
          rows="10"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <button className="CreatePostForm__button" onClick={createPost}>
          Send a message
        </button>
      </form>
    </div>
  );
}

export default CreatePostForm;
