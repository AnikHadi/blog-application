import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import BlogDetailsPage from "./Component/Pages/BlogDetailsPage";
import HomePage from "./Component/Pages/HomePage";
import Navbar from "./Component/Share/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/blogs/:blogId" element={<BlogDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
