import styled from "styled-components";

export const AddViewBase = styled.div`
  position: fixed;
  width: 40rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  background-color: #ececec;
  border-radius: 1rem;
  z-index: 3;
  box-shadow: 0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 12%),
    0 9px 28px 8px rgb(0 0 0 / 5%);
  background-color: #ffffff;
`;

export const H1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  margin-bottom: 0;
  font-weight: normal;
  color: #47596b;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
`;

export const FormCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: fit-content;
`;
