import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  user: any;
  error: any;
}

export const initialState: State = {
  user: null,
  error: null,
};

export const reducer = createReducer(
  initialState,

  on(AuthActions.loginSuccess, AuthActions.browserReload, (state, action) => {
    return {
      ...state,
      user: action.user,
      error: null,
    };
  }),
  on(AuthActions.loginFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(AuthActions.logout, (state, action) => {
    return {
      ...state,
      error: null,
    };
  })
);
