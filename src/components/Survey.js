import React from "react";
import PropTypes from "prop-types";

function Survey(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenSurveyClicked(props.id)}>
        <h2>{props.name}</h2>
        <p><em>{props.question}</em></p>
        <input type='text' name='answer' placeholder='answer goes here'></input>
        {/* <p><em>{props.question}</em></p>
        <p><em>{props.question}</em></p>
        <p><em>{props.question}</em></p> */}
        <p><em>{props.formattedWaitTime}</em></p>
      </div>
      <hr/>
    </React.Fragment>
  );
}

Survey.propTypes = {
  name: PropTypes.string,
  // location: PropTypes.string,
  // issue: PropTypes.string,
  question: PropTypes.string,
  id: PropTypes.string,
  formattedWaitTime: PropTypes.string,
  whenSurveyClicked: PropTypes.func
};

export default Survey;