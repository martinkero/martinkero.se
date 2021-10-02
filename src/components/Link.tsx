import React from "react";

interface args {
  href: string;
  text: string;
}

export const Link = ({ href, text }: args) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {text}
  </a>
);
