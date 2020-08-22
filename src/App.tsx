import React from 'react';
import './App.css';
import { Card } from './components/card/Card';
import { Link } from './components/link/Link';

const App = () =>
  <div className="app">
    <Card />
    <footer>
      <Link href="https://travis-ci.org/github/martinkero/martinkero.se" text="Travis CI" />
    </footer>
  </div>

export default App;