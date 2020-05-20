import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('help queue actions', () => {

  it('deleteSurvey should create DELETE_SURVEY action', () => {
    expect(actions.deleteSurvey(1)).toEqual({
      type: c.DELETE_SURVEY,
      id: 1
    });
  });

  it('toggleFrom should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('updateTime should create UPDATE_TIME action', () => {
    expect(actions.updateTime(1, "time")).toEqual({
      type: c.UPDATE_TIME,
      id: 1,
      formattedWaitTime: "time"
    });
  });
});