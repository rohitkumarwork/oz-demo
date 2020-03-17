import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';

import {
  CLEAR_STORES,
  API_URI,
  MYSERVICES_DATA_SUCCESS,
  MYSERVICES_DATA_ERROR,
} from '../Actions/types';
import initialState from '../Reducers/initialState';
const GET_MYSERVICES = 'ozlive/main/getServices';

/*
  Reducer
*/
export function drawerStore(state = initialState.drawer, action: any) {
  switch (action.type) {
    case MYSERVICES_DATA_SUCCESS:
      return {
        ...state,
        myserviceData: action.payload,
      };
    case MYSERVICES_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
        myserviceData: [],
      };
    case CLEAR_STORES:
      return {
        ...state,
        error: null,
        myserviceData: [],
      };
    default: {
      return state;
    }
  }
}

/*
  Action creators
*/

export function getMyServices() {
  return {
    type: GET_MYSERVICES,
  };
}

const header = {
  Authorization: 'Bearer ' + '92622b4931277f0e7f5a65dc06ad74ead76a6682',
};

/*
  Epics
*/

const myServicesEpic = (action$: any) =>
  action$
    .ofType(GET_MYSERVICES)
    .mergeMap(() =>
      Observable.ajax
        .get(`${API_URI}/users/me/channels`, header)
        .map((payload: any) => ({
          payload: payload.response.data,
          type: MYSERVICES_DATA_SUCCESS,
        })),
    )
    .catch((error: any) =>
      Observable.of({
        payload: { error },
        type: MYSERVICES_DATA_ERROR,
      }),
    );

/*
  Export Epics
*/
export const drawerEpic = combineEpics(myServicesEpic);
