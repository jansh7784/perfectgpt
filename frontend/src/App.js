import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FakeChatGPT from "./components/FakeChatGPT";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FakeChatGPT />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;