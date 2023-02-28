import React from "react";
import { InputContainer } from "./InputContainers.style";
import { addViewFormData } from "../../model";

interface Props {
  inputName: string;
  formData: addViewFormData;
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputsContainer: React.FC<Props> = ({
  inputName,
  formData,
  handleFormChange,
}) => {
  const getLabel = (i: string): string => {
    let result: string;
    switch (i) {
      case "title":
        result = "Job Title";
        break;
      case "company":
        result = "Company";
        break;
      case "url":
        result = "Link";
        break;
      // case "description":
      //   result = "Description";
      //   break;
      default:
        result = "";
        break;
    }

    return result;
  };
  const getFormType = (i: string): string => {
    let result: string;
    switch (i) {
      case "title":
        result = formData.title;
        break;
      case "company":
        result = formData.company;
        break;
      case "url":
        result = formData.url;
        break;
      // case "description":
      //   result = formData.description;
      //   break;
      default:
        result = "";
        break;
    }
    return result;
  };

  return (
    <InputContainer>
      <input
        type="text"
        placeholder=""
        name={inputName}
        onChange={handleFormChange}
        value={getFormType(inputName)}
        required={true}
      />
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>{getLabel(inputName)}</label>
    </InputContainer>
  );
};

export default InputsContainer;
