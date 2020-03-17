// Action Types

import { LOGIN_USER, SIGNUP_USER, LOGOUT_USER } from './types';

export const loginUser = (credentials: {
  UserName: string;
  Password: string;
}) => ({
  payload: credentials,
  type: LOGIN_USER,
});

export const signUpUser = (credentials: {
  UserName: string;
  Password: string;
}) => ({
  payload: credentials,
  type: SIGNUP_USER,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
