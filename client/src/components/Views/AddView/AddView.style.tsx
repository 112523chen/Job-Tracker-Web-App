import styled from "styled-components";

export const AddViewBase = styled.div`
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
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100%;
`;

export const ExitButton = styled.button`
  position: absolute;
  right: 4%;
  top: 5%;
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

export const FormCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
`;

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  width: 80%;
  margin: 1rem 0rem;
`;

export const InputField = styled.input`
  height: 3rem;
  background-color: #d9d9d9;
  border-radius: 0.625rem;
  &::placeholder {
    color: white;
    opacity: 1;
  }
`;

export const SubmitButton = styled.button`
  width: 15rem;
  height: 4.6875rem;
  border: 3px solid;
  border-radius: 1rem;
  font-size: 1.5rem;
  margin-top: 2rem;
`;
