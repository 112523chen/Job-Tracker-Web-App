import styled from "styled-components";

export const EditButtonBase = styled.button`
  border-radius: 5px;
  border-style: none;
  transition: fill 0.2s ease 0s, box-shadow 0.2s ease 0s;
  background: transparent;
  fill: rgb(148, 166, 184);
  box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
  &:hover {
    box-shadow: rgb(0 0 0 / 25%) 0px 1px 4px;
  }
`;
