import styled from "styled-components";

export const SubmitButton = styled.button`
  background-color: transparent;
  font-size: 1.3rem;
  width: 15rem;
  padding: 1rem 2rem;
  margin: 2rem 0;
  border-radius: 5px;
  font-weight: 600;
  border: 1px solid black;
  &:hover {
    background-color: #4096ff;
    color: white;
    font-weight: 600;
    border: 1px solid #4096ff;
  }
  &:active {
    background-color: #3a87e6;
  }
`;
