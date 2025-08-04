import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Users from "./components/Users";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <>
      {/* Top navigation */}
      <Header />

      {/* Page content with routes */}
      <div className="container mt-4">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Users Page */}
          <Route path="/users" element={<Users />} />

          {/* Products Page with nested route for details */}
          <Route path="/products" element={<Products />}>
            <Route path=":id" element={<ProductDetails />} />
          </Route>

          {/* 404 - Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
