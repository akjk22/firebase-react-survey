import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Survey Name' />
        <textarea
          name='question'
          placeholder='Add a question' />
          <input type='text' name='answer' placeholder='answer goes here'></input>
            {/* <textarea
          name='question2'
          placeholder='Add a question' />
            <textarea
          name='question3'
          placeholder='Add a question' />
            <textarea
          name='question4'
          placeholder='Add a question' /> */}
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;