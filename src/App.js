import './styles.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import NewBlogPost from "./components/NewBlogPost";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/post/:id" element={<BlogPost />} />
          <Route path="/new" element={<NewBlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
