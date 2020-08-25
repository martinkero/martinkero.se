import React from "react";

interface args {
  year?: string;
}

export const Divider = ({ year }: args) => {
  if (!year) {
    return <div className="h-20"></div>;
  }
  return (
    <div className="max-w-lg h-20 flex flex-col items-center p-2">
      <div className="w-px bg-gray-400 h-full"></div>
      <div className="text-center text-gray-400">{year}</div>
      <div className="w-px bg-gray-400 h-full"></div>
    </div>
  );
};
