import React, { useState } from "react";

const NewBlogPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content };
    console.log("New Post Added:", newPost);
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h1>Add New Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <input type="submit" value="Add Post" />
      </form>
    </div>
  );
};

export default NewBlogPost;
