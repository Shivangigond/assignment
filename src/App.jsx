import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import CustomDate from './components/DatePicker/CustomDate';
import CustomTable from './components/Table/CustomTable';
import CustomForm from './components/Form/CustomForms';
import './App.css';
const App = () => {
  return (
    <Router>
      <div>
        <h1>Click on buttons to go and check component</h1>
        <nav>
          <ul id="nav">
            <li className="rot"><NavLink to="/" style={{ color: 'orange' }}>Home</NavLink></li>
            <li className="rot"><NavLink to="/table" style={{ color: 'orange' }}>Table</NavLink></li>
            <li className='rot'><NavLink to="/form" style={{ color: 'orange' }}>Form</NavLink></li>
            <li className='rot'><NavLink to="/date" style={{ color: 'orange' }}>Date Picker</NavLink></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" />
          <Route path="/table" element={<CustomTable />} />
          <Route path="/form" element={<CustomForm />} />
          <Route path="/date" element={<CustomDate />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
