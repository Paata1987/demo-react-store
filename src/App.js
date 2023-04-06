import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AboutUs from "./pages/AboutUs";
import TheNavigation from "./components/TheNavigation";

function App() {
  return (
    <>
      <TheNavigation />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/" element={<AboutUs />}></Route>
      </Routes>
    </>
  );
}

export default App;
