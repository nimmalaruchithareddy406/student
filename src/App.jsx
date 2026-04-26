import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import StudentDetails from "./pages/StudentDetails";
import Scholarship from "./pages/Scholarship";
import Payment from "./pages/Payment";
import CGPA from "./pages/CGPA";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <h2>Student Management System</h2>

        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/student-details">Student Details</Link>
          <Link to="/scholarship">Scholarship</Link>
          <Link to="/payment">Payment</Link>
          <Link to="/cgpa">CGPA Calculator</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/student" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student-details" element={<StudentDetails />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/cgpa" element={<CGPA />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;