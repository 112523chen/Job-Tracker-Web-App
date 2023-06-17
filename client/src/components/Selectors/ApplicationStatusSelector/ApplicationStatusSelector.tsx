import React from "react";
import { ApplicationStatusSelectorBase } from "./ApplicationStatusSelector.style";

interface Props {
  updateCurrentStatusFilter: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

const ApplicationStatusSelector: React.FC<Props> = ({
  updateCurrentStatusFilter,
}) => {
  return (
    <ApplicationStatusSelectorBase>
      <h3>Filter By Status</h3>
      <select onChange={updateCurrentStatusFilter}>
        <option value={"all"}>All</option>
        <option value={"created"}>Created</option>
        <option value={"applied"}>Applied</option>
        <option value={"assessment"}>Assessment</option>
        <option value={"interview"}>Interview</option>
        <option value={"final_round"}>Final Round</option>
        <option value={"reject"}>Reject</option>
        <option value={"offer"}>Offer</option>
      </select>
    </ApplicationStatusSelectorBase>
  );
};

export default ApplicationStatusSelector;
