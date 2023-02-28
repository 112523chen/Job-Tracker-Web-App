import styled from "styled-components";

export const ApplicationBase = styled.div`
  background-color: #e1e1e1;
  background-color: white;
  width: 70%;
  height: 189px;
  display: flex;
  align-items: space-around;
  border-radius: 20px;
  margin-bottom: 2.8125rem;

  border: 2px solid rgb(241, 242, 244);
  box-shadow: rgb(71 89 107 / 10%) 0px 10px 5px;

  &:hover {
    cursor: pointer;
    box-shadow: rgb(71 89 107 / 10%) 0px 14px 5px;
  }
`;

export const ApplicationSide = styled.div`
  background-color: ${(props) => props.theme.main};
  width: 3rem;
  border-radius: 20px 0 0 20px;
`;

export const ApplicationMain = styled.div`
  margin-left: 1.5rem;
  width: 80%;
  color: #47596b;
`;

export const ApplicationRole = styled.p`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 0.8rem;
`;

export const ApplicationCompany = styled.p`
  font-weight: 700;
  font-size: 24px;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
`;

export const ApplicationDescription = styled.div`
  font-weight: 500;
  font-size: 16px;
  width: 40.5rem;
`;

export const ApplicationActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  /* margin: 0 2rem; */
  width: 15%;
`;
