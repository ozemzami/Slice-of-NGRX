import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as ShortSalePointActions from './short-salePoint.actions';
import { ShortFeauture } from '@tanglass-erp/core/common';

export const SHORTSALEPOINT_FEATURE_KEY = 'shortSalePoint';

export interface State extends EntityState<ShortFeauture> {
  selectedId?: string | number; // which ShortSalePoint record has been selected
  loaded: boolean; // has the ShortSalePoint list been loaded
  error?: string | null; // last known error (if any)
}

export interface ShortSalePointPartialState {
  readonly [SHORTSALEPOINT_FEATURE_KEY]: State;
}

export const shortSalePointAdapter: EntityAdapter<ShortFeauture> = createEntityAdapter<
ShortFeauture
>();

export const initialState: State = shortSalePointAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const shortSalePointReducer = createReducer(
  initialState,
  on(ShortSalePointActions.loadShortSalePoint, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ShortSalePointActions.loadShortSalePointSuccess, (state, { shortSalePoint }) =>
    shortSalePointAdapter.setAll(shortSalePoint, { ...state, loaded: true })
  ),
  on(ShortSalePointActions.loadShortSalePointFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return shortSalePointReducer(state, action);
}
