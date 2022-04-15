import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import StateForm from './pages/StateForm';
import VitalSignReport from './pages/VitalSignReport';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StateForm/>} />
        <Route path="/rapport" element={<VitalSignReport />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
