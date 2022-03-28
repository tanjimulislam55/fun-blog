import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";
import Favourite from "./components/Favourite";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Store from "./store/Store";

function App() {
  return (
    <BrowserRouter>
      <Store>
        <Navbar />
        <Layout>
          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/posts/:id" element={<BlogDetail />} />
            <Route path="/favourite" element={<Favourite />} />
          </Routes>
        </Layout>
      </Store>
    </BrowserRouter>
  );
}

export default App;
