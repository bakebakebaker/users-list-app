import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = ({ children }: Props) => (
  <StyledWrapper>{children}</StyledWrapper>
);

export default Wrapper;
