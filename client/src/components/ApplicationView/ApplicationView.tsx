import React from "react";
import styled from "styled-components";
import { application, applicationStatusType } from "../model";
import { useState } from "react";
import { getApplicationColor } from "../../helper/functions";
import { updateApplication } from "../../helper/api/functions";

interface Props {
  applicationInfo: application;
  setApplicationState: React.Dispatch<React.SetStateAction<boolean>>;
  setIsInAppView: React.Dispatch<React.SetStateAction<boolean>>;
  applicationState: boolean;
}

const AppViewBase = styled.div`
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

const ExitButton = styled.button`
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

const Form = styled.form`
  height: 90%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;

const FormTop = styled.div`
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

const ColorBlock = styled.div`
  /* background-color: #aeaeae; */
  background-color: ${(props) => props.theme.main};
  height: 3.125rem;
  width: 3.125rem;
  margin-right: 2.1rem;
`;

const CompanyBlock = styled.input`
  height: 3.125rem;
  width: fit-content;
  font-weight: 700;
  font-size: 40px;
  background-color: #ececec;
  border: none;
`;

const TitleBlock = styled.input`
  font-weight: 500;
  font-size: 2rem;
  width: 100%;
  background-color: #ececec;
  border: none;
`;

const CreatedTimeBlock = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
`;

const ModifiedTimeBlock = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
`;

const FormBottom = styled.div`
  height: 100%;
`;

const Description = styled.div`
  width: 100%;
  height: 100%;
`;

const Label = styled.label`
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

const TextArea = styled.textarea`
  width: 90%;
`;

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
