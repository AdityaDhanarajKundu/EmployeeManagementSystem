import Footer from "./components/Footer";
import Header from "./components/Header";
import ListEmployees from "./components/ListEmployees";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ListEmployees />} />
          <Route path="/employees" element={<ListEmployees />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
