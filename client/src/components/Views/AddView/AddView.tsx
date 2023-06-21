import React, { useState } from "react";
import { addApplication, getJobData } from "../../../helper/api/functions";
import ExitButton from "./FormParts/ExitButton/ExitButton";

import { AddViewBase, Form, FormCenter, H1 } from "./AddView.style";
import InputsContainer from "./FormParts/InputContainer/InputsContainer";
import { addViewFormData } from "../../model";
import { SubmitButton } from "./FormParts/SubmitButton/SubmitButton.style";
import { scrapedApplicationData } from "../../../helper/models";

interface Props {
  setIsInAddView: React.Dispatch<React.SetStateAction<boolean>>;
  isInAddView: boolean;
}

const AddView: React.FC<Props> = ({ setIsInAddView, isInAddView }) => {
  let initialData: addViewFormData = {
    title: "",
    company: "",
    url: "",
  };

  const [formData, setFormData] = useState<addViewFormData>(initialData);

  const handleAddViewChange = () => {
    isInAddView ? setIsInAddView(false) : setIsInAddView(true);
    setFormData({
      title: "",
      company: "",
      url: "",
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

    let scrapedData: scrapedApplicationData = (await getJobData(
      formData.url
    )) as scrapedApplicationData;

    let data = {
      ...formData,
      title: formData.title || scrapedData.title,
      company: formData.company || scrapedData.company,
      description: scrapedData.description,
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
      <H1>Add a New Job</H1>
      <Form onSubmit={handleFormSubmit}>
        <ExitButton handleAddViewChange={handleAddViewChange} />
        <FormCenter>
          {Object.keys(formData).map((key) => (
            <InputsContainer
              key={key}
              formData={formData}
              handleFormChange={handleFormChange}
              inputName={key}
            />
          ))}
        </FormCenter>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </AddViewBase>
  );
};

export default AddView;
