import React from "react";
import Post from "./Post";
import "./PostList.css";

function PostList({ postData }) {
  return (
    <div className="post-list">
      {postData.map((item, index) => {
        return (
          <Post
            key={index}
            user={item.user}
            body={item.body}
            timestamp={item.timestamp}
          />
        );
      })}
    </div>
  );
}

export default PostList;
