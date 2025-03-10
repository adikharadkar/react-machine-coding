import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Card from "../components/Card";
import MOCK_DATA from "../mocks/product.json";

test("Should render the card component", () => {
  render(
    <Card
      src={MOCK_DATA.thumbnail}
      productName={MOCK_DATA.title}
      alt={MOCK_DATA.title}
    />
  );
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
