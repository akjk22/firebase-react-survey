import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function EditNewSurvey (props) {
  const firestore = useFirestore();
  const { survey } = props;

  function handleEditSurveyFormSubmission(event) {
    event.preventDefault();
    props.onEditSurvey();
    const propertiesToUpdate = {
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value
    }
    return firestore.update({collection: 'surveys', doc: survey.id }, propertiesToUpdate)
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditSurveyFormSubmission}
        buttonText="Update Survey" />
    </React.Fragment>
  );
}

EditNewSurvey.propTypes = {
  onEditSurvey: PropTypes.func
};

export default EditNewSurvey;