import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="signin" element={<Login />} />
              <Route exact path="signup" element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </div>
      <Routes>
        <Route exact path="userDetails" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
