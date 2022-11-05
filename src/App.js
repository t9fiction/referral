import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Referral from "./pages/Referral.js";

function App() {


  return (
    <div>
      <div className="main-root position-relative">
        <div id="particles-js"></div>
        <div className="main-body">
          <Navbar />
          <Routes>
            <Route path="/" element={<Referral />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
