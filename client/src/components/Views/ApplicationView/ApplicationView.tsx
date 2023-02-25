import React from "react";
import { application, applicationStatusType } from "../../model";
import { useState } from "react";
import { getApplicationColor } from "../../../helper/functions";
import { updateApplication } from "../../../helper/api/functions";
import {
  AppViewBase,
  ColorBlock,
  CompanyBlock,
  CreatedTimeBlock,
  Description,
  ExitButton,
  Form,
  FormBottom,
  FormTop,
  Label,
  ModifiedTimeBlock,
  TextArea,
  TitleBlock,
} from "./ApplicationView.style";

interface Props {
  applicationInfo: application;
  setApplicationState: React.Dispatch<React.SetStateAction<boolean>>;
  setIsInAppView: React.Dispatch<React.SetStateAction<boolean>>;
  applicationState: boolean;
}

const ApplicationView: React.FC<Props> = ({
  applicationInfo,
  setApplicationState,
  setIsInAppView,
}) => {
  const [formData, setFormData] = useState(applicationInfo);

  const handleAppViewChange = () => {
    setApplicationState(false);
    setIsInAppView(true);
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
    try {
      const isTitleDifferent = applicationInfo.title === formData.title;
      const isCompanyDifferent = applicationInfo.company === formData.company;
      const isDescriptionDifferent =
        applicationInfo.description === formData.description;
      if (isTitleDifferent || isCompanyDifferent || isDescriptionDifferent) {
        let id = applicationInfo.id;
        let response = await updateApplication(id, formData);
        if (response === "Passed") {
          handleAppViewChange();
        }
      } else {
        handleAppViewChange();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppViewBase>
      <ExitButton form="application-form" type="submit">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.8 38L10 35.2L21.2 24L10 12.8L12.8 10L24 21.2L35.2 10L38 12.8L26.8 24L38 35.2L35.2 38L24 26.8L12.8 38Z" />
        </svg>
      </ExitButton>
      <Form onSubmit={handleFormSubmit} id="application-form">
        <FormTop>
          <div className="top">
            <ColorBlock
              theme={{
                main: getApplicationColor(
                  applicationInfo.status as applicationStatusType
                ),
              }}
            />
            <CompanyBlock
              type="text"
              value={formData.company}
              name="company"
              onChange={handleFormChange}
            />
          </div>
          <div className="bottom">
            <TitleBlock
              type="text"
              value={formData.title}
              name="title"
              onChange={handleFormChange}
            />
            <CreatedTimeBlock>
              <p>
                Date Created: {new Date(formData.created).toLocaleDateString()}
              </p>
            </CreatedTimeBlock>
            <ModifiedTimeBlock>
              <p>
                Last Modified {new Date(formData.modified).toLocaleDateString()}
              </p>
            </ModifiedTimeBlock>
          </div>
        </FormTop>
        <FormBottom>
          <Description>
            <Label>
              Description
              <TextArea
                value={formData.description}
                name="description"
                onChange={handleFormChange}
              />
            </Label>
          </Description>
        </FormBottom>
      </Form>
    </AppViewBase>
  );
};

export default ApplicationView;
