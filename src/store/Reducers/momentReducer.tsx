import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';

import {
  USER_MOMENT_DATA,
  USER_MOMENT_DATA_ERROR,
  USER_MOMENT_DATA_SUCCESS,
  MOMENT_DATA,
  MOMENT_DATA_ERROR,
  MOMENT_DATA_SUCCESS,
  API_URI,
  CLEAR_STORES,
} from '../Actions/types';
import initialState from '../Reducers/initialState';

/*
  Reducer
*/
export function momentStore(state = initialState, action: any) {
  switch (action.type) {
    case USER_MOMENT_DATA_SUCCESS:
      return {
        mymomentData: action.payload,
        momentData: [],
      };
    case USER_MOMENT_DATA_ERROR:
      return {
        error: action.payload,
        mymomentData: [],
      };
    case MOMENT_DATA_SUCCESS:
      const data = action.payload.map((dataKey: any) => {
        dataKey.arrowPressed = false;
        return dataKey;
      });
      return {
        momentData: data,
        mymomentData: [],
      };
    case MOMENT_DATA_ERROR:
      return {
        error: action.payload,
        momentData: [],
      };
    case CLEAR_STORES:
      return {
        error: null,
        mymomentData: [],
        momentData: [],
      };
    default: {
      return state;
    }
  }
}

/*
  Epics
*/

// to get the moment clips for user logged in
const myMomentEpic = (action$: any) =>
  action$
    .ofType(USER_MOMENT_DATA)
    .mergeMap((action: any) => {
      const header = {
        Authorization: 'Bearer '.concat(action.token),
      };
      return Observable.ajax
        .get(`${API_URI}/users/me/moments`, header)
        .map(payload => ({
          payload: payload.response.data,
          type: USER_MOMENT_DATA_SUCCESS,
        }));
    })
    .catch((error: any) =>
      Observable.of({
        payload: { error },
        type: USER_MOMENT_DATA_ERROR,
      }),
    );

// to get the moment clips for user not registered
const momentDataEpic = (action$: any) =>
  action$
    .ofType(MOMENT_DATA)
    .mergeMap((action: any) => {
      return Observable.ajax(
        `${API_URI}/channels/${action.channelId}/moments`,
      ).map(payload => ({
        payload: payload.response.data,
        type: MOMENT_DATA_SUCCESS,
      }));
    })
    .catch((error: any) =>
      Observable.of({
        payload: { error },
        type: MOMENT_DATA_ERROR,
      }),
    );

//  Export Epics

export const momentEpic = combineEpics(myMomentEpic, momentDataEpic);
