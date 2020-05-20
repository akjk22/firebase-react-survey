import rootReducer from '../../reducers/index';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import surveyListReducer from '../../reducers/survey-list-reducer';
import { createStore } from 'redux';
import * as c from './../../actions/ActionTypes';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterSurveyList: {},
      formVisibleOnPage: false
    });
  });

  test('Check that initial state of surveyListReducer matches root reducer', () => {
    expect(store.getState().masterSurveyList).toEqual(surveyListReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that initial state of surveyListReducer matches root reducer', () => {
    const action = {
      type: c.ADD_SURVEY,
      names: 'Ryan & Aimen',
      location: '4b',
      issue: 'Redux action is not working correctly.',
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterSurveyList).toEqual(surveyListReducer(undefined, action));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });

});