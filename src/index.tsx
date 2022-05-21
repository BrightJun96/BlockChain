import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MinerPage from "./pages/MinerPage";
import NFTPage from "./pages/NFTPage";
import HomePage from "./pages/HomePage";
import WalletPage from "./pages/WalletPage";
const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/miner" element={<MinerPage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/nft" element={<NFTPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
