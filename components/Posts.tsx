import React from "react";
import { useState, useContext, useEffect } from "react";
import PostData from "./../data/PostData";
import Post from "./Post";

type Props = {};

const Posts = (props: Props) => {
  const [posts, setPosts] = useState(PostData);
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          name={post.name}
          img={post.PostImg}
          userImg={post.avatar}
          caption={post.postCap}
        />
      ))}
    </div>
  );
};

export default Posts;
