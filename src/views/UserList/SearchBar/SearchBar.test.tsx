import { SearchBarProps } from ".";
import SearchBar from ".";
import { fireEvent, render } from "@testing-library/react";

let props: SearchBarProps;
beforeEach(() => {
  props = {
    value: "",
    handleChange: jest.fn(),
  };
});

it("should render input", () => {
  const { getByTestId } = render(<SearchBar {...props} />);
  const searchInput = getByTestId("search-bar");
  expect(searchInput).toBeInTheDocument();
});
