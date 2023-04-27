import { Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AboutUs from "./pages/AboutUs";
import ThemeSwitcher from "./components/ThemeSwitcher";


function App() {
  return (
    <>
      <ThemeSwitcher />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
      </Routes>
    </>
  );
}

export default App;
