import React, { useState } from "react";
import "./Post.css";

function Post({ user, body,timestamp }) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const handleLike = () => {
    if (disliked) {
      setDisliked(false);
    }
    setLiked(!liked);
  };

  const handleDislike = () => {
    if (liked) {
      setLiked(false);
    }
    setDisliked(!disliked);
  };

  return (
    <div className="post">
      <div className="post-user">{user}</div>
      <div className="post-body">{body}-- {timestamp}</div>
      <div className="post-actions">
        <button
          className={`btn btn-primary mr-2 ${liked ? "liked" : ""}`}
          onClick={handleLike}
        >
          {liked ? "Liked" : "Like"}
        </button>

        <button
          className={`btn btn-danger ${disliked ? "disliked" : ""}`}
          onClick={handleDislike}
        >
          {disliked ? "Disliked" : "Dislike"}
        </button>
      </div>
    </div>
  );
}

export default Post;
