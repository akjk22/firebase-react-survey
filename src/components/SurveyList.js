import React from "react";
import PropTypes from "prop-types";
import Survey from "./Survey";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

function SurveyList(props){
  // The useFirestoreConnect() hook comes from react-redux-firebase.
  useFirestoreConnect([
    { collection: 'surveys' }
  ]);

  // The useSelector() hook comes from react-redux.
  //state.firestore.ordered.tickets is the state slice we're grabbing from
  const surveys = useSelector(state => state.firestore.ordered.surveys);

  if (isLoaded(surveys)) {
  return (
    <React.Fragment>
      <hr/>
      {surveys.map((survey) => {
        return <Survey
          whenSurveyClicked = { props.onSurveySelection }
          name={survey.name}
          question={survey.question}
          // location={survey.location}
          // issue={survey.issue}
          formattedWaitTime={survey.formattedWaitTime}
          id={survey.id}
          key={survey.id}/>
      })}
    </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

SurveyList.propTypes = {
  onSurveySelection: PropTypes.func
};

export default SurveyList;