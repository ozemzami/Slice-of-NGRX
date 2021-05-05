import {
  ActionReducer,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromAuth from './lib/auth.reducer';
import * as fromNotif from './lib/notification.reducer'

export interface AppState {
  [fromAuth.authFeatureKey]: fromAuth.State,
  [fromNotif.authFeatureKey]: fromNotif.State
}

export const reducers: ActionReducerMap<AppState> = {
  [fromAuth.authFeatureKey]: fromAuth.reducer,
  [fromNotif.authFeatureKey]: fromNotif.reducer
};



export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state auth', state);
    console.log('action', action);

    return reducer(state, action);
  };
}
export *  from './lib/notification.actions';
export *  from './lib/notification.selectors';
