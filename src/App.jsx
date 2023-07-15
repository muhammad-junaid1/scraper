import { Routes, Route } from "react-router";
import Home from "./pages/home";
import Error404 from "./pages/error404";
import Contact from "./pages/contact";
import Navbar from "./components/navbar";
import FAQ from "./pages/faq";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
