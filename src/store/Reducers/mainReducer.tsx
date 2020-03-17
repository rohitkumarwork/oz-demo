import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import initialState from '../Reducers/initialState';
import {
  CLEAR_STORES,
  API_URI,
  INIT_APP,
  CHENNEL_DATA_SUCCESS,
  CHENNEL_DATA_ERROR,
} from '../Actions/types';

/*
  Reducer
*/
export function mainStore(state = initialState.mainScreen, action: any) {
  switch (action.type) {
    case CHENNEL_DATA_SUCCESS:
      return {
        ...state,
        chennelData: action.payload,
      };
    case CHENNEL_DATA_ERROR:
      return {
        ...state,
        chennelData: [],
        error: action.payload,
      };
    case CLEAR_STORES:
      return {
        ...state,
        chennelData: [],
        error: null,
      };
    default: {
      return state;
    }
  }
}
/*
  Epics
*/
const initAppEpic = (action$: any) =>
  action$
    .ofType(INIT_APP)
    .mergeMap(() =>
      Observable.ajax(`${API_URI}/mobile/portal/channels`).map(
        (payload: any) => ({
          payload: payload.response.data.channels,
          type: CHENNEL_DATA_SUCCESS,
        }),
      ),
    )
    .catch((error: any) =>
      Observable.of({
        payload: { error },
        type: CHENNEL_DATA_ERROR,
      }),
    );

/*
  Export Epics
*/
export const mainEpic = combineEpics(initAppEpic);
