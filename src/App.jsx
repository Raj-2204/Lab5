import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import NotFound from "./pages/NotFound";
import DarkModeProvider from "./context/DarkModeContext";
import "./styles.css";

export default function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Header />
        <main className="container mt-4 mb-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </DarkModeProvider>
  );
}
