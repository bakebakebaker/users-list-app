import React from "react";
import { render } from "@testing-library/react";
import ListItem from ".";
import { ListItemProps } from ".";
import "@testing-library/jest-dom/extend-expect";

let props: ListItemProps;
beforeEach(() => {
  props = {
    item: {
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
  };
});

it("render list item", () => {
  const { queryByText } = render(<ListItem {...props} />);
  expect(queryByText("Leanne Graham")).toBeInTheDocument();
  expect(queryByText("@Bret")).toBeInTheDocument();
});
