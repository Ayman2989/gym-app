import React from "react";
import { UserProvider } from "./context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Workouts from "./pages/Workouts";

const App: React.FC = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
