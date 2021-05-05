import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import * as NotifActions from './notification.actions';
import { Notification } from './notification.model';

export const authFeatureKey = 'notifications';

export interface State extends EntityState<Notification> {
  loaded: boolean; // has the Service list been loaded
  error?: string | null; // last known error (if any)
}

export const notificationsAdapter: EntityAdapter<Notification> = createEntityAdapter<
Notification
>();

export const initialState: State = notificationsAdapter.getInitialState({
  entities: [],
  ids: [],
  loaded: false,
  error: null,
});

export const reducer = createReducer(
  initialState,

  on(NotifActions.loadNotificationsSuccess,
     (state, action) => notificationsAdapter.setAll(action.notifications,
       {
         ...state,
         loaded : true
       }
     )),
  on(NotifActions.AddNotification,
    (state, action) =>  notificationsAdapter.addOne(action.notification, state)
  ),
  on(NotifActions.loadNotificationsFailure,
     NotifActions.AddNotificationFailure,
     (state, { error }) => ({
      ...state,
      error,
    }))
);
