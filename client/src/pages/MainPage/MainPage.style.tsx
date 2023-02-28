import styled from "styled-components";

interface Props {
  isInAddView: boolean;
}

export const MainPageBase = styled.div<Props>`
  display: flex;
`;

export const MainSectionBase = styled.div`
  margin-left: 15%;
  padding-left: 109px;
  padding-top: 54px;
  width: 100%;
`;
