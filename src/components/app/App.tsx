import React from "react";
import "./App.css";
import { Card } from "../card/Card";
import { Link } from "../link/Link";

const App = () => (
  <div className="app bg-green-400">
    <Card />
    <footer>
      <Link href="https://travis-ci.org/github/martinkero/martinkero.se" text="Travis CI" />
    </footer>
  </div>
);

export default App;
