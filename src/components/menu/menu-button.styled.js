import styled from "styled-components";

export const StyledMenuButton = styled.button`
  display: flex;
  border: 2px solid var(--button-background-color);
  width: 170px;
  height: 45px;
  font-weight: bold;
  align-items: end;
  justify-content: center;
  background-color: var(--button-background-color);
  color: var(--button-text-color);
  text-decoration: none;
  margin: 0 auto;
  border: 1px solid var(--button-background-color);

  &:hover ,
  &.active {
    background-color: var(--button-background-hover-color);
    color: var(--button-text-hover-color);
    border: 1px solid var(--button-text-hover-color);
  }

`