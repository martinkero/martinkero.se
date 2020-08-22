import React from 'react';
import './App.css';
import { Card } from './components/card/Card';

const App = () =>
  <div className="app">
    <Card />
    <footer>
      <a href="https://travis-ci.org/github/martinkero/martinkero.se" target="_blank" rel="noopener noreferrer">Travis CI</a>
    </footer>
  </div>

export default App;
