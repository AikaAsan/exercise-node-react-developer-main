import React, { useEffect, useState } from 'react';
import Repo from './Components/Repo';
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
    <div className="App">
      <h2>Repositories</h2>
      <Repo repositories={repositories} />
    </div>
  );
}
