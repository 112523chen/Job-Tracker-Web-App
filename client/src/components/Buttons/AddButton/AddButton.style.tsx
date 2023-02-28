import styled from "styled-components";

export const AddButtonBase = styled.button`
  background-color: #ffffff;
  box-shadow: 0 10px 0 rgb(0 0 0 / 2%);
  border-color: #d9d9d9;
  width: 70%;
  height: 3rem;
  border-radius: 6px;
  margin: 3rem 0;

  &:hover {
    cursor: pointer;
    fill: #4096ff;
    border-color: #4096ff;
  }
  &:active {
    box-shadow: none;
    transform: translateY(5px);
  }
`;
