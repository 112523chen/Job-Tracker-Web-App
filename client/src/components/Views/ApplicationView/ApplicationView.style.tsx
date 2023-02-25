import styled from "styled-components";

export const AppViewBase = styled.div`
  position: fixed;
  width: 70%;
  height: 678px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  background-color: #ececec;
  border-radius: 1rem;
  z-index: 3;
`;

export const ExitButton = styled.button`
  position: absolute;
  right: 4%;
  top: 1.5rem;
  padding: 0px;
  border: 0;
  background-color: #ececec;
  &:hover {
    background-color: red;
  }
  svg {
    display: flex;
    justify-content: center;
  }
`;

export const Form = styled.form`
  height: 90%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;

export const FormTop = styled.div`
  height: 100%;
  .top {
    display: flex;
    margin-top: 1.5rem;
    margin-left: 1.5rem;
    margin-bottom: 2rem;
  }
  .bottom {
    margin-left: 1.5rem;
  }
`;

export const ColorBlock = styled.div`
  /* background-color: #aeaeae; */
  background-color: ${(props) => props.theme.main};
  height: 3.125rem;
  width: 3.125rem;
  margin-right: 2.1rem;
`;

export const CompanyBlock = styled.input`
  height: 3.125rem;
  width: fit-content;
  font-weight: 700;
  font-size: 40px;
  background-color: #ececec;
  border: none;
`;

export const TitleBlock = styled.input`
  font-weight: 500;
  font-size: 2rem;
  width: 100%;
  background-color: #ececec;
  border: none;
`;

export const CreatedTimeBlock = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
`;

export const ModifiedTimeBlock = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
`;

export const FormBottom = styled.div`
  height: 100%;
`;

export const Description = styled.div`
  width: 100%;
  height: 100%;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  width: 100%;
  margin-left: 1.5rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
`;

export const TextArea = styled.textarea`
  width: 90%;
`;
