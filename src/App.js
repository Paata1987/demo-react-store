import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AboutUs from "./pages/AboutUs";
import ThemeSwitcher from "./components/ThemeSwitcher";
import TheNavigation from "./components/TheNavigation";


function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <>
      <TheNavigation isDarkMode={isDarkMode} />
      <ThemeSwitcher isDarkMode={isDarkMode} onThemeChange={handleThemeChange} />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
      </Routes>
    </>
  );
}

export default App;
