import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { FetchMock } from "jest-fetch-mock";
import "@testing-library/jest-dom/extend-expect";
import UsersList from "./index";
import { Spinner, MainHeader } from "../../common-components";

const fetchMock = fetch as FetchMock;

describe("User list app", () => {
  it("render title", () => {
    const { queryByTitle } = render(
      <MainHeader text="Users list" title="main-header" />
    );
    const header = queryByTitle("main-header");
    expect(header?.innerHTML).toBe("Users list");
  });

  it("render spinner while fetching data", () => {
    const { queryByTitle } = render(<Spinner />);
    const spinner = queryByTitle("spinner");
    expect(spinner).toBeInTheDocument();
  });
});
