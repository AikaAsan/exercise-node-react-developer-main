import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Repo from './Components/Repo';
import AdditionalInformation from './Components/AdditionalInformation';
import './App.css';
import axios from 'axios';
export function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    axios('http://localhost:4000/repos')
      .then((result) => result.data)
      .then((repos) => {
        setRepositories(repos);
      });
  }, [repositories]);
  return (
    <Router>
      <div className="App">
        <h2>Repositories</h2>
        <Routes>
          <Route path="/" element={<Repo repositories={repositories} />} />
          <Route
            path="/:id"
            element={<AdditionalInformation repositories={repositories} />}
          />
        </Routes>
      </div>
    </Router>
  );
}
