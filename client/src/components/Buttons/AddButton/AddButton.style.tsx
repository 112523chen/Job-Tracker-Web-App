import styled from "styled-components";

export const AddButtonBase = styled.button`
  background-color: #ffffff;
  border-color: #d9d9d9;
  box-shadow: 0 5px 0 rgb(0 0 0 / 2%);
  width: 70%;
  height: 3rem;
  border-radius: 6px;
  margin: 3rem 0;

  &:hover {
    cursor: pointer;
  }
  &:active {
    box-shadow: none;
    transform: translateY(5px);
  }
`;
