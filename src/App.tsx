import "./App.css";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePresenter } from "./components/home/components/HomePresenter";
import { AboutPresenter } from "./components/about/components/AboutPresenter";
import { CareerPresenter } from "./components/career/components/CareerPresenter";
import { ContactPresenter } from "./components/contact/components/ContactPresenter";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<HomePresenter />} />
        <Route path="/about" element={<AboutPresenter />} />
        <Route path="/career" element={<CareerPresenter />} />
        <Route path="/contact" element={<ContactPresenter />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
