import Footer from "./components/Footer";
import Header from "./components/Header";
import ListEmployees from "./components/ListEmployees";
import Employee from "./components/Employee";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ListEmployees />} />
          <Route path="/employees" element={<ListEmployees />} />
          <Route path="/addEmployee" element={<Employee />} />
          <Route path="/editEmployee/:id" element={<Employee />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
