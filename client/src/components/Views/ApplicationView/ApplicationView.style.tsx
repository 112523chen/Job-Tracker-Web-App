import styled from "styled-components";

export const AppViewBase = styled.div`
  position: fixed;
  width: 60%;
  height: 30rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  background-color: #ffffff;
  border-radius: 1rem;
  z-index: 1000;
  box-shadow: 0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 12%),
    0 9px 28px 8px rgb(0 0 0 / 5%);
  /* &:focus-within {
    position: fixed;
    box-shadow: 0 0 0 1600px rgba(0, 0, 0, 0.65); /* dark around it */
  } */
}
`;

export const Form = styled.form`
  display: grid;
  grid-template: 30% 70%/ 60% 38%;

  height: 100%;

  .class1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    border-bottom: 1px solid gray;
    grid-column: span 2;
  }

  .class3 {
    border-right: 1px solid gray;
  }

  .class4 {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
    padding-top: 1rem;
  }
`;

export const CompanyBlock = styled.input`
  height: 3.125rem;
  width: fit-content;
  font-weight: 700;
  font-size: 40px;
  border: none;
  color: #47596b;
  margin-bottom: 0.3rem;
`;

export const TitleBlock = styled.input`
  font-weight: 500;
  font-size: 2rem;
  width: fit-content;
  border: none;
  color: #47596b;
`;

export const TimeBlock = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  display: flex;
  color: #47596b;

  p {
    text-align: left;
    line-height: normal;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  width: 100%;
  color: rgb(71, 89, 107);
  font-weight: 500;
`;

export const Select = styled.select`
  height: 2rem;
  margin-bottom: 2rem;
`;

export const LinkInput = styled.input`
  height: 2rem;
  margin-bottom: 2rem;
`;

export const TextAreaLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  width: 100%;
  height: 90%;
  margin-top: 1rem;
  margin-left: 1rem;
  font-family: "Inter";
  font-weight: 500;
  font-size: 1.5rem;
  color: #47596b;
`;

export const TextArea = styled.textarea`
  width: 90%;
  height: 100%;
  resize: none;
`;
