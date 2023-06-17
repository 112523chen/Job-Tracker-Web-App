import React, { useState } from "react";
import ExitButton from "./FormParts/ExitButton";
import { application, applicationStatuses } from "../../model";
import { updateApplication } from "../../../helper/api/functions";
import {
  AppViewBase,
  CompanyBlock,
  Form,
  Label,
  LinkInput,
  Select,
  TextArea,
  TextAreaLabel,
  TimeBlock,
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
  const [formData, setFormData] = useState<application>(applicationInfo);

  const handleAppViewChange = () => {
    setApplicationState(false);
    setIsInAppView(false);
  };

  const handleFormChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ): void => {
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
      const isStatusDifferent = applicationInfo.status === formData.status;
      const isDescriptionDifferent =
        applicationInfo.description === formData.description;
      if (
        isTitleDifferent ||
        isCompanyDifferent ||
        isDescriptionDifferent ||
        isStatusDifferent
      ) {
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
      <ExitButton />
      <Form onSubmit={handleFormSubmit} id="application-form">
        <div className="class1 box">
          <CompanyBlock
            type="text"
            value={formData.company}
            onChange={handleFormChange}
            name="company"
          />
          <TitleBlock
            type="text"
            value={formData.title}
            onChange={handleFormChange}
            name="title"
          />
        </div>
        <div className="class2 box">
          <TextAreaLabel>
            Description
            <TextArea
              value={formData.description}
              onChange={handleFormChange}
              name="description"
            ></TextArea>
          </TextAreaLabel>
        </div>
        <div className="class4 box">
          <Label>
            Status
            <Select
              value={formData.status}
              onChange={handleFormChange}
              name="status"
            >
              {applicationStatuses.map((status) => (
                <option key={status} value={status}>
                  {status === "final_round"
                    ? "Final Round"
                    : status.charAt(0).toUpperCase() + status.slice(1)}
                </option>
              ))}
            </Select>
          </Label>
          <Label>
            Link
            <LinkInput
              type="text"
              value={formData.url}
              onChange={handleFormChange}
              name="url"
            />
          </Label>
          <TimeBlock>
            <p>
              Data Created: {new Date(formData.created).toLocaleDateString()}
            </p>
            <p>Update On: {new Date(formData.modified).toLocaleDateString()}</p>
          </TimeBlock>
        </div>
      </Form>
    </AppViewBase>
  );
};

export default ApplicationView;
