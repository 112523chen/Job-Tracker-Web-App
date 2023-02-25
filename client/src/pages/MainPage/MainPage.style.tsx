import styled from "styled-components";

interface State {
  isInAddView: boolean;
}

export const MainPageBase = styled.div<State>`
  display: flex;
  ${(props) => (props.isInAddView === false ? null : "")}
`;

export const MainSectionBase = styled.div`
  margin-left: 15%;
  padding-left: 109px;
  padding-top: 54px;
  width: 100%;
`;
