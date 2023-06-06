import React, { useState, useEffect } from "react";
import "./App.css";
import Intro from "./components/Intro";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  const [presiden, setPresiden] = useState("Jokowi");
  const [hitung, setHitung] = useState(0);
  const [namaBuah, setNamaBuah] = useState("");

  useEffect(() => {
    if (hitung > 1) {
      setNamaBuah("nanas");
    } else {
      setNamaBuah("apel");
    }
  }, [hitung]);

  return (
    <div className="Intro">
      <div>
        {/* <h5>Nama Buah : {namaBuah}</h5>
        <h1>presiden indoensia sekarang: {presiden}</h1>
        <h1>ayo menghitung: {hitung}</h1>
        <button onClick={() => setPresiden("prabowo")}>ganti presiden</button>
        <button onClick={() => setHitung((prev) => prev + 1)}> tambah</button>
        <button
          onClick={() =>
            setHitung((prev) => {
              if (prev > 0) {
                return prev - 1;
              } else {
                alert(`nilai kurang dari 0`);
              }
            })
          }
        >
          kurang
        </button>

      <Intro name="hajid" /> */}
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Intro name="Hajid" />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
