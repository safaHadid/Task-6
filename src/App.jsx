import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Blog from "./pages/Blog";
import Newsletter from "./pages/Newsletter";

function App() {
  return (
    <div className="dark:bg-[#090D1F] dark:text-white">    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog/>} />
        <Route path="/newsletter" element={<Newsletter/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
