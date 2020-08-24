import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders app with card", () => {
  const { getByText } = render(<App />);
  const nameElement = getByText(/Martin Kero/i);
  expect(nameElement).toBeInTheDocument();
});
