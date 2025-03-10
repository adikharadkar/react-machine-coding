import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import Navbar from "../components/Navbar";

test("Should load the Navbar component", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  // Find a link element inside the Navbar
  const linkElement = screen.getByRole("link");
  expect(linkElement).toBeInTheDocument();
});

test("Should render the navbar componenet with a search bar", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  const button = screen.getByRole("searchbox");
  expect(button).toBeInTheDocument();
});

test("Should change login button to logout button after clicking", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument();
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});
