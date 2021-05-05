import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as ShortCompanyActions from './short-company.actions';
import { ShortFeauture } from '@tanglass-erp/core/common';

export const SHORTCOMPANY_FEATURE_KEY = 'shortCompany';

export interface State extends EntityState<ShortFeauture> {
  selectedId?: string | number; // which ShortCompany record has been selected
  loaded: boolean; // has the ShortCompany list been loaded
  error?: string | null; // last known error (if any)
}

export interface ShortCompanyPartialState {
  readonly [SHORTCOMPANY_FEATURE_KEY]: State;
}

export const shortCompanyAdapter: EntityAdapter<ShortFeauture> = createEntityAdapter<
ShortFeauture
>();

export const initialState: State = shortCompanyAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const shortCompanyReducer = createReducer(
  initialState,
  on(ShortCompanyActions.loadShortCompany, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ShortCompanyActions.loadShortCompanySuccess, (state, { shortCompany }) =>
    shortCompanyAdapter.setAll(shortCompany, { ...state, loaded: true })
  ),
  on(ShortCompanyActions.loadShortCompanyFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return shortCompanyReducer(state, action);
}
