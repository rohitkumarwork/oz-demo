import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import {
  INIT,
  LOADING,
  SUCCESS,
  CLEAR_STORES,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGIN_USER_CANCELLED,
  SIGNUP_USER,
  SIGNUP_USER_ERROR,
  SIGNUP_USER_SUCCESS,
} from '../Actions/types';
import initialState from '../Reducers/initialState';

export const userStore = (state = initialState.user, action: any) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        phase: LOADING,
      };
    case LOGIN_USER_SUCCESS:
      return {
        error: null,
        phase: SUCCESS,
        user: action.payload,
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    case SIGNUP_USER:
      return {
        ...state,
        phase: LOADING,
      };
    case SIGNUP_USER_SUCCESS:
      return {
        error: null,
        phase: SUCCESS,
        user: action.payload,
      };
    case SIGNUP_USER_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    case LOGIN_USER_CANCELLED:
      return {
        ...state,
        error: null,
        phase: INIT,
      };
    case CLEAR_STORES:
      return {
        ...state,
        error: null,
        phase: INIT,
        user: null,
      };
    default: {
      return state;
    }
  }
};

const loginUserEpic = (action$: any) =>
  action$.ofType(LOGIN_USER).mergeMap((action: any) => {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    // const formData = new FormData();
    const formData = {
      client_id: 'Dev',
      client_secret: 'thedevpassword',
      grant_type: 'password',
      password: action.payload.Password,
      username: action.payload.UserName,
    };
    return Observable.ajax
      .post('https://core-staging.oz.com/oauth2/token', formData, headers)
      .map(payloadMap => ({
        payload: payloadMap.response,
        type: LOGIN_USER_SUCCESS,
      }))
      .catch(error =>
        Observable.of({
          payload: { error },
          type: LOGIN_USER_ERROR,
        }),
      );
  });

const signUserEpic = (action$: any) =>
  action$
    .ofType(SIGNUP_USER)

    .mergeMap((action: any) => {
      const headers = {
        'Content-Type': 'application/json',
      };
      const formData = {
        email: action.payload.UserName,
        password: action.payload.Password,
        termsAgreedAt: new Date().toISOString(),
      };
      return Observable.ajax
        .post('https://core-staging.oz.com/users', formData, headers)
        .map(payloadMap => ({
          payload: payloadMap,
          type: SIGNUP_USER_SUCCESS,
        }))
        .catch(error =>
          Observable.of({
            payload: { error },
            type: SIGNUP_USER_ERROR,
          }),
        );
    });
export const userEpic = combineEpics(loginUserEpic, signUserEpic);
