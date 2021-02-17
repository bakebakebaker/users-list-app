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
  /*
  it("render spinner while fetching data", () => {
    const { queryByTitle } = render(<Spinner />);
    expect(queryByTitle).toBeInTheDocument();
  });

  it("render list", () => {
    fetchMock.mockResponse(
      JSON.stringify([
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: {},
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org",
          company: {},
        },
        {
          id: 2,
          name: "Ervin  Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
          address: {},
          phone: "010-692-6593 x09125",
          website: "anastasia.net",
          company: {},
        },
      ])
    );
    const { findByTestId } = render(<UsersList />);
    expect(findByTestId("user-item-1")).toBeInTheDocument();
  });

  it("should render only proper user after filtering", async () => {
    fetchMock.mockResponse(
      JSON.stringify([
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: {},
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org",
          company: {},
        },
        {
          id: 2,
          name: "Ervin  Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
          address: {},
          phone: "010-692-6593 x09125",
          website: "anastasia.net",
          company: {},
        },
      ])
    );
    const { findByTestId, findAllByTestId } = render(<UsersListApp />);

    const input = await findByTestId("search-input");

    fireEvent.change(input, { target: { value: "Leanne" } });

    const items = await findAllByTestId(/user-item/i);
    expect(items.length).toBe(1);
  });
*/
});
