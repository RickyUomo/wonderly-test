import "./App.css";
import Navbar from "./components/Navbar";
import Time from "./components/Time";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // create buttons
  // create a display time page, pass props for different time zone. add css to content class
  // create home page
  return (
    <Router>
      <Navbar />

      <div className="content">
        <Routes>
          <Route exact path="/" />
          <Route path="/london" element={<Time city={"london"} />} />
          <Route path="/paris" element={<Time city={"paris"} />} />
          <Route path="/rome" element={<Time city={"rome"} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
