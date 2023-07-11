import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserInformation from "./components/UserInformation";
import PersonalInformation from "./components/PersonalInformation";
import Confirmation from "./components/Confirmation";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" Component={UserInformation} />
          <Route path="/personal-information" Component={PersonalInformation} />
          <Route path="/confirmation" Component={Confirmation} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
