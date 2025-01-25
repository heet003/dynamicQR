// /*eslint-disable */
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import QRCode from "./components/QRCode";
import Redirect from "./components/Redirect";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/qrCode" element={<QRCode />} />
        <Route path="/nav/:ID" element={<Redirect />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
