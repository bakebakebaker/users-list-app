import React from "react";
import styled from "styled-components";
import { User } from "../../../types";
import ListItem from "./ListItem";

export interface ListProps {
  items: User[];
}

const List = ({ items }: ListProps) => (
  <ol data-testid="user-ordered-list">
    {items.map((user: User, index: number) => (
      <ListItem item={user} key={`${user.name} ${index}`} />
    ))}
  </ol>
);

export default List;
