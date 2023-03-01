import { useEthers } from "@usedapp/core";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import MainPage from "./pages/mainPage/MainPage";
import UserPage from "./pages/userPage/UserPage";

function App() {
  const { activateBrowserWallet, account } = useEthers();

  return (
    <BrowserRouter>
      <div className="container">
        <Header activate={activateBrowserWallet} account={account} />
        <Routes>
          <Route path="/main" element={<MainPage account={account} />}></Route>
          <Route path="/user/:id" element={<UserPage />}></Route>
          <Route path="/*" element={<Navigate to="/main" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
