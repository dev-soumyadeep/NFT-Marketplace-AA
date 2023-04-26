import "./App.css";
import Navbar from "./components/Navbar.js";
import Marketplace from "./components/Marketplace";
import MyNFTs from "./components/MyNFT";
import SellNFT from "./components/SellNFT";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Marketplace />} />
          <Route path="/MyNFTs" element={<MyNFTs />} />
          <Route path="/sellNFT" element={<SellNFT />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
