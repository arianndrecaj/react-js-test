import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders category buttons", () => {
  render(<App />);
  const categoryButton = screen.getByText(/Category 1/i);
  expect(categoryButton).toBeInTheDocument();
});

test("renders add category button", () => {
  render(<App />);
  const addCategoryButton = screen.getByText(/\+ Add Category/i);
  expect(addCategoryButton).toBeInTheDocument();
});

test("renders add note button", () => {
  render(<App />);
  const addNoteButton = screen.getByText(/\+ Add Note/i);
  expect(addNoteButton).toBeInTheDocument();
});
