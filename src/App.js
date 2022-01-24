import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ML from "./pages/ML";
import DSA from "./pages/DSA";
import WebDev from "./pages/WebDev";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/machine-learning" element={<ML />} />
        <Route path="/data-structures" element={<DSA />} />
        <Route path="/web-dev" element={<WebDev />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
