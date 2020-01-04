import React from "react";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Landing} />
        <div className="container">
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
