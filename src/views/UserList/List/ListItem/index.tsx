import { User } from "../../../../types/index";
import styled from "styled-components";
import { variables } from "../../../../style-config/variables";

interface Props {
  item: User;
  key: string;
}

const ListItem = ({ item, key }: Props) => {
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
  return (
    <OrderedListItem key={key}>
      <Name>{item.name}</Name> <Nickname>@{item.username}</Nickname>
    </OrderedListItem>
  );
};

export default ListItem;
