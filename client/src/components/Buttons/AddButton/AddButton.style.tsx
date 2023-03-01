import styled from "styled-components";

interface AddButtonProps {
  isInAppView: boolean;
}

export const AddButtonBase = styled.button<AddButtonProps>`
  background-color: #ffffff;
  box-shadow: 0 10px 0 rgb(0 0 0 / 2%);
  border-color: #d9d9d9;
  width: 70%;
  height: 3rem;
  border-radius: 6px;
  margin: 3rem 0;

  &:hover {
    cursor: ${(props) => (props.isInAppView ? "default" : "pointer")};
    fill: ${(props) => (props.isInAppView ? "" : "#4096ff")};
    border-color: ${(props) => (props.isInAppView ? "" : "#4096ff")};
  }
  &:active {
    box-shadow: ${(props) => (props.isInAppView ? "" : "none")};
    transform: ${(props) => (props.isInAppView ? "" : "translateY(5px)")};
  }
`;
