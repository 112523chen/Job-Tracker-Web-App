import React, { useState } from "react";
import styled from "styled-components";
import { addApplication } from "../../../helper/api/functions";

const AddViewBase = styled.div`
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
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100%;
`;

const ExitButton = styled.button`
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

const FormCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
`;

const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  width: 80%;
  margin: 1rem 0rem;
`;

const InputField = styled.input`
  height: 3rem;
  background-color: #d9d9d9;
  border-radius: 0.625rem;
  &::placeholder {
    color: white;
    opacity: 1;
  }
`;

const SubmitButton = styled.button`
  width: 15rem;
  height: 4.6875rem;
  border: 3px solid;
  border-radius: 1rem;
  font-size: 1.5rem;
  margin-top: 2rem;
`;

interface Props {
  setIsInAddView: React.Dispatch<React.SetStateAction<boolean>>;
  isInAddView: boolean;
}

const AddView: React.FC<Props> = ({ setIsInAddView, isInAddView }) => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    url: "",
    description: "",
  });

  const handleAddViewChange = () => {
    isInAddView ? setIsInAddView(false) : setIsInAddView(true);
    setFormData({
      title: "",
      company: "",
      url: "",
      description: "",
    });
  };

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let data = {
      ...formData,
      status: "created",
    };
    let response = await addApplication(data);
    if (response == "Passed") {
      handleAddViewChange();
    } else {
      throw Error("Not successful");
    }
  };

  return (
    <AddViewBase>
      <Form onSubmit={handleFormSubmit}>
        <ExitButton
          onClick={(e) => {
            e.preventDefault();
            handleAddViewChange();
          }}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.8 38L10 35.2L21.2 24L10 12.8L12.8 10L24 21.2L35.2 10L38 12.8L26.8 24L38 35.2L35.2 38L24 26.8L12.8 38Z" />
          </svg>
        </ExitButton>
        <FormCenter>
          <InputLabel>
            Job Title
            <InputField
              type="text"
              className="formInput"
              placeholder=""
              name="title"
              onChange={handleFormChange}
              value={formData.title}
            />
          </InputLabel>
          <InputLabel>
            Company
            <InputField
              type="text"
              className="formInput"
              placeholder=""
              name="company"
              onChange={handleFormChange}
              value={formData.company}
            />
          </InputLabel>
          <InputLabel>
            Link
            <InputField
              type="text"
              className="formInput"
              placeholder=""
              name="url"
              onChange={handleFormChange}
              value={formData.url}
            />
          </InputLabel>
          <InputLabel>
            Description
            <InputField
              type="text"
              className="formInput"
              placeholder=""
              name="description"
              onChange={handleFormChange}
              value={formData.description}
            />
          </InputLabel>

          <SubmitButton>Submit</SubmitButton>
        </FormCenter>
      </Form>
    </AddViewBase>
  );
};

export default AddView;
