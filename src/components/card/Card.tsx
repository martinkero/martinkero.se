import React from "react";

import { Link } from "../link/Link";

interface args {
  text: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export const Card = ({ header, text, footer }: args) => (
  <div className="card  bg-gray-400 text-gray-900 rounded-lg p-4">
    {header}
    <section>{text}</section>
    {footer}
  </div>
);
