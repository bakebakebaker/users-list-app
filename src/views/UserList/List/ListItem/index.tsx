import React from "react";
import { User } from "../../../../types/index";

interface Props {
  item: User;
}

const ListItem = ({ item }: Props) => (
  <li>
    {item.name} @ {item.username}
  </li>
);

export default ListItem;
