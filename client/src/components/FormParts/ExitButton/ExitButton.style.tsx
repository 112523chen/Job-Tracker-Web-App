import styled from "styled-components";

export const ExitButton = styled.button`
  position: absolute;
  right: 4%;
  top: 5%;
  padding: 0px;
  border: 0;
  border-radius: 5px;
  border-style: none;
  transition: fill 0.2s ease 0s, box-shadow 0.2s ease 0s;
  &:hover {
    box-shadow: rgb(0 0 0 / 25%) 0px 1px 4px;
    background-color: #ececec;
    cursor: pointer;
  }
  svg {
    display: flex;
    justify-content: center;
  }
`;
