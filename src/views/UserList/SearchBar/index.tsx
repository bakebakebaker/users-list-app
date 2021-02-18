import React, { SyntheticEvent } from "react";
import styled from "styled-components";
import { variables } from "../../../style-config/variables";

export interface SearchBarProps {
  value: string;
  handleChange: (event: SyntheticEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input`
  font-size: 1.3rem;
  margin-bottom: ${variables.mainSpacing};
  border: 2px solid black;
  min-width: 250px;
`;

const SearchInput = ({ value, handleChange }: SearchBarProps) => {
  return (
    <StyledInput
      value={value}
      onChange={handleChange}
      type="text"
      placeholder="Search by user name..."
      title="search-bar"
      data-testid="search-bar"
    />
  );
};

export default SearchInput;
