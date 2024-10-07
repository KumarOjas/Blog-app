import React from "react";
import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "First Blog Post", content: "This is the first blog post." },
  { id: 2, title: "Second Blog Post", content: "This is the second blog post." }
];

const BlogList = () => {
  return (
    <div>
      <h1>Blog List</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/new">
        <button>Add New Blog Post</button>
      </Link>
    </div>
  );
};

export default BlogList;
