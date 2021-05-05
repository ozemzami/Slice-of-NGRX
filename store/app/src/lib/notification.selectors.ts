import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  authFeatureKey,
  State,
  notificationsAdapter
} from './notification.reducer';

// Lookup the 'TransferOrders' feature state managed by NgRx
export const getNotificationStateState = createFeatureSelector<
State
>(authFeatureKey);

const { selectAll, selectEntities } = notificationsAdapter.getSelectors();




export const getNotificationError = createSelector(
  getNotificationStateState,
  (state: State) => state.error
);


export const getAllNotifications = createSelector(
  getNotificationStateState,
  (state: State) => selectAll(state)
);

