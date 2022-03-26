import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogDetail from "./components/BlogDetail";
import Favourite from "./components/Favourite";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Store from './store/Store'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
    <Store>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<BlogDetail />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
      </Store>
    </BrowserRouter>
  );
}

export default App;
