import "./App.css";
import { Header } from "./components/common/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePresenter } from "./components/home/HomePresenter";
import { AboutPresenter } from "./components/about/AboutPresenter";
import { CareerPresenter } from "./components/career/CareerPresenter";
import { TechLogPresenter } from "./components/techlog/TechLogPresenter";
import { Footer } from "./components/common/Footer";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<HomePresenter />} />
        <Route path="/about" element={<AboutPresenter />} />
        <Route path="/career" element={<CareerPresenter />} />
        <Route path="/techlog" element={<TechLogPresenter />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
