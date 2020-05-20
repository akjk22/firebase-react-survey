import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase'
// We remove the uuid library because Firebase we'll now create IDs for our tickets. We should no longer do this in our application.

// We remove the moment library because Firebase doesn't support Moment-formatted time. Instead, we'll use Firebase to create a timestamp which we can then use to compute how long a ticket has been open.


function NewSurveyForm(props){

  //this is the hook we're adding so Firestore is available to this functional component
  const firestore = useFirestore();

    // Note that we updated the name of the function for adding a ticket to addTicketToFirestore. This is a more accurate name for what the function will do now.
  function addSurveyToFirestore(event) {
    event.preventDefault();
    // However, once a ticket is created, we still need to hide the form and show the ticket list.
    props.onNewSurveyCreation();
    // Here's how we will actually add a ticket to Firestore.
    //We need to specify which collection we will add a ticket to. 
    //add() is the method to add a record to the database.
    return firestore.collection('surveys').add(
      {
        names: event.target.names.value,
        location: event.target.location.value, 
        issue: event.target.issue.value,
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
    );
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={addSurveyToFirestore}
        buttonText="Help!" />
    </React.Fragment>
  );
}

NewSurveyForm.propTypes = {
  onNewSurveyCreation: PropTypes.func
};

export default NewSurveyForm;