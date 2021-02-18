import { User } from "../../../../types/index";
import styled from "styled-components";
import { variables } from "../../../../style-config/variables";

export interface ListItemProps {
  item: User;
}

const OrderedListItem = styled.li`
  ::marker {
    color: ${variables.lightGray};
    padding-right: ${variables.smallSpacing};
  }
  margin-bottom: ${variables.smallSpacing};
`;

const Nickname = styled.span`
  color: ${variables.lightGray};
  padding-left: ${variables.smallSpacing};
`;

const Name = styled.span`
  font-weight: 600;
  font-size: ${variables.fontBigger};
`;

const ListItem = ({ item }: ListItemProps) => {
  return (
    <OrderedListItem data-testid={`list-item-${item.id}`}>
      <Name>{item.name}</Name> <Nickname>@{item.username}</Nickname>
    </OrderedListItem>
  );
};

export default ListItem;
