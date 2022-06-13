import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, CsvImport } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/csv" element={<CsvImport />} />
      </Routes>
    </Router>
  );
}

export default App;
