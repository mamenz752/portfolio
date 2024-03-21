import "./App.css";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AboutPresenter } from "./components/about/components/AboutPresenter";
import { CareerPresenter } from "./components/career/components/CareerPresenter";
import { ContactPresenter } from "./components/contact/components/ContactPresenter";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/about" element={<AboutPresenter />} />
          <Route path="/career" element={<CareerPresenter />} />
          <Route path="/contact" element={<ContactPresenter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
