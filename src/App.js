import "./App.css";
import Navbar from "./components/Navbar";
import Time from "./components/Time";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/london" element={<Time city={"london"} />} />
          <Route path="/paris" element={<Time city={"paris"} />} />
          <Route path="/rome" element={<Time city={"rome"} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
