import surveyListReducer from '../../reducers/survey-list-reducer';
import * as c from '../../actions/ActionTypes';

describe('surveyListReducer', () => {

  let action;

  const currentState = {
    1: {names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Redux action is not working correctly.',
    id: 1 },
    2: {names: 'Jasmine and Justine',
    location: '2a',
    issue: 'Reducer has side effects.',
    id: 2 }
  }

  const surveyData = {
    names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Redux action is not working correctly.',
    id: 1
  };

  test('Should return default state if no action type is recognized', () => {
    expect(surveyListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new survey data to masterSurveyList', () => {
    const { names, location, issue, id } = surveyData;
    action = {
      type: c.ADD_SURVEY,
      names: names,
      location: location,
      issue: issue,
      id: id
    };
    expect(surveyListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });
  });

  test('Should successfully delete a survey', () => {
    action = {
      type: c.DELETE_SURVEY,
      id: 1
    };
    expect(surveyListReducer(currentState, action)).toEqual({
      2: {names: 'Jasmine and Justine',
        location: '2a',
        issue: 'Reducer has side effects.',
        id: 2 }
    });
  });

});