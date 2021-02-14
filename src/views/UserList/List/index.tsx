import React from "react";
import { User } from "../../../types";
import ListItem from "./ListItem";

interface Props {
  items: User[];
}

const List = ({ items }: Props) => (
  <ol>
    {items.map((user: User) => (
      <ListItem item={user} />
    ))}
  </ol>
);

export default List;
