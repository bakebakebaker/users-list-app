import React, { SyntheticEvent } from "react";
import styled from 'styled-components';

interface Props {
  value: string;
  handleChange: (event: SyntheticEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ value, handleChange }: Props) => {
  return (
    <input
      value={value}
      onChange={handleChange}
      type="text"
      placeholder="Search by user name..."
    />
  );
};

export default SearchInput;
