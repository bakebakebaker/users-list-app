import React, { SyntheticEvent } from "react";
import styled from "styled-components";

interface Props {
  value: string;
  handleChange: (event: SyntheticEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input`
  font-size: 1.3rem;
  margin-bottom: 20px;
  border: 2px solid black;
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
