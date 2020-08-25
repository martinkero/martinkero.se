import React from "react";

interface args {
  href: string;
  text: string;
  className?: string;
}

export const Link = ({ href, text, className }: args) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
    {text}
  </a>
);
