import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import NerdJokes from "./pages/NerdJokes";
import "./styles/terminal.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nerd-jokes" element={<NerdJokes />} />
      </Routes>
    </App>
  </BrowserRouter>
);
