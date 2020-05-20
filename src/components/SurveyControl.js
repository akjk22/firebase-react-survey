import React from 'react';
import NewSurveyForm from './NewSurveyForm';
import SurveyList from './SurveyList';
import SurveyDetail from './SurveyDetail';
import EditSurveyForm from './EditSurveyForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from '../actions';
import { withFirestore } from 'react-redux-firebase'
import surveyListReducer from '../reducers/survey-list-reducer';

class SurveyControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedSurvey: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedSurvey != null) {
      this.setState({
        selectedSurvey: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewSurveyToList = (newSurvey) => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

  handleChangingSelectedSurvey = (id) => {
    this.props.firestore.get({collection: 'surveys', doc: id}).then((survey) => {
      const firestoreSurvey = {
        names: survey.get("names"),
        location: survey.get("location"),
        issue: survey.get("issue"),
        id: survey.id
      }
      this.setState({selectedSurvey: firestoreSurvey});
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingSurveyInList = () => {
    this.setState({
      editing: false,
      selectedSurvey: null
    });
  }

  handleDeletingSurvey = (id) => {
    this.props.firestore.delete({collection: 'surveys', doc: id});
  this.setState({selectedSurvey: null});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing ) {      
      currentlyVisibleState = <EditSurveyForm survey = {this.state.selectedSurvey} onEditSurvey = {this.handleEditingSurveyInList} />
      buttonText = "Return to Survey List";
    } else if (this.state.selectedSurvey != null) {
      currentlyVisibleState = 
      <SurveyDetail 
        survey = {this.state.selectedSurvey} 
        onClickingDelete = {this.handleDeletingSurvey} 
        onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Survey List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewSurveyForm onNewSurveyCreation={this.handleAddingNewSurveyToList}  />;
      buttonText = "Return to Survey List";
    } else {
      currentlyVisibleState = <SurveyList onSurveySelection={this.handleChangingSelectedSurvey} />;
      buttonText = "Add Survey";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage
  }
}

SurveyControl = connect(mapStateToProps)(SurveyControl);

export default withFirestore(SurveyControl);