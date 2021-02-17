import React, { SyntheticEvent } from "react";
import styled from "styled-components";
import { variables } from "../../../style-config/variables";

interface Props {
  value: string;
  handleChange: (event: SyntheticEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input`
  font-size: 1.3rem;
  margin-bottom: ${variables.mainSpacing};
  border: 2px solid black;
  min-width: 250px;
`;

const SearchInput = ({ value, handleChange }: Props) => {
  return (
    <StyledInput
      value={value}
      onChange={handleChange}
      type="text"
      placeholder="Search by user name..."
      title="search-bar"
    />
  );
};

export default SearchInput;
