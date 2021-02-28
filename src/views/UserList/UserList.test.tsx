import React from "react";
import { act, render, fireEvent, screen } from "@testing-library/react";
import UsersList from ".";
import "@testing-library/jest-dom/extend-expect";

const resMock = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

describe("User list view", () => {
  it("should render header", () => {
    act(() => {
      const { getByText } = render(<UsersList />);
      const headerText = getByText("Users list");
      expect(headerText).toBeInTheDocument();
    });
  });

  it("should render loading when fetching data", () => {
    act(() => {
      const { getByTestId } = render(<UsersList />);
      const spinner = getByTestId("spinner");
      expect(spinner).toBeInTheDocument();
    });
  });

  it("should show list after fetch", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve<any>({
        json: () => Promise.resolve(resMock),
      })
    );
    await act(async () => {
      const { findByTestId } = render(<UsersList />);
      const list = await findByTestId("user-ordered-list");
      expect(list).toBeInTheDocument();
    });
  });

  it("should filter list", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve<any>({
        json: () => Promise.resolve(resMock),
      })
    );
    await act(async () => {
      const { findByTestId, findAllByTestId } = render(<UsersList />);
      const input = await findByTestId("search-bar");
      fireEvent.change(input, { target: { value: "Graham" } });
      const items = await findAllByTestId(/list-item/i);
      expect(items.length).toBe(1);
    });
  });
});
