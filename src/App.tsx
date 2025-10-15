import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectPage from "./pages/Project";
import BlogPage from "./pages/blog/Blog";
import BlogPostDetail from "./pages/blog/BlogDetail";
import ScrollToTop from "./components/ScrollToTop";
import RouteScrollToTop from "./components/RouteScrollToTop";

function App() {
  return (
    <Router>
      <RouteScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
