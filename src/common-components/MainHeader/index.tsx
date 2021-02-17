import styled from "styled-components";
import { variables } from "../../style-config/variables";

interface Props {
  text: string;
  title: string;
}

const Header = styled.h1`
  margin: ${variables.mainSpacing} 0;
  font-weight: 600;
  font-size: 2.5rem;
`;

const MainHeader = ({ text, title }: Props) => (
  <Header title={title}>{text}</Header>
);

export default MainHeader;
