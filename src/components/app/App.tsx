import React from "react";
import { Card } from "../card/Card";
import { Link } from "../link/Link";
import { Divider } from "../divider/Divider";

const App = () => (
  <div className="app h-full w-full flex flex-col items-center justify-center bg-gray-800 text-h mt-20 p-5">
    <div className="max-w-lg w-full">
      <Card
        header={
          <header className="text-4xl font-semibold mb-5">
            <p>Martin Kero</p>
          </header>
        }
        text={<div>Developer currently focused on backend</div>}
        footer={
          <footer className="flex justify-evenly mt-8">
            <Link href="https://www.linkedin.com/in/martin-kero-63308950" text="LinkedIn" className="p-2 font-semibold hover:shadow rounded-lg" />
            <Link href="https://github.com/martinkero" text="GitHub" className="p-2 font-semibold hover:shadow rounded-lg" />
          </footer>
        }
      />
      <Divider year="Today" />
      <Card text="Nordic Peak" />
      <Divider year="2018" />
      <Card text="ClearIT 2014 - 2018" />
    </div>
    <footer className="absolute bottom-0 left-0 p-2">
      <Link href="https://travis-ci.org/github/martinkero/martinkero.se" text="Travis CI" className="text-gray-400" />
    </footer>
  </div>
);

export default App;
