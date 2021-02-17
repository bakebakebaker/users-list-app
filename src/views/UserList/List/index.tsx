import React from "react";
import styled from "styled-components";
import { User } from "../../../types";
import ListItem from "./ListItem";

interface Props {
  items: User[];
}

const List = ({ items }: Props) => (
  <ol>
    {items.map((user: User, index: number) => (
      <ListItem item={user} key={`${user.name} ${index}`} />
    ))}
  </ol>
);

export default List;
