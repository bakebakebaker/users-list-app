import Spinner from ".";
import { render } from "@testing-library/react";

it("should render spinner", () => {
  const { getByTestId } = render(<Spinner />);
  const spinner = getByTestId("spinner");
  expect(spinner).toBeInTheDocument();
});
