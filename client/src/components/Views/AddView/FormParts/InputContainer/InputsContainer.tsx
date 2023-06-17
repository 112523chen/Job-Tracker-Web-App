import React from "react";
import { InputContainer } from "./InputContainers.style";
import { addViewFormData } from "../../../../model";
import { getFormValue, getLabel } from "../../../../../helper/main/functions";

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
  return (
    <InputContainer>
      <input
        type="text"
        placeholder=""
        name={inputName}
        onChange={handleFormChange}
        value={getFormValue(formData, inputName)}
        required={getFormValue(formData, inputName) === "url" ? true : false}
      />
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>{getLabel(inputName)}</label>
    </InputContainer>
  );
};

export default InputsContainer;
