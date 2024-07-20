import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Product, Contact } from "./screens/index";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/view/:id" element={<ViewTask />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
